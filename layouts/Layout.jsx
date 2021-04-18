import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default Layout
