import React, { useState } from 'react';
import About from '../About'
import Project from '../Project'
import Resume from '../Resume'
import Header from '../Header';
// import Contact from '../Contact'

 const Page = (props) => {
  const [currentPage, setCurrentPage] = useState ('About');

     if (props.currentPage.name === "aboutMe"){
       return <About/>
     }
     if (props.currentPage.name === "Portfolio"){
      return <Project/>
    }
    if (props.currentPage.name === "Resume"){
      return <Resume/>
    }
    // if (props.currentPage.name === "Contact"){
    //   return <Contact/>
    // }
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {Page()}
    </div>
  )
};

export default Page
