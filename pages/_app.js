import MainContainer from '../components/layout/MainContainer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
