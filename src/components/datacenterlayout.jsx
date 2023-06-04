import React from 'react';
import TopContent from '../components/topcontent';
import Content1 from '../components/content1';
import Content2 from '../components/content2';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 220,
  lineHeight: '220px',
  color: '#fff',
  //backgroundColor: '#108ee9',
  backgroundColor: '#ffffff',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const DataCenterLayout = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}><TopContent frompage="datacenter" /></Header>
      <Header style={contentStyle}><Content1 /></Header>
	  <Footer style={footerStyle}><FootContent /></Footer>
    </Layout>
  </Space>
  );


export default DataCenterLayout;