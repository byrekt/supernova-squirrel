import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import Hotbar from '../Hotbar'
import ActionSlot from '../ActionSlot'
import ActionTooltip from '../ActionTooltip'
import ActionIcon from '../ActionIcon'

const emptyHotbar = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

const sparseHotbar = [
  {},
  {},
  {},
  {},
  {},
  {
    "cast": "Instant",
    "category": "Job Actions",
    "icon": "icons/actions/astrologian_Job Actions_action__07.png",
    "job": "astrologian",
    "name": "Essential Dignity",
    "recast": "40s",
    "tooltip": "Restores target's HP.<br>Cure Potency: 400<br>Potency increases the lower the target's HP."
  },
  {},
  {},
  {},
  {},
  {},
  {}
]

const renderActions = () => {
  return sparseHotbar.map((action, index) => (
    <ActionSlot key={`action-slot-1-${index}`}>
      {action.icon && (
        <ActionTooltip description={action.tooltip} cast={action.cast} recast={action.recast} name={action.name}>
          <ActionIcon icon={action.icon} draggable={action.draggable} />
        </ActionTooltip>
      )}
    </ActionSlot>
  ))
}

storiesOf('Hotbars', module)
  .add('Horizontal Hotbar', withInfo()(() =>
    <Hotbar barNumber={1} width={12}>
      {renderActions()}
    </Hotbar>
  ))
  .add('Stacked Horizontal Hotbar', withInfo()(() =>
    <Hotbar barNumber={1} width={6}>
      {renderActions()}
    </Hotbar>
  ))
  .add('Vertical Hotbar', withInfo()(() =>
    <Hotbar barNumber={1} width={1}>
      {renderActions()}
    </Hotbar>
  ))
  .add('Stacked vertical Hotbar', withInfo()(() =>
    <Hotbar barNumber={1} width={2}>
      {renderActions()}
    </Hotbar>
  ))
