# News Site

## High Level Objectives

  1. Create a JavaScript module that handles retrieving article data from an API using [Axios](https://axios-http.com/docs/intro).
  2. Integrate the module above into the News Site app using the `useEffect()` hook.
  3. Slightly refactor the AppNav & ArticleDetails components

## The News/Article API
So far, the data that drives our News Site has been contained within a static JSON file - `./src/data/news.json`.  I began connecting our front-end to the Hacker News API that provides real news data. 

For this, I used the async/await keywords.
- To make API calls to outside resources within your React app, I had to use Axios to make `get` requests.
- Axios is inheritantly asynchronous (i.e., not synchronous / happening out of order)
- `Axios.get` returns a Javascript `Promise` object. These `Promise` objects are basically Javascript's immediate response to you, saying "Hey I have received your request. I `Promise` to respond when I can."
- `Promise` objects must be resolved in order to get to the data using the [.then()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) function built into Javascript.
- Error-handling with `.catch()`: Whenever calling out to an API, there is always a possibility of an error occuring. To handle this error on the client-side and give our user proper feedback, I attached on a [.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) at the end of our promise chain.

## React and the Virtual DOM (Lecture/Instruction Notes)
Before we dive into how our page compoments will use our client-side API methods, let's take a quick detour to better understand how React components work. For the sake of time, we'll keep this explanation at a high-level. For a deeper explanation, you can check out this [handy blog post](https://programmingwithmosh.com/react/react-virtual-dom-explained/) about the Virtual DOM. React itself just lightly touches upon the subject in its FAQ [here](https://reactjs.org/docs/faq-internals.html).

The first thing to know is that traditional DOM manipulation is very slow. React quickly gained popularity as a framework because of its speed. Instead of repainting the _entire_ DOM whenever state is changed, React keeps a "virtual" representation of what the UI should look like, and when state changes, it compares the updated "virtual" representation to the actual DOM, identifies the differences, and _only_ updates what has changed.

Since Facebook created React, we'll use their web app as an example. Looking at a Facebook user's homepage, it's reasonable to assume that there are different components for stories, newsfeed, chat, etc. If a new story is added to the page, only the stories component needs to know about the state change and update itself and/or its child components accordingly. Or if you scroll down your newsfeed and trigger a new fetch for more posts (via infinite scroll), only the newsfeed component (and/or its child components) needs to update.

### Component Lifecycle Methods
I was using the useEffect() hook to fetch data from the API.

```javascript
import { useState, useEffect } from 'react'

function Component {
  const [someDataFromAnAPI, setSomeDataFromAnAPI] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        const jsonResponse = await CallAPI()
        setSomeDataFromAnAPI(jsonResponse)
      } catch (error) {
        console.error('Error occurred fetching data: ', error);
      }
    }

    getData()
  }, [])

  return <ChildComponent data={someDataFromAnAPI} />
}
```

## SIDE NOTES (My Personal Notes)
We are using the `useEffect()` hook to tell React what we want to do after our component renders. Notice that `useEffect()` takes two arguments:

1. A function to run after each render.
2. (optional) An array of what pieces of state this function should hook into. By default, `useEffect()` runs your function after every component render. Imagine we had 10 pieces of state in our component -- for this particular `useEffect()`, it is unnecessary to run our function if any of the other 9 pieces of state change; we only care about `someDataFromAnAPI`, so that is what we pass as the second argument.

But why do we have an inner function `getData`?
`useEffect()` cannot be made into an async funtion. Therefore, when fetching data asynchronously, the common pattern is to create an inner `async/await` function, and then call it only if a certain condition is met (in this case, we only call it if we don't have data yet). So the cycle goes: component is mounted and rendered to the DOM --> `useEffect()` is called and sees that we don't have data, so it calls `getData()`, which sets the component state --> the component is re-rendered with the updated data --> `useEffect()` is called again, but it sees we have data, so it does nothing.

There are several other use cases for `useEffect()`, but we'll stick to this for now. Using this pattern, go ahead and refactor `HomePage.js` and `ArticlePage.js` as functional components that use the `useEffect()` hook.

We start with state containing a null value for the `someDataFromAnAPI` key. In the `async getData()` method, we're telling React that we're about to run an asynchronous method (`CallAPI()`). We `await` for `CallAPI()` to finish before setting its resolved response to `jsonResponse` and then setting our Component's state.

Calling `setSomeDataFromAnAPI` triggers the component update process - at this point, our component is re-rendered.  Subsequently, the ChildComponent contained within the render re-renders - it's **data** prop is set to `someDataFromAnAPI`, which now contains the data that was returned from the API/Web Service - which then is, presumably, used to render content.

You will want to follow this pattern within `src/pages/HomePage.js` and `src/pages/ArticlePage.js` and remove references in these files to `src/data/news.json`.

As we're accustomed to doing, we first use the `useState()` hook to create a piece of state called `someDateFromAnAPI` and instantiate it as `null`.


