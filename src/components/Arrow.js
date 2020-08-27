import './styles/Arrow.css';
import React from "react";

class Arrow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };
    }

    render() {

        const arrowImg = this.props.isRight ? require("../images/arrow/rightArrow.svg") : require("../images/arrow/leftArrow.svg");
        const arrowImgHover = this.props.isRight ? require("../images/arrow/rightArrowHover.svg") : require("../images/arrow/leftArrowHover.svg");

        const altText = this.props.isRight ? "Right Arrow" : "Left Arrow";

        return (
            <div class="slidearrow"
                 onClick={ this.props.clickFunction }>
                <img
                    id={"arrowImg"}
                    onMouseEnter={() => this.setState({hover: true})}
                     onMouseLeave={() => this.setState({hover: false})}
                     src={ this.state.hover ? arrowImgHover : arrowImg }
                     alt={altText} />
            </div>
        );
    }
}

/* ################# INSTRUCTIONS ON USING ARROW COMPONENT ######################## */
/*
*
* Left Arrow
* <Arrow
*       isRight={false}
*       clickFunction={()=>someFunction}
*       />
*
* Right Arrow
* <Arrow
*       isRight={false}
*       clickFunction={()=>someFunction}
*       />
* */

export default Arrow;