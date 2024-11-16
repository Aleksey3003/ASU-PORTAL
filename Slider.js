import React from 'react';

const Slider = () => (
    <div id="slider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="/slider1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="/slider2.jpg" className="d-block w-100" alt="..." />
            </div>
        </div>
    </div>
);

export default Slider;
