"use client"
import { Show, TextField, EmailField, UrlField, NumberField } from "@refinedev/antd"
import { Typography, Card, Row, Col, Tag, Rate, Descriptions, Divider } from "antd"
import {
  PhoneOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  StarOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons"

const { Title, Text } = Typography

export const VerifiedPartnerShow = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount || 0)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "green"
      case "busy":
        return "orange"
      case "unavailable":
        return "red"
      default:
        return "default"
    }
  }

  const ServiceTag = ({ enabled, label }: { enabled: boolean; label: string }) => (
    <Tag color={enabled ? "green" : "default"} icon={enabled ? <CheckCircleOutlined /> : <CloseCircleOutlined />}>
      {label}
    </Tag>
  )

  return (
    <Show>
      <Row gutter={[16, 16]}>
        {/* Company Information */}
        <Col xs={24} lg={12}>
          <Card title="Company Information" size="small">
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Company Name">
                <TextField value="" />
              </Descriptions.Item>
              <Descriptions.Item label="Contact Person">
                <TextField value="" />
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                <EmailField value="" />
              </Descriptions.Item>
              <Descriptions.Item label="Phone">
                <Text>
                  <PhoneOutlined /> <TextField value="" />
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Website">
                <UrlField value="" />
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        {/* Pricing Information */}
        <Col xs={24} lg={12}>
          <Card title="Pricing & Rates" size="small">
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Base Rate per Hour">
                <Text strong>
                  <DollarOutlined /> <NumberField value={0} options={{ style: "currency", currency: "NGN" }} />
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Base Rate per Mile">
                <Text strong>
                  <DollarOutlined /> <NumberField value={0} options={{ style: "currency", currency: "NGN" }} />
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Minimum Charge">
                <Text strong>
                  <DollarOutlined /> <NumberField value={0} options={{ style: "currency", currency: "NGN" }} />
                </Text>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        {/* Availability */}
        <Col xs={24} lg={12}>
          <Card title="Availability" size="small">
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Status">
                <Tag color="green">AVAILABLE</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Operating Hours">
                <Text>
                  <ClockCircleOutlined /> <TextField value="" /> - <TextField value="" />
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Operating Days">
                <div style={{ marginTop: "8px" }}>
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <Tag key={day} style={{ marginBottom: "4px" }}>
                      {day}
                    </Tag>
                  ))}
                </div>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        {/* Performance Metrics */}
        <Col xs={24} lg={12}>
          <Card title="Performance Metrics" size="small">
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Average Rating">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Rate disabled defaultValue={0} />
                  <Text strong>
                    (<NumberField value={0} /> / 5)
                  </Text>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Total Jobs Completed">
                <Text strong>
                  <StarOutlined /> <NumberField value={0} />
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Total Revenue">
                <Text strong style={{ color: "green" }}>
                  <DollarOutlined /> <NumberField value={0} options={{ style: "currency", currency: "NGN" }} />
                </Text>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        {/* Services Offered */}
        <Col xs={24}>
          <Card title="Services Offered" size="small">
            <Row gutter={[8, 8]}>
              <Col xs={12} md={6}>
                <ServiceTag enabled={true} label="Residential Moving" />
              </Col>
              <Col xs={12} md={6}>
                <ServiceTag enabled={false} label="Commercial Moving" />
              </Col>
              <Col xs={12} md={6}>
                <ServiceTag enabled={true} label="Long Distance" />
              </Col>
              <Col xs={12} md={6}>
                <ServiceTag enabled={true} label="Packing Services" />
              </Col>
              <Col xs={12} md={6}>
                <ServiceTag enabled={false} label="Storage Services" />
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Location Information */}
        <Col xs={24}>
          <Card title="Location Information" size="small">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Descriptions column={1} size="small">
                  <Descriptions.Item label="Street Address">
                    <TextField value="" />
                  </Descriptions.Item>
                  <Descriptions.Item label="City">
                    <TextField value="" />
                  </Descriptions.Item>
                  <Descriptions.Item label="State">
                    <TextField value="" />
                  </Descriptions.Item>
                  <Descriptions.Item label="ZIP Code">
                    <TextField value="" />
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col xs={24} md={12}>
                <Descriptions column={1} size="small">
                  <Descriptions.Item label="Service Areas">
                    <TextField value="" />
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Additional Information */}
        <Col xs={24}>
          <Card title="Additional Information" size="small">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Descriptions column={1} size="small">
                  <Descriptions.Item label="Company Size">
                    <TextField value="" />
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col xs={24} md={8}>
                <Descriptions column={1} size="small">
                  <Descriptions.Item label="Fleet Size">
                    <TextField value="" />
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col xs={24} md={8}>
                <Descriptions column={1} size="small">
                  <Descriptions.Item label="Years in Business">
                    <TextField value="" />
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Divider />
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Additional Information">
                <TextField value="" />
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </Show>
  )
}
