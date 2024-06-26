
import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CreateJob from "../pages/CreateJob";
import MyJobs from "../pages/Myjobs";
import SalaryPage from "../pages/SalaryPage";
import Update from "../pages/Upadte";
import Login from "../components/login";
import JobDetails from "../pages/jobdetails";
import Signup from "../components/SignUp";
const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children : [
        {path : "/",
        element:<Home/>
        },
        {
          path:"/post-job",
          element:<CreateJob/>
        },
        {
          path:"/my-job",
          element:<MyJobs/>
        },
        {
          path:"/salary",
          element:<SalaryPage/>
        },
        {
          path:"edit-job/:id",
          element:<Update/>,
          loader:({params})=>fetch(`https://vervebridge-online-job-portal.onrender.com/all-jobs/${params.id}`)
        },
        {
         path:"/job/:id",
         element:<JobDetails/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/sign-up",
      element:<Signup/>
    }

  ]);

  export default router;