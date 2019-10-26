import React from 'react'

export interface IReadinessDetail {
  score:any;
  score_previous_night:any;
  score_sleep_balance:any;
  score_previous_day:any;
  score_activity_balance:any;
  score_resting_hr:any;
  score_recovery_index:any;
}
export const ReadinessDetail:React.FC<IReadinessDetail> = ({
  score,
  score_previous_night,
  score_sleep_balance,
  score_previous_day,
  score_activity_balance,
  score_resting_hr,
  score_recovery_index
}) => {
  return (
    <div>
      <div>
        <span>readiness</span>
        <span>{score}</span>
      </div>
      <div>
        <span>readiness contributors</span>
        <span>{score_previous_night}</span>
        <span>{score_sleep_balance}</span>
        <span>{score_previous_day}</span>
        <span>{score_activity_balance}</span>
        <span>{score_resting_hr}</span>
        <span>{score_recovery_index}</span>
      </div>
    </div>
  )
}
