import React, { Component } from 'react';
import './index.css';
import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

import bugActionCreators from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BugTracker extends Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        const { bugs, addNew, toggle, remove, removeClosed } = this.props;
        return (
          <div>
            <h3>Bug Tracker</h3>
            <hr />
            <BugStats bugs={bugs} />
            <BugSort />
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
          </div>
        );
    }
}

function mapStateToProps(storeState){
  const bugs = storeState.bugsState;
  return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
  const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
  return bugActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BugTracker);
