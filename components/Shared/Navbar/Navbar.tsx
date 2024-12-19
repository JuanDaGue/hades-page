"use client"
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';

const Navbar: React.FC = () => {

  return (
    <nav>
      <div className="hidden mx-auto md:block">
        <DesktopNavbar/>
      </div>
      <div className="md:hidden">
        <MobileNavbar/>
      </div>
    </nav>
  );
};

export default Navbar;
