import { useTheme } from 'next-themes'
import ScrollToTop from 'react-scroll-to-top'

const Icon = () => {
  const { theme } = useTheme()

  return (
    <svg viewBox="0 0 301 301" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M150 0C67.159 0 0.000976562 67.159 0.000976562 150C0.000976562 232.838 67.158 300.003 149.998 300.003C232.838 300.003 300.002 232.838 300.002 150C300.002 67.159 232.842 0 150 0ZM217.685 189.794C212.215 195.261 203.347 195.264 197.875 189.794L149.615 141.524L101.093 190.04C95.626 195.507 86.755 195.51 81.283 190.04C78.552 187.301 77.185 183.719 77.185 180.135C77.185 176.551 78.552 172.969 81.288 170.238L137.58 113.941C138.119 113.103 138.737 112.304 139.468 111.573C142.264 108.777 145.944 107.431 149.614 107.496C153.276 107.434 156.962 108.777 159.755 111.576C160.489 112.305 161.104 113.104 161.641 113.941L217.684 169.984C223.152 175.454 223.156 184.322 217.685 189.794Z"
          fill={theme === 'light' ? 'black' : 'white'}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="300.003" height="300.003" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const ScrollBottom = () => {
  return (
    <ScrollToTop
      top={700}
      smooth
      style={{
        backgroundColor: 'transparent',
        borderRadius: '50%',
        height: '2.6rem',
        width: '2.6rem',
        boxShadow: 'none',
      }}
      component={<Icon />}
    />
  )
}
