import React from 'react';
import Home from "./Home";
import Companies from "./Companies";
import Skills from "./Skills";
import Error from "./Error";
import { Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

function Animation() {

    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </AnimatePresence>
  )
}

export default Animation