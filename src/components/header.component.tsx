import TuringLogo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <div className='sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl'>
        <div className='flex items-center justify-between mx-auto max-w-7xl'>
          <img src={TuringLogo} alt='logo' className='w-1/6 h-auto' />
        </div>
      </div>
    </>
  );
};

export default Header;
