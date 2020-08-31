import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl'


class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 }
    }
    toggleCatergories() {
         if(this.state.activeTab === 0) {
        return(
                       /* project 1 */
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center/cover'}}>
                           React Project #1
                </CardTitle>
                   <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                   </CardText>
                   <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                   </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share" />
                </CardMenu>
            </Card>
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
                
                    <Grid className="projects-grid">
                        <Cell col={12}>
        <div className="content">{ this.toggleCatergories() }</div>
                        </Cell>
                    </Grid>
                
                
            </div>
        )
    }
}
export default Projects;