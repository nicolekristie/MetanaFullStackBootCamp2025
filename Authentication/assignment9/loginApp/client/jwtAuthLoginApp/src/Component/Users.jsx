import { useEffect, useState } from "react";
import { fetchUsers } from "../api/fetchUsers";

function Users() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        async function loadUsers() {
        const userData = await fetchUsers();
        setUsers(userData);
        }
        
        loadUsers();
    }, []);

    return (
        <div>
        <h2>User List</h2>
        <ul>
            {users.map((user) => (
            <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </div>
    );
}

export default Users;
