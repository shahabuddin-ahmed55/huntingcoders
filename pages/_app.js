// import '../styles/apna.css'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  // console.log("Shahabuddin");
  return (
  <>
  <Navbar />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
