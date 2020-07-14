import React from 'react'


const About = props => {
    return (
        <div className="About">

<div className='container mt-4 p-5 recipe shadow-sm border border-dark rounded-circle'>
            <h2 className='pb-2 pt-2 text-capitalize d-flex justify-content-center'>About</h2>
            {/* <hr /> */}

            <div className="row m-3 d-flex justify-content-center"> 

                <div className="col-lg-9 shadow-sm p-4 border rounded description">
                    <h5 className="text-capitalize pl-4 pt-3 pb-2">Authors</h5>
                    <ul className="pl-5">
                        <li>Madlen Engel</li>
                        <li>Julia Jannsen</li>
                        <li>Holden Madagame</li>
                    </ul>
                    <h5 className="text-capitalize pl-4 pt-3 pb-2">Built With</h5>
                    <ul className="pl-5">
                        <li>Contentful</li>
                        <li>Bootstrap</li>
                        <li>Bootswatch</li>
                        <li>React.js</li>
                        <li>Create React App</li>
                    </ul>
                    <h5 className="pl-4 text-capitalize pt-3 pb-2">Objectives</h5>
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
