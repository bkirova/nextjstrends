import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
