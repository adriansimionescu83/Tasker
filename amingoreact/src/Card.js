import React from 'react';

const MyCard = (prop)=>{
return (
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={prop.image}>
            <img className="img-fluid" src={prop.image} alt=""/>
            <div className="portfolio-box-caption">
              <div className="service-category text-white-50">{prop.category}</div>
           </div>
          </a>
        </div>
)
}
export default MyCard;
