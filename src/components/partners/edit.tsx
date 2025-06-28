"use client"

import { Edit, useForm } from "@refinedev/antd"
import { Form, Input, Select, Button, message, Modal, Space } from "antd"
import { useState } from "react"
import { updatePartnerStatus } from "@/app/actions/partner-status-actions"

const { TextArea } = Input

export const PartnerEdit = () => {
  const { formProps, saveButtonProps, queryResult } = useForm({
    resource: "partner_applications",
  })

  const [isStatusModalVisible, setIsStatusModalVisible] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState("")
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false)

  const record = queryResult?.data?.data

  const handleStatusChange = async () => {
    if (!selectedStatus || !record?.id) return

    setIsUpdatingStatus(true)
    try {
      const result = await updatePartnerStatus({
        id: record.id,
        status: selectedStatus,
      })

      if (result.success) {
        message.success(result.message)
        setIsStatusModalVisible(false)
        setSelectedStatus("")
        // Refresh the page to show updated data
        window.location.reload()
      } else {
        message.error(result.error)
      }
    } catch (error) {
      message.error("Failed to update status")
    } finally {
      setIsUpdatingStatus(false)
    }
  }

  return (
    <>
      <Edit
        saveButtonProps={saveButtonProps}
        headerButtons={({ defaultButtons }) => (
          <Space>
            {defaultButtons}
            <Button
              type="primary"
              onClick={() => setIsStatusModalVisible(true)}
              disabled={record?.status === "approved"}
            >
              Update Status
            </Button>
          </Space>
        )}
      >
        <Form {...formProps} layout="vertical">
          <Form.Item label="Company Name" name="company_name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Contact Person" name="contact_name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Website" name="website">
            <Input />
          </Form.Item>

          <Form.Item label="Street Address" name="address" rules={[{ required: true }]}>
            <TextArea rows={2} />
          </Form.Item>

          <Form.Item label="City" name="city" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="State" name="state" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="ZIP Code" name="zip_code" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Service Areas" name="service_areas" rules={[{ required: true }]}>
            <TextArea rows={3} />
          </Form.Item>

          <Form.Item label="CAC Number" name="cac_number" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Company Size" name="company_size">
            <Select>
              <Select.Option value="1-10">1-10 employees</Select.Option>
              <Select.Option value="11-50">11-50 employees</Select.Option>
              <Select.Option value="51-200">51-200 employees</Select.Option>
              <Select.Option value="200+">200+ employees</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Fleet Size" name="fleet_size">
            <Select>
              <Select.Option value="1-5">1-5 vehicles</Select.Option>
              <Select.Option value="6-15">6-15 vehicles</Select.Option>
              <Select.Option value="16-50">16-50 vehicles</Select.Option>
              <Select.Option value="50+">50+ vehicles</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Years in Business" name="years_in_business">
            <Select>
              <Select.Option value="0-2">0-2 years</Select.Option>
              <Select.Option value="3-5">3-5 years</Select.Option>
              <Select.Option value="6-10">6-10 years</Select.Option>
              <Select.Option value="10+">10+ years</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Current Status" name="status">
            <Select disabled>
              <Select.Option value="pending">Pending</Select.Option>
              <Select.Option value="approved">Approved</Select.Option>
              <Select.Option value="rejected">Rejected</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Additional Information" name="additional_info">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Edit>

      <Modal
        title="Update Application Status"
        open={isStatusModalVisible}
        onOk={handleStatusChange}
        onCancel={() => {
          setIsStatusModalVisible(false)
          setSelectedStatus("")
        }}
        confirmLoading={isUpdatingStatus}
        // okButtonProps={{
        //   disabled: !selectedStatus || (selectedStatus === "rejected" && !rejectionReason.trim()),
        // }}
      >
        <Form layout="vertical">
          <Form.Item label="New Status" required>
            <Select value={selectedStatus} onChange={setSelectedStatus} placeholder="Select new status">
              <Select.Option value="pending">Pending</Select.Option>
              <Select.Option value="approved">Approved</Select.Option>
              <Select.Option value="rejected">Rejected</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
