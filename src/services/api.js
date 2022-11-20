import http from "../http-common";

const getUser = () => {
  return http.get("/users");
};

const getBalanceUser = (id) => {
    return http.get("/users/"+id);
  };

const Service = {
  getUser,
  getBalanceUser
  };
  
export default Service;
