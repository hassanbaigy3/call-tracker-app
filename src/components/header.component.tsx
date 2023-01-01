import { useNavigate } from "react-router-dom";
import type { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../redux/user/user.slice";

import TuringLogo from "../assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state: RootState) => state.user.accessToken);

  const handleLogout = () => {
    dispatch(setCurrentUser({ accessToken: null, refreshToken: null, user: null }));
    navigate("/login");
  };

  return (
    <>
      <div className='sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl h-full'>
        <div className='flex items-center justify-between mx-auto max-w-7xl'>
          <img src={TuringLogo} alt='logo' className='w-1/6 h-auto' />
          {isLoggedIn !== null ? (
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
