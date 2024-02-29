import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout1, Layout3 } from "./utils/Layout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  HomePage,
  Blogs,
  Gallery,
  Events,
  NotableAlumni,
  Error,
  Profile,
  SignIn,
  SignUp,
  Verify,
  ForgotPassword,
  ResetPassword,
  VerifyEmail,
  Blog,
  Experience,
  Experiences,
  Jobs,
  Job,
  Internship,
  Internships,
  NotAdmin,
  Bugs,
  Bug,
  Alumnis, Alumni, Feedback, Feedbacks, Testimonial, Testimonials, Team
} from "./pages/index";
import ScrollToTop from "./hooks/useScrollToTop";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import PrivateComponent from "./components/PrivateComponent/PrivateComponent"

const queryClient = new QueryClient()

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const privateRoutes = [
    { path: "/profile", element: <Profile /> },
    { path: "/team", element: <Team /> },
    { path: "/alumnis", element: <Alumnis /> },
    { path: "/alumni/:alumniId", element: <Alumni /> },
    { path: "/feedbacks", element: <Feedbacks /> },
    { path: "/feedback/:feedbackId", element: <Feedback /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/testimonial/:testimonialId", element: <Testimonial /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/events", element: <Events /> },
    { path: "/jobs", element: <Jobs /> },
    { path: "/job/:jobId", element: <Job /> },
    { path: "/internship/:internshipId", element: <Internship /> },
    { path: "/internships", element: <Internships /> },
    { path: "/notable-alumni", element: <NotableAlumni /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/blog/:blogId", element: <Blog /> },
    { path: "/News", element: <Experiences /> },
    { path: "/News/:experienceId", element: <Experience /> },
    { path: "/verify-email", element: <VerifyEmail /> },
    { path: "/bugs", element: <Bugs /> },
    { path: "/bug/:bugId", element: <Bug /> },
    { path: "*", element: <Error /> }
  ]

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
                  <Route path="/" element={<HomePage />} />
                  <Route path="/not-admin" element={<NotAdmin />} />
                </Route>

                <Route path='/' element={<Layout3></Layout3>}>
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/verify" element={<Verify />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                </Route>

                <Route path='/' element={<Layout1></Layout1>}>
                  {
                    privateRoutes.map((route, id) => (
                      <Route key={id} path={route.path} element={<PrivateComponent />} >
                        <Route path={route.path} element={
                          route.element ? route.element : <Error />
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