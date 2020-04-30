import styled from 'styled-components'

const BottomBanner = styled.div`
  text-align: center;
  padding: 16px 12px;
  ${({ theme: { palette } }): string => `
    color: ${palette.primary.contrastText};
    background-color: ${palette.primary.dark};
 `}
`

BottomBanner.displayName = 'Footer.BottomBanner'

export default BottomBanner
