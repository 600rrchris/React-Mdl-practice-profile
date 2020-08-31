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
            <div className="projects-grid">
                       {/* project 1 */}
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
                            {/* Project 2 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center/cover'}}>
                           React Project #2
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
            
                            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center/cover'}}>
                        React Project #3
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

         </div>
        )
    } else if(this.state.activeTab === 1) {
        return(
            <div className="projects-grid">
            {/* project 1 */}
  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/840/1*Acz2aMKGEqOmywuX8lFO8A.jpeg) center/cover'}}>
                Python Project #1
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
                 {/* Project 2 */}
  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/840/1*Acz2aMKGEqOmywuX8lFO8A.jpeg) center/cover'}}>
                Python Project #2
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
 
                 {/* Project 3 */}
 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/840/1*Acz2aMKGEqOmywuX8lFO8A.jpeg) center/cover'}}>
             Python Project #3
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

</div>
        )
    } else if(this.state.activeTab === 2) {
        return (
<div className="projects-grid">
                       {/* project 1 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height: '176px', background: 'url(https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/1200x900/66e2d67a951cc4a3a60be76f56e0d105/mongo-db-logo.png) center/cover'}}>
                           MongoDB Project #1
                </CardTitle>
                   <CardText >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
                            {/* Project 2 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height: '176px', background: 'url(https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/1200x900/66e2d67a951cc4a3a60be76f56e0d105/mongo-db-logo.png) center/cover'}}>
                           MongoDB Project #2
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
            
                            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/1200x900/66e2d67a951cc4a3a60be76f56e0d105/mongo-db-logo.png) center/cover'}}>
                        MongoDB Project #3
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

         </div>
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
                
                    <Grid>
                        <Cell col={12}>
        <div className="content">{ this.toggleCatergories() }</div>
                        </Cell>
                    </Grid>
                
                
            </div>
        )
    }
}
export default Projects;