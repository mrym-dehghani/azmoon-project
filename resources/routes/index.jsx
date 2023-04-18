import React from 'react';
import NewUser from '../pages/NewUser';
import UsersList from '../pages/UsersList';
import NewHoze from '../pages/NewHoze';
import HozeList from '../pages/HozeList';
import Settings from '../pages/Settings';
import Organizers from './../pages/Organizers/index';
import NewExam from '../pages/NewExam';
import ListExams from '../pages/ListExams';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';

export const routes = {
    NewUser: {
        id :1,
        path: '/',
        element: <NewUser/>,
    },
    UsersList: {
        id :2,
        path: '/usersList',
        element: <UsersList/>,
    },
    NewHoze: {
        id :3,
        path: '/newHoze',
        element: <NewHoze/>,
    },
    HozeList: {
        id :4,
        path: '/listHoze',
        element: <HozeList/>,
    },
    Settings: {
        id:5,
        path: '/settings',
        element: <Settings/>,
    },
    Organizers: {
        id:6,
        path: '/organizers',
        element: <Organizers/>,
    },
    NewAzmoon: {
        id:7,
        path: '/newExam',
        element: <NewExam/>,
    },
    ListExams: {
        id:8,
        path: '/listExams',
        element: <ListExams/>,
    },
    SignUp: {
        id:9,
        path: '/signUp',
        element: <SignUp/>,
    },
    LogIn: {
        id:10,
        path: '/logIn',
        element: <LogIn/>,
    },
};