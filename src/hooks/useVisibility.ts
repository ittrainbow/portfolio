import { useState, useEffect, useMemo } from 'react'

export const useVisibility = (ref: React.RefObject<HTMLDivElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observer = useMemo(
    () => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)),
    []
  )
  useEffect(() => {
    observer.observe(ref.current as HTMLDivElement)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}
