import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {updateExampleProp} from '../redux/actions/actionCreators';

//import PureComponent from './PureComponent/PureComponent';

export const Content = (props) =>
{
    return (
        <div>

            <h2>Hi : {props.exampleProp}</h2>
                <form
                    onSubmit={
                            (e)=>{
                                e.preventDefault();
                            }
                        }
                >
                <input type="text" placeholder="Search.." onChange={
                        (e)=>{
                            props.updateExampleProp({
                                exampleProp: e.target.value
                            });
                        }
                    }/>
            </form>



        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    updateExampleProp : (opts={}) => dispatch(updateExampleProp(opts)),
});

const mapStateToProps = state => {
    return {
        exampleProp : state.exampleReducer.exampleProp,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);