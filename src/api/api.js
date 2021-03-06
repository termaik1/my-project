import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in/api/"
});

export const DataAPI = {
  getUsers() {
    const Users = instance.get("users").then(response => {
      return response.data.data;
    });

    return Users;
  },
  getUserId(userId) {
    const UserId = instance.get("users/" + userId).then(response => {
      return response.data.data;
    });
    return UserId;
  },
  postRegisterId(email, password) {
    const RegisterId = instance
      .post("register", {
        email,
        password
      })
      .then(response => {
        return response.data.id;
      });
    return RegisterId;
  }
};
