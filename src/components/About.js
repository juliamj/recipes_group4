import React from 'react'


const About = props => {
    return (
        <div className="About">

<div className='container mt-4 recipe shadow-sm border border-dark rounded'>
            <h1 className='pb-2 pt-4 text-capitalize d-flex justify-content-center text-white'>About</h1>
            {/* <hr /> */}

            <div className="row m-3 d-flex justify-content-center"> 

                <div className="col-lg-9 shadow-sm p-4 border rounded description">
                    <h2 className="text-capitalize pl-4 pt-3 pb-2">Authors</h2>
                    <ul className="pl-5">
                        <li>Madlen Engel</li>
                        <li>Julia Jannsen</li>
                        <li>Holden Madagame</li>
                    </ul>
                    <h2 className="text-capitalize pl-4 pt-3 pb-2">Built With</h2>
                    <ul className="pl-5">
                        <li>Contentful</li>
                        <li>Bootstrap</li>
                        <li>Bootswatch</li>
                        <li>React.js</li>
                        <li>Create React App</li>
                    </ul>
                    <h2 className="pl-4 text-capitalize pt-3 pb-2">Objectives</h2>
                    <p className="pl-4">Build a React.js app with Contentful as the CMS</p>
                </div>

            </div>
        </div>

            {/* 
           
            Authors
                Madlen Engel
                Julia Jannsen
                Holden Madagame
           
            Built with
                Contentful
                Bootstrap
                Bootswatch
                React.js
                Create React App
            
            Objectives
                Build a React.js app with Contentful as the CMS

WBS CODING SCHOOL
            
            */}
        </div>
    )
}

export default About
