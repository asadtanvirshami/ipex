import React from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Space,
  Row,
  Col,
  Typography,
  Divider,
} from "antd";

const { TextArea } = Input;
const { Title } = Typography;

const SupplierForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="">
      <Title level={2} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Supplier Information Form
      </Title>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div className="grid grid-cols-2 gap-6">
          <Row gutter={[16, 16]}>
            <Divider>Supplier</Divider>
            <Col span={12}>
              <Form.Item label="Supplier Name" name="supplier_name">
                <Input placeholder="Enter supplier name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Supplier Contact" name="supplier_contact">
                <Input placeholder="Enter supplier contact" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Supplier Contact Person"
                name="supplier_contact_person"
              >
                <Input placeholder="Enter supplier contact person" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Supplier Email" name="supplier_email">
                <Input type="email" placeholder="Enter supplier email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Supplier Address" name="supplier_address">
                <TextArea placeholder="Enter supplier address" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Divider>Shipment</Divider>
            <Col span={12}>
              <Form.Item label="VAT" name="vat">
                <Input placeholder="Enter VAT" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Shipping Terms" name="shipping_terms">
                <Input placeholder="Enter shipping terms" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Shipping Mode" name="shipping_mode">
                <Input placeholder="Enter shipping mode" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Delivery Date" name="delivery_date">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Ship To Address" name="shipment_address">
                <TextArea placeholder="Enter ship to address" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Packing Charges" name="packing_charges">
                <Input placeholder="Enter packing charges" />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <Row gutter={[16, 16]}>
          <Divider>Quotation, Customer & Other</Divider>
          <Col span={12}>
            <Form.Item label="Quotation Ref No" name="quotation_ref_no">
              <Input placeholder="Enter quotation reference number" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Quotation Date" name="quotation_date">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Payment Terms" name="payment_terms">
              <Input placeholder="Enter payment terms" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Currency Code" name="currency_code">
              <Input placeholder="Enter currency code" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="PO Date" name="po_date">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Customer No" name="customer_no">
              <Input placeholder="Enter customer number" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Inco Term Charges" name="inco_term_charges">
              <Input placeholder="Enter Inco term charges" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Freight Charges" name="freight_charges">
              <Input placeholder="Enter freight charges" />
            </Form.Item>
          </Col>
        </Row>
        <Row />
        <div>
          <Divider>Buyer & Buying Company</Divider>
          <Col span={12}>
            <Form.Item label="Buying Company Name" name="buying_company_name">
              <Input placeholder="Enter buying company name" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Buyer Shipping Instructions"
              name="buyer_shipping_instructions"
            >
              <TextArea placeholder="Enter buyer shipping instructions" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Buyer Note" name="buyer_note">
              <TextArea placeholder="Enter buyer note" />
            </Form.Item>
          </Col>
        </div>

        <Form.Item style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="reset" onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SupplierForm;
