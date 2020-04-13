import React, { Component } from 'react';

import ProjectOverview from '../ProjectOverview/ProjectOverview';

class Dashboard extends Component {

    render() {
        return (
            <header className="header">
                <h1>Welcome, D'Angelos!</h1>
                <ProjectOverview/>
            </header>
        );
    }
}

export default Dashboard;
