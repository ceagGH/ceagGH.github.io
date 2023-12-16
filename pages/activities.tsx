import { NextPage } from "next"
import Link from "next/link"
import Layout from "../components/Layout"
import Image from 'next/image'

 import activityImg1 from '../public/assets/activities/IMG_6866.jpg'
 import activityImg2 from '../public/assets/activities/IMG_6867.jpg'

 function child(){
   return(
     <div >
       {/* <h2 style={{color: '#006ca5'}}>Documentation</h2> */}
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
         <Image src={activityImg1} layout="responsive" />
         <Image src={activityImg2} layout="responsive" />
       </div>
       <Link href="https://docs.ceag.cc/" legacyBehavior>
         <div className="underline hover:font-bold" > Click Me</div>
       </Link>
     </div>
   )
 }

const Activities: NextPage = () => {
  return (
    <Layout title="Activities">
      <h1 className="text-4xl font-bold py-4 text-center">Activities</h1>
      <div className="prose [&_ul]:list-disc [&_ul]:list-inside">{child()}</div>
    </Layout>
  )
}

export default Activities
