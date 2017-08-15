import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import ActionIcon from '../ActionIcon'
import ActionTooltip from '../ActionTooltip'


storiesOf('Action Icons', module)
  .add('Simple Action', withInfo()(() => {
    const action = {
      "cast": "Instant",
      "category": "Job Actions",
      "icon": "icons/actions/astrologian_Job Actions_action__07.png",
      "job": "astrologian",
      "name": "Essential Dignity",
      "recast": "40s",
      "tooltip": "Restores target's HP.<br>Cure Potency: 400<br>Potency increases the lower the target's HP."
    }

    return (
      <ActionTooltip description={action.tooltip} cast={action.cast} recast={action.recast} name={action.name}>
        <ActionIcon icon={action.icon} draggable={true} />
      </ActionTooltip>
    )
  }))