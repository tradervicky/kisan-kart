
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import RoutesPage from "./layout/RoutesPage";



const App = () => {
  return (
    <Router>
    <Layout>
      <RoutesPage />
    </Layout>
    </Router>
  );
};

export default App;
