
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Initial check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Check on mount
    checkMobile()
    
    // Add resize listener
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Modern browsers use addEventListener
    if (mql.addEventListener) {
      mql.addEventListener("change", checkMobile)
      return () => mql.removeEventListener("change", checkMobile)
    } else {
      // Fallback for older browsers
      window.addEventListener("resize", checkMobile)
      return () => window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Default to desktop if not yet determined (during SSR or initial load)
  return isMobile === undefined ? false : isMobile
}
