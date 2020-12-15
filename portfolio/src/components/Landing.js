import React, { useState } from 'react';
import Joe from '../images/joe.jpg';

function Landing() {
    return (
        <div className='landing_container'>
            <div className='lead_content'>
                <p>
                    Over the past three years I have worked diligently to gain the technical knowledge and skill set through Lambda, as well as other courses for the transition into the web development field . Through Lambda, I have become proficient in JavaScript, React and Node. In my current position with Shape Corp., I have refined my critical thinking skills to not only find solutions to problems but to understand and address why the issues existed and how to mitigate future recurrences. I work daily to improve my communication and team building skills to foster a fun and productive work environment. To kick 2021 off I will be starting my AAS in Software Development at Muskegon Community College, to bolster my certificate through Lambda School. I look forward to discussing my skill set and the open position with you soon.
                </p>
                <br />
                <p>
                    Over the past three years I have worked diligently to gain the technical knowledge and skill set through Lambda, as well as other courses for the transition into the web development field . Through Lambda, I have become proficient in JavaScript, React and Node. In my current position with Shape Corp., I have refined my critical thinking skills to not only find solutions to problems but to understand and address why the issues existed and how to mitigate future recurrences. I work daily to improve my communication and team building skills to foster a fun and productive work environment. To kick 2021 off I will be starting my AAS in Software Development at Muskegon Community College, to bolster my certificate through Lambda School. I look forward to discussing my skill set and the open position with you soon.

                </p>
            </div>
            <div className='side_bar'>
                <h2 className='title'>Joe Thompson</h2>
                <h2 className='title'>Full Stack Web Developer</h2>
                <img src={Joe} alt='profile_photo' className='profile_photo' />

                <h3 className='title'>Languages</h3>
                <hr />
                <p>JavaScript</p>
                <p>Node.js</p>
                <p>Python</p>

                <h3 className='title'>Frameworks</h3>
                <hr />
                <p>React</p>
                <p>Express</p>
                <p>GraphQL - Apollo</p>
                <p>Django</p>
                <p>Flask</p>

                <h3 className='title'>Databases</h3>
                <hr />
                <p>PostgreSQL</p>
                <p>MySQL</p>

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
    )
}

export default Landing;