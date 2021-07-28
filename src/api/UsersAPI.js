const BASE_URL = 'http://localhost:3001/api/users/login?include=user'

const login = (credentialsObject) => {
  return fetch(BASE_URL, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(credentialsObject)
  })
    .then(response => {return response.json()})
}

export default {
  login: login
}
