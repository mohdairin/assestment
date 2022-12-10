import '../App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AutoComplete } from 'antd';
import { Layout, Menu } from 'antd';
import {
    getUser,
    addData
} from "../action/index";
import Card from '../component/AntCard';

const { Header, Content, Sider } = Layout;
const items1 = ['Airin'].map((key) => ({
    key,
    label: `BANK ${key}`,
}));


function Home() {
    const loginDetails = useSelector(state => state.loginDetails);
    const autoCompleteData = useSelector(state => state.autoCompleteData);

    const [options, setOptions] = useState([]);
    const onSearch = () => {
        setOptions(
            [
                { value: 'Airin' },
                { value: 'Luffy' },
                { value: 'Vegeta' },
                { value: 'Kakarot' },
                { value: 'Tarzan' },
                { value: 'Piccolo' },
                { value: 'Zoro' },
                { value: 'Sanji' },
                { value: 'Boruto' },
            ],
        );
    };

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSelect = (data) => {
        dispatch(addData(data))
        updateView()
    };

    const updateView = () => {
        console.log("Auto", autoCompleteData)
    }


    useEffect(() => {
        console.log("auto complete", autoCompleteData);
        if (loginDetails.length == 0) {
        } else {
            dispatch(getUser());
        }
    }, []);


    const listItemsAnt = autoCompleteData?.arr?.map((x) =>
        <Card data={x} />

    );

    return (
        <div>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <div style={{textAlign:'center',marginTop:'2px'}}>
                <AutoComplete
                    style={{
                        width: 400,
                    }}
                    options={options}
                    onSelect={onSelect}
                    onSearch={onSearch}
                    placeholder="Search"
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />
                {listItemsAnt}
            </div>
        </div>
    );
}

export default Home;
