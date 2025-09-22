import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {
  quickLinks,
  quickLinks2,
  quickLinks3,
  socialLinks,
} from '../../assets/data/footerLinks'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div className="">
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor">
              Copyright © {year}{' '}
            </p>
            <div className="flex items-center gap-1 mt-4">
              {socialLinks.map((link, i) => (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full 
                flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {<link.icon />}
                </a>
              ))}
            </div>
          </div>

          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks.map((link, i) => (
                <li key={i} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to
            </h2>
            <ul>
              {quickLinks2.map((link, i) => (
                <li key={i} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Contact us</h2>
            <ul>
              {quickLinks3.map((link, i) => (
                <li key={i} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
