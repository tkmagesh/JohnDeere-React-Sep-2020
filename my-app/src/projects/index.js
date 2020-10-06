import React, { Component } from 'react';
import projectActionCreators from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Projects extends Component{
    componentDidMount(){
        console.log('triggering load action');
        this.props.load();
    }
    render(){
        const { projects } = this.props,
          projectItems = projects.map(project => (
            <li key={project.id}>
              <span>{project.name}</span>
            </li>
          ));
        return(
            <div>
                <h3>Projects</h3>
                <hr/>
                <ol>
                    {projectItems}
                </ol>
            </div>
        )
    }
}

function mapStateToProps(storeState){
  const projects = storeState.projectsState;
  return {projects : projects}
}

function mapDispatchToProps(dispatch){
  const projectActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
  return projectActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);