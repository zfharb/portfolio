import React from 'react';


import './about.css'

const About =() => {
 
    return (
      
      <div className="about-container">
      	<h1 className="lg-heading"> About <span style={{color:'yellow'}}>Me</span> </h1>
      	<h2 className="sm-heading"> Let me tell you a few things...</h2>
      	<div className="about-grid">
      		<img src="..\/..\/images\/venice.jpg" className="bio-image"/>
      		<div className="bio">
      			<h3>BIO</h3>
      			<p>
      			Accomplished professional with over ten years of software engineering experience specializing in object oriented programming
      			with excellent understanding of code development practices and design patterns.
      			</p>
      		</div>
      		<div className="job job-1">
	      		<h3 style={{textAlign: 'center'}}>ADT</h3>
	      		<ul>
	  				<li>Work on an API response parser login page using Reactjs and Redux.</li>
	  				<br/>
	  				<li>Automate testing of RESTFul APIs using Postman.</li>
	  				<br/>
	  				<li>Apply Agile Kanban methodologies for software development.</li>
				</ul>
      			
      		</div>
      		<div className="job job-2">
      			<h3 style={{textAlign: 'center'}}>USAA</h3>
      			<ul>
	  				<li>Developed UI test automation framework for a React JS web application using ECMAScript 6, Mocha, Chai and Selenium WebDriverIO.</li>
	  				<br/>	  				
	  				<li>Performed cross browser regression and smoke testing using Sauce Labs.</li>
	  				<br/>
	  				<li>Performed Android and IOS mobile testing using perfecto mobile.</li>
	  				<br/>
	  				<li>Apply Agile Kanban methodologies for software development.</li>
				</ul>
      		</div>
      		<div className="job job-3">
      			<h3 style={{textAlign: 'center'}}>KAPLAN</h3>
      			<ul>
	  				<li>Developed UI automation framework for AngularJS web application using Java, Maven and TestNg.</li>
	  				<br/>
	  				<li>Used Page Object Design Pattern for creating automation framework.</li>
	  				<br/>
	  				<li>Developed UI automated regression and smoke test scripts using Jbehave and Selenium WebDriver.</li>
	  				<br/>
	  				<li>Configured Teamcity for continuous deployment of the front-end source code.</li>
	  				<br/>
	  				<li>Applied Agile Scrum methodologies for software development.</li>
				</ul>
      		</div>
		</div>  
      	
      </div>
      );
  
}

export default About;


			