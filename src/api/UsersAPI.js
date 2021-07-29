
const BASE_URL = "http://localhost:3001/api/users/login?include=user";

const login = (credentialsObject) => {
  console.log(credentialsObject)
  return fetch(BASE_URL, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(credentialsObject)
  })
  .then(data => data.json())
  .then(data => data.id)

}

export default {
  login
}
