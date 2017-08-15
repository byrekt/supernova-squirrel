import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';
import MacroEditor from '../MacroEditor'

storiesOf('MacroEditor', module)
  .add('Blank Macro Modal for Essential Dignity', withInfo()(() => {
    const macroInfo = {
      actionName: 'Essential Dignity'
    }

    return (
      <MacroEditor {...macroInfo} closeEditor={action('Close Modal fired')} saveMacro={action('Save button clicked')} />
    )
  }))