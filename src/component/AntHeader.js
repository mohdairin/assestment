import React from "react";
import { Layout,Menu } from 'antd';

const { Header } = Layout;
const items1 = ['Airin'].map((key) => ({
    key,
    label: `BANK ${key}`,
}));

const AntHeader = () => (
    <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
);

export default AntHeader;