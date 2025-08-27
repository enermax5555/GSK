import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Admin Panel</div>
                <div className="space-x-4">
                    <Link to="/admin/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
                    <Link to="/admin/manage-content" className="text-gray-300 hover:text-white">Manage Content</Link>
                    <Link to="/admin/manage-users" className="text-gray-300 hover:text-white">Manage Users</Link>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;