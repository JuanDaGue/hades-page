"use client";
import { DesktopNavbar } from './NavbarDesck/DesktopNavbar';
import { MobileNavbar } from './NavbarMobile/MobileNavbar';
import { NavbarProps } from "./Navbar.types";

const Navbar: React.FC<NavbarProps> = (props) => {
  const { users } = props;
  return (
    <nav>
      <div className="hidden mx-auto md:block">
        <DesktopNavbar users={users}/>
      </div>
      <div className="md:hidden">
        <MobileNavbar users={users}/>
      </div>
    </nav>
  );
};

export default Navbar;
