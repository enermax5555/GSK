import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from './components/AdminNavbar';

const AdminIndex: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <AdminNavbar />
            <main className="flex-grow p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Admin Dashboard
                        </h1>
                        <p className="text-xl text-gray-600">
                            Welcome to the administration panel. Choose an option below to get started.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link 
                            to="/admin/dashboard" 
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
                        >
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dashboard</h3>
                            <p className="text-gray-600">View analytics and system overview</p>
                        </Link>

                        <Link 
                            to="/admin/users" 
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
                        >
                            <div className="text-4xl mb-4">👥</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Manage Users</h3>
                            <p className="text-gray-600">Add, edit, and manage user accounts</p>
                        </Link>

                        <Link 
                            to="/admin/content" 
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
                        >
                            <div className="text-4xl mb-4">📝</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Manage Content</h3>
                            <p className="text-gray-600">Update website content and settings</p>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminIndex;