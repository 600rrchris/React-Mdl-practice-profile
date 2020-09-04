import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education'
import Experience from './experience'
import Skills from './skills';


class Resume extends Component {
    render() {
        return(
            <div>
             <Grid>
                 <Cell col={4}>
                     <div style={{textAlign: 'center'}}>
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb3x2r14gaxTXGrcuxP_amKxp3frcgvbMNSw&usqp=CAU"
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                     </div>
                     <h2 style={{paddingTop: '2em'}}>Christopher Perez</h2>
                     <h4 style={{color: 'grey'}}>Programmer</h4>
                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                     <p>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the relea
                     </p>
                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                     <h5>Address</h5>
                     <p>1 Hacker way Menlo Park, 94025</p>
                     <h5>Phone</h5>
                     <p>(123-456-7890</p>
                     <p>Email</p>
                     <p>someone@email.com</p>
                     <h5>Web</h5>
                     <p>mywebsite.com</p>
                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                 </Cell>
                 <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>

                    <Education 
                    startYear={2000}
                    endYear={2006}
                    schoolName="My University"
                    schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie"
                    />

                <Education 
                    startYear={2007}
                    endYear={2010}
                    schoolName="My Second University"
                    schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie"
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Experience</h2>
                    <Experience  
                    startYear={2010}
                    endYear={2015}
                    jobName="First Job"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "
                    />
                    <Experience  
                    startYear={2015}
                    endYear={2017}
                    jobName="Second Job"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "
                    />
                    <Experience  
                    startYear={2017}
                    endYear="Current"
                    jobName="Third Job"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Skills</h2>
                    <Skills 
                    skill="Javascript"
                    progress={100}
                    />
                    <Skills 
                    skill="React.Js"
                    progress={30}
                    />
                    <Skills 
                    skill="HTML"
                    progress={86}
                    />
                    <Skills 
                    skill="Css"
                    progress={90}
                    />
                 </Cell>
             </Grid>
            </div>
        )
    }
}
export default Resume;