import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ComponentExtra } from '../../../types'

const useStyles = makeStyles(({ palette }) => ({
  title: {
    lineHeight: 'normal',
    color: palette.primary.contrastText,
  },
}))

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    width: 24px;
    height: 24px;
  }
  ${({ theme: { palette } }): string => `
    fill: ${palette.primary.contrastText};
    color: ${palette.primary.contrastText};
  `}
`

const BrandLink = styled(Link).attrs(() => ({
  underline: 'none',
}))`
  display: flex;
  align-items: center;
`

const BrandContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

const Brand: React.FC<NavbarBrandProps> = ({ children, href = '/', title, ...rest }: NavbarBrandProps) => {
  const classes = useStyles()
  return (
    <BrandContainer {...rest}>
      <BrandLink href={href}>
        {children && <IconContainer>{children}</IconContainer>}
        {title && (
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
        )}
      </BrandLink>
    </BrandContainer>
  )
}

Brand.displayName = 'Navbar.Brand'

Brand.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  title: PropTypes.string,
}

export interface NavbarBrandProps {
  /**
   * Any jsx node you want to render inside the Brand.
   */
  children?: React.ReactNode
  /**
   * The navbar's brand link. By default it links to the root page.
   */
  href?: string
  /**
   * The navbar's title.
   */
  title?: string
}

export type NavbarBrandType = ComponentExtra<NavbarBrandProps>

const BrandExtra = styled(Brand)`` as NavbarBrandType

export default BrandExtra
