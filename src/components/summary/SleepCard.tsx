import React from 'react'
import './styles.css'

export interface ISleepCard {
  summary_date: any;
  score: any;
  bedtime_start: any;
  bedtime_end: any;
  total: any;
}

export const SleepCard: React.FC<ISleepCard> = ({
  summary_date,
  score,
  bedtime_start,
  bedtime_end,
  total
}) => {
  return (
    <div className="summary-card align-items-start">      
        <span className="title small">sleep</span>
        <span>{bedtime_start}</span>
        <span>{bedtime_end}</span>
        <span>{total}</span>
        <span className="title small">sleep score</span>
        <span>{score}</span>
    </div>
  )
}
