import React from 'react';
import './App.css';
import Main from "./main"
import AppRouter from "./navigations/appRouter";
import SEO from "./seo";
function App() {
  return (
    <div className="App">
        <AppRouter/>
    </div>
  );
}

export default App;
