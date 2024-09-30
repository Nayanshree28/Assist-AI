import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import Homepage from './routes/Homepage/Homepage.jsx';
import DashboardPage from './routes/DashboardPage/DashboardPage.jsx';
import WeChat from './routes/Chatpage/WeChat.jsx';
import RootLayout from './Layout/RootLayout/RootLayout.jsx';
import LayoutDashboard from './Layout/dashboardLayout/LayoutDashboard.jsx';
import SignInPage from './routes/SignInPage/SignInPage.jsx';
import SignUpPage from './routes/SignupPage/SignUpPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: "/", 
        element: <Homepage />,
      },
      {
        path: "/sign-in/*", 
        element: <SignInPage/>,
      },
      {
        path: "/sign-up/*", 
        element: <SignUpPage/>,
      },
      {
        element: <LayoutDashboard/>,
        children:[
          {
            path: "/dashboard",
            element: <DashboardPage/>
          },
          {
            path: "/dashboard/chats/:id",
            element: <WeChat/>
          }
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
