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
import { useQuery } from "@tanstack/react-query";
import { supplymentApi } from "@/api/supply/supply-api";

const MainContent = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});

  const columns = [
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
          {/* <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record.key)}
          >
            Edit
          </Button> */}
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

  const { data, error, isLoading } = useQuery({
    queryKey: ["supplyment"],
    queryFn: () => supplymentApi.getAll(),
  });

  React.useEffect(() => {
    let newData = data?.data;
    setDataSource(newData.map((item: any) => ({ key: item.id, ...item })));
  }, [data]);

  const defaultCheckedList = columns.map((item) => item.key);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const handleDelete = (key: string) => {
    setDataSource((prev) => prev.filter((item) => item.key !== key));
  };

  const handleEdit = (record: string) => {
    setSelectedRow(record);
    setOpen(true);
  };

  const handleCancel = () => {
    setSelectedRow({});
    setOpen(false);
  };
  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key as string),
  }));

  return (
    <React.Fragment>
      <div>
        <Divider>IPEX Shipments, Suppliers & Purchasers</Divider>
        <div className="flex justify-end">
          <Button
            onClick={() => {
              setSelectedRow(null);
              setOpen(true);
            }}
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
          key={Math.random()}
          size="small"
          bordered
          onRow={(record) => ({
            onClick: () => {
              handleEdit(record);
            },
          })}
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
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={false}
      >
        <SupplierForm selectedRow={selectedRow} />
      </Modal>
    </React.Fragment>
  );
};

export default MainContent;
