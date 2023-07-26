import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import  Home  from './Home'
import BookViews from './component/BookViews'
import GetId from './GetId'


export const Routes =createBrowserRouter([
    {
        path:'/',
        element:<BookViews/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/getid',
        element:<GetId/>
    }

])
