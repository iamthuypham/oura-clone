import React from 'react'
import './styles.css'

export interface IActivityCard {
  summary_date:any;
  inactive:any;
  cal_total:any;
  cal_active:any;
}
export const ActivityCard: React.FC<IActivityCard> = ({
  summary_date,
  inactive,
  cal_total,
  cal_active
}) => {
  return (
    <div className="summary-card">
      
        <span className="title small">activity</span>
      
        <span className="title font-size-normal">inactive time</span>
        <span>{inactive / 60}</span>
      
    </div>
  )
}
