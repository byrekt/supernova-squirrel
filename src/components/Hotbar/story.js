import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import Hotbar from '../Hotbar'

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

storiesOf('Hotbars', module)
  .add('Empty Horizontal Hotbar', withInfo()(() =>
    <Hotbar actions={emptyHotbar} barNumber={1}/>
  ))
  .add('Empty Vertical Hotbar', withInfo()(() =>
    <Hotbar actions={emptyHotbar} barNumber={1} vertical/>
  ))
  .add('Sparse Horizontal Hotbar', withInfo()(() =>
    <Hotbar actions={sparseHotbar} barNumber={1}/>
  ))
