import React from 'react';
import TopContent from '../components/topcontent';
import Content1 from '../components/content1';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import comp from "./comp";

const DataCenterLayout = (props) => (
    <comp>
        <Space>
            <Layout>
            <TopContent frompage="datacenter" propName={props.propName} />
            <Content1 />
            <FootContent />
        </Layout>
      </Space>
    </comp>
  );


export default DataCenterLayout;
