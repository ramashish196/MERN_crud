const url = "http://localhost:3000";

//get userById
const getUserById = async (id) => {
  try {
    return await axios.get(`${url}/${id}`);
  } catch (error) {
    console.log("error while getting userbyid form api", error);
  }
};

export default getUserById;
