import React, { Component } from 'react';
import './index.css';

class BugTracker extends Component{
    state = {
      newBugName : ''
    };

    componentDidMount(){
        this.props.load();
    }
    render(){
        const { bugs, addNew, toggle, remove, removeClosed } = this.props;
        const bugItems = bugs.map(bug => (
          <li key={bug.id}>
            <span 
              className={"bugname " + (bug.isClosed ? "closed" : "")}
              onClick={ () => toggle(bug) }
            >
                {bug.name}
            </span>
            <div className="datetime">{bug.createdAt.toString()}</div>
            <input type="button" value="Remove" onClick={ () => remove(bug) } />
          </li>
        ));
        return (
          <div>
            <h1>Bug Tracker</h1>
            <hr />
            <section className="stats">
              <span className="closed">1</span>
              <span> / </span>
              <span>{bugs.length}</span>
            </section>
            <section className="sort">
              <label htmlFor="">Order By :</label>
              <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <label htmlFor="">Descending ? :</label>
              <input type="checkbox" name="" id="" />
            </section>
            <section className="edit">
              <label htmlFor="">Bug Name :</label>
              <input type="text" onChange={ evt => this.setState({newBugName : evt.target.value})} />
              <input type="button" value="Add New" onClick={() => addNew(this.state.newBugName)} />
            </section>
            <section className="list">
              <ol>
                {bugItems}
              </ol>
              <input type="button" value="Remove Closed" onClick={removeClosed} />
            </section>
          </div>
        );
    }
}

export default BugTracker;