import React from 'react';
import { clearArticleById, getAllArticles, nextPage } from '../../redux/actions/blogActions.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { BlogItem, Button } from '../../components/index.js';

import './BlogWrapper.scss';
import spinner from '../../assets/img/spinner.gif';

function BlogWrapper({ isAuth }) {
  const dispatch = useDispatch();

  const { articles, isLoaded, page } = useSelector(({ blogReducer }) => {
    return {
      articles: blogReducer.articles,
      isLoaded: blogReducer.isLoaded,
      page: blogReducer.page,
    };
  });

  React.useEffect(() => {
    dispatch(clearArticleById());
  }, []);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    dispatch(getAllArticles(page));
  }, [page]);

  const PaginationFunc = (action) => {
    dispatch(nextPage(action));
  };

  return (
    <div>
      <div className="blog-wrapper">
        {articles.length > 0 && isLoaded ? (
          articles.map((article) => <BlogItem isAuth={isAuth} key={article._id} {...article} />)
        ) : articles.length === 0 ? (
          <div className="blog-wrapper__loading">
            <h1 style={{ color: '#fff' }}>Здесь пока ничего нет</h1>
            {isAuth === true && (
              <Link to="/create">
                <Button className="blog-wrapper__loading-btn">Создать новую статью</Button>
              </Link>
            )}
          </div>
        ) : (
          <div className="blog-wrapper__loading">
            <img src={spinner} />
          </div>
        )}
      </div>
      <div className="blog-pagination">
        <div className="blog-wrapper__loadmorebtn">
          {page === 1 ? (
            <div></div>
          ) : (
            <Button onClick={() => PaginationFunc()} className="blog-wrapper__loadmorebtn-btn">
              Предыдущая страница
            </Button>
          )}
          {articles.length < 8 ? null : (
            <Button
              onClick={() => PaginationFunc('plus')}
              className="blog-wrapper__loadmorebtn-btn">
              Следующая страница
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogWrapper;
