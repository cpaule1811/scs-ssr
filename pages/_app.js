import Layout from '../components/layout'
import '../styles/globals.css'
import 'swiper/css';
import 'swiper/css/autoplay'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false;

library.add(faLinkedinIn, faGoogle)

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
