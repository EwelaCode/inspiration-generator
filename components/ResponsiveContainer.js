import PropTypes from 'prop-types';
import React from 'react';

import HeaderMenu from './header/HeaderMenu';

const ResponsiveContainer = ({ children }) => (
  <>
    <HeaderMenu>{children}</HeaderMenu>
  </>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainer;
