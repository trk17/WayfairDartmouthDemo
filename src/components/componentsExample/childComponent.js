import React, { Component } from 'react';

const picArray = [
    "./src/images/keggy.JPG",
    "./src/images/hahabusiness.jpg",
    "./src/images/philhamlon.jpeg",
    "./src/images/That-Is-Bread-Lord-Zucc.jpg",
    "./src/images/mrcrabside.jpg"
];

export default class ChildComponent extends Component {

    static propTypes = {
        pictureNumberArray: React.PropTypes.array
    };

    static defaultProps = {
        pictureNumberArray: []
    };


    render() {
        return (
            <div>
                <h3>Picture Time:</h3>
                {this.props.pictureNumberArray.map( tag => (
                     <img src={picArray[tag]} />
                    )

                )}
            </div>
        );
    }
}
