import React, { Component } from 'react';

import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './routes/Home';
import Login from "./routes/Login"
import Register from "./routes/Register"
import Dashboad from "./routes/ChangePass"
import Admin from "./routes/Admin"
import AdminStudents from './components/AdminStudents';
import AddCourse from './components/AddCourse';
import AddLession from './components/AddLession';
import AdminCourse from './components/AdminCourse';
import AddNewLession from './components/AddNewLession';
import AddDeleteLession from './components/AddDeleteLession.jsx';





class App extends Component {
    render() {
        return (
            <>
           
            <Routes>
                
               
                <Route path='/login' element={<Login />} />

                <Route path='/register' element={<Register />} />

               

                    <Route path='/admin' element={<Admin />}>
                        <Route path='add_lession' element={<AddNewLession />} />
                        <Route path='delete_lession' element={<AddDeleteLession />} />


                        <Route path='student' element={<AdminStudents />} />
                        <Route path='course' element={<AdminCourse />}>
                            <Route path='add_course' element={<AddCourse />} />
                        </Route>
                    </Route>
                </Routes>

             

            </>
           


        );
    }

    /* showContentMenu = (routes) => {
        var result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route 
                        key={index} 
                        path={route.path} 
                        exact={route.exact} 
                        component={route.main} 
                    />
                );
            });
        }

        return result;
    } */
}

export default App;