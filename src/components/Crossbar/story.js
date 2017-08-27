import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import Crossbar from '../Crossbar'

const emptyCrossHotbar = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

const sparseCrossHotbar = [
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
  {},
  {},
  {},
  {},
  {}
]

storiesOf('Cross Hotbar', module)
  .add('Empty Cross Hotbar', withInfo()(() =>
    <Crossbar actions={emptyCrossHotbar} barNumber={1}/>
  ))
  .add('Sparse Horizontal Hotbar', withInfo()(() =>
    <Crossbar actions={sparseCrossHotbar} barNumber={1}/>
  ))
