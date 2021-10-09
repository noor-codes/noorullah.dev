import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'

export const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="content">{children}</div>
    <Footer />
  </>
)
