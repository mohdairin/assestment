import {
    GET_USER,
    LOGIN,
  } from "./types";
  
  import Service from "../services/api";

  export const loginCredential = (login) => async (dispatch) => {
      dispatch({
        type: LOGIN,
        payload: login,
      });
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

      for (var k=0; k < arrayFullData.length; k++) {
        //   if(arrayFullData[k].first_name.charAt(0)=="G" && arrayFullData[k].last_name.charAt(0)=="W"){
        //     console.log("Got W or G");
        //     arrayPriority.push(arrayFullData[k]);
        //   }

          if(arrayFullData[k].first_name.charAt(0)=="G"){
            console.log("Got W or G");
            arrayPriority.push(arrayFullData[k]);
          }
      }
      if(arrayPriority.length>0){
          for(var j=0;j<arrayPriority.length;j++){
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
  
  
  