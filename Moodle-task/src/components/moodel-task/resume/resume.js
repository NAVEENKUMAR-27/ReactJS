import React from "react";
import'./resume.css';
import'bootstrap/dist/css/bootstrap.css'
import Image from './img.jpg'


export function Resume(){
    return(
    <>
        
  <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>RESUME</title>
 </head>

 <body className="ml-5">
    <main>
       <center> <h1 id="page_title" className="text-danger strong  text_ud">Resume</h1> </center>
    </main>
     <table>
        <tr>
            <td>
                 <figure>
                  <img src={Image} className="img_1" />
                  <figcaption className="text-danger strong">S.Naveen kumar </figcaption>
                  </figure>
          
           </td>
        </tr>
      <dl>
         
           <dt>Personal information
              <dd>Gender           : Male </dd>
              <dd>DOB              : 27-04-2001 </dd>
              <dd>Address          : Mettupalayam</dd>
              <dd>Mobile number    : 9626154215 </dd>
              <dd>Material status  : Single  </dd>
           </dt>
         

      </dl>
      </table>
        
        <hr/>
      <section>
           <h4 className="text-primary">CAREER OBJECTIVE</h4>
   
                <p>
                     To succeed in an environment of growth and excellence and earn a job which provides me job satisfaction and self
                     development and help me achieve organizational as well as personal goals. To integrate my knowledge & utilizing my
                      technical & analytical skills to explore the future growth of the organization 
                </p>
      </section>     
      
                <hr/>
      
            <h3 className="text-primary">Skills</h3>
           <ol>
              <li>Auto cad</li>
              <li>Pro E</li>
              <li>oracle</li>
           </ol>
               <h3 className="text-primary">Eduction details</h3>
      <table className="border_tab">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Course</th>
            <th>Institution</th>
            <th>Board/University</th>
            <th>Year of Passing</th>
            <th>Percentage Grade </th>
            
         </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>SSLC</td>
               <td>GHSS SCHOOL </td>
               <td>State Board</td>
               <td>2016</td>
               <td>81%</td>
               
            </tr>
            <tr>
               <td>2</td>
               <td>DME</td>
               <td>Nanjaiah lingammal polytechnic college </td>
               <td>State Board</td>
               <td>2019</td>
               <td>79% </td>      
            </tr>
            
            <tr>
               <td>3</td>
               <td>BE Mechanical Engineering</td>
               <td>Sri Sakthi Engineering College </td>
               <td>State Board</td>
               <td>2022</td>
               <td>85%</td>
               
            </tr>
         </tbody>
     </table> 

      
         <h3 className="text-primary">Projects</h3>
      
         <details>
            <summary className="text-success strong">Project:1 Technical apprentice</summary>
            <dl>
               <dt>Title </dt>
               <dd>Technician apprentice - A person who holds a diploma in engineering / non - engineering and undergoing
                  apprenticeship training in designated trade.</dd>
      
               <dt>Duration:</dt>
               <dd>one year two months</dd>
      
      
               <dt>Technologies Used:</dt>
      
               <dd>
                  <ol>
                     <li>Oracle</li>
                     <li>Microsoft word</li>
                     <li>Microsoft excel</li>
                     <li>Data loader</li>
                  </ol>
               </dd>
      
               <dt>Description</dt>
      
               <dd>
      
                  <ul>
                     <li>Diligence - Apprentices are dedicated to learning their trade and are willing to put in the extra
                        time and
                        effort to build their knowledge and experience</li>
                     <li>Critical Thinking - When solving problems, apprentices need to think critically to resolve the issue.
                        This is
                        especially true of apprenticeships in industries such as engineering, where repairing problems is a
                        key part of
                        the role</li>
                     <li>Troubleshooting - Identifying problems and finding ways to resolve them is key to being an
                        apprentice, so
                        applicants need to be good at problem-solving and troubleshooting</li>
      
                  </ul>
      
               </dd>
            </dl>
         </details>
      
         <details>
            <summary className="text-success strong">  Project:2 Quality controller  </summary>
            <dl>
               <dt>Title</dt>
               <dd>Quality control (QC) is a process through which a business seeks to ensure that product quality is
                  maintained or
                  improved.</dd>
      
               <dt>Duration:</dt>
               <dd>Three months</dd>
      
               <dt>Technologies Used:</dt>
      
               <dd>
                  <ol>
                     <li>Oracle</li>
                     <li>Microsoft word</li>
                     <li>Microsoft excel</li>
                     <li>Data loader</li>
                  </ol>
               </dd>
               <dt>description</dt>
      
               <dd>
                  <ul>
                     <li>Quality control (QC) is a process through which a business seeks to ensure that product quality is
                        maintained
                        or improved.</li>
                     <li>Quality control involves testing units and determining if they are within the specifications for the
                        final
                        product.</li>
                     <li>The quality control used in a business is highly dependent on the product or industry, and several
                        techniques
                        exist for measuring quality.</li>
                  </ul>
               </dd>
            </dl>
         </details>
      
      
         <details>
            <summary className="text-success strong"> Project:3 Data entry and Suporvisor </summary>
            <dl>
               <dt>Title</dt>
               <dd>The Supervisor of Data Entry will conduct and oversee data entry operations, ensuring that work is
                  accurate,
                  timely, and efficient.</dd>
      
               <dt>Duration:</dt>
               <dd>Two years three months</dd>
               <dt>Technologies Used:</dt>
      
                <dd>
                   
                     <ol>
                     <li>Oracle</li>
                     <li>Microsoft word</li>
                     <li>Microsoft excel</li>
                     <li>Data loader</li>
                     </ol>
                 </dd>
      
               <dt>description</dt>
               <dd>
      
                  <ul>
                     <li>Prepares, compiles, and sorts documents for data entry.</li>
                     <li>Transfers information from paper formats into computer files using keyboards, data recorders, or
                        optical
                        scanners.</li>
                     <li>Maintains a filing system and protects confidential customer information</li>
                  </ul>
               </dd>
            </dl>
         </details>

        <section> 
           
         <h4 className="text-primary">Git hub account</h4>
         <a href="https://github.com/NAVEENKUMAR-27/DEMO.git"target="_blank"> git 
        </a>
        <br/>
         <a href="https://github.com/NAVEENKUMAR-27/HTML.git"target="_parebt"> git hub </a>
         
        </section>
        </body>

    </>
    )
}
