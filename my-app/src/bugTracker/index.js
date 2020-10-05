import React, { Component } from 'react';
import './index.css';

class BugTracker extends Component{
    render(){
        return(
            <div>
                 <h1>Bug Tracker</h1>
                <hr/>
                <section className="stats">
                    <span className="closed">1</span>
                    <span> / </span>
                    <span>2</span>
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
                    <input type="text" name="" id="" />
                    <input type="button" value="Add New" />
                </section>
                <section className="list">
                    <ol>
                        <li>
                            <span className="bugname">[This is bug - 1]</span>
                            <div className="datetime">[Created At]</div>
                            <input type="button" value="Remove" />
                        </li>
                        <li>
                            <span className="bugname closed">[This is bug - 2]</span>
                            <div className="datetime">[Created At]</div>
                            <input type="button" value="Remove" />
                        </li>
                    </ol>
                    <input type="button" value="Remove Closed"/>
                </section>
            </div>
        )
    }
}

export default BugTracker;