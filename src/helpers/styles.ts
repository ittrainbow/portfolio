export const pStyle = 'py-2 mt-3 font-sans text-2xl text-gray-300'

export const fadeClass = (isInViewport: boolean) =>
  `${isInViewport ? 'animate-fade-up' : 'opacity-0'} py-12`
