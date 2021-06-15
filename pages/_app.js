import '../styles/global.scss'
import { useEffect } from "react";
import { init } from '../utils/ga';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_G);
  }, []);
  return <Component {...pageProps} />
}

export default MyApp;