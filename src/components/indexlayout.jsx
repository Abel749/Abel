import React from 'react';
import TopContent from '../components/topcontent';
import ThisMonthStat from '../components/thismonthstat';
import Content2 from '../components/content2';
import FootContent from '../components/footcontent';
import IndexBackground from '../components/indexbackground'
import AppCard from '../components/appcard';
import { Layout, Space } from 'antd';
import HotList from "../components/hotlist";
import NewsCard from "./newsCard";
const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 80,
  paddingInline: 50,
  lineHeight: '80px',
  backgroundColor: '#036ED6',
};

const indexBackgroundStyle={
  height: 600,
  borderTopWidth:'1px',
  borderTopStyle:'solid',
  borderTopColor:'aliceblue',
  backgroundColor: '#036ED6',
};

const monthStatStyle={
  //textAlign: 'center',
  minHeight: 160,
  backgroundColor: '#ffffff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 750,
  //lineHeight: '220px',
  color: '#fff',
  backgroundColor: '#ffffff',
};

const hostListStyle = {
  textAlign: 'center',
  backgroundColor: '#ffffff',
}
const newsCardStyle = {
  textAlign: 'center',
  backgroundColor: '#ffffff',
  marginTop:'50px',
}

const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#555555',
};

const IndexLayout = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout style={{ backgroundColor: '#ffffff' }}>
      <Header style={headerStyle}><TopContent frompage="home" /></Header>
      <div style={indexBackgroundStyle}><IndexBackground /></div>
	  <Header style={monthStatStyle}><ThisMonthStat /></Header>
	  <Header style={contentStyle}><Content2 /></Header>
      <div style={hostListStyle}><HotList /></div>
      <div style={newsCardStyle}><NewsCard /></div>
	  <div style={footerStyle}><FootContent /></div>
    </Layout>
  </Space>
  );


export default IndexLayout;
