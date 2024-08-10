import React from 'react';

function Header() {
    return (
        <header className='pt-5' id='header'>
            <div className='container py-md-5'>
                <div className='row'>
                    <div className='col-md-6 d-flex flex-column align-items-start mt-md-0'>
                        <h3 className='text-dark lh-1 mt-5'>Hi, my name is Ana.</h3>
                        <p className='text-dark lh-1 mt-3 mb-5'><em>I am a front-end developer based in Rio de Janeiro, currently working at EnsineMe.</em></p>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center justify-content-md-end'>
                    

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;