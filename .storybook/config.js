import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


const DnDContextWrapper = DragDropContext(HTML5Backend)('div')

const Decorator = props => (
  <DnDContextWrapper>
    {props.children}
  </DnDContextWrapper>
)
addDecorator(story => (
  <Decorator children={story()}/>
))


const req = require.context('../src/components', true, /story\.js$/);

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)