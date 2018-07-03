import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTime } from '../actions'

class Clock extends Component{
    render(){
        return(
            <div className='mt-5 text-center'>
                <h1>{this.props.time}</h1>
            </div>
        )
    }

    componentWillMount(){
        setInterval(this.props.updateTime, 1000)
    }
}

function mapStateToProps(state){
    return {
        time: state.clock.time
    }
}

export default connect(mapStateToProps, {updateTime: updateTime})(Clock);