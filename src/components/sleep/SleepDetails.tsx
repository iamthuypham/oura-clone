import React from 'react'

export interface ISleepDetail {
  score: any;
  total: any;
  efficiency: any;
  restless: any;
  rem: any;
  deep: any;
  score_latency: any;
}
export const SleepDetail: React.FC<ISleepDetail> = ({
  score,
  total,
  efficiency,
  restless,
  rem,
  deep,
  score_latency
}) => {
  return (
    <div>
      <div>
        <span>sleep</span>
        <span>{score}</span>
      </div>
      <div>
        <span>sleep contributors</span>
        <span>{total}</span>
        <span>{efficiency}</span>
        <span>{restless}</span>
        <span>{rem}</span>
        <span>{deep}</span>
        <span>{score_latency}</span>
      </div>
    </div>
  )
}
