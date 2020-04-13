import React, { Component } from 'react';

class Dashboard extends Component {

    render() {
        return (
            <>
            <div className="overview project-overview">
                <h2>Project Overview</h2>
                <p className="subtitle">since last week:</p>
                <p>5 new projects were created</p>
                <p>3 projects completed a phase</p>
                <p>2 projects had no action</p>
                <p>1 project was completed</p>
                <div className="hover-overview">
                <p className="hover-text">view projects</p>
                </div>
            </div>
            <div className="overview project-overview">
                <h2>Workflow Overview</h2>
                <p className="subtitle">since last week:</p>
                <p>You created 1 new workflow</p>
                <p>You edited 2 workflows</p>
                <div className="hover-overview">
                    <p className="hover-text">view workflows</p>
                </div>
            </div>
            <div className="overview project-overview">
                <h2>Subscriber Overview</h2>
                <p className="subtitle">since last week:</p>
                <p>4 new subscribers signed up for a free trial</p>
                <p>8 subscribers upgraded to Pro</p>
                <p>1 subscriber had no actions</p>
                <div className="hover-overview">
                    <p className="hover-text">view subscribers</p>
                </div>
            </div>
            </>
        );
    }
}

export default Dashboard;
