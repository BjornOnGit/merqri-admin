"use client"

import { Edit, useForm } from "@refinedev/antd"
import { Form, Input, Select, InputNumber, TimePicker, Checkbox, Row, Col, Card } from "antd"
import dayjs from "dayjs"

const { TextArea } = Input

export const VerifiedPartnerEdit = () => {
  const { formProps, saveButtonProps, queryResult } = useForm({
    resource: "verified_partners",
  })

  const record = queryResult?.data?.data

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Row gutter={[16, 16]}>
          {/* Company Information */}
          <Col xs={24} lg={12}>
            <Card title="Company Information" size="small">
              <Form.Item label="Company Name" name="company_name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item label="Contact Person" name="contact_person" rules={[{ required: true }]}>
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
            </Card>
          </Col>

          {/* Pricing Information */}
          <Col xs={24} lg={12}>
            <Card title="Pricing & Rates" size="small">
              <Form.Item
                label="Base Rate per Hour (₦)"
                name="base_rate_per_hour"
                rules={[{ required: true, type: "number", min: 0 }]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  formatter={(value) => `₦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  parser={(value) => value!.replace(/₦\s?|(,*)/g, "")}
                />
              </Form.Item>

              <Form.Item
                label="Base Rate per Mile (₦)"
                name="base_rate_per_mile"
                rules={[{ required: true, type: "number", min: 0 }]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  formatter={(value) => `₦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  parser={(value) => value!.replace(/₦\s?|(,*)/g, "")}
                />
              </Form.Item>

              <Form.Item
                label="Minimum Charge (₦)"
                name="minimum_charge"
                rules={[{ required: true, type: "number", min: 0 }]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  formatter={(value) => `₦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  parser={(value) => value!.replace(/₦\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Card>
          </Col>

          {/* Availability Settings */}
          <Col xs={24}>
            <Card title="Availability Settings" size="small">
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <Form.Item label="Availability Status" name="availability_status">
                    <Select>
                      <Select.Option value="available">Available</Select.Option>
                      <Select.Option value="busy">Busy</Select.Option>
                      <Select.Option value="unavailable">Unavailable</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} md={8}>
                  <Form.Item
                    label="Operating Hours Start"
                    name="operating_hours_start"
                    getValueFromEvent={(time) => (time ? time.format("HH:mm") : null)}
                    getValueProps={(value) => ({
                      value: value ? dayjs(value, "HH:mm") : null,
                    })}
                  >
                    <TimePicker style={{ width: "100%" }} format="HH:mm" />
                  </Form.Item>
                </Col>

                <Col xs={24} md={8}>
                  <Form.Item
                    label="Operating Hours End"
                    name="operating_hours_end"
                    getValueFromEvent={(time) => (time ? time.format("HH:mm") : null)}
                    getValueProps={(value) => ({
                      value: value ? dayjs(value, "HH:mm") : null,
                    })}
                  >
                    <TimePicker style={{ width: "100%" }} format="HH:mm" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="Operating Days" name="operating_days">
                <Checkbox.Group
                  options={[
                    { label: "Monday", value: "monday" },
                    { label: "Tuesday", value: "tuesday" },
                    { label: "Wednesday", value: "wednesday" },
                    { label: "Thursday", value: "thursday" },
                    { label: "Friday", value: "friday" },
                    { label: "Saturday", value: "saturday" },
                    { label: "Sunday", value: "sunday" },
                  ]}
                />
              </Form.Item>
            </Card>
          </Col>

          {/* Services Offered */}
          <Col xs={24}>
            <Card title="Services Offered" size="small">
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Form.Item name="residential_moving" valuePropName="checked">
                    <Checkbox>Residential Moving</Checkbox>
                  </Form.Item>
                  <Form.Item name="commercial_moving" valuePropName="checked">
                    <Checkbox>Commercial Moving</Checkbox>
                  </Form.Item>
                  <Form.Item name="long_distance" valuePropName="checked">
                    <Checkbox>Long Distance Moving</Checkbox>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item name="packing_services" valuePropName="checked">
                    <Checkbox>Packing Services</Checkbox>
                  </Form.Item>
                  <Form.Item name="storage_services" valuePropName="checked">
                    <Checkbox>Storage Services</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Performance Metrics (Read-only) */}
          <Col xs={24} lg={12}>
            <Card title="Performance Metrics" size="small">
              <Form.Item label="Average Rating" name="average_rating">
                <InputNumber
                  style={{ width: "100%" }}
                  min={0}
                  max={5}
                  step={0.1}
                  formatter={(value) => `${value} ⭐`}
                  parser={(value) => value!.replace(" ⭐", "")}
                />
              </Form.Item>

              <Form.Item label="Total Jobs Completed" name="total_jobs_completed">
                <InputNumber style={{ width: "100%" }} min={0} />
              </Form.Item>

              <Form.Item label="Total Revenue (₦)" name="total_revenue">
                <InputNumber
                  style={{ width: "100%" }}
                  min={0}
                  formatter={(value) => `₦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  parser={(value) => value!.replace(/₦\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Card>
          </Col>

          {/* Location Information */}
          <Col xs={24} lg={12}>
            <Card title="Location Information" size="small">
              <Form.Item label="Street Address" name="street_address" rules={[{ required: true }]}>
                <TextArea rows={2} />
              </Form.Item>

              <Row gutter={[8, 8]}>
                <Col xs={24} md={8}>
                  <Form.Item label="City" name="city" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="State" name="state" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="ZIP Code" name="zip_code" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="Service Areas" name="service_areas" rules={[{ required: true }]}>
                <TextArea rows={3} />
              </Form.Item>
            </Card>
          </Col>

          {/* Additional Information */}
          <Col xs={24}>
            <Card title="Additional Information" size="small">
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

              <Form.Item label="Additional Information" name="additional_info">
                <TextArea rows={4} />
              </Form.Item>
            </Card>
          </Col>
        </Row>
      </Form>
    </Edit>
  )
}
