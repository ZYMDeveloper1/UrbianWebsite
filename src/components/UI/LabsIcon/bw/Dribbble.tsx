/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  path {
    fill: ${({ theme }) => theme.colors.foreground};
  }
`

const Dribbble = (props: any) => (
  <Svg {...props} width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 0h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm6 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3zm3.676 3.11c.585.744.952 1.665.998 2.67a9.244 9.244 0 0 0-1.914-.214h-.004c-.48 0-.931.044-1.356.12a20.932 20.932 0 0 0-.314-.73c.947-.415 1.855-1.006 2.59-1.845zM9 4.32a4.65 4.65 0 0 1 2.919 1.028c-.614.734-1.424 1.267-2.299 1.642a16.476 16.476 0 0 0-1.615-2.56c.321-.07.653-.11.995-.11zm-2.068.487c.325.384.976 1.228 1.67 2.546-1.413.42-2.836.52-3.697.52l-.072-.001h-.001c-.145 0-.27-.002-.374-.006a4.696 4.696 0 0 1 2.474-3.059zM4.32 9c0-.022 0-.044.002-.067.133.005.305.009.511.009h.001c.941-.006 2.584-.085 4.25-.61.09.198.18.405.269.62a7.408 7.408 0 0 0-2.636 1.553 7.985 7.985 0 0 0-1.29 1.507A4.651 4.651 0 0 1 4.318 9zm4.68 4.682a4.649 4.649 0 0 1-2.78-.923c.166-.273.52-.796 1.086-1.337A6.366 6.366 0 0 1 9.737 9.95c.357.998.679 2.14.924 3.425A4.656 4.656 0 0 1 9 13.682zm2.65-.832a24.073 24.073 0 0 0-.864-3.145c.304-.044.623-.069.96-.069H11.758c.56 0 1.173.07 1.838.221a4.68 4.68 0 0 1-1.947 2.993z"
      fill="#111314"
      fillRule="evenodd"
    />
  </Svg>
)

export default Dribbble
