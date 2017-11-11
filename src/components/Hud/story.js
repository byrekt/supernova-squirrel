import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';
import DraggableContainer from '../DraggableContainer'
import Hotbar from '../Hotbar'
import ActionSlot from '../ActionSlot'
import ActionTooltip from '../ActionTooltip'
import ActionIcon from '../ActionIcon'
import { ui1 } from '../../constants/mocks.js'
import Hud from '../Hud'

storiesOf('Hud', module)
  .add('An Empty Hud', withInfo()(() =>
    <Hud />
  ))
  .add('A Hud with one draggable container', withInfo()(() =>
    <Hud>
      {ui1.bars.map((bar, barIndex) =>
        <DraggableContainer key={`draggable-container-hotbar-${barIndex}`}  position={bar.position}>
          <Hotbar key={`hotbar-${barIndex}`} width={bar.width} number={bar.number}>
            {bar.actions.map((action, actionIndex) =>
              <ActionSlot key={`action-slot-${barIndex}-${actionIndex}`}>
                {action.icon && (
                  <ActionTooltip description={action.tooltip} cast={action.cast} recast={action.recast} name={action.name}>
                    <ActionIcon icon={action.icon} draggable={action.draggable} />
                  </ActionTooltip>
                )}
              </ActionSlot>
            )}
          </Hotbar>
        </DraggableContainer>
      )}
    </Hud>
  ))
