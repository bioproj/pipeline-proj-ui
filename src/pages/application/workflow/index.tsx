import { ProList } from '@ant-design/pro-components';
import { Button, Space, Tag,Progress } from 'antd';
import request from 'umi-request';
import { useEffect } from 'react'
import { applicationPageApi } from '@/api/application';
import type { Application } from '@/interface/business';
import {  useNavigate } from 'react-router-dom';

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

export default () => {
  const navigate = useNavigate();
  const loadData = async (params = {} as Record<string, any>) => {
    console.log('params', params)
    const res = await applicationPageApi({ number: params.current, size: params.pageSize })
    console.log(res)
    return {
      data: res.data.content,
      // success 请返回 true，
      // 不然 table 会停止解析数据，即使有数据
      success: true,
      // 不传会使用 data 的长度，如果是分页一定要传
      total: res.data.count,
    }
    // const res2 = await request<{
    //   data: GithubIssueItem[];
    // }>('https://proapi.azurewebsites.net/github/issues', {
    //   params,
    // })
    // console.log(res2)
    // return res2
  }


  // debugger
  useEffect(() => {

  }, [])

  return (
    <ProList<Application>
      grid={{ gutter: 16, column: 3 }}
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            新建
          </Button>,
        ];
      }}
      search={{}}
      rowKey="name"
      headerTitle="基础列表"
      request={loadData}
      pagination={{
        pageSize: 9,
      }}
      onItem={(record: any) => {
        return {
          onMouseEnter: () => {
            console.log(record);
          },
          onClick: () => {
            navigate("/workflow/detail?id=1")
          },
        };
      }}
      showActions="hover"
      metas={{
        title: {
          dataIndex: 'name',
          title: '用户',
        },
        // avatar: {
        //   dataIndex: 'avatar',
        //   render: (_, row) => {
        //     return (
        //       <Tag color="#5BD8A6">语雀专栏</Tag>
        //     );
        //   },
        // },
        // content: {
        //   dataIndex: 'name',
        //   render: (_, row) => {
        //     return (
        //       <div
        //         style={{
        //           flex: 1,
        //         }}
        //       >
        //         <div
        //           style={{
        //             width: 200,
        //           }}
        //         >
        //           <div>发布中</div>
        //           <Progress percent={80} />
        //         </div>
        //       </div>
        //     );
        //   },
        // },

        // subTitle: {
        //   dataIndex: 'labels',
        //   render: (_, row) => {
        //     return (
        //       <Space size={0}>
        //         {/* {row.labels?.map((label: { name: string }) => (
        //           <Tag color="blue" key={label.name}>
        //             {label.name}
        //           </Tag>
        //         ))} */}
        //         <Tag color="#5BD8A6">语雀专栏</Tag>
        //       </Space>
        //     );
        //   },
        //   search: false,
        // },
        
        actions: {
          // render: (text, row) => [
          //   <a
          //     href={row.url}
          //     target="_blank"
          //     rel="noopener noreferrer"
          //     key="link"
          //   >
          //     链路
          //   </a>,
          //   <a
          //     href={row.url}
          //     target="_blank"
          //     rel="noopener noreferrer"
          //     key="warning"
          //   >
          //     报警
          //   </a>,
          //   <a
          //     href={row.url}
          //     target="_blank"
          //     rel="noopener noreferrer"
          //     key="view"
          //   >
          //     查看
          //   </a>,
          // ],
          // search: false,
        },
        status: {
          // 自己扩展的字段，主要用于筛选，不在列表中显示
          title: '状态',
          valueType: 'select',
          valueEnum: {
            all: { text: '全部', status: 'Default' },
            open: {
              text: '未解决',
              status: 'Error',
            },
            closed: {
              text: '已解决',
              status: 'Success',
            },
            processing: {
              text: '解决中',
              status: 'Processing',
            },
          },
        },
      }}
    />
  );
}