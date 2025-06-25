import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../../services/auth';
// TODO: Implement or import deleteUser from the correct module
// TODO: Implement or import getUsers from the correct module
import AdminNavbar from '../components/AdminNavbar';

const ManageUsers: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersList = await getUsers();
            setUsers(usersList);
            setLoading(false);
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId: string) => {
        await deleteUser(userId);
        setUsers(users.filter(user => user.id !== userId));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <AdminNavbar />
            <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">User ID</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="py-2 px-4 border-b">{user.id}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">
                                <button 
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;