import React, { useRef, useState } from 'react';
import { Dropdown, Button, Spin, Menu, message, Form, Row, Col, Modal,Input } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns, TableListItem,FormInstance } from '@ant-design/pro-components';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import styles from './index.less';
const mockData = [
  {
    key: 'key1',
    id: 'sdfassffdf',
    name: 'John Brown',
    age: 32,
    status: 0,
    uploadStatusTime: '2023-11-11 10:09',
    birthday: '1998-08-10',
    address: 'New York No. 1 Lake Park New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
  },
  {
    key: 'key2',
    id: 'adfsafsdfsafd',
    name: 'Jim Green',
    age: 42,
    status: 1,
    uploadStatusTime: '2023-11-11 10:14',
    birthday: '1998-07-13',
    address: 'London No. 1 Lake Park London No. 1 Lake ParkLondon No. 1 Lake ParkLondon No. 1 Lake Park',
  },
  {
    key: 'key3',
    id: 'wqerwrerwqr',
    name: 'Joe',
    age: 32,
    status: 2,
    uploadStatusTime: '2023-11-11 10:17',
    birthday: '2002-10-23',
    address: 'Sidney No. 1 Lake Park Sidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake Park',
  },
  {
    key: 'key4',
    id: 'fgdhfghfdhghd',
    name: 'lisi',
    age: 23,
    status: 3,
    birthday: '2006-06-01',
    uploadStatusTime: '2023-11-12 18:06',
    address: 'hello No. 2 Lake street hello No. 2 Lake streethello No. 2 Lake streethello No. 2 Lake street',
  },
];
const wait = async (delay = 1000) =>
  new Promise((resolve) => setTimeout(() => resolve(void 0), delay));

let remoteData = mockData.map((item) => ({
  ...item,
  name: `[remote data] ${item.name}`,
}));
const mockRequest = async () => {
  await wait(2000);
  return {
    data: remoteData,
    total: remoteData.length,
    success: true,
  };
};
const items: MenuProps['items'] = [
  {
    key: 'export',
    label: '批量导出',
    onClick:()=>{
      console.log('批量导出')
    }
  },
  {
    key: 'remove',
    danger: true,
    label: '批量删除',
    onClick:()=>{
      console.log('批量删除')
    }
  },
];
const BasicProTable: React.FC<unknown> = () => {
  const [loading, setLoading] = useState(false);
  const actionRef = useRef<ActionType>();
  const formRef = useRef<FormInstance>();
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '序号',
      dataIndex: 'id',
      tooltip: '这是唯一的id',
      copyable: true,
      // hideInSearch: false,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      // align: 'center',
      copyable: true,
      // hideInForm: true,
      // initialValue:'',
      // rules: [
      //   {
      //     required: true,
      //     message: '名称为必填项',
      //   },
      // ],
    },
    {
      title: '年龄',
      dataIndex: 'age',
      // align: 'center',
      valueType: 'digit', // https://procomponents.ant.design/components/schema
      sorter: true,
      search: {
        transform: (value) => {
          return `${Math.round(value)}`
        },
      },
      fieldProps: {
        placeholder: '请输入整数',
        min: 1,
        max: 100,
      }
      // hideInForm: true,
      // initialValue:'',
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: { text: '关闭', status: 'Default' },
        1: { text: '运行中', status: 'Processing' },
        2: { text: '已上线', status: 'Success' },
        3: { text: '异常', status: 'Error' },
      },
    },
    {
      title: '状态更新时间',
      dataIndex: 'uploadStatusTime',
      valueType: 'dateTime',
      hideInForm: true,
      formItemProps:{shouldUpdate:true},
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        const status = form?.getFieldValue('status');
        console.log('status:',status)
        console.log('rest:',rest)
        if (`${status}` === '0') {
          return false;
        } else {
          return defaultRender(item);
        }
        // if (`${status}` === '0') {
        //   return false;
        // }
        // if (`${status}` === '1') {
        //   return <Input {...rest} placeholder="请输入异常1231原因！" />;
        // }
        // return defaultRender(item);
      },
    },
    {
      title: '住址',
      dataIndex: 'address',
      copyable: true,
      ellipsis: true,
      hideInSearch: true,
    },
    {
      title: '操作',
      hideInSearch: true,
      width: 200,
      search: false,
      align: 'center',
      render: (text: any, record: any) => <Button type="link" size="small" onClick={() => console.log(record)}>
        编辑
      </Button>
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (<>
    <div className={styles.pageConter}>
      <ProTable
        columns={columns}
        headerTitle="查询表格"
        actionRef={actionRef}
        formRef={formRef}
        rowKey="id"
        toolbar={{
          title: '应用卡片列表',
          subTitle: 'test123',
          // multipleLine: true,
          // tabs: {
          //   activeKey:'key1',
          //   items: [{
          //     key: 'key1',
          //     tab:<p>key1</p>
          //   },{
          //     key: 'key2',
          //     tab:<p>key2</p>
          //   }]
          // }
        }}
        search={{
          labelWidth: 120,
          optionRender: (searchConfig, formProps, dom) => {
            console.log('searchConfig:', searchConfig)
            console.log('formProps:', formProps)
            console.log('dom:',dom)
            let result:any=<div>123</div>
            return result
          }
        }}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
          preserveSelectedRowKeys:true // 跨页面选择
        }}
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" key='add' onClick={() => console.log('新建')}>
            <PlusOutlined /> 新建
          </Button>,
          (selectedRows&&selectedRows?.length) > 0 ? (
            <Dropdown menu={{
              items:items,
              onClick:(e)=>{
                console.log('e:',e)
                console.log('action:',action)
                console.log('formRef.current:',formRef?.current?.getFieldValue())
              }
            }}
            >
              <Button>
                批量操作 <DownOutlined />
              </Button>
            </Dropdown>
          ):(<Button type="primary" key='export' onClick={() => console.log('全部导出')}>
          全部导出
        </Button>),
        ]}
        tableAlertRender={({ selectedRowKeys, selectedRows }) => (
          <div>
            已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项
          </div>
        )}
        // params 是需要自带的参数,可以用于自定义的头部表单查询，也可以是接口的固定查询参数，如从URL获取的业务ID等
        // 这个参数优先级更高，会覆盖查询表单的参数
        params={{
          custom: 'customData'
        }}
        pagination={{
          pageSize: 10,
          showQuickJumper: true,
        }}
        request={async (
          // 第一个参数 params 查询表单和 params 参数的结合
          // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
          params,
          sort,
          filter,
        ) => {
          console.log('params:', params)
          console.log('sort:',sort)
          console.log('filter:', filter)
          const requestData = mockRequest();
          return requestData;
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          // 如果需要转化参数可以在这里进行修改
          // const msg: any = await postPageApi({
          //   ...params,
          //   page: params.current,
          //   sort,
          //   filter,
          // });
          // return {
          //   data: msg?.data?.records || [],
          //   total: msg?.data?.total || 0,
          //   // success 请返回 true，
          //   // 不然 table 会停止解析数据，即使有数据
          //   success: msg?.code === 200 ? true : false,
          //   // 不传会使用 data 的长度，如果是分页一定要传
          // };
        }}
      />
    </div>
  </>)
}
export default BasicProTable;