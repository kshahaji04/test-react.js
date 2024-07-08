import MainNavigationTab from './MainNavigationTab';
import TopNavbar from './TopNavbar';
const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="container d-flex justify-content-center mt-3">
          <MainNavigationTab />
          <TopNavbar />
        </div>
        <hr className="hr_line" />
      </div>
    </>
  );
};

export default Navbar;
