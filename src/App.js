import React from 'react';
import './App.css';
import Main from "./main"
import AppRouter from "./navigations/appRouter";
import SEO from "./seo";
function App() {
  return (
    <div className="App">
        <SEO title='Asher Toufeeq' description='A FrontEnd Developer.An Undergraduate student pursing B.tech(Electrical) from Jamia Millia Islamia,New Delhi(110025).' />
        <AppRouter/>
    </div>
  );
}

export default App;
