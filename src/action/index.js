import {
  GET_USER,
  LOGIN,
  ADD_DATA
} from "./types";

import Service from "../services/api";

export const loginCredential = (login) => async (dispatch) => {

  var data = {
    payload: login,
    name: "AIRIN"
  }
  dispatch({
    type: LOGIN,
    payload: data,
  });
};

export const addData = (data) => async (dispatch) => {
  console.log("Add Data",data)
  try {
    dispatch({
      type: ADD_DATA,
      payload: data,
    });

  } catch (err) {
    console.log(err);
  }
};





export const getUser = () => async (dispatch) => {
  try {
    const res = await Service.getUser();
    var arrayFullData = res.data.data;
    var totalData = res.data.total;
    var currentData = res.data.data.length;
    var i = currentData + 1

    for (var i; i <= totalData; i++) {
      const balance = await Service.getBalanceUser(i);
      arrayFullData.push(balance.data.data)
    }
    var arrayPriority = []

    for (var k = 0; k < arrayFullData.length; k++) {
      if (arrayFullData[k].first_name.charAt(0) == "G") {
        arrayPriority.push(arrayFullData[k]);
      }
    }
    if (arrayPriority.length > 0) {
      for (var j = 0; j < arrayPriority.length; j++) {
        arrayFullData.unshift(arrayPriority[j]);
      }
    }

    dispatch({
      type: GET_USER,
      payload: arrayFullData,
    });

  } catch (err) {
    console.log(err);
  }
};


