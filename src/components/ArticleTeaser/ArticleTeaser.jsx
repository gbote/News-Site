import "./articleTeaser.css"

function ArticleTeaser({article, pageUrl}) {
  const time = new Date(article.time * 1000)
  console.log(article.url)
  return (
    <div >
      <div className="title">
        <a target='_blank' className='title-link' href={article.url}>{article.title}</a>
      </div>
      <div className='date'>
        { time.toLocaleDateString() }
      </div>
    </div>
  )
}

export default ArticleTeaser;