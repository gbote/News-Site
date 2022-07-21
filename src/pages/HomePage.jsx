import ArticleList from '../components/ArticleList/ArticleList.jsx'
import axios from 'axios';
import {useEffect, useState} from 'react';


function HomePage() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((response) =>{
      const promises = []
      for ( let i = 0; i < 20; i++) {
        promises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json`))
      }
      // promise.all resolves to a list of resollved values, for each promise passed in.
      Promise.all(promises).then((responses) => {
        setArticles(responses.map((response) => {
          return response.data
        }))
      })
    })
  }, [])

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export default HomePage;

