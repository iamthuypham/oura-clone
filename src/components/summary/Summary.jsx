import React, { useEffect, useState } from 'react'
import { ActivityCard, ReadinessCard, SleepCard } from '.'
import './styles.css'

const getRequest = query => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({ query })
})

const url = 'https://oura-clone-api.iamthuypham.now.sh/api'

export const Summary = () => {
  const [readinessData, setReadinessData] = useState(null)
  const [sleepData, setSleepData] = useState(null)
  const [activityData, setActivityData] = useState(null)

  useEffect(() => {
    const query =  getQuery(getCookie('token'))
    async function fetchSummary() {
      const readinessResponse = await fetch(
        url,
        getRequest(query.replace('%TYPE%', 'readiness'))
      )
      const sleepResponse = await fetch(
        url,
        getRequest(query.replace('%TYPE%', 'sleep'))
      )
      const activityResponse = await fetch(
        url,
        getRequest(query.replace('%TYPE%', 'activity'))
      )
      const readinessResult = await readinessResponse.json()
      const sleepResult = await sleepResponse.json()
      const activityResult = await activityResponse.json()

      setReadinessData(readinessResult.data.getData.readiness[0])
      setSleepData(sleepResult.data.getData.sleep[0])
      setActivityData(activityResult.data.getData.activity[0])
    }

    fetchSummary();
  }, [])

  const getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  if (!readinessData || !sleepData || !activityData) {
    return null
  }
  return (
    <div className="summary-container">
      <ReadinessCard {...readinessData}/>
      <SleepCard {...sleepData} />
      <ActivityCard {...activityData} />
    </div>
  )
}

const getQuery = (token) => `
{getData(
start:"2019-10-27", 
end:"2019-10-27",
token:"${token}",
type:"%TYPE%"){
... on Sleep {
sleep {
  score
  total
  efficiency
  restless
  rem
  deep
  score_latency
}
}
... on Activity {
activity {
score
inactive
inactivity_alerts
score_stay_active
score_move_every_hour
score_meet_daily_targets
score_training_frequency
score_training_frequency
score_recovery_time
}
}
... on Readiness {
readiness {   
score
score_previous_night
score_sleep_balance
score_previous_day
score_activity_balance
score_resting_hr
score_recovery_index
}
}
}}
`