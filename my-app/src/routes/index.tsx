import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '@/pages/layout';
import Users from '@/pages/Users/Users';
import Groups from '@/pages/Groups/Groups';
import Configurations from '@/pages/Configurations/Configurations';
import Licenses from '@/pages/Licenses/Licenses';
import SampleTable from '@/pages/Users/UsersTable/SampleTable'; // Import SampleTable component
import NotFound from '@/pages/NotFound';
import users from '@/pages/Users/Data/userData'; // Import user data

const SampleTableWithState = () => {
  const [markedUsers, setMarkedUsers] = useState<string[]>([]);
  return <SampleTable users={users} markedUsers={markedUsers} setMarkedUsers={setMarkedUsers} />;
};

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to="/users" replace /> }, // Set default route to /users
      { path: '/users', element: <Users users={users} /> }, // Pass users data to Users component
      { path: '/groups', element: <Groups /> },
      { path: '/configurations', element: <Configurations /> },
      { path: '/licenses', element: <Licenses /> },
      { path: '/sample-table', element: <SampleTableWithState /> }, // Add new route for SampleTable with state handling
    ],
  },
  { path: '*', element: <NotFound /> },
];

export default routes;
