import React, { Component } from 'react';
import logo from '../images/svenplan-logo3-cropped.png';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <h1 id="sidebar-h1">Svenplans</h1>
                <img id="sidebar-logo" alt="Svenplans logo" src={logo}/>
                <nav className="expanded-nav">
                    {this.props.mode==='admin'?
                    <ul>
                        <li>add&nbsp;workflow</li>
                        <li>dashboard</li>
                        <li>workflows</li>
                        <li>projects</li>
                        <li>manage&nbsp;accounts</li>
                        <li id="logout-button">logout</li>
                    </ul>
                    :
                    <ul>
                        <li>dashboard</li>
                        <li>projects
                            <ul className="dropdown">
                                    <li>project&nbsp;1</li>
                                    <li>project&nbsp;2</li>
                                    <li>project&nbsp;3</li>
                            </ul>
                        </li>
                        <li>team</li>
                        <li>account</li>
                        <li id="logout-button">logout</li>
                    </ul>
                    }
                </nav>
            </div>
        );
    }
}

export default Sidebar;
