"use client"

import type React from "react"
import { Show, TextField, DateField, TagField } from "@refinedev/antd"
import { Typography, Row, Col, Card, Space, Divider } from "antd"
import { useShow } from "@refinedev/core"

const { Title, Text } = Typography

export const PartnerShow: React.FC = () => {
  const { queryResult } = useShow()
  const { data, isLoading } = queryResult

  const record = data?.data

  return (
    <Show isLoading={isLoading}>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Company Information" style={{ height: "100%" }}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <div>
                <Text strong>Company Name:</Text>
                <br />
                <TextField value={record?.company_name} />
              </div>
              <div>
                <Text strong>Contact Person:</Text>
                <br />
                <TextField value={record?.contact_person} />
              </div>
              <div>
                <Text strong>Email:</Text>
                <br />
                <TextField value={record?.email} />
              </div>
              <div>
                <Text strong>Phone:</Text>
                <br />
                <TextField value={record?.phone} />
              </div>
              <div>
                <Text strong>Website:</Text>
                <br />
                <TextField value={record?.website || "Not provided"} />
              </div>
            </Space>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Business Details" style={{ height: "100%" }}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <div>
                <Text strong>CAC Number:</Text>
                <br />
                <TextField value={record?.cac_number} />
              </div>
              <div>
                <Text strong>Company Size:</Text>
                <br />
                <TextField value={record?.company_size} />
              </div>
              <div>
                <Text strong>Fleet Size:</Text>
                <br />
                <TextField value={record?.fleet_size} />
              </div>
              <div>
                <Text strong>Years in Business:</Text>
                <br />
                <TextField value={record?.years_in_business} />
              </div>
              <div>
                <Text strong>Status:</Text>
                <br />
                <TagField
                  value={record?.status || "pending"}
                  color={record?.status === "approved" ? "green" : record?.status === "rejected" ? "red" : "orange"}
                />
              </div>
            </Space>
          </Card>
        </Col>

        <Col xs={24}>
          <Card title="Location & Service Areas">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                  <div>
                    <Text strong>Street Address:</Text>
                    <br />
                    <TextField value={record?.street_address} />
                  </div>
                  <div>
                    <Text strong>City:</Text>
                    <br />
                    <TextField value={record?.city} />
                  </div>
                  <div>
                    <Text strong>State:</Text>
                    <br />
                    <TextField value={record?.state} />
                  </div>
                  <div>
                    <Text strong>ZIP Code:</Text>
                    <br />
                    <TextField value={record?.zip_code} />
                  </div>
                </Space>
              </Col>
              <Col xs={24} md={12}>
                <div>
                  <Text strong>Service Areas:</Text>
                  <br />
                  <TextField value={record?.service_areas} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={24}>
          <Card title="Services & Additional Information">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <div>
                  <Text strong>Services Offered:</Text>
                  <br />
                  <div style={{ marginTop: 8 }}>
                    {record?.residential_moving && <TagField value="Residential Moving" color="blue" />}
                    {record?.commercial_moving && <TagField value="Commercial Moving" color="green" />}
                    {record?.long_distance && <TagField value="Long Distance" color="orange" />}
                    {record?.packing_services && <TagField value="Packing Services" color="purple" />}
                    {record?.storage_services && <TagField value="Storage Services" color="cyan" />}
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div>
                  <Text strong>Insurance Coverage:</Text>
                  <br />
                  <TextField value={record?.has_insurance} />
                </div>
              </Col>
            </Row>

            {record?.additional_info && (
              <>
                <Divider />
                <div>
                  <Text strong>Additional Information:</Text>
                  <br />
                  <TextField value={record?.additional_info} />
                </div>
              </>
            )}

            <Divider />
            <div>
              <Text strong>Application Date:</Text>
              <br />
              <DateField value={record?.created_at} />
            </div>
          </Card>
        </Col>
      </Row>
    </Show>
  )
}
