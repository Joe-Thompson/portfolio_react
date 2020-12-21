import React, { useState } from 'react';
import Joe from '../images/joe.jpg';
import ContactForm from './ContactForm';
import Projects from './Projects';

function Landing() {

    const [tabletMode, setTabletMode] = useState(false);

    const tablet_clicker = (e) => {
        e.preventDefault();
        setTabletMode(!tabletMode);
    }

    console.log(tabletMode)
    return (
        <div>
        <div className='landing_container'>
            <div id='about' className='lead_content'>
                <h3>About</h3>
                <p>
                    Over the past three years I have worked diligently to gain the technical knowledge and skill set through Lambda, as well as other courses for the transition into the web development field . Through Lambda, I have become proficient in JavaScript, React and Node. In my current position with Shape Corp., I have refined my critical thinking skills to not only find solutions to problems but to understand and address why the issues existed and how to mitigate future recurrences. I work daily to improve my communication and team building skills to foster a fun and productive work environment. To kick 2021 off I will be starting my AAS in Software Development at Muskegon Community College, to bolster my certificate through Lambda School.
                </p>
                <br />
                <p>
                    When I am away from my machine my hobbies include softball, kayaking, and fishing.
                    My current job as a team lead in a fast paced automotive welding department has helped me
                    to develop skills to handle employee relations, stress and deadlines.  My first introduction
                    to software development came 15 years ago when a group of friends and I embarked on creating
                    our very own video game.  With no programming experience in the group we decided to take the
                    plunge in the deep end with C++.  Needless to say the project fell flat, but it also created
                    a life long love of programming for me.

                </p>
                <br />
            </div>
            <div className='side_bar'>
                <div className='side_bar_title'>
                    <h2 className='title'>Joe Thompson</h2>
                    <h2 className='title'>Full Stack Web Developer</h2>
                </div>
                <button onClick={tablet_clicker} className='tablet_btn'>Show More</button>
                <img src={Joe} alt='profile_photo' className='profile_photo' />
                <div className={!tabletMode ? 'tablet_container': 'hide_sidebar'}>
                <div className='tablet_mode'>
                <h3 className='title'>Languages</h3>
                <hr />
                <p>JavaScript</p>
                <p>Node.js</p>
                <p>Python</p>
                </div>
                <div className='tablet_mode'>
                <h3 className='title'>Frameworks</h3>
                <hr />
                <p>React</p>
                <p>Express</p>
                <p>GraphQL - Apollo</p>
                <p>Django</p>
                <p>Flask</p>
                </div>
                <div className='tablet_mode'>
                <h3 className='title'>Databases</h3>
                <hr />
                <p>PostgreSQL</p>
                <p>MySQL</p>
                </div>
                <div className='tablet_mode'>
                <h3 className='title'>Tools</h3>
                <hr />
                <p>GIT / GitHub</p>
                <p>Slack</p>
                <p>Postman</p>
                <p>Insomnia</p>
                <p>PyCharm</p>
                <p>WebStorm</p>
                <p>Visual Studio Code</p>
                <p>Adobe XD</p>
                <p>PgAdmin</p>
                <p>MY SQL Workbench</p>
                </div>
                </div>
                {/*<button style={{display: !tabletMode ? "tablet_btn" : "none"}} onClick={tablet_clicker} className='tablet_btn'>Show Less</button>*/}
                {/* TODO work on "show less" btn */}
            </div>
            </div>
            <Projects />
            <ContactForm />
        </div>
    )
}

export default Landing;