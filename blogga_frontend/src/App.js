import React from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";
import Index from "./index/main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Index />
      </div>
      <Footer />
    </div>
  );
}

export default App;
