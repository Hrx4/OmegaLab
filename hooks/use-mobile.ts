import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Use a lazy initial state to avoid hydration mismatch if possible,
  // but since we need window, we start with undefined or false.
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    // Defer the initial check slightly to satisfy the linter and avoid sync render cascade
    const timeoutId = setTimeout(handleResize, 0)

    window.addEventListener("resize", handleResize)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isMobile
}
