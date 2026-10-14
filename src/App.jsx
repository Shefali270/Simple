
import { useEffect, useState } from "react";

import Header from "./compont/header/header.jsx";
import Work from "./compont/work/work.jsx";
import Learning from "./compont/learning/learning.jsx";
import Content from "./content/content.jsx";
import Teacher from "./compont/Teacher/Teacher.jsx";
import School from "./compont/School/School.jsx";
import Resources from "./compont/Resources/Resources.jsx";
import About from "./compont/About/About.jsx";
import Parent from "./compont/parent/parent.jsx";
import Signup from "./compont/Signup/Signup.jsx";
import GetStarted from "./compont/Getstarted/Getstarted.jsx";
import Connect from "./compont/connect/connect.jsx";
import Live from "./compont/Live/Live.jsx";
import Privacy from "./compont/privacy/privacy.jsx";

import InstituteLogin from "./compont/institute/login/login.jsx";
import InstituteRegister from "./compont/institute/Register/Register.jsx";
import InstituteForgotPassword from "./compont/institute/forget-password/forget.jsx";
import Why from "./compont/why/why.jsx";
function getCurrentPage() {
  const hash = window.location.hash.slice(1).toLowerCase();

  if (hash) {
    return hash;
  }

  const path = window.location.pathname.toLowerCase();

  if (path.includes("/student/login")) return "student/login";
  if (path.includes("/teacher/login")) return "teacher/login";
  if (path.includes("/institute/login")) return "institute/login";
  if (path.includes("/institute/register")) return "institute/register";
  if (path.includes("/institute/forgot-password")) {
    return "institute/forgot-password";
  }
  if (path.includes("/parent/login")) return "parent/login";

  return "live";
}

function App() {
  const [page, setPage] = useState(getCurrentPage);

  useEffect(() => {
    const handleLocationChange = () => {
      setPage(getCurrentPage());
    };

    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const pages = {
    "how-it-works": <Work />,
    learning: <Learning />,
    content: <Content />,
    teachers: <Teacher />,
    schools: <School />,
    resources: <Resources />,
    about: <About />,
    parent: <Parent />,
    signup: <Signup />,
    "get-started": <GetStarted />,
    connect: <Connect />,
    live: <Live />,
    privacy: <Privacy />,
    why :<Why />,

    // Login pages: existing components only
    "student/login": <Signup />,
    "teacher/login": <Teacher />,
    "parent/login": <Parent />,
    "institute/login": <InstituteLogin />,

    // Institute account pages
    "institute/register": <InstituteRegister />,
    "institute/forgot-password": <InstituteForgotPassword />,
  };

  return (
    <>
      <Header />
      {pages[page] || <Live />}
      <Connect />
    </>
  );
}

export default App;
