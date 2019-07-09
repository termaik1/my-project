import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in/api/"
});

export const DataAPI = {
  
  getUsers() {
    return instance.get("users").then(response => {
      return response.data.data;
    });
  },
  getUsersId(userId) {
        return instance.get("users/" + userId).then(response => {
      return response.data.data;
    });
  },
  postRegisterId(email, password) {
    return instance
      .post("register", {
        email,
        password
      })
      .then(response => {
        return response.data.id;
      });
  }
};
