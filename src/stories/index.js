import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from './Button'
import Welcome from './Welcome'

import JobIcon from '../components/JobIcon'
import ActionIcon from '../components/ActionIcon'
import ActionTooltip from '../components/ActionTooltip'

import { JOB_ORDER } from '../constants/DefaultValues'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('Job Icons', module)
  .add('Simple Icons, no interactivity', () =>
    <div>
      {JOB_ORDER.map((job) => (
        <JobIcon job={job} />
      ))}
    </div>
  )
  .add('Simple Icons, simple actions', () =>
    <div>
      {JOB_ORDER.map((job) => (
        <JobIcon job={job} onClick={action('clicked')} />
      ))}
    </div>
  )
  .add('A single selected element', () => {

    return (
      <div>
        {JOB_ORDER.map((job) => (
          <JobIcon job={job} isSelected={job === 'astrologian'} />
        ))}
      </div>
    )
  })

storiesOf('Action Icons', module)
  .add('Simple Action', () => {
    const action = {
      "cast" : "Instant",
      "category" : "Job Actions",
      "icon" : "icons/actions/astrologian_Job Actions_action__07.png",
      "job" : "astrologian",
      "name" : "Essential Dignity",
      "recast" : "40s",
      "tooltip" : "Restores target's HP.<br>Cure Potency: 400<br>Potency increases the lower the target's HP."
    }

    return (
        <ActionTooltip description={action.tooltip} cast={action.cast} recast={action.recast} name={action.name}>
          <ActionIcon icon={action.icon} draggable={true}/>
        </ActionTooltip>
    )
  })
