import React from 'react';
import AdminNavbar from '../components/AdminNavbar';

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNavbar />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="font-semibold">Total Users</h2>
                        <p className="text-lg">150</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="font-semibold">Total Posts</h2>
                        <p className="text-lg">75</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="font-semibold">Total Comments</h2>
                        <p className="text-lg">300</p>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-bold">Quick Links</h2>
                    <ul className="list-disc pl-5">
                        <li><a href="/admin/manage-content" className="text-blue-500">Manage Content</a></li>
                        <li><a href="/admin/manage-users" className="text-blue-500">Manage Users</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;