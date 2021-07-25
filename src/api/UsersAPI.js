const login = async (credentialsObject) => {
    const response = await fetch('http://localhost:3001/api/users/login?include=user', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(credentialsObject)
    });
    const data = await response.json();
    return data;
}

export default {
    login: login
}