const URL = 'http://localhost:3001/api/articles'

const fetchArticleByID = async (articleID) => {
  try {
    let response = await fetch(`${URL}/${articleID}`)
    let data = await response.json()
    return data
  }
  catch(err) {
    console.log(err)
  }
}

const fetchArticlesBySection = async (section) => {
  try {
    const response = await fetch(`${URL}?filter={"where":{"section":"${section}"}}`);
    const data = await response.json();
    return data;
  }
  catch(err) {
    console.error('There was an error.')
  }
};

const fetchArticles = (filters = null) => {
  console.log('Fetch Articles')
  try {
    return fetch(`${URL}${filters !== null ? `?filter={"where":{"title":{"ilike":"${filters}"}}}` : ''}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      console.log(err)
    })
  }
  catch(err) {
    console.error(err)
  }
}

const addArticle = (articleObject, token) => {
  console.log(token)
  return fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST',
    body: JSON.stringify(articleObject)
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      return {'message': data.error.message, 'statusCode': 200}
    } else {
      return data
    }
  })
}

export {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection,
  addArticle
};
