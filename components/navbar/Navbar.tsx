import Logo from "./Logo"
import Container from "@/components/global/Container"
import NavSearch from "./NavSearch"
import CartButton from "./CartButton"
import DarkMode from "./DarkMode"
import LinksDropdown from "./LinksDropdown"

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-4">
        <Logo />
        <NavSearch />
        <div className="flex items-center gap-4 ">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar