import TuringLogo from "../assets/images/logo.png";
import Divider from "@material-ui/core/Divider";

const Header = () => {
  return (
    <>
      <div className='flex justify-between m-4'>
        <img src={TuringLogo} alt='logo' className='w-1/6 h-auto' />
      </div>
      <Divider />
    </>
  );
};

export default Header;
