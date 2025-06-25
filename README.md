# React Firebase Admin App

This project is a React application that serves as an admin panel for managing content and user authentication using Firebase. It utilizes Tailwind CSS for styling and provides a user-friendly interface for administrators.

## Project Structure

```
react-firebase-admin-app
├── public
│   └── index.html          # Main HTML document for the React application
├── src
│   ├── admin
│   │   ├── components
│   │   │   └── AdminNavbar.tsx  # Navigation bar for the admin panel
│   │   ├── pages
│   │   │   ├── Dashboard.tsx     # Admin dashboard with site statistics
│   │   │   ├── ManageContent.tsx  # Manage service descriptions and media
│   │   │   └── ManageUsers.tsx    # Manage user accounts
│   │   └── index.tsx              # Entry point for the admin panel
│   ├── components
│   │   ├── Navbar.tsx             # Navigation bar for the public site
│   │   └── Footer.tsx             # Footer for the public site
│   ├── pages
│   │   ├── Home.tsx               # Landing page of the website
│   │   ├── Login.tsx              # Login interface for the admin panel
│   │   └── NotFound.tsx           # 404 error page for unmatched routes
│   ├── services
│   │   ├── firebase.ts            # Functions for Firebase services
│   │   └── auth.ts                # Functions for user authentication
│   ├── styles
│   │   └── tailwind.css           # Tailwind CSS styles
│   ├── types
│   │   └── index.ts               # TypeScript interfaces and types
│   ├── App.tsx                    # Main application component with routing
│   └── index.tsx                  # Entry point of the React application
├── .env.example                   # Example environment variables for Firebase
├── package.json                   # npm configuration file
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## Features

- **Admin Panel**: A dedicated section for administrators to manage content and users.
- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Content Management**: Ability to edit service descriptions and manage media.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive UI.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd react-firebase-admin-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project and configure authentication and Firestore.
   - Rename `.env.example` to `.env` and add your Firebase configuration.

4. **Run the application**:
   ```
   npm start
   ```

5. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.