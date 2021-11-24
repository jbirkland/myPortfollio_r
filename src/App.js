import React, { useState } from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Navigation from "./components/Navigation";
import Page from "./components/Page"
import './App.css';

function App(props) {
  let [page, setPage] = useState([
    {name : "aboutMe"},
    {name : "Portfolio"},
    {name : "Contact"},
    {name : "Resume"},
  ]);
  let [currentPage, setCurrentPage] = useState(page[0])

  let renderPage =  () => {
    if (currentPage === 'aboutMe') {
      return <About/>
    }
    if (currentPage === 'Portfolio') {
      return <Project/>
    }
    if (currentPage === 'Resume') {
      return <Resume/>
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header currentPage = {currentPage} handlePageChange = {setCurrentPage}/>
      <div>
        <Page currentPage = {currentPage} />
      </div>
      <Footer />
      {renderPage()}
    </div>
  );
}

export default App;
