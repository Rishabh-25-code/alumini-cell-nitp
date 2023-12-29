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
  Error,
  SuccessStories,
  PreviousMeets,
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

  const links = [
    {
      path: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      path: "/gallery",
      element: <Gallery />,
      id: 2,
    },
    {
      path: "/team",
      element: <Team />,
      id: 3,
    },
    {
      path: "/history",
      element: <History />,
      id: 4,
    },
    {
      path: "/events",
      element: <Events />,
      id: 5,
    },
    {
      path: "/notablealumni",
      element: <NotableAlumni />,
      id: 6,
    },
    {
      path: "/news",
      element: <Newsletter />,
      id: 7,
    },
    {
      path: "/register",
      element: <Registration />,
      id: 8,
    },
    {
      path: "/signup",
      element: <Signup />,
      id: 9,
    },
    {
      path: "/blogs",
      element: <Blogs />,
      id: 10,
    },
    {
      path: "/login",
      element: <Login />,
      id: 11,
    },
    {
      path: "/news/:newsId",
      element: <NewsId />,
      id: 12,
    },
    {
      path: "/alumnicorner",
      element: <AlumniCorner />,
      id: 13,
    },
    {
      path: "/blog/:blogId",
      element: <Blog />,
      id: 14,
    },
    {
      path: "/contribute",
      element: <Donate />,
      id: 15,
    },
    {
      path: "/resources",
      element: <Resources />,
      id: 16,
    },
    {
      path: "/interaction",
      element: <Interaction />,
      id: 17,
    },
    {
      path: "/about",
      element: <About />,
      id: 18,
    },
    {
      path: "/teamcard",
      element: <TeamCard />,
      id: 19,
    },
    {
      path: "/teamcard2",
      element: <TeamCard2 />,
      id: 20,
    },
    {
      path: "/bihtacampus",
      element: <BihtaCampus />,
      id: 21,
    },
    {
      path: "/alumni-database",
      element: <AlumniDatabase />,
      id: 22,
    },
    {
      path: "/alumni-meet",
      element: <Meet />,
      id: 23,
    },
    {
      path: "/jobs",
      element: <JobOffers />,
      id: 24,
    },
    {
      path: "/internships",
      element: <Interships />,
      id: 25,
    },
    {
      path: "/success-stories",
      element: <SuccessStories />,
      id: 26,
    },
    {
      path: "/prev-alumni-meets",
      element: <PreviousMeets />,
      id: 27,
    },
    {
      path: "*",
      element: <Error />,
      id: 28,
    }
  ]

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ToastContainer /> */}
        <Router>
          <ScrollToTop />
          <Routes>
            {
              links.map(({ path, element, id }) => (
                <Route
                  key={id}
                  path={path}
                  element={
                    <Layout>
                      {element}
                    </Layout>
                  }
                />
              ))
            }
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
