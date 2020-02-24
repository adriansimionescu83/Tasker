import React from 'react';
import logo from './logo.svg';
//import './App.css';
import './css/creative.css';
import Navigation from './Navigation.js';
import MyCardSection from './CardSection.js';
import MyCard from './Card.js';
import Header from './Header.js';
import Banner from './Banner.js';
import Footer from './Footer.js';
import Details from './Details.js';

function LandingPage() {
  return (
    <div className="App">     
         <Navigation/>
         <Header/>     
          <MyCardSection>
          <MyCard category="Carpenters" image="https://images.unsplash.com/photo-1561297331-a9c00b9c2c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop"/>
          <MyCard category="Cleaning" image="https://images.unsplash.com/photo-1569698134101-f15cde5cd66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
          <MyCard category="Event Organizers" image="https://images.unsplash.com/photo-1510743006598-4845616e044f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop"/>
          <MyCard category="Handy Men" image="https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"/>
          <MyCard category="Professional Photographers" image="https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop"/>
          <MyCard category="Professional Tailors" image="https://images.unsplash.com/photo-1524224971825-8c690dec4b7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop"/>
          </MyCardSection>
          <Details/>
          <Footer/>
    </div>
  );
}

export default LandingPage;
