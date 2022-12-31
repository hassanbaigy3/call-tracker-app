import { useNavigate } from "react-router-dom";
import TuringLogo from "../assets/images/logo.png";
import { CONSTANTS } from "../utils/CONSTANTS";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem(CONSTANTS.AUTH_TOKEN);

  const handleLogout = () => {
    localStorage.setItem(CONSTANTS.AUTH_TOKEN, "");
    navigate("/login");
  };

  return (
    <>
      <div className='sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl'>
        <div className='flex items-center justify-between mx-auto max-w-7xl'>
          <img src={TuringLogo} alt='logo' className='w-1/6 h-auto' />
          {isLoggedIn ? (
            <button
              className='flex justify-center items-center font-roman text-primary bg-secondary rounded-md text-md w-1/6 h-8'
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
