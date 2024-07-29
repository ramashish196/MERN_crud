import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allUsers } from "../services/api";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await allUsers();
    const userData = await res.data.userData;
    setUsers(userData);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const navigate = useNavigate();

  const handleUpdate = async (id) => {
    navigate(`/update/:${id}`);
  };

  const handleDelete = (id) => {
    setUsers((preState) => {
      return preState.filter((data) => data._id !== id);
    });
    // const fill = users.filter((data) => data._id !== id);
    // setUsers(fill);
    // deleteUser(id);
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users &&
                  users.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {i + 1}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <button
                            className="text-green-500 hover:text-green-700"
                            onClick={() => handleUpdate(item._id)}
                            // component={Link}
                            // to={`/update/${item._id}`}
                          >
                            Edit
                          </button>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <button
                            type="submit"
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
