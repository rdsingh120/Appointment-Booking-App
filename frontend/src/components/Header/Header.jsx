import { navLinks } from '../../assets/data/navLinks'
import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="">
            <img src={logo} alt="logo" />
          </div>

          {/* Menu */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                          : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                      }
                    >
                      {link.text}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Menu - Right */}
          <div className="flex items-center gap-4">
            <div className="">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={userImg}
                    alt="user-img"
                    className="w-full rounded-full"
                  />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button
                className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] 
                flex items-center justify-center rounded-[50px]"
              >
                Login
              </button>
            </Link>

            <span className="md:hidden">
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
