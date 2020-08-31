import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl'


class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 }
    }
    toggleCatergories() {
         if(this.state.activeTab === 0) {
        return(
            <div><h1> this is react</h1></div>
        )
    } else if(this.state.activeTab === 1) {
        return(
            <div><h1>this is python</h1></div>
        )
    } else if(this.state.activeTab === 2) {
        return (
            <div><h1>this is mongodb</h1></div>
        )
    }
    }
  

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
        <div className="content">{ this.toggleCatergories() }</div>
                        </Cell>
                    </Grid>
                {this.toggleCatergories()}
                </section>
            </div>
        )
    }
}
export default Projects;