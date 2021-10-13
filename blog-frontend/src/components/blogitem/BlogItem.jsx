import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteArticle, getAllArticles } from '../../redux/actions/blogActions.js';

import './BlogItem.scss';

export default React.memo(function BlogItem({ _id, title, text, avatar, isAuth }) {
  const dispatch = useDispatch();

  const removeArticle = (articleId) => {
    const removeConfirm = window.confirm('Вы действительно хотите удалить статью?');
    if (removeConfirm) {
      dispatch(deleteArticle(articleId));
      dispatch(getAllArticles());
    } else {
      return;
    }
  };

  return (
    <div className="article">
      <Link to={`/articles/${_id}`}>
        <div className="article__avatar">
          {avatar ? (
            <img src={avatar} alt="Фоновая картинка" />
          ) : (
            <div className="article__avatar-noavatar">{title}</div>
          )}
        </div>
      </Link>
      <div className="article__wrapper">
        <div className="article__content">
          <Link to={`/articles/${_id}`}>
            <div className="article__content-title">{title}</div>
          </Link>
          <div className="article__content-text">{text && text}</div>
        </div>
        <div className="article__edit">
          <div className="article__edit-more">
            <Link className="article__content-link" to={`/articles/${_id}`}>
              Подробнее...
            </Link>
          </div>
          {isAuth === true && (
            <div className="article__edit-edit">
              <Link className="article__edit-change" to={`/change/${_id}`}>
                Изменить
              </Link>
              <button onClick={() => removeArticle(_id)} className="article__edit-delete">
                Удалить
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

// export default BlogItem;
