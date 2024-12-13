import { useState } from "react";
import Tabutton from "./Tabbutton";
import { course_details } from "./data";


export default function serve() {
    let [changedtext, setValue] = useState('Web');

    function tabclicked(subject) {
        console.log('The button is clicked' + subject);
        setValue(subject);
        changedtext = subject;
    }

    return (
        <div id="services2">
            {/* <h1>Our services</h1> */}
            <div id="button2">
                <Tabutton command={() => (tabclicked('App'))}activeClass={changedtext===''?"Tabactive":""}>App Appelopment</Tabutton>
                <Tabutton command={() => (tabclicked('Web'))}activeClass={changedtext===''?"Tabactive":""}>Web Development</Tabutton>
                <Tabutton command={() => (tabclicked('Cc'))}activeClass={changedtext===''?"Tabactive":""}>Cc Development</Tabutton>
                <Tabutton command={() => (tabclicked('Game'))}activeClass={changedtext===''?"Tabactive":""}>Game Development</Tabutton>

            </div>
            <div id="service-display2">
                {
                    changedtext?
                    (
                        <>
                        <div id="service-data2">
                            <div id="details2">
                            <div id="service-header2">{course_details[changedtext].title}</div>
                            <div id="service-duration2">course duration : {course_details[changedtext].duration}</div>
                            <div id="service-description2">
                                <p>{course_details[changedtext].description}</p>
                            </div>
                            </div>
    
                            <div id="services-image2">
                                <img src={course_details[changedtext].image} 
                                height="300px" width="400px"/>
                            </div> 
                        </div>
                    </>
                    ):
                    <p>please select the subjects to view the details</p>
                }
                
                
                
            </div>
        </div>
    )
}
