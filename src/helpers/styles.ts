export const pStyle = (mobile: boolean = false) =>
  `py-2 mt-3 font-sans text-2xl text-gray-300 ${mobile ? 'text-center' : 'text-start'}`

export const fadeStyle = (isInViewport: boolean) => {
  return `${isInViewport ? 'animate-fade-up' : 'animate-fade-down opacity-0'}`
}

export const navbarTransitionStyle = `transition-all ease-in-out`
export const commonTransitionStyle = `transition-all duration-500 ease-in-out`

export const navbarDesktopStyle = (scrolled: boolean) =>
  `${scrolled ? 'bg-gray-800' : ''}  ${
    scrolled ? 'bg-opacity-95' : 'bg-opacity-0'
  } ${navbarTransitionStyle} ease-in flex flex-row items-center fixed px-4 w-full z-10 pr-20`

export const navbarDesktopLinksStyle = (scrolled: boolean) =>
  `${scrolled ? 'h-12' : 'h-20'} ${navbarTransitionStyle} flex flex-row ms-auto items-center`

export const navbarIconStyle = `text-3xl ${navbarTransitionStyle} sm:ml-2`

export const navbarMobileMenuToggler = (open: boolean, drawNavbar: boolean) =>
  `${
    open ? 'bg-opacity-0' : 'bg-opacity-20 left-0'
  } ${navbarTransitionStyle} duration-500 bg-gray-300 fixed left-1 top-1 z-20 p-2 rounded-3xl text-3xl ${
    drawNavbar ? '' : 'opacity-0'
  } `

export const navbarMobileLinksStyle = (open: boolean, drawNavbar: boolean) =>
  `${open ? 'left-0' : `-left-full`} ${navbarTransitionStyle} ${
    drawNavbar ? 'bg-gray-800' : ''
  } bg-opacity-95 duration-500 fixed z-10 flex flex-col w-full `

export const navbarTabStyle = (link: string, activeLink: string, mobile: boolean) => {
  return `${activeLink === link ? 'text-white' : 'text-gray-500 hover:text-gray-400'} ${
    link === 'github' && !mobile ? 'ml-6' : ''
  } ${navbarTransitionStyle} ${
    mobile ? 'py-3 w-full grid place-items-center' : ''
  } text-2xl p-2 cursor-pointer flex flex-row gap-1`
}
