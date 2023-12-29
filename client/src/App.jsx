import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
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
  NewsId,
  Blogs,
  History,
  BihtaCampus,
  AlumniDatabase,
  Error
} from "./pages/index";
import JobOffers from "./pages/JobOffers/JobOffers";
import Interships from "./pages/JobOffers/Interships";
import Meet from "./pages/AlumniMeet/Meet";
import Blog from "./pages/AlumniCorner/Blog";
import ScrollToTop from "./hooks/useScrollToTop";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ToastContainer /> */}
        <Router>
          <ScrollToTop />
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
              path="/history"
              element={
                <Layout>
                  <History />
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
              path="/blogs"
              element={
                <Layout>
                  <Blogs />
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
              path="/blog/:blogId"
              element={
                <Layout>
                  <Blog />
                </Layout>
              }
            />
            <Route
              path="/contribute"
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

            <Route
              path="*"
              element={
                <Layout>
                  <Error />
                </Layout>
              }
            />

            <Route
              path="/bihtacampus"
              element={
                <Layout>
                  <BihtaCampus />
                </Layout>
              }
            />

            <Route
              path="/alumni-database"
              element={
                <Layout>
                  <AlumniDatabase/>
                </Layout>
              }
            />

            <Route
              path="/alumni-meet"
              element={
                <Layout>
                  <Meet/>
                </Layout>
              }
            />
            <Route
              path="/jobs"
              element={
                <Layout>
                  <JobOffers/>
                </Layout>
              }
            />
            <Route
              path="/internships"
              element={
                <Layout>
                  <Interships/>
                </Layout>
              }
            />

          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
