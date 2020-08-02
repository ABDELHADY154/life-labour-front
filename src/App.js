import React from "react";
import "./App.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Header />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
