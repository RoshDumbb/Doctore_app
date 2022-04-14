import React from 'react'
import { Route, Routes } from "react-router-dom";
import Details from '../Components/Details';
import { Login } from '../Components/login';
import Section from '../Components/section';
// import { Login } from '../Components/login';
// import{Login}  from "../Components/Login";
const Routesmain = () => {
  return (
    <Routes>
      {/* <Route path='/sec'element={<Section/>}></Route> */}
      <Route path="/details" element={<Details />}></Route>
      {/* <Route path='/'element={<Login/>}></Route> */}
    </Routes>
  );
}

export default Routesmain;