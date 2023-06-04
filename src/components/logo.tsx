import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Logo = (props: HTMLChakraProps<'svg'>) => {
  const fill = useColorModeValue('#2D3748', '#fff')

  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 100"
      {...props}
    >
      <path
        fill="#ce2028"
        d="M67.27,6.99c14.06-3.55,25.55,1.59,32.17,8.99,6.87,7.68,7.51,23.36,3.22,34.73-3.84,10.18-10.75,18.3-17.97,25.52-7.36,7.36-16.31,13.11-25.52,17.97-8.69-4.34-17.05-9.64-24.07-16.31-6.69-6.35-13.56-13.99-17.75-22.52-2.17-4.41-4.02-9.55-4.55-15.64-.53-6.12-.12-12.21,1.89-17.42,3.31-8.61,13.07-15.75,24.07-16.42,11.37-.69,21.61,3.02,26.63,9.87,1.7,2.32,3.16,5.57,2.55,9.43-1.03,6.54-6.02,10.74-8.77,15.64-3.08,5.5-1.73,11.83,.33,16.97,.7,1.75,1.64,3.78,1.89,5.55,.68,4.87-2.11,6.32-2.11,11.43,0,2.04,.71,4.64,1.55,6.32,.4,.8,1.79,2.68,3.77,2,.08-.03,.87-.51,1-.89,.21-.61-.71-2.03-1.11-2.77-.78-1.46-1.46-2.42-1.22-4.66,.18-1.69,1.23-3.2,1.89-4.77,.65-1.54,1.3-3.39,1.44-5.21,.56-7.37-5.99-13.82-2.33-21.52,.76-1.6,2.01-3.04,3.11-4.55,1.05-1.44,2.11-2.93,3.11-4.44,2.02-3.06,4.32-6.12,5.44-9.76,1.87-6.09-3.03-11.97-6.18-15.19-.89-.91-2.47-2.34-2.47-2.34Z"
      />
      <rect fill="#ce2028" x="118.19" y="6.83" width="58.68" height="86.26" />
      <rect fill="#fff" x="119.41" y="8.1" width="55.7" height="83.81" />
      <rect fill="#ce2028" x="123.4" y="12.3" width="47.36" height="74.61" />
      <text
        fontSize="64px"
        fontFamily="Arial-Black,Arial Black"
        fill="#fff"
        transform="translate(125.82 72.66)"
      >
        <tspan x="0" y="0">
          5
        </tspan>
      </text>
      <rect fill="#ce2028" x="176.61" y="6.76" width="58.68" height="86.26" />
      <rect fill="#fff" x="177.83" y="8.04" width="55.7" height="83.81" />
      <rect fill="#ce2028" x="181.82" y="12.24" width="47.36" height="74.61" />
      <text
        fontSize="64px"
        fontFamily="Arial-Black,Arial Black"
        fill="#fff"
        transform="translate(184.24 72.59)"
      >
        <tspan x="0" y="0">
          7
        </tspan>
      </text>
      <rect fill="#ce2028" x="235.21" y="6.73" width="58.68" height="86.26" />
      <rect fill="#fff" x="236.43" y="8.01" width="55.7" height="83.81" />
      <rect fill="#ce2028" x="240.42" y="12.21" width="47.36" height="74.61" />
      <text
        fontSize="64px"
        fontFamily="Arial-Black,Arial Black"
        fill="#fff"
        transform="translate(242.84 72.56)"
      >
        <tspan x="0" y="0">
          2
        </tspan>
      </text>
    </chakra.svg>
  );
}

export const LogoIcon = (props: HTMLChakraProps<'svg'>) => {
  return (
    <chakra.svg
      height='8'
      width='auto'
      viewBox='0 0 257 257'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='257' height='257' rx='128.5' fill='url(#mark)' />
      <path
        d='M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z'
        fill='#fff'
      />
      <defs>
        <linearGradient
          id='mark'
          x1='128.5'
          x2='128.5'
          y2='257'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#7BCBD4' />
          <stop offset='1' stopColor='#29C6B7' />
        </linearGradient>
      </defs>
    </chakra.svg>
  )
}

export default Logo
