import React, { Component } from 'react';

export default class BugEdit extends Component {
    state = {
        newBugName: "",
        selectedProjectId : 0
    };

    render() {
        const { addNew, projects } = this.props; 
        const { newBugName, selectedProjectId } = this.state;
        const projectItems = [
            (<option key={0} value=''>---Select---</option>),
            ...projects.map(project => (
                <option key={project.id} value={project.id}>{project.name}</option>
            ))
        ];
        return (
          <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input
              type="text"
              onChange={evt => this.setState({ newBugName: evt.target.value })}
            />
            <select onChange={evt => this.setState({selectedProjectId : evt.target.value})}>
                {projectItems}
            </select>
            <input
              type="button"
              value="Add New"
              onClick={() => addNew(newBugName, selectedProjectId)}
            />
          </section>
        );
    }
}