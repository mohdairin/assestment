import '../App.css';
import React, { useEffect } from 'react';
import CardList from '../component/ActionAreaCard'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


import {
    getUser,
} from "../action/index";
import ResponsiveAppBar from '../component/responsiveAppBar';
import Footer from '../component/Footer';

function Home() {
    const loginDetails = useSelector(state => state.loginDetails);
    const userDataRedux = useSelector(state => state.userData);
    const navigate = useNavigate();


    const dispatch = useDispatch();

    useEffect(() => {
        if (loginDetails.length == 0) {
            console.log("Bypass Login", loginDetails);
            navigate('/error');
        } else {
            dispatch(getUser());
        }
    }, []);
    const listItems = [...new Map(userDataRedux?.userList?.map((m) => [m.id, m])).values()].map((userData) =>
        <CardList data={userData} />
    );


    return (
        <div>
            <ResponsiveAppBar />
            <div style={{
                textAlign: 'center',
                marginLeft:'38%'
            }}>
            {listItems}

            </div>
            <Footer />
        </div>
    );
}

export default Home;
