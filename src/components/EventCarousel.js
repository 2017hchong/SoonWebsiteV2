import React, { Component } from "react";
import Slider from "react-slick";
import "./styles/EventCarousel.css";
import Arrow from "./Arrow";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={"carouselNext"}
             style={{ ...style, display: "block"}}>
            <Arrow
                isRight={true}
                clickFunction={onClick}
            />
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={"carouselPrev"}
             style={{ ...style, display: "block"}}>
            <Arrow
                isRight={false}
                clickFunction={onClick}
            />
        </div>
    );
}

export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nav1: null,
            nav2: null
        };  
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 300, 
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        return (
            <div>
                <Slider {...settings}
                        autoplay={true}
                        slidesToScroll={1}
                        className={"slider1"}
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}>
                    {this.props.eventCards}
                </Slider>

                <div className={"thumbnail-slider-wrap"}>
                <Slider {...settings}
                    centerMode={true}
                    className={"slider2"}
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={5}
                    swipeToSlide={true}
                    focusOnSelect={true}>
                    {this.props.previewCards}
                </Slider>
                </div>
                
            </div>
        );
    }
}