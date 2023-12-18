import { Layout } from '../components/Layout/Layout'
import {useAuth} from "../context/Auth";

const Home = () => {
    const [auth, setAuth] = useAuth()
  return (
    <Layout title={"market | Home"}>
      <div>Home</div>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  )
}

export default Home
