import { NextPage } from "next"
import Link from "next/link"
import Layout from "../components/Layout"

const Activities: NextPage = () => {
  return (
    <Layout title="Activities">
      <h1 className="text-4xl font-bold py-4 text-center">Activities</h1>
      <div className="text-4xl text-blue-600 mb-2">Documentation</div>
      <Link href="https://docs.ceag.cc/" legacyBehavior>
        <div className="underline hover:font-bold">Link</div>
      </Link>
    </Layout>
  )
}

export default Activities
