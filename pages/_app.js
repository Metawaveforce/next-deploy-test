import '../styles/styles.scss'
import  {Hboprovider} from '../componets/Hboprovider'

function MyApp({ Component, pageProps }) {
  return (
      <Hboprovider>
  <Component {...pageProps} />
  </Hboprovider>
  
  )
  
}

export default MyApp
