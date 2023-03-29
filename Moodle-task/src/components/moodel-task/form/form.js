    import React from "react";
    import './style.css';
    import'bootstrap/dist/css/bootstrap.css'

    export function Sign(){
        return(
            <>
                
    <head>
        <meta charset="UTF-8"/>
        <title>Resume Building</title>
    </head>
    <body>
        <h1 className="text-primary strong">Resume Building</h1>
        <table id="resume_build">
            <tr>
                <td><label>CAREER OBJECTIVE</label></td>
                <td><textarea name="car_obj"></textarea></td>
            </tr>
            <tr>
                <td><label>Upload photo</label></td>
                <td><input type="file" name="photo"/></td> 
            </tr>
            <tr>
                <td><label>Name of the Person</label></td>
                <td><input type="text" name="name"/></td>
            </tr>
            <tr>
                <td><label>Date of Birth</label></td>
                <td><input type="date" name="dob" placeholder="dob"/></td>
            </tr>
            <tr>
                <td><label>Address</label></td>
                <td><textarea name="Address" placeholder="Adderss"></textarea></td>
            </tr>
            <tr>
                <td><label>Phone Number</label></td>
                <td><input type="number" name="phone_no"/></td>
            </tr>
            <tr>
                <td><label>Email ID</label></td>
                <td><input type="email" name="email_id"/></td>
            </tr>
            <tr>
                <td><label>Gender</label></td>
                <td><input type="radio" name="gender" value="Male"/>Male
                <input type="radio" name="gender" value="Female"/>Female</td>
            </tr>
            <tr>
                <td><label>Marital status</label></td>
                <td><input type="radio" name="marital_status" value="Single"/>Single
                <input type="radio" name="marital_status" value="Married"/>Married</td>
            </tr>
            <tr>
                <td><label>Skill Set</label></td>
                <td><input type="text" name="skill1" id="skill1" /><br/>
                    <input type="text" name="skill2" id="skill2" /><br/>
                    <input type="text" name="skill3" id="skill3" /><br/>
                    <input type="text" name="skill4" id="skill4" /><br/>
                </td>
            </tr>
        </table>
            <h3 className="text-primary strong">Educational Qualification</h3>
        <table id="edu">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Courses</th>
                    <th>Institution</th>
                    <th>Board/University</th>
                    <th>Year of Passing</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label>1</label></td>
                    <td><input type="text" id="course1" name="course1" /></td>
                    <td><input type="text" id="institution1" name="institution1" /></td>
                    <td><input type="text" id="board1" name="board1" /></td>
                    <td><input type="number" id="year_of_passing1" name="year_of_passing1" /></td>
                    <td><input type="number" id="percentage1" name="percentage1" /></td>
                    <td><input type="text" id="grade1" name="grade1" /></td>
                </tr><br/>
                <tr>
                    <td><label>2</label></td><br/>
                    <td><input type="text" id="course2" name="course2" /></td>
                    <td><input type="text" id="institution2" name="institution2" /></td>
                    <td><input type="text" id="board2" name="board2" /></td>
                    <td><input type="number" id="year_of_passing2" name="year_of_passing2" /></td>
                    <td><input type="number" id="percentage2" name="percentage2" /></td>
                    {/* <td><input type="text" id="grade2" name="grade2" value=""/></td> */}
                </tr><br/>
                <tr>
                    <td><label>3</label></td>
                    <td><input type="text" id="course3" name="course3" /></td>
                    <td><input type="text" id="institution3" name="institution3" /></td>
                    <td><input type="text" id="board3" name="board3" /></td>
                    <td><input type="number" id="year_of_passing3" name="year_of_passing3" /></td>
                    <td><input type="number" id="percentage3" name="percentage3" /></td>
                    <td><input type="text" id="grade3" name="grade3" /></td>
                </tr>
            </tbody>
        </table>
        <h3 className="text-primary strong">Project Details</h3>
        <table id="pro">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Technology Used</th>
                    <th>Description</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label>1</label></td>
                    <td><input type="text" id="title1" name="title1" /></td>
                    <td><input type="text" id="duration1" name="duration1" /></td>
                    <td><input type="text" id="technology_used1" name="technology_used1" /></td>
                    <td><textarea id="description1" name="description1"></textarea></td>
                    <td><input type="url" id="link1"  value=""/></td>
                </tr>
                <tr>
                    <td><label>2</label></td>
                    <td><input type="text" id="title2" name="title2" /></td>
                    <td><input type="text" id="duration2" name="duration2" /></td>
                    <td><input type="text" id="technology_used2" name="technology_used2" /></td>
                    <td><textarea id="description2" name="description2" ></textarea></td>
                    <td><input type="url" id="link2"  value=""/></td>
                </tr>
                <tr>
                    <td><label>3</label></td>
                    <td><input type="text" id="title3" name="title3" /></td>
                    <td><input type="text" id="duration3" name="duration3" /></td>
                    <td><input type="text" id="technology_used3" name="technology_used3" /></td>
                    <td><textarea id="description3" name="description3" value=""></textarea></td>
                    <td><input type="url" id="link3"  /></td>
                </tr>
            </tbody>
        </table>
    </body>



            
            </>
        )
    }