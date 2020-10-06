import React, { Component } from 'react';
import projectActionCreators from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class Projects extends Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        const { projects } = this.props,
          projectItems = projects.map(project => (
            <li key={project.id}>
              <div>{project.name} - ({project.bugsCount})</div>
              <Link>Bugs</Link>
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
  const projects = storeState.projectsState,
    bugs = storeState.bugsState
  return {
    projects: projects.map(project => ({
      ...project,
      bugsCount: bugs.reduce(
        (result, bug) => (parseInt(bug.projectId) === project.id ? result + 1 : result),
        0
      )
    }))
  };
}

function mapDispatchToProps(dispatch){
  const projectActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
  return projectActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);