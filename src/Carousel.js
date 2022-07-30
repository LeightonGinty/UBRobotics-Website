function Carousel() {
    return ( 
        <div id="carouselId" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img src="https://i.picsum.photos/id/100/500/300.jpg?hmac=sffQ67n6C9ruOl7iVUBl6v07rrMukqkeUMAQky_wVrk" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img src="https://i.picsum.photos/id/100/500/300.jpg?hmac=sffQ67n6C9ruOl7iVUBl6v07rrMukqkeUMAQky_wVrk" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img src="https://i.picsum.photos/id/100/500/300.jpg?hmac=sffQ67n6C9ruOl7iVUBl6v07rrMukqkeUMAQky_wVrk" alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
     );
}

export default Carousel;