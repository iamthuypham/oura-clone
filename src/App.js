import React, {useState, useEffect} from 'react';
import {Summary} from './components/summary/Summary'

const getRequest = query => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({ query })
})

const url = 'https://oura-clone-api.phamrosalind.now.sh/api'

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    async function access(code) {
      const response = await fetch(url, getRequest(`{access(code: "${code}"){access_token}}`))
      const result = await response.json()
      if (result.data && result.data.access && result.data.access.access_token) {
        const { access_token } = result.data.access
        document.cookie = `token=${access_token}`
        window.location.href='/'
      }
    }

    if (getCookie('token')) {
      setIsAuthorized(true)
    } else {
      const urlParts = window.location.href.split('=');
      if (urlParts.length > 1) {
        const code = urlParts[1];
        access(code)
      }
    }
  }, [isAuthorized])
  
  const handleAuthorize = () => {
    window.location.replace(`https://cloud.ouraring.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}`)
  }

  const getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  return (
    <>
      {isAuthorized ?
        <Summary /> :
        <button onClick={handleAuthorize}>Authorize</button>
      }
      </>
  );
}

export default App;
