import React from 'react';
function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='largestBroker img'/>

                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ millian Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investment in:</p>
                    <div className='row'>
                            <div className='col-6'>
                            <ul>
                       
                       <li>Futures and options</li>
                       <li>commodity derivatives</li>
                        <li>Currency derivatives</li>
                        </ul>

                            </div>
                            <div className='col-6'>
                            <ul>
                         <li>Stocks & IPOs</li>
                         <li>Direct mutual funds</li>
                         <li>Bonds and </li>
                    </ul>
                            </div>
                        </div>
                 
                       
                       <img src='media\images\pressLogos.png' style={{width:"90%"}} alt='img'/>
                    </div>
            </div>
            
        </div>
     );
}

export default Awards;