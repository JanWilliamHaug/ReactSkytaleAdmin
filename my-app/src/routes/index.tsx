import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '@/pages/layout';
import Users from '@/pages/Users/Users';
import Groups from '@/pages/Groups/Groups';
import Configurations from '@/pages/Configurations/Configurations';
import Licenses from '@/pages/Licenses/Licenses';
import NotFound from '@/pages/NotFound';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to="/users" replace /> }, // Set default route to /users
      { path: '/users', element: <Users /> },
      { path: '/groups', element: <Groups /> }, 
      { path: '/configurations', element: <Configurations /> }, 
      { path: '/licenses', element: <Licenses /> },
    ],
  },
  { path: '*', element: <NotFound /> },
];

export default routes;
