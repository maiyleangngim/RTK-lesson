
import Image from 'next/image'
import Link from 'next/link'

export default function NavigationComponent() {
  return (
    <>
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
  />
  <div className="w-full dark:bg-gray-900">
    {/* Nav */}
    <nav className="fixed top-0 left-0 w-full h-20 grid place-items-center z-50 transition-all bg-[#003347]">
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        {/* LOGO */}
        <Link href="/" className="w-12">
          <Image
            src="https://i.pinimg.com/control1/736x/b3/00/3d/b3003d69bd11f6924b2b729ba46c399a.jpg"
            width={70}
            height={70}
            loading='eager'
            alt="nav logo"
            className="object-cover object-center"
          />
        </Link>
        {/* NAV LINKS */}
        <ul className="hidden lg:flex gap-16 text-white">
          <li>
            <a href="./" className="hover:text-[#ff7b02] transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="./allproducts" className="hover:text-[#ff7b02] transition-colors">
              Products
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#ff7b02] transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#ff7b02] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#ff7b02] transition-colors">
              Contact
            </a>
          </li>
        </ul>
        {/* SOCIAL LINKS */}
        <ul className="hidden lg:flex gap-4">
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-8 h-8 grid place-items-center text-[#003347] bg-gradient-to-b from-[#e5a55d] to-[#ff7b02] rounded-lg hover:shadow-lg"
            >
              <i className="uil uil-instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              className="w-8 h-8 grid place-items-center text-[#003347] bg-gradient-to-b from-[#e5a55d] to-[#ff7b02] rounded-lg hover:shadow-lg"
            >
              <i className="uil uil-twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              className="w-8 h-8 grid place-items-center text-[#003347] bg-gradient-to-b from-[#e5a55d] to-[#ff7b02] rounded-lg hover:shadow-lg"
            >
              <i className="uil uil-youtube" />
            </a>
          </li>
        </ul>
        {/* TOGGLE BUTTONS */}
        <button
          className="block lg:hidden text-3xl text-white"
          id="nav__toggle-open"
        >
          <i className="uil uil-bars" />
        </button>
        <button
          className="hidden lg:hidden text-3xl text-white"
          id="nav__toggle-close"
        >
          <i className="uil uil-multiply" />
        </button>
      </div>
    </nav>
    {/* MOBILE NAV LINKS */}
    <ul
      className="absolute top-[4rem] right-0  text-white flex-col hidden lg:hidden w-48 shadow-lg"
      id="mobile-nav"
    >
      <li className="h-20 shadow-[-3rem_3rem_3rem_rgba(0,0,0,0.7)] bg-[#003347] hover:bg-[#003347]/80 animate-navAnimation [animation-delay:0ms]">
        <a href="" className="flex items-center h-full px-6">
          Home
        </a>
      </li>
      <li className="h-20 shadow-[-3rem_3rem_3rem_rgba(0,0,0,0.7)] bg-[#003347] hover:bg-[#003347]/80 animate-navAnimation [animation-delay:200ms]">
        <a href="" className="flex items-center h-full px-6">
          About
        </a>
      </li>
      <li className="h-20 shadow-[-3rem_3rem_3rem_rgba(0,0,0,0.7)] bg-[#003347] hover:bg-[#003347]/80 animate-navAnimation [animation-delay:400ms]">
        <a href="" className="flex items-center h-full px-6">
          Services
        </a>
      </li>
      <li className="h-20 shadow-[-3rem_3rem_3rem_rgba(0,0,0,0.7)] bg-[#003347] hover:bg-[#003347]/80 animate-navAnimation [animation-delay:600ms]">
        <a href="" className="flex items-center h-full px-6">
          Resources
        </a>
      </li>
      <li className="h-20 shadow-[-3rem_3rem_3rem_rgba(0,0,0,0.7)] bg-[#003347] hover:bg-[#003347]/80 animate-navAnimation [animation-delay:600ms]">
        <a href="" className="flex items-center h-full px-6">
          Contact
        </a>
      </li>
    </ul>
    {/* End Of Nav */}
  </div>
</>

  )
}
