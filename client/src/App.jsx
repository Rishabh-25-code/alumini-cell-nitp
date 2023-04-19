import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Datepicker, Input, initTE } from "tw-elements";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
import { auth } from "./firebase";
import {
  Team,
  TeamCard,
  TeamCard2,
  HomePage,
  Newsletter,
  Gallery,
  Events,
  NotableAlumni,
  News,
  Registration,
  Signup,
  Login,
  AlumniCorner,
  Donate,
  Resources,
  Interaction,
  About,
  NewsId
} from "./pages/index";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [userName, setUserName] = useState("");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    initTE({ Datepicker, Input });
  }, []);
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else setUserName("");
  //   });
  // }, []);

  return (
    <>
      {/* <ToastContainer /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/gallery"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            path="/team"
            element={
              <Layout>
                <Team />
              </Layout>
            }
          />
          <Route
            path="/events"
            element={
              <Layout>
                <Events />
              </Layout>
            }
          />
          <Route
            path="/notablealumni"
            element={
              <Layout>
                <NotableAlumni />
              </Layout>
            }
          />
          <Route
            path="/news"
            element={
              <Layout>
                <Newsletter />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <Registration />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/news/:newsId"
            element={
              <Layout>
                <NewsId />
              </Layout>
            }
          />
          <Route
            path="/alumnicorner"
            element={
              <Layout>
                <AlumniCorner />
              </Layout>
            }
          />
           <Route
            path="/donate"
            element={
              <Layout>
                <Donate />
              </Layout>
            }
          />
           <Route
            path="/resources"
            element={
              <Layout>
                <Resources />
              </Layout>
            }
          />
          <Route
            path="/interaction"
            element={
              <Layout>
                <Interaction />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/teamcard"
            element={
              <Layout>
                <TeamCard />
              </Layout>
            }
          />
          <Route
            path="/teamcard2"
            element={
              <Layout>
                <TeamCard2 />
              </Layout>
            }
          />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
