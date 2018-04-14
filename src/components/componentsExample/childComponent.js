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
                <div className="row thumbnail">
                    {this.props.pictureNumberArray.map( index => (
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <img src={picArray[index % 5]} />
                            </div>

                        )

                    )}
                </div>

            </div>
        );
    }
}
