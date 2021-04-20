import { useTheme } from 'next-themes'
import MoonIcon from '@/public/icons/menu/moon-icon.svg'

const DarkMode = () => {
  const { setTheme } = useTheme()

  return (
    <button type="button" aria-label="dark mode" className="focus:outline-none">
      {isDark ? (
        <MoonIcon
          onClick={() => {
            setIsDark(!isDark)
            setTheme('dark')
          }}
          className="inline h-6 w-6 sm:w-7 sm:h-7 lg:h-8 lg:w-8 fill-current hover:opacity-50"
        />
      ) : (
        <SunIcon
          onClick={() => {
            setIsDark(!isDark)
            setTheme('light')
          }}
          className="inline h-7 w-7 sm:w-7 sm:h-7 lg:h-8 lg:w-8 fill-current hover:opacity-50"
        />
      )}
    </button>
  )
}

export default DarkMode
