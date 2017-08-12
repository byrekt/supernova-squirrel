import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media, backgrounds, theme } from '../../constants'
import { TextInput, TextArea, PrimaryButton, CloseButton, ModalContainer } from '../styled'

const MacroModalContent = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.border};
  border-radius: 8px;
  margin: 15vh auto auto;
  padding: 1rem;
  min-height: 300px;
  width: 400px; 
  background: ${theme.foreground};

  ${media.phone} {
    margin: 5vh;
    width: 90%;
    height: 90%;
  }
`

const MacroEditorHeader = styled.header`
  position: relative;
`

const ModalCloseButton = CloseButton.extend`
  float: right;
  position: relative;
  bottom: 54px;
  left: 20px;
`
const MacroButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`

export default class MacroEditor extends React.PureComponent {
  static propTypes = {
    /** List of steps for the macro */
    macroSteps: PropTypes.string,
    /** The name of the macro */
    macroName: PropTypes.string,
    actionName: PropTypes.string.isRequired,
    saveMacro: PropTypes.func.isRequired,
    closeEditor: PropTypes.func.isRequired
  }

  state = {
    macroSteps: this.props.macroSteps || `/macroicon "${this.props.actionName}"`,
    macroName: this.props.macroName || `Macro for "${this.props.actionName}"`
  }

  handleNameChange = (event) => {
    this.setState({
      macroName: event.target.value
    })
  }

  handleStepsChange = (event) => {
    this.setState({
      macroSteps: event.target.value
    })
  }

  handleSave = () => {
    // Validation
    this.props.saveMacro(this.state)
  }
  render() {

    return (
      <ModalContainer>
        <MacroModalContent>
          <MacroEditorHeader>
            <TextInput width={'100%'} type='text' value={this.state.macroName} onChange={this.handleNameChange} />
            {this.props.closeEditor &&
              <ModalCloseButton onClick={this.props.closeEditor} />
            }
          </MacroEditorHeader>
          <TextArea resize={'none'} width={'100%'} height={'100%'} flexGrow value={this.state.macroSteps} onChange={this.handleStepsChange} />
          <MacroButtonContainer>
            <PrimaryButton onClick={this.handleSave}>Save</PrimaryButton>
          </MacroButtonContainer>
        </MacroModalContent>
      </ModalContainer>
    )
  }
}