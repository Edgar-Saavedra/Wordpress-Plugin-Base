import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {updateExampleProp} from '../../redux/actions/actionCreators';

class PureComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            test : 1
        };
    }

    test()
    {
        this.props.updateExampleProp({exampleProp:'wroking ..... '});
    }

    render() {
        return <h1 onClick={(e)=>{
            e.preventDefault();
            this.test();
        }} >Hello, {this.props.name} {this.props.exampleProp}</h1>;
    }
}

//export default PureComponent;

const mapDispatchToProps = dispatch => ({
    updateExampleProp : (opts={}) => dispatch(updateExampleProp(opts)),
})

const mapStateToProps = state => {
    return {
        exampleProp : state.exampleReducer.exampleProp,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PureComponent);
