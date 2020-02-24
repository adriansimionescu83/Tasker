import React from 'react';

const Header = (prop)=>{

return(
 <header className="masthead" back>
    <div className="container h-100">
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="col-lg-10 align-self-end">
          <h1 className="text-uppercase text-white font-weight-bold">Help around your home, at your fingertips</h1>
          <hr className="divider my-4"/>
        </div>
        <div className="col-lg-8 align-self-baseline">
          <p className="text-white-75 font-weight-light mb-5">Experienced, hand-picked professionals from your neighborhood to help you!</p>
          <a className="btn btn-primary btn-xl js-scroll-trigger" href="/services">Find a helper</a>
        </div>
      </div>
    </div>
  </header>
    )
}
export default Header;