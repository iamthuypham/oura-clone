import React from 'react'
export interface IActivityDetail{
  score: any;
  inactive: any;
  inactivity_alerts: any;
  score_stay_active: any;
  score_move_every_hour: any;
  score_meet_daily_targets: any;
  score_training_frequency: any;
  score_recovery_time: any;
}
export const ActivityDetail:React.FC<IActivityDetail> = ({
  score,
  inactive,
  inactivity_alerts,
  score_stay_active,
  score_move_every_hour,
  score_meet_daily_targets,
  score_training_frequency,
  score_recovery_time
}) => {
  return (
    <div>
      <div>
        <span>activity</span>
        <span>{score}</span>
      </div>
      <div>
        <span>activity contributors</span>
        <span>{inactive}</span>
        <span>{inactivity_alerts}</span>
        <span>{score_stay_active}</span>
        <span>{score_move_every_hour}</span>
        <span>{score_meet_daily_targets}</span>
        <span>{score_training_frequency}</span>
        <span>{score_recovery_time}</span>
      </div>
    </div>
  )
}
