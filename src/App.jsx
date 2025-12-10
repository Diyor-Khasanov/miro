import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Trusted from "./pages/Trusted";
import Collaborate from "./pages/Collaborate";
import Work from "./pages/Work";

const App = () => {
  return (
    <div>
      <Header />
      <Home
        title="Take ideas from better to best"
        des="Miro is your team's visual platform to connect, collaborate, and create — together."
        input="Enter your work email"
        textGray="Collaborate with your team within minutes"
        starDes="Based on 5149+ reviews:"
      />
      <Trusted />
      <Collaborate />
      <Work
        title="Work together, wherever you work"
        des="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
        link="Learn more"
      />
    </div>
  );
};

export default App;
