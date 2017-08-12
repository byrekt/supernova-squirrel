import React from 'react'
import styled from 'styled-components'
import { theme } from '../../constants'

const TextInput = styled.input`
  width: ${props => props.width || 'inherit'};
  background-color: ${props => props.theme.colors.gray1};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.space[2]}px;
  padding: ${props => props.theme.space[2]}px;
  font-family: ${props => props.theme.font};
  box-sizing: border-box;
`

const TextArea = styled.textarea`
  resize: ${props => props.resize || 'inherit'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  font-family: ${props => props.theme.font};
  background-color: ${props => props.theme.colors.gray1};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.space[2]}px;
  padding: ${props => props.theme.space[2]}px;
  box-sizing: border-box;
  ${props => (props.flexGrow) ? 'flex-grow: 1' : ''}
`

const PrimaryButton = styled.button`
  padding: ${props => props.theme.space[2]}px;
  margin: ${props => props.theme.space[1]}px;
  border-radius: ${props => props.theme.space[4]}px;
  border: 1px solid ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.gray1};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.bold};
`

const CloseButton = styled.span`
  font-size: ${props => props.theme.fontSizes[4]}px;
  font-weight: ${props => props.theme.bold};
  padding: ${props => props.theme.space[1]}px;
  background-color: ${props => props.theme.colors.gray1};
  border-radius: ${props => props.theme.space[4]}px;
  border: 1px solid;
  color: ${props => props.theme.colors.black};
  line-height: ${props => props.theme.fontSizes[2]}px;
  width: 14px;
  height: 14px;
  border-color: ${theme.border};  
  
  &:hover, &:focus {
    text-decoration: none;
    cursor: pointer;
  }

  &:after {
    content: '×';
  }
`
const ModalContainer = styled.section`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.border};
  border-radius: 8px;
  margin: 15vh auto auto;
  padding: ${props => props.theme.space[3]};
  min-height: ${props => props.minHeight || '300px'}; 
  width: ${props => props.width || '400px'}; 
  background:  ${props => props.theme.colors.gray1};

  ${props => props.theme.media.phone} {
    margin: 5vh;
    width: 80%;
    height: 80%;
  }
`

export { TextInput, TextArea, PrimaryButton, CloseButton, ModalContainer, ModalContent }