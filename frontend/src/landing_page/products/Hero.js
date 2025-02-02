import React from 'react';
function Hero() {
    return ( 
        <div className='container text-center text-muted border-bottom mb-5 p-5 mt-5 '>
            <div className='row'>
                <h1 style={{fontSize:"4rem"}}>Zerodha Products</h1>
                <h2>Sleek,modern and intuitive trading platforms </h2>
                <p className='fs-5 mb-5'>Check out our <a href='/' style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;