import React from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Row,
  Col,
  Typography,
  Divider,
  notification,
} from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supplymentApi } from "@/api/supply/supply-api";
import moment from "moment";

const { TextArea } = Input;

const SupplierForm = ({ selectedRow }) => {
  const [form] = Form.useForm();
  const [edit, setEdit] = React.useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: supplymentApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["supplyment"] });
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  React.useEffect(() => {
    if (selectedRow != null) {
      setEdit(true);

      const transformedRow = {
        ...selectedRow,
        delivery_date: selectedRow.delivery_date
          ? moment(selectedRow.delivery_date)
          : null,
        po_date: selectedRow.po_date ? moment(selectedRow.po_date) : null,
        quotation_date: selectedRow.quotation_date
          ? moment(selectedRow.quotation_date)
          : null,
      };

      form.setFieldsValue(transformedRow);
    } else {
      form.resetFields();
    }
  }, [edit, selectedRow, form]);
  const onFinish = (values: any) => {
    mutation.mutate(values); 
  };

  return (
    <div className="">
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div className="grid grid-cols-2 gap-6">
          <Row gutter={[16, 16]}>
            <Divider>Supplier</Divider>
            <Col span={12}>
              <Form.Item
                label="Supplier Name"
                name="supplier_name"
                rules={[
                  { required: true, message: "Supplier name is required" },
                ]}
              >
                <Input placeholder="Enter supplier name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Supplier Contact"
                name="supplier_contact"
                rules={[
                  { required: true, message: "Supplier contact is required" },
                  { pattern: /^\d+$/, message: "Contact must be numeric" },
                ]}
              >
                <Input placeholder="Enter supplier contact" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Supplier Contact Person"
                name="supplier_contact_person"
                rules={[
                  { required: true, message: "Contact person is required" },
                ]}
              >
                <Input placeholder="Enter supplier contact person" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Supplier Email"
                name="supplier_email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input type="email" placeholder="Enter supplier email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Supplier Address"
                name="supplier_address"
                rules={[{ required: true, message: "Address is required" }]}
              >
                <TextArea placeholder="Enter supplier address" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Divider>Shipment</Divider>
            <Col span={12}>
              <Form.Item
                label="VAT"
                name="vat"
                rules={[{ required: true, message: "VAT is required" }]}
              >
                <Input placeholder="Enter VAT" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Shipping Terms"
                name="shipping_terms"
                rules={[
                  { required: true, message: "Shipping terms are required" },
                ]}
              >
                <Input placeholder="Enter shipping terms" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Shipping Mode"
                name="shipping_mode"
                rules={[
                  { required: true, message: "Shipping mode is required" },
                ]}
              >
                <Input placeholder="Enter shipping mode" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Delivery Date"
                name="delivery_date"
                rules={[
                  { required: true, message: "Delivery date is required" },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Ship To Address"
                name="shipment_address"
                rules={[
                  { required: true, message: "Shipment address is required" },
                ]}
              >
                <TextArea placeholder="Enter ship to address" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Packing Charges"
                name="packing_charges"
                rules={[
                  { required: true, message: "Packing charges are required" },
                  { pattern: /^\d+$/, message: "Charges must be numeric" },
                ]}
              >
                <Input placeholder="Enter packing charges" />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <Row gutter={[16, 16]}>
          <Divider>Quotation, Customer & Other</Divider>
          <Col span={12}>
            <Form.Item
              label="Quotation Ref No"
              name="quotation_ref_no"
              rules={[
                { required: true, message: "Reference number is required" },
              ]}
            >
              <Input placeholder="Enter quotation reference number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Quotation Date"
              name="quotation_date"
              rules={[
                { required: true, message: "Quotation date is required" },
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Payment Terms"
              name="payment_terms"
              rules={[
                { required: true, message: "Payment terms are required" },
              ]}
            >
              <Input placeholder="Enter payment terms" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Currency Code"
              name="currency_code"
              rules={[{ required: true, message: "Currency code is required" }]}
            >
              <Input placeholder="Enter currency code" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="PO Date"
              name="po_date"
              rules={[{ required: true, message: "PO date is required" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Customer No"
              name="customer_no"
              rules={[
                { required: true, message: "Customer number is required" },
                {
                  pattern: /^\d+$/,
                  message: "Customer number must be numeric",
                },
              ]}
            >
              <Input placeholder="Enter customer number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Inco Term Charges"
              name="inco_term_charges"
              rules={[
                { required: true, message: "Inco term charges are required" },
                { pattern: /^\d+$/, message: "Charges must be numeric" },
              ]}
            >
              <Input placeholder="Enter Inco term charges" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Freight Charges"
              name="freight_charges"
              rules={[
                { required: true, message: "Freight charges are required" },
                { pattern: /^\d+$/, message: "Charges must be numeric" },
              ]}
            >
              <Input placeholder="Enter freight charges" />
            </Form.Item>
          </Col>
        </Row>
        <Row />
        <div>
          <Divider>Buyer & Buying Company</Divider>
          <Col span={12}>
            <Form.Item
              label="Buying Company Name"
              name="buying_company_name"
              rules={[
                { required: true, message: "Buying company name is required" },
              ]}
            >
              <Input placeholder="Enter buying company name" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Buyer Shipping Instructions"
              name="buyer_shipping_instructions"
              rules={[
                {
                  required: true,
                  message: "Shipping instructions are required",
                },
              ]}
            >
              <TextArea placeholder="Enter buyer shipping instructions" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Buyer Note"
              name="buyer_note"
              rules={[{ required: true, message: "Buyer note is required" }]}
            >
              <TextArea placeholder="Enter buyer note" />
            </Form.Item>
          </Col>
        </div>
        <div className="flex justify-end">
          <Button loading={mutation.isPending} type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SupplierForm;
