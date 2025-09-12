import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Routes from '../routes/Routes'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>

      <Footer />
    </>
  )
}
export default Layout
