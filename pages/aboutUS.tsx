import { colors } from "@mui/material";
 import Layout from "../components/Layout";
 import { NextPage } from "next"
 import { alignProperty } from "@mui/material/styles/cssUtils";

 function children(){
     return(
         <div>
             <p style={{textAlign:"justify"}}>
                 The Creative Electronics Alumni-Advisor Group (CEAG) was founded with the objective of providing a sense of belonging to members of the Creative Electronics Club (CEC) after they graduated from Chung Ling Private High School.

                 Furthermore, it enables alumni to stay in touch and maintain their relationship. This network also allows alumni to share information and assist one another.

                 CEAG was created to provide a platform for alumni to give back to the Creative Electronics Club by assisting CEC in event planning, teaching CEC members additional knowledge, assisting in course design, and so on.

             </p>
             <h2 style={{color: '#006ca5'}}>Membership Qualification</h2>
             <p>
                 Joined Chung Ling Private High School Creative Electronics Club for one year or more.
             </p>

         </div>   
     )
 }

 const AboutUS: NextPage = () => {
     return(
         <Layout title="About Us">
         <div className=" flex flex-col items-center">
             <h1 className='text-4xl font-bold py-4 text-center'>About Us</h1>
             <div className="prose [&_ul]:list-disc [&_ul]:list-inside">{children()}</div>
         </div>
     </Layout>
     )
 }

 export default AboutUS