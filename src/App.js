import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Authentification/signin';
import Register from './components/Authentification/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/calendarapp/calendar';
import Home from './components/Home/Home/Home';
import Admindash from './components/admindash/Homes/Homes';
import Orders from './components/admindash/Orders/Orders';
import AddNew from './Pages/AddNew/AddNew';
import Lists from './Pages/UserLists/UserLists'
import Detail from './Pages/Detail/Detail';


import './App.css';


const userInpDetails = [
  {
      id: 2,
      name: 'username',
      lable: 'Username',
      type: 'text',
      placeholder: 'John23',
      required: true,
      pattern: '^[A-Za-z0-9]{3,12}$',
      errorMsg: 'Username should be 3-12 characters & should not include any special character!',
  },
  {
      id: 3,
      name: 'name',
      lable: 'Name',
      type: 'text',
      placeholder: 'John Smith',
      required: true,
      pattern: '^[A-Za-z]{1,20}$',
      errorMsg: 'Name is required!',
  },
  {
      id: 4,
      name: 'email',
      lable: 'Email',
      type: 'email',
      placeholder: 'example@email.com',
      required: true,
      errorMsg: 'Enter a valid email!',
  },
  {
      id: 5,
      name: 'password',
      lable: 'Password',
      type: 'password',
      placeholder: 'Password',
      required: true,
      pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{6,20}$',
      errorMsg:
          'Password should be 6-20 characters and include at last 1 num, 1 letter, 1 special character!',
  },
  {
      id: 6,
      name: 'address',
      lable: 'Address',
      type: 'text',
      placeholder: 'Address',
      required: true,
      errorMsg: 'Address is required!',
  },
];
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/admin" element={<Admindash />} />
        <Route path="/Orders" element={<Orders />} />
                
                    
                        {/* nested routes */}
                        <Route path="users">
                            <Route index element={<Lists type="user" />} />
                            <Route path=":userId" element={<Detail />} />
                            <Route
                                path="addnew"
                                element={
                                    <AddNew
                                        inputs={userInpDetails}
                                        titlee="Add New User"
                                        type="USER"
                                    />
                                }
                            />
                        </Route>
      
      </Routes>
    </Router>
  );
};

export default App;
