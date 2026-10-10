
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

function App() {
  const getCurrentPage = () =>
    window.location.hash.slice(1).toLowerCase();

  const [page, setPage] = useState(getCurrentPage);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getCurrentPage());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const pages = {
    learning: <Learning />,
    content: <Content />,
    teachers: <Teacher />,
    schools: <School />,
    resources: <Resources />,
    about: <About />,
    parent: <Parent />,
    signup: <Signup />,
    "get-started": <GetStarted />,
  };

  return (
    <>
      <Header />
      {pages[page] || <Work />}
    </>
  );
}

export default App;
