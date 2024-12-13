import { useState } from "react";
import Tabbutton from "./tabbutton";
import { course_details } from "./data";


export default function Services() {
    let [changedtext, setValue] = useState();

    function tabclicked(subject) {
        console.log('The button is clicked' + subject);
        setValue(subject);
        changedtext = subject;
    }

    return (
        <div id="Our services">
            <h1>Our services</h1>
            <div class="button">
                <Tabbutton command={() => (tabclicked('App'))}activeClass={changedtext===''?"Tabactive":""}>App Appelopment</Tabbutton>
                <Tabbutton command={() => (tabclicked('Web'))}activeClass={changedtext===''?"Tabactive":""}>Web Development</Tabbutton>
                <Tabbutton command={() => (tabclicked('Cc'))}activeClass={changedtext===''?"Tabactive":""}>Cc Development</Tabbutton>
                <Tabbutton command={() => (tabclicked('Game'))}activeClass={changedtext===''?"Tabactive":""}>Game Development</Tabbutton>

            </div>
            <div class="service-display">
                {
                    changedtext?
                    (
                        <>
                        <div id="service-data">
                        <div id="service-header">{course_details[changedtext].title}</div>
                        <div id="service-duration">course duration : {course_details[changedtext].duration}</div>
                        <div id="service-description">
                            <p>{course_details[changedtext].description}</p>
                        </div>
                    </div>
    
                    <div id="services-image">
                        <img src={course_details[changedtext].image} />
                    </div> 
                    </>
                    ):
                    <p>please select the subjects to view the details</p>
                }
                
                
                
            </div>
        </div>
    )
}









