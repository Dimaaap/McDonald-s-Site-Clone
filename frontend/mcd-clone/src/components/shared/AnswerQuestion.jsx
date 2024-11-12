import React from 'react'
import { QuestionHeader, AnswerText } from '.'

export const AnswerQuestion = ({ headerText, isEven, 
    textContainer, onClick, isShow=false, isTextShow=false}) => {
  return (
    <div onClick={onClick}>
        <QuestionHeader text={ headerText } isEven={ isEven } isTextShow={isTextShow} />
        <AnswerText text={ textContainer } isShow={ isShow } />
    </div>
  )
}

