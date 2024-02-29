import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout1, Layout2, Layout3 } from "./utils/Layout";
import {
  Team,
  HomePage,
  Gallery,
  Events,
  NotableAlumni,
  AlumniCorner,
  Donate,
  Resources,
  About,
  Blog,
  Blogs,
  BihtaCampus,
  Error,
  AlumniDatabase,
  History,
  JobOffers,
  Job,
  SuccessStories,
  PreviousMeets,
  SignIn,
  SignUp,
  Verify,
  ForgotPassword,
  ResetPassword,
  Profile,
  AlumniProfile,
  GiveTestimonial,
  PostInernship,
  PostJob,
  ShareExperience,
  WriteBlog,
  Dashboard,
  ReportBug,
  Experiences,
  Experience,
  VerifyEmail,
  Internship,
  ShareFeedback,
  EditAlumniProfile,
  Meet,
  Internships
} from "./pages";
import ScrollToTop from "./hooks/useScrollToTop";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateComponent from "./components/PrivateComponent/PrivateComponent"

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
      path: "/verify-email",
      element: <VerifyEmail />,
      id: 7,
    },
    {
      path: "/job/:jobId",
      element: <Job />,
      id: 8,
    },
    {
      path: "/internship/:internshipId",
      element: <Internship />,
      id: 9,
    },
    {
      path: "/blogs",
      element: <Blogs />,
      id: 10,
    },
    {
      path: "/News",
      element: <Experiences />,
      id: 11,
    },
    {
      path: "/News/:experienceId",
      element: <Experience />,
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
      path: "/about",
      element: <About />,
      id: 18,
    },
    {
      path: "/jobs",
      element: <JobOffers />,
      id: 19,
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
      path: "/internships",
      element: <Internships />,
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

  const adminProtectedRoutes = [
    {
      path: "/profile",
      component: <Profile />,
      id: 1
    },
    {
      path: "/alumni-profile",
      component: <AlumniProfile />,
      id: 2
    },
    {
      path: "/give-testimonial",
      component: <GiveTestimonial />,
      id: 3
    },
    {
      path: "/post-an-internship",
      component: <PostInernship />,
      id: 4
    },
    {
      path: "/post-a-job",
      component: <PostJob />,
      id: 5
    },
    {
      path: "/share-News",
      component: <ShareExperience />,
      id: 6
    },
    {
      path: "/write-a-blog",
      component: <WriteBlog />,
      id: 7
    },
    {
      path: "/dashboard",
      component: <Dashboard />,
      id: 8
    },
    {
      path: "/report-bug",
      component: <ReportBug />,
      id: 9
    },
    {
      path: "/share-feedback",
      component: <ShareFeedback />,
      id: 10
    },
    {
      path: "/edit-alumni-profile",
      component: <EditAlumniProfile />,
      id: 11
    }
  ];

  return (
    <div className="bg-[#000000] bg-[radial-gradient(#cccccc33_1px,#000000_1px)] bg-[size:20px_20px]">
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Router>
          <ScrollToTop />
          <ErrorBoundary>
            <AuthProvider>
              <Routes>
                <Route path='/' element={<Layout1></Layout1>}>
                  {
                    links.map(({ path, element, id }) => (
                      <Route
                        key={id}
                        path={path}
                        element={
                          element
                        }
                      />
                    ))
                  }
                </Route>

                <Route path='/' element={<Layout3></Layout3>}>
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/verify" element={<Verify />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                </Route>

                <Route path='/' element={<Layout2></Layout2>}>
                  {
                    adminProtectedRoutes.map((route) => (
                      <Route key={route.id} path={route.path} element={<PrivateComponent />} >
                        <Route path={route.path} element={
                          route.component ? route.component : <Error />
                        } />
                      </Route>
                    ))
                  }
                </Route>
              </Routes>
            </AuthProvider>
          </ErrorBoundary>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
