import React, { useState, useEffect } from "react";
import Layout from "../layout/layout";
import Message from "../componentes/message";
import Donation from "../modules/donation";
import Project from "../modules/project";
import Pageloader from "../componentes/pageloader";

const App = () => {
  const [state, setstate] = useState(false);
  const [isLoader, setLoader] = useState(false);

  setInterval(() => !state && setstate(true), 5000);

  useEffect(() => {
    state && setTimeout(() => setstate(false), 5000);

    setTimeout(() => {
      setLoader(true);
    }, 2000);
  }, [state]);

  return (
    <React.Fragment>
      {isLoader ? (
        <Layout>
          <Message className={`ml-auto ${state ? "bounceIn" : "bounceOut"}`} />
          <Donation />
          <Project />
        </Layout>
      ) : (
        <Pageloader />
      )}
    </React.Fragment>
  );
};

export default App;
