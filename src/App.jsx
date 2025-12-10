import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Trusted from "./pages/Trusted";

const App = () => {
  return (
    <div>
      <Header />
      <Home
        title="Take ideas from better to best"
        des="Miro is your team's visual platform to connect, collaborate, and create — together."
        input="Enter your work email"
        textGray="Collaborate with your team within minutes"
        starDes='Based on 5149+ reviews:'
      />
      <Trusted />
    </div>
  );
};

export default App;
