import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import UserDatatable from "./user-datatable/UserDataTable"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/users/userSlice"

const UserList = () => {
  const dispatch = useDispatch();
  const {user, loading} = useSelector((state)=> state.user);
  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])
  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Image</th>
            <th>Status</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.img}</td>
              <td>{user.status}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList