import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const Footer = () => {
  return (
   <motion.p
   variants={fadeIn("", "", 0.1, 1)}>
     <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h5>Connect with Me</h5>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/mkubwa.el" target='_blank'><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
              <li><a href="https://www.twitter.com/elvis_09"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h5>Contact Information</h5>
            <p><FontAwesomeIcon icon="envelope-circle" /> Phone: +255 785 545 384</p>
            <p><FontAwesomeIcon icon="envelope-circle" /> Email: elvismrema9@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="footer-text">© {new Date().getFullYear()} My Website. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
   </motion.p>
  );
};

export default SectionWrapper(Footer);
