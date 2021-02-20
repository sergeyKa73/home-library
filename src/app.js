console.log('Hello World');

import axios from 'axios';
const url = 'https://gist.githubusercontent.com/sergeyKa73/96116079c7d7761189f827c33e71bb3e/raw/1f7923d505e1aea711ba7fed7ed7386f7050d446/catalog.json'

axios.get(url)
    .then(result => console.log(result.data))
    .catch(error => console.log(error.message))
