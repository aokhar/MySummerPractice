import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import CarouselPhotoOne from "../Usage/CarouselPhotos/CarouselPhoto1.jpg"
import CarouselPhotoTwo from "../Usage/CarouselPhotos/CarouselPhoto2.jpg"
import CarouselPhotoThree from "../Usage/CarouselPhotos/CarouselPhoto3.png"
import CarouselPhotoFour from "../Usage/CarouselPhotos/CarouselPhoto4.png"
class CarouselBox extends Component {
    render() {
        return (
                <Carousel interval="5000" >
                    <Carousel.Item>
                        <img className="d-block w-50"
                             src={CarouselPhotoOne}
                             alt="First build"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50"
                             src={CarouselPhotoTwo}
                             alt="Logo"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50"
                             src={CarouselPhotoThree}
                             alt="Old Logo"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50"
                             src={CarouselPhotoFour}
                             alt="My cafedra"
                        />
                    </Carousel.Item>
                </Carousel>
        );
    }
}

export default CarouselBox;
