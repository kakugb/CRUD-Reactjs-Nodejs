import  { Toaster } from 'react-hot-toast';
import React from "react";
import Table from "./CRUD/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateUser from "./CRUD/UpdateUser";
import AddUser from './CRUD/AddUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path="/addUser" element={<AddUser/>} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
