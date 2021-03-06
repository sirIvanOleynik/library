import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Book extends Component {

    constructor(props) {

        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="media">
                <Link to={{ pathname: '/book/'+this.props.book.id }}>
                    <div className="media-left media-top">
                        <img width={"50px"} height={"50px"} className="media-object" src={'/images/'+ this.props.book.picture} />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.book.title}</h4>

                        {this.props.book.description}
                    </div>
                </Link>
            </div>

        );
    }
}

export default Book;
