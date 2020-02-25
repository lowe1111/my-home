import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import './layout.css';
import * as theme from '../styles/colors';

const Background = styled.div`
  background: rgba(255,255,255,0.4);
  min-height: 100vh;
`;

const LayoutBackground = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Background>{children}</Background>
    </ThemeProvider>
  );
};

LayoutBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutBackground;
