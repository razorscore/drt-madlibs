import React, { Component } from 'react';

class Content extends Component {
    render() {
        console.log(this.props.data);
        const data = this.props.data;
        return (
            <p>
            Ladies and gentlemen, this is <b>{data.color}</b> Barber, your sportscaster.
            </p>
        )
    }
}

export default Content;