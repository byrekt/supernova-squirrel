import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const JobButton = styled.button`
 border: none;
 background-color: transparent;
 width: 70px;
 height: 70px;
 padding: 0;
 vertical-align: middle;
 text-align: center;
`
const IconImage = styled.img`
  width: 64px;
  height: 64px;

  &.selected {
    height: 70px;
    width: 70px;
  }
`

const propTypes = {
  job: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
const JobIcon = ({ job, isSelected, onClick }) => {

  const handleClick = () => {
    if (onClick) {
      onClick(job)
    }
  }

  // If the component didn't receive a job don't output anything.
  if (!job) return null;

  return (
    <JobButton key={job} onClick={handleClick}>
      <IconImage src={`/icons/jobs/${job}.png`} alt={`${job} Icon`} title={`${job} Icon`} className={(isSelected) ? 'selected' : ''}/>
    </JobButton>
  )
}

JobIcon.propTypes = propTypes

export default JobIcon