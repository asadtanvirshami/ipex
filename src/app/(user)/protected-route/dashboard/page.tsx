"use client";
import React, { useState } from "react";
import {
  Table,
  Button,
  Popconfirm,
  Space,
  Divider,
  Checkbox,
  Modal,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import SupplierForm from "@/components/forms/create";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      supplier_name: "ABC Supplies Ltd.",
      supplier_address: "123 Industrial Road, New York, NY 10001",
      shipment_address: "456 Warehouse Ave, Los Angeles, CA 90001",
      supplier_contact: "+1 212-555-1234",
      supplier_contact_person: "John Doe",
      supplier_email: "contact@abc-supplies.com",
      po_date: "2024-04-15",
      quotation_ref_no: "QTN-00123",
      quotation_date: "2024-04-10",
      customer_no: "CUST-78901",
      shipping_terms: "FOB",
      shipping_mode: "Air",
      payment_terms: "Net 30",
      currency_code: "USD",
      delivery_date: "2024-05-01",
      packing_charges: "$100",
      inco_term_charges: "$50",
      freight_charges: "$200",
      vat: "15%",
      buyer_shipping_instructions: "Handle with care.",
      buyer_note: "Urgent delivery required.",
      buying_company_name: "XYZ Retail Inc.",
    },
    {
      key: "2",
      supplier_name: "Global Traders Co.",
      supplier_address: "789 Market Street, San Francisco, CA 94103",
      shipment_address: "101 Distribution Blvd, Miami, FL 33101",
      supplier_contact: "+1 415-555-5678",
      supplier_contact_person: "Jane Smith",
      supplier_email: "sales@globaltraders.com",
      po_date: "2024-04-20",
      quotation_ref_no: "QTN-00456",
      quotation_date: "2024-04-18",
      customer_no: "CUST-65432",
      shipping_terms: "CIF",
      shipping_mode: "Sea",
      payment_terms: "Net 45",
      currency_code: "USD",
      delivery_date: "2024-06-01",
      packing_charges: "$150",
      inco_term_charges: "$75",
      freight_charges: "$300",
      vat: "10%",
      buyer_shipping_instructions: "Stack on pallets.",
      buyer_note: "Confirm receipt upon delivery.",
      buying_company_name: "LMN Enterprises",
    },
    {
      key: "3",
      supplier_name: "Eastern Imports Ltd.",
      supplier_address: "321 Harbor Road, Boston, MA 02109",
      shipment_address: "202 Main Street, Houston, TX 77002",
      supplier_contact: "+1 617-555-9012",
      supplier_contact_person: "Ali Khan",
      supplier_email: "info@easternimports.com",
      po_date: "2024-04-25",
      quotation_ref_no: "QTN-00789",
      quotation_date: "2024-04-22",
      customer_no: "CUST-12345",
      shipping_terms: "EXW",
      shipping_mode: "Land",
      payment_terms: "Net 60",
      currency_code: "USD",
      delivery_date: "2024-05-20",
      packing_charges: "$80",
      inco_term_charges: "$40",
      freight_charges: "$150",
      vat: "5%",
      buyer_shipping_instructions: "Fragile items, handle carefully.",
      buyer_note: "Deliver between 9 AM - 5 PM.",
      buying_company_name: "OPQ Wholesale Inc.",
    },
  ]);

  const columns : any = [
    {
      title: "Supplier Name",
      dataIndex: "supplier_name",
      key: "supplier_name",
    },
    {
      title: "Supplier Address",
      dataIndex: "supplier_address",
      key: "supplier_address",
    },
    {
      title: "Ship To Address",
      dataIndex: "shipment_address",
      key: "shipment_address",
    },
    {
      title: "Supplier Contact",
      dataIndex: "supplier_contact",
      key: "supplier_contact",
    },
    {
      title: "Supplier Contact Person",
      dataIndex: "supplier_contact_person",
      key: "supplier_contact_person",
    },
    {
      title: "Supplier Email",
      dataIndex: "supplier_email",
      key: "supplier_email",
    },
    {
      title: "PO Date",
      dataIndex: "po_date",
      key: "po_date",
    },
    {
      title: "Quotation Ref No",
      dataIndex: "quotation_ref_no",
      key: "quotation_ref_no",
    },
    {
      title: "Quotation Date",
      dataIndex: "quotation_date",
      key: "quotation_date",
    },
    {
      title: "Customer No",
      dataIndex: "customer_no",
      key: "customer_no",
    },
    {
      title: "Shipping Terms",
      dataIndex: "shipping_terms",
      key: "shipping_terms",
    },
    {
      title: "Shipping Mode",
      dataIndex: "shipping_mode",
      key: "shipping_mode",
    },
    {
      title: "Payment Terms",
      dataIndex: "payment_terms",
      key: "payment_terms",
    },
    {
      title: "Currency Code",
      dataIndex: "currency_code",
      key: "currency_code",
    },
    {
      title: "Delivery Date",
      dataIndex: "delivery_date",
      key: "delivery_date",
    },
    {
      title: "Packing Charges",
      dataIndex: "packing_charges",
      key: "packing_charges",
    },
    {
      title: "Inco Term Charges",
      dataIndex: "inco_term_charges",
      key: "inco_term_charges",
    },
    {
      title: "Freight Charges",
      dataIndex: "freight_charges",
      key: "freight_charges",
    },
    {
      title: "VAT",
      dataIndex: "vat",
      key: "vat",
    },
    {
      title: "Buyer Shipping Instructions",
      dataIndex: "buyer_shipping_instructions",
      key: "buyer_shipping_instructions",
    },
    {
      title: "Buyer Note",
      dataIndex: "buyer_note",
      key: "buyer_note",
    },
    {
      title: "Buying Company Name",
      dataIndex: "buying_company_name",
      key: "buying_company_name",
    },
    {
      title: "Actions",
      fixed: "right",
      key: "actions",
      render: (_: any, record: { key: string }) => (
        <Space size="small">
          <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record.key)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this record?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              size="small"
              icon={<DeleteOutlined />}
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const defaultCheckedList = columns.map((item:any) => item.key);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const handleDelete = (key: string) => {
    setDataSource((prev) => prev.filter((item) => item.key !== key));
  };

  const handleEdit = (key: string) => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  let options: any = columns.map(({ key, title }:any) => ({
    label: title,
    value: key,
  }));

  const newColumns = columns.map((item:any) => ({
    ...item,
    hidden: !checkedList.includes(item.key as string),
  }));
  options = { options };
  return (
    <React.Fragment>
      <div>
        <Divider>IPEX Shipments, Suppliers & Purchasers</Divider>
        <div className="flex justify-end">
          <Button
            onClick={() => setOpen(true)}
            type="default"
            icon={<PlusCircleOutlined />}
          >
            Create
          </Button>
        </div>
        <div className="gap-2 mt-12 mb-10 ">
          <Checkbox.Group
            style={{ width: "100%" }}
            value={checkedList}
            options={options}
            onChange={(value) => {
              setCheckedList(value as string[]);
            }}
          />
        </div>
        <Table
          size="small"
          bordered
          scroll={{ x: "max-content" }}
          className=" overflow-x-auto w-full"
          dataSource={dataSource}
          columns={newColumns}
        />
      </div>
      <Modal
        width={1400}
        title="Create Shipments, Suppliers & Purchasers"
        centered
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <SupplierForm />
      </Modal>
    </React.Fragment>
  );
};

export default Page;
