import React from 'react';
import TopContent from '../components/topcontent';
import FootContent from '../components/footcontent';
import { Layout, Space } from 'antd';
import SearchData from "./searchdata";
import comp from "./comp";

const SearchPageLayout = (props) => {
    return (
        <comp>
            <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                <Layout style={{ backgroundColor: '#ffffff' }}>
                    <TopContent frompage="searchPage" propName={props.propName} />
                    <SearchData />
                    <FootContent />
                </Layout>
            </Space>
        </comp>
    )
};


export default SearchPageLayout;

