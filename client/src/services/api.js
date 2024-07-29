import axios from "axios";
const url = "http://localhost:3000";
const userApi = async (data) => {
  try {
    // console.log("data", data);
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("error in post  api", error);
  }
};
const allUsers = async () => {
  try {
    const users = await axios.get(`${url}/users`);
    // return users;
    console.log(users);
  } catch (error) {
    console.log("error while getting all users form api", error);
  }
};

// update
const updateUser = async (id) => {
  try {
    const updatedUser = await axios.put(`${url}/update/:${id}`);
    return updatedUser;
  } catch (error) {
    console.log("err while updating user", error);
  }
};

//delete
const deleteUser = async (id) => {
  const user = await axios.get(`${url}/delete/:${id}`);
  console.log(user);
};
export { userApi, allUsers, deleteUser, updateUser };
