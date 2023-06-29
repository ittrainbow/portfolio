export const pStyle = 'py-2 mt-3 font-sans text-2xl text-gray-300 text-left'

export const fadeClass = (isInViewport: boolean) =>
  `${isInViewport ? 'animate-fade-up' : 'opacity-0'} py-12`

export const navbarTransitionStyle = 'transition-all ease-in-out'

export const navbarDesktopStyle = (scrolled: boolean) =>
  `${scrolled ? 'bg-gray-800' : ''}  ${
    scrolled ? 'bg-opacity-95' : 'bg-opacity-0'
  } ${navbarTransitionStyle} ease-in flex flex-row items-center fixed px-4 w-full z-10 pr-20`

export const navbarDesktopLinksStyle = (scrolled: boolean) =>
  `${scrolled ? 'h-12' : 'h-20'} ${navbarTransitionStyle} flex flex-row ms-auto items-center`

export const navbarIconStyle = (mobile: boolean, scrolled: boolean) => {
  return `${!mobile && scrolled ? 'text-3xl' : 'text-3xl'} ${navbarTransitionStyle} sm:ml-2`
}

export const navbarMobileMenuToggler = (open: boolean, drawNavbar: boolean) =>
  `${
    open ? 'bg-opacity-0' : 'bg-opacity-10 left-0'
  } ${navbarTransitionStyle} bg-gray-300 fixed left-1 top-1 z-20 p-2 rounded-3xl text-3xl ${
    drawNavbar ? '' : 'opacity-0'
  }`

export const navbarMobileLinksStyle = (open: boolean, drawNavbar: boolean) =>
  `${open ? 'left-0' : `-left-full`} ${navbarTransitionStyle} ${
    drawNavbar ? 'bg-gray-800' : ''
  } bg-opacity-95 fixed z-10 flex flex-col w-full items-center`

export const navbarTabStyle = (link: string, activeLink: string, mobile: boolean) =>
  `${activeLink === link ? 'text-white' : 'text-gray-500'} ${
    link === 'github' && !mobile ? 'ml-6' : ''
  } ${navbarTransitionStyle} text-2xl hover:text-gray-400 p-2 items-center cursor-pointer flex flex-row gap-1`
