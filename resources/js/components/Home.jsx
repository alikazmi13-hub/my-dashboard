import React from 'react';

import ReactDOM from 'react-dom';

function Home() {
    return (
        <div className="container">
            <div className="row justify-content-center">Row
                {/* navbar */}
                <div className="navbar"> 
                        <h1>navbar</h1>
                    </div>
{/* row end */}
                </div>
                {/* Column */}
                <div className="col-md-8">
                        <div className="card">card
                        <div className="card-header">Header</div>
                        <div className="card-body">Body</div>
                </div>
            </div>
        </div>
    );
}

export default Home;

if (document.getElementById('Home')) {
    ReactDOM.render(<Home />, document.getElementById('Home'));
}
