import React from 'react'
import './styles.css'

export interface IReadinessCard {
  summary_date: any; score: any; note: any;
}

export const ReadinessCard:React.FC<IReadinessCard> = ({ summary_date, score, note }) => {
  return (
    <div className="summary-card align-items-center">
      <span className="title font-size-large">readiness</span>
      <span className="font-size-xlarge">{score}</span>
      <div>
      </div>
    </div>
  )
}
