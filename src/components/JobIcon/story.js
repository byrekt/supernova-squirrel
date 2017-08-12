import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import JobIcon from '../JobIcon'

import { JOB_ORDER } from '../../constants'
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
