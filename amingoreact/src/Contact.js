import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import ContactForm from './ContactForm.js';
import './css/creative.css';


const ContactPage = ()=>{
    return(
        <div className="page">
            
            <Navigation/>
            <Banner/>
            <ContactForm/>
         
        </div>
    )
}



export default ContactPage;