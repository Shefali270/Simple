import { useEffect, useState } from "react";

import Header from "./compont/header/header.jsx";
import Work from "./compont/work/work.jsx";
import Learning from "./compont/learning/learning.jsx";
import Content from "./content/content.jsx";
import Teacher from "./compont/Teacher/Teacher.jsx";
import School from "./compont/School/School.jsx";
import Resources from "./compont/Resources/Resources.jsx";

function App() {
  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <Header />

      {page === "#learning" ? (
        <Learning />
      ) : page === "#content" ? (
        <Content />
      ) : page === "#teachers" ? (
        <Teacher />
      ) : page === "#schools" ? (
        <School />
      ) : page === "#resources" ? (
        <Resources />
      ) : (
        <Work />
      )}
    </>
  );
}

export default App;