import React, { Component } from "react";
import Home from "./Home";
import { Route, Routes} from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

//doing all the routing here

// BrowserRouter gives the ability for the routes to work, routes is an intelligent component looks at the path and figures out which route to render

class Pages extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          {/* By using the /:type, no matter what is after /cuisine, it renders our cuisine component */}
          <Route path="/searched/:search" element = {<Searched />} />
          <Route path="/recipe/:name" element = {<Recipe />} />
        </Routes>
    );
  }
}

export default Pages;
