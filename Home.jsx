import React , { Component } from 'react';
import { connect } from 'react-redux';
import {add} from './action'


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick () {
        let count = this.state.count;
        count++;
        this.setState({count});
        this.props.addData(count);
    }
    
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>点击</button>
                {this.props.count}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addData: (args) => {
      dispatch(add(args))
    }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Home);