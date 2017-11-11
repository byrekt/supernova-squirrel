import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import styled, { ThemeProvider } from 'styled-components'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import theme from '../src/theme'

const StyledAppContainer = styled.div`
  font-family: ${theme.font};
  font-size: ${theme.fontSizes[2]}px;
`

const Decorator = props => (
  <DragDropContextProvider backend={HTML5Backend}>
    <ThemeProvider theme={theme}>
      <StyledAppContainer>
        {props.children}
      </StyledAppContainer>
    </ThemeProvider>
  </DragDropContextProvider>
)
addDecorator(story => (
  <Decorator children={story()} />
))


const req = require.context('../src/components', true, /story\.js$/);

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)