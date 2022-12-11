import '../App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AutoComplete } from 'antd';
import {
    getUser,
    addData,
    getData,
} from "../action/index";
import Card from '../component/AntCard';
import AntFooter from '../component/AntFooter';
import AntHeader from '../component/AntHeader';


function Home() {
    const dispatch = useDispatch();
  //  const loginDetails = useSelector(state => state.loginDetails);
    const autoCompleteData = useSelector(state => state.autoCompleteData);

    const [options, setOptions] = useState([]);
    const onSearch = () => {
        setOptions(
            autoCompleteData?.data
        );
    };

    const onSelect = (data) => {
        dispatch(addData(data))
    };

    useEffect(() => {
        dispatch(getData());
        // if (loginDetails.length == 0) {
        // } else {
        //     dispatch(getUser());
        // }
    }, []);


    const listItemsAnt = autoCompleteData?.arr?.map((x) =>
        <Card data={x} />
    );

    return (
        <div>
           <AntHeader/>
            <div style={AutoCompleteForm}>
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
            </div>
            <div style={ScrollView}>
                {listItemsAnt}
            </div>
            <AntFooter/>
        </div>
    );
}

const AutoCompleteForm = {
    textAlign: 'center', marginTop: '2px'
}

const ScrollView = {
    overflowY:'scroll',height:'80vh'
}



export default Home;
