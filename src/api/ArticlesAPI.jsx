import axios from "axios"

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/'

export const tryCatch = async (url) => {
  try{
    let response = axios.get(url)
    return await response
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export const fetchArticles = async () => {
  let url = BASE_URL + 'topstories.json';
  return await tryCatch(url)
};

export const fetchArticleByID = async (articleID) => {
  let url = `${BASE_URL}/item/${articleID}.json`
  return tryCatch(url)
};

const fetchArticlesBySection = async (section) => {
  let url = `${BASE_URL}/${section}.json`
  return tryCatch(url)
};

const fetchArticlesByTitle = async (title) => {
  let filter = `{"title":{"ilike":"${title}"}}`
  return fetchArticles(filter)
};

export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection,
  fetchArticlesByTitle
};