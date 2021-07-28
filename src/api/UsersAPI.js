const URL = 'http://localhost:3001/api/users/login?include=user'

const login = (credentialsObject) => {
  console.log(credentialsObject)
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentialsObject)
  })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log("DATA: ", data)
      if (data.non_field_errors) {
        return { 'message': data.non_field_errors[0], 'statusCode': 200 }
      } else {
        localStorage.setItem('token', data.id)
        return data
      }
    })
}

export default login;
