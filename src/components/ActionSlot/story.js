import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import ActionSlot from '../ActionSlot'
import ActionIcon from '../ActionIcon'

const icon = 'icons/actions/astrologian_Job Actions_action__07.png'

storiesOf('Action Slot', module)
  .add('Empty Action Slot', withInfo()(() => {
    return (
      <div>
        <ActionSlot />
      </div>
    )
  }))
    .add('Non-Empty Action Slot', withInfo()(() => {
    return (
      <div>
        <ActionSlot>
          <ActionIcon icon={icon} draggable={false}/>
        </ActionSlot>
      </div>
    )
  }))