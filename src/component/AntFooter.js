import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;
const AntFooter = () => (
    <Footer style={{
        textAlign: 'center', position: 'absolute', left: 0,
        bottom: 0,
        right: 0,
        background:'#001529',
        fontFamily:'sans-serif',
        fontWeight:'400',
        color:'grey',
        height:'30px'
    }}>React Project With Redux and AutoComplete</Footer>
);

export default AntFooter;