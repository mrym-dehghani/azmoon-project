import React from 'react';
import NewUser from '../pages/NewUser';
// import UsersList from '../pages/UsersList';
import NewHoze from '../pages/NewHoze';
// import HozeList from '../pages/HozeList';

export const routes = {
    NewUser: {
        id :1,
        path: '/',
        element: <NewUser/>,
    },
    // UsersList: {
    //     id :2,
    //     path: '/usersList',
    //     element: <UsersList/>,
    // },
    NewHoze: {
        id :3,
        path: '/newHoze',
        element: <NewHoze/>,
    },
    // HozeList: {
    //     id :4,
    //     path: '/listHoze',
    //     element: <HozeList/>,
    // },
};