import { Suspense, useEffect, useMemo, useState } from "react";
import Loader from "./Loader";

export default function FetchNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
       const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e977988aa8234d87b14ba1de8175b2a6`;
      try {
        setLoading(true);
        const res = await fetch(url);
        const result = await res.json();
        console.log(result);
        if (result && result.articles) {
          setNews(result.articles);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="card-container">
      {news.map((article, idx) => (
        <div className="card">
          <img
            src={
              article.urlToImage
                ? article.urlToImage
                : "https://c.ndtvimg.com/2023-09/90m6frog_india-afp_625x300_12_September_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"
            }
          />
          <a href="">
            <h4>{article.title}</h4>
          </a>
          <button onClick={() => window.open(article.url, "_blank")}>
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}
