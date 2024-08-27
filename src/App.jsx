import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Banner from "./Components/Banner";

function App() {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center mt-4">
       <Banner />
      </div>
    </>
  );
}

export default App;
