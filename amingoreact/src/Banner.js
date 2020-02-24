import React from 'react';

const Banner = (prop) => {

    const bannerStyle = {        
        backgroundImage: `url(${prop.photo})`,
        backgroundColor: '#1e045b',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        minHeight: '50px'       
    }
    return(
<div className="jumbotron jumbotron-fluid" style={bannerStyle}>
</div>
          )
}

export default Banner;