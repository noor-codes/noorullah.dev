import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="content">{children}</div>
    <Footer />
  </>
)

export default Layout
