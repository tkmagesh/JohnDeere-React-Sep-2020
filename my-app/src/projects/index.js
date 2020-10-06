import React, { Component } from 'react';

export default class Projects extends Component{
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