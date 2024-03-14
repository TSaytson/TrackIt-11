import { useEffect } from "react";
import { useState } from "react"
import styled from "styled-components"

export default function SelectDays({ day, index, days, list }) {
  const [isSelected, setIsSelected] = useState(false)

  function handleSelectedDay(e) {
    e.preventDefault()
    const newDays = days;
    if (!newDays.includes(index))
      newDays.push(index)
    else
      newDays.splice(newDays.indexOf(index), 1)
    setIsSelected(!isSelected)
  }

  useEffect(() => {
    if (days.includes(index)) setIsSelected(true)
  }, [])

  return (
    <StyledWeekButton
      isSelected={isSelected}
      $list={list}
      onClick={list ? () => '' : handleSelectedDay}
    >
      {day[0]}
    </StyledWeekButton>
  )
}

const StyledWeekButton = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  background-color: ${props => props.isSelected ? "#CFCFCF" : "white"};
  color: ${props => props.isSelected ? "white" : "#DBDBDB"};
  font-size: 20px;
  font-family: 'Lexend Deca';
  text-align: center;
  transition: all .2s;
  ${props => props.$list || `
    &:hover{
      transform: scale(1.1);
    }
  `}
  
`