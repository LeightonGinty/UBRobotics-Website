function News({page}) {
    return ( 
    <form method="GET" action={`/NewsPage${page}`}>
    <div className="card news">
        <div className="panel">
           <span>This is some news </span>
        </div>
    </div>
    </form>
 );
}

export default News;