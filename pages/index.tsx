import type { NextPage } from 'next'
import Image from 'next/image';
import Layout from '../components/Layout'
import Image1 from '../public/assets/activities/CEAC-04529.jpg';
import Image2 from '../public/assets/activities/CEAC-04602.jpg';
import Image3 from '../public/assets/activities/CEAC-06640.jpg';
import Image4 from '../public/assets/activities/CEAC-06772.jpg';
const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className='text-4xl font-bold py-4'>Creative Electronics Alumni-Advisor Group</h1>
      <p className='leading-8 py-4 text-lg'>We are alumni of the Creative Electronics Club of Chung Ling Private High School. Members of this organization volunteer to teach and provide knowledge to the students of Creative Electronics Club.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <Image src={Image4} layout="responsive" />
        <Image src={Image2} layout="responsive" />
        <Image src={Image1} layout="responsive" />
        <Image src={Image3} layout="responsive" />
      </div>
    
    </Layout>
  )
}

export default Home
