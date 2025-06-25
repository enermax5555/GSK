// This file exports TypeScript interfaces and types used throughout the application.

export interface User {
    id: string;
    email: string;
    displayName?: string;
    role: 'admin' | 'user';
}

export interface Content {
    id: string;
    title: string;
    description: string;
    mediaUrl?: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}

export interface DashboardStats {
    totalUsers: number;
    totalContent: number;
    activeUsers: number;
}