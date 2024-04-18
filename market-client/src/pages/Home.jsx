import { Layout } from '../components/Layout/Layout'
import {useAuth} from "../context/Auth";

const Home = () => {
    const [auth, setAuth] = useAuth()
  return (
    <Layout title={"market | Home"}>
      {auth.user ? <>
          Log in user
      </> : <section className={"flex flex-col items-center justify-center h-full"}>
          <h1 className={"text-3xl"}>Welcome to market</h1>
          <p>Soon this will be a busy site</p>
      </section> }
    </Layout>
  )
}

export default Home
