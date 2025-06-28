"use server"

import { createSupabaseServerClient } from "@/utils/supabase/server"
import { z } from "zod"

const updateStatusSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(["pending", "approved", "rejected"]),
})

type UpdateStatusInput = z.infer<typeof updateStatusSchema>

export async function updatePartnerStatus(formData) {
  try {
    const validatedData = updateStatusSchema.parse(formData)
    const supabase = createSupabaseServerClient()

    // First, update the partner application status
    const { data: updatedApplication, error: updateError } = await supabase
      .from("partner_applications")
      .update({
        status: validatedData.status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", validatedData.id)
      .select()
      .single()

    if (updateError) {
      console.error("Error updating partner application:", updateError)
      return {
        success: false,
        error: "Failed to update partner application status",
      }
    }

    // If status is approved, move to verified_partners table
    if (validatedData.status === "approved") {
      const { error: migrationError } = await migrateToVerifiedPartners(updatedApplication)

      if (migrationError) {
        console.error("Error migrating to verified partners:", migrationError)
        // Rollback the status update
        await supabase.from("partner_applications").update({ status: "pending" }).eq("id", validatedData.id)

        return {
          success: false,
          error: "Failed to create verified partner record",
        }
      }
    }

    return {
      success: true,
      data: updatedApplication,
      message: `Partner application ${validatedData.status} successfully`,
    }
  } catch (error) {
    console.error("Partner status update error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Invalid form data",
        validationErrors: error.errors,
      }
    }

    return {
      success: false,
      error: "An unexpected error occurred",
    }
  }
}

async function migrateToVerifiedPartners(application) {
  const supabase = createSupabaseServerClient()

  // Check if partner already exists in verified_partners
  const { data: existingPartner } = await supabase
    .from("verified_partners")
    .select("id")
    .eq("partner_application_id", application.id)
    .single()

  if (existingPartner) {
    return { error: null } // Already migrated
  }

  // Create verified partner record
  const { error } = await supabase.from("verified_partners").insert({
    partner_application_id: application.id,
    company_name: application.company_name,
    contact_name: application.contact_name,
    email: application.email,
    phone: application.phone,
    website: application.website,
    address: application.address,
    city: application.city,
    state: application.state,
    zip_code: application.zip_code,
    service_areas: application.service_areas,
    company_size: application.company_size,
    fleet_size: application.fleet_size,
    years_in_business: application.years_in_business,
    has_insurance: application.has_insurance,
    cac_number: application.cac_number,
    additional_info: application.additional_info,
    services: application.services,
    // Default pricing values - can be updated later
    base_rate_per_hour: 50.0,
    base_rate_per_mile: 2.0,
    minimum_charge: 100.0,
    availability_status: "available",
  })

  return { error }
}

export async function getVerifiedPartners() {
  try {
    const supabase = createSupabaseServerClient()

    const { data, error } = await supabase
      .from("verified_partners")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching verified partners:", error)
      return {
        success: false,
        error: "Failed to fetch verified partners",
      }
    }

    return {
      success: true,
      data: data || [],
    }
  } catch (error) {
    console.error("Get verified partners error:", error)
    return {
      success: false,
      error: "Failed to fetch verified partners",
    }
  }
}
