import React from 'react'
import styled, { css } from 'styled-components'
import { Link, Typography } from '@material-ui/core'

import { slugify } from '@utils'

const commonStyle = css`
  scroll-margin-top: 108px;
  scroll-snap-margin-top: 108px;
  word-break: break-word;
  font-weight: bold;
`

const StyledTitle1 = styled(Typography).attrs(() => ({
  variant: 'h3',
  component: 'h1',
  color: 'textPrimary',
}))`
   ${commonStyle};
   ${({ theme: { breakpoints, spacing } }): string => `
     margin-top: ${spacing(9)}px;
     margin-bottom: ${spacing(5)}px;
     ${breakpoints.down('md')} {
       margin-top: ${spacing(3)}px;
     }
   `}
`

const StyledTitle2 = styled(Typography).attrs(() => ({
  variant: 'h4',
  component: 'h2',
  color: 'textPrimary',
}))`
   ${commonStyle};
   ${({ theme: { spacing } }): string => `
     margin-top: ${spacing(6)}px;
     margin-bottom: ${spacing(3)}px;
   `}
`

const StyledTitle3 = styled(Typography).attrs(() => ({
  variant: 'h5',
  component: 'h3',
  color: 'textPrimary',
}))`
   ${commonStyle};
   ${({ theme: { spacing } }): string => `
     margin-top: ${spacing(6)}px;
     margin-bottom: ${spacing(3)}px;
   `}
`

const Title: React.FC<TitleProps> = ({ container: Container, children, ...rest }: TitleProps) => {
  if (typeof children === "string") {
    const name = slugify(children)
    const href = `#${name}`
  
    return (
      <Container id={name} {...rest}>
        <Link color="inherit" href={href}>{children}</Link>
      </Container>
    )
  }
  return <>{children}</>
}

const Title1: React.FC = props => <Title container={StyledTitle1} {...props} />

const Title2: React.FC = props => <Title container={StyledTitle2} {...props} />

const Title3: React.FC = props => <Title container={StyledTitle3} {...props} />

interface TitleProps {
  children?: React.ReactNode
  container: React.ElementType
}

export { Title1, Title2, Title3 }