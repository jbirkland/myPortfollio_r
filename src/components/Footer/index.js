import React from 'react'
import { FaGithub, FaLinkedin, FaTwitterSquare, FaEnvelope } from "react-icons/fa";
import '../../../../my_portfolio.r/src/App';

// Style footer icons and keep the color neutral
const icons = {
  color:"blue",
  fontSize: "25px",
}

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light footerimage">
    <div className="d-flex justify-content-center">
        <a className="mx-3" href="https://github.com/jbirkland" target="_blank" rel="noreferrer">
        <FaGithub style={icons}/>
        </a>

        <a className="mx-3" href="https://linkedin.com/in/justin-birkland-7408451a1" target="_blank" rel="noreferrer">
        <FaLinkedin style={icons}/>
        </a>

        <a className="mx-3" href="http://twitter.com/jbirkland_1221" target="_blank" rel="noreferrer">
        <FaTwitterSquare style={icons}/>
        </a>

        <a className="mx-3" href="mailto:jbirk05@gmail.com?" target="_blank" rel="noreferrer">
        <FaEnvelope style={icons}/>
        </a>

    </div>
</footer>
  )
}

export default Footer

