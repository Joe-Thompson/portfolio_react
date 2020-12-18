import React from 'react';
import { Carousel } from 'react-bootstrap';
import niyon_login from '../images/niyon_login.png';
import niyon_dashboard from '../images/niyon_dashboard.png';
import niyon_search from '../images/niyon_search.png';
import niyon_profile from '../images/niyon_profile.png';
import niyon_room from '../images/niyon_room.png';
import niyon_chat from '../images/niyon_chat.png';
import dev_comment from '../images/dev_comment.png';
import dev_create from '../images/dev_create.png';
import dev_dashboard from '../images/dev_dashboard.png';
import dev_edit from '../images/dev_edit.png';
import dev_login from '../images/dev_login.png';
import dev_replys from '../images/dev_replys.png';
import dev_search from '../images/dev_search.png';


function Projects() {

    let niyon_link = 'https://master.d3p8i1bf0wxm1z.amplifyapp.com/';
    return (
        <div id="projects" className='carousel_container'>
            <h1>Projects</h1>

            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={niyon_login}
                        alt="First slide"
                    />
                    <br />
                    <Carousel.Caption>
                        <p>Login component for new and existing users.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={niyon_dashboard}
                        alt="Third slide"
                    />
                    <br />
                    <Carousel.Caption>
                        <p>User dashboard, shows current connections and requests.  Also has a google
                        map to show where your connections are located.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={niyon_profile}
                        alt="Third slide"
                    />
                    <br />
                    <Carousel.Caption>
                        <p>Component for user to update their profile section.  The values here
                        are what other users will search by. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={niyon_search}
                        alt="First slide"
                    />
                    <br />
                    <Carousel.Caption>
                        <p>Mentors and mentees have the ability to search by job title, location,
                        or technology stack to send a request to connect to other users.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={niyon_room}
                        alt="First slide"
                    />
                    <br />
                    <Carousel.Caption>
                        <p>Users have the ability to join rooms based on a list of languages, frameworks, or
                        soft-skills such as interviewing. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={niyon_chat}
                        alt="First slide"
                    />
                    <br />
                    <Carousel.Caption>
                        <p>Chat rooms are a great way to have lively discussion.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='project_about'>
            <h2>Niyon</h2>
            <h5>
                Niyon is an online platform that aims to connect young coders with mentors.
                Starting a job in a new location or new industry is extremely difficult.
                Niyon helps young professionals increase their confidence, skills, and to meet colleagues
                in a new location and find support to help them develop the skills needed for their
                coding career. Niyon will be launching a pilot of its mentorship platform in West
                Africa and aims to reduce the unemployment rate in those countries. Niyon was a
                greenfield project and I severed as a backend developer. Using Node.js with express
                myself and Tim Mitzen created a Rest API and used PostgreSQL as our database.
            </h5>
            <br />
            <h5>
                Niyon was the capstone project for Lambda school, where I earned a certificate as
                a full stack developer.  My main responsibility as a backend developer on this project
                was to create a REST API that would perform CRUD operations for our users.  Routes that I
                created included a sign up, login flow, creating and updating profiles, and routes to handle
                our user's ability to connect with one another.  Another component on our frontend was a news feed
                from dev.to.  By using dev.to's API we were able to create news feed, searchable by technology.
                Testing for our backend repo was handled by jest and graded by code climate with a maintainability
                score of A.  One of the main features of Niyon is the ability of join chat rooms based on what
                technology you are interested in.  For our chat functionality we used Python-Flask, with
                Flask-Socket.io.
            </h5>
                <div className='project_links'>
                <a href='https://master.d3p8i1bf0wxm1z.amplifyapp.com/'>Deployed Site</a>
                <a href='https://github.com/Lambda-School-Labs/niyon-be'>Backend Repo</a>
                <a href='https://github.com/Lambda-School-Labs/niyon-be-chat'>Chat Repo</a>
                </div>

                <br />

                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={dev_login}
                            alt="First slide"
                        />
                        <br />
                        <Carousel.Caption>
                            <p>Login component for new and existing users.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={dev_dashboard}
                            alt="First slide"
                        />
                        <br />
                        <Carousel.Caption>
                            <p>User dashboard, can easily view tickets and their status.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={dev_create}
                            alt="First slide"
                        />
                        <br />
                        <Carousel.Caption>
                            <p>Form for users to create tickets.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={dev_edit}
                            alt="First slide"
                        />
                        <br />
                        <Carousel.Caption>
                            <p>User's have the ability to update their tickets with new things
                                they may have tried or a solution, they can also change the status
                                of their ticket.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={dev_search}
                            alt="Third slide"
                        />
                        <br />
                        <Carousel.Caption>
                            <p>User's can search by category for open tickets to help resolve.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={dev_comment}
                            alt="Third slide"
                        />
                        <br />
                        <Carousel.Caption>
                            <p>User's can leave comments on other user's tickets.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={dev_replys}
                            alt="First slide"
                        />
                        <br />
                    </Carousel.Item>
                </Carousel>
                <div className='project_about'>
                    <h2>Dev Desk: Your path to perfect code harmony</h2>
                    <h5>
                        The concept for Dev Desk came from Lambda School's build week projects,
                        unfortunately our build week projects were chosen randomly and I never had
                        the opportunity to be selected for the dev desk team.  However, during my internship
                        at Lambda School as a Team Lead, between holding one on one sessions with my students,
                        reviewing their project code and hosting after hours I spend my time building my own
                        version of Dev Desk from back to front.
                    </h5>
                    <br />
                    <h5>
                        The backend is a node.js server with express framework.  I used knex.js to interact
                        with my PostgreSQL database, and for authorization I decided on JSON web tokens.  The
                        frontend is a react app with redux as my state management, and Less as my preprocessor.
                        Dev Desk at it's core is a stack overflow clone with user's ability to create tickets
                        for other users to comment on and help resolve.
                    </h5>
                    <div className='project_links'>
                        <a href='https://devs-desk.netlify.app/'>Deployed Site</a>
                        <a href='https://github.com/DevDeskQ/Front-End'>Frontend Repo</a>
                        <a href='https://github.com/DevDeskQ/rebuilt-node'>Backend Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;