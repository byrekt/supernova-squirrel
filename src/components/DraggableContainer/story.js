import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import DraggableContainer from '../DraggableContainer'
import ActionSlot from '../ActionSlot'

storiesOf('DraggableContainer', module)
  .add('An Empty Container', withInfo()(() =>
    <DraggableContainer />
  ))
  .add('Single Action Slot', withInfo()(() =>
    <DraggableContainer position={{x: 25, y: 85}}>
      <ActionSlot />
    </DraggableContainer>
  ))
