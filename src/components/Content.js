import React from 'react';
import "../css/dashboard.css"

export default function Content() {

    return (
        <>
            <section className="carousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/800x400/?nature,water" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/800x400/?nature,water" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/800x400/?nature,water" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>


            <div className="cardSection">

                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://source.unsplash.com/800x400/?mountain" className="card-img-top" alt="..." />
                    <div style={{ marginBottom: "10%" }} className="card-body" >
                        <h5 className="card-title" >Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" style={{ top: "84%", left: "15%" }} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://source.unsplash.com/800x400/?mountain" className="card-img-top" alt="..." />
                    <div style={{ marginBottom: "10%" }} className="card-body" >
                        <h5 className="card-title" >Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" style={{ top: "84%", left: "15%" }} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://source.unsplash.com/800x400/?mountain" className="card-img-top" alt="..." />
                    <div style={{ marginBottom: "10%" }} className="card-body" >
                        <h5 className="card-title" >Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" style={{ top: "84%", left: "15%" }} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        </>
    )
}