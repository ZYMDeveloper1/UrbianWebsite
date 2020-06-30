/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  path {
    fill: ${({ theme }) => theme.colors.foreground};
  }
`

const Github = (props: any) => (
  <Svg {...props} width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#141124"
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      d="M18.442 5.228a9.833 9.833 0 00-3.548-3.638A9.358 9.358 0 0010 .25C8.23.25 6.6.697 5.106 1.59a9.832 9.832 0 00-3.548 3.638C.686 6.759.25 8.43.25 10.244c0 2.178.62 4.136 1.86 5.876 1.24 1.74 2.841 2.943 4.805 3.61.228.044.398.014.508-.09a.515.515 0 00.165-.39l-.007-.703c-.004-.443-.006-.829-.006-1.158l-.292.052c-.186.035-.421.05-.705.045a5.241 5.241 0 01-.882-.09 1.949 1.949 0 01-.85-.391 1.65 1.65 0 01-.56-.8l-.126-.3c-.085-.199-.218-.42-.4-.663-.182-.243-.366-.408-.552-.495l-.089-.065a.941.941 0 01-.165-.156.716.716 0 01-.114-.182c-.026-.061-.005-.111.063-.15.068-.04.19-.058.368-.058l.254.038c.17.035.379.139.629.313.25.173.454.399.615.676.195.356.43.627.705.814.275.186.552.28.831.28.28 0 .52-.022.724-.066.203-.043.393-.108.571-.195.076-.581.284-1.028.622-1.34a8.5 8.5 0 01-1.301-.235 5.111 5.111 0 01-1.193-.507 3.44 3.44 0 01-1.022-.872c-.271-.347-.493-.803-.667-1.367-.173-.564-.26-1.214-.26-1.952 0-1.05.334-1.943 1.003-2.68-.313-.79-.284-1.675.089-2.655.245-.078.61-.02 1.092.176.482.195.835.362 1.06.5.224.14.404.257.54.352A8.808 8.808 0 0110 5.078c.838 0 1.65.112 2.438.338l.482-.312c.33-.209.72-.4 1.168-.573.448-.173.791-.221 1.028-.143.381.98.415 1.865.102 2.655.668.737 1.003 1.63 1.003 2.68 0 .738-.087 1.39-.26 1.959-.174.568-.398 1.023-.673 1.366a3.57 3.57 0 01-1.029.866c-.41.234-.808.403-1.193.507a8.492 8.492 0 01-1.301.235c.44.39.66 1.006.66 1.848v2.745c0 .156.053.286.159.39.105.104.272.135.501.091 1.964-.667 3.565-1.871 4.805-3.61 1.24-1.74 1.86-3.698 1.86-5.876 0-1.813-.437-3.485-1.308-5.016z"
    />
  </Svg>
)

export default Github
