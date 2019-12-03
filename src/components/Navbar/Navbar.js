import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Brand from './components/Brand'
//import DesktopItems from './components/DesktopItems'
import Language from './components/Language'
import LanguageItem from './components/LanguageItem'
//import MobileItems from './components/MobileItems'

const Navbar = ({ className, children, forwardedRef = null, isSticky = false, ...rest }) => {
  return (
    <AppBar
      className={className}
      position={isSticky ? 'sticky' : 'static'}
      ref={forwardedRef}
      {...rest}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  /**
   * Is the Navbar in sticky mode ?
   */
  isSticky: PropTypes.bool,
  /**
   * The languages items. The language dropdown menu won't be
   * dislayed if this prop is ignored.
   * Set `isDefault` to true for the pre-selected language.
   * The `label` stands for the label displayed in the dropdown.
   * The `locale` will be displayed on the dropdown's right & on
   * the `label`'s left. Ex: 'EN' for english.
   */

  languages: PropTypes.arrayOf(
    PropTypes.shape({
      isDefault: PropTypes.bool,
      label: PropTypes.string.isRequired,
      locale: PropTypes.string.isRequired,
    }),
  ),
  /**
   * The component you want to render the navigation items with.
   * You can use either your own component or a third-party
   * component. Defaults to HTML link <a>.
   */

  linkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.string]),
  /**
   * The navigation items of the navbar. You can also add any additional property in the
   * PropTypes.shape() object in case you use a third-party 'linkComponent'. See prop definition above.
   */
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  /**
   * Function fired on language selection.
   * Params:
   * - language: languageType (see content of above `languages` prop). The selected language.
   */
  onSelectLanguage: PropTypes.func,
}

const DefaultComponent = styled(
  forwardRef((props, ref) => <Navbar {...props} forwardedRef={ref} />),
)``
/**
 * Exposed components.
 */
DefaultComponent.Brand = Brand
DefaultComponent.Language = Language
DefaultComponent.LanguageItem = LanguageItem

DefaultComponent.displayName = 'Navbar'
DefaultComponent.propTypes = Navbar.propTypes

export { Navbar as BaseNavbar }
export default DefaultComponent