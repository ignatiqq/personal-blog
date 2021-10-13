import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getInfoBeforeChange } from '../../redux/actions/blogActions.js';

import { change } from '../../redux/actions/blogActions.js';
import { getIdByUrl } from '../../services';

import './EditArticle.scss';

import { Button } from '../../components';

function EditArticle() {
  const [titleInput, changeTitleInput] = React.useState('');
  const [textInput, changeTextInput] = React.useState('');
  const [avatarInput, changeAvatarInput] = React.useState('');
  const [validForm, changeValidForm] = React.useState(false);

  const dispatch = useDispatch();

  const id = getIdByUrl(window.location.href);

  React.useEffect(() => {
    dispatch(getInfoBeforeChange(id));
  }, [id]);

  const { title, text, avatar } = useSelector(({ blogReducer }) => {
    return {
      title: blogReducer.currentArticle.article.title,
      text: blogReducer.currentArticle.article.text,
      avatar: blogReducer.currentArticle.article.avatar,
    };
  });

  React.useEffect(() => {
    if (title !== undefined && text !== undefined) {
      changeTitleInput(title);
      changeTextInput(text);
      changeAvatarInput(avatar);
    }
  }, [title, text, avatar]);

  React.useEffect(() => {
    if (!titleInput || !textInput) {
      changeValidForm(false);
    } else {
      changeValidForm(true);
    }
  }, [titleInput, textInput, avatarInput]);

  const changeArticle = (e, id, titleInput, textInput, avatarInput) => {
    e.preventDefault();
    dispatch(change(id, titleInput, textInput, avatarInput));
  };

  return (
    <form className="article-edit">
      <div className="aricle-edit__type">Изменить статью</div>
      <Link to="/">
        <Button className="article-edit__btnprev">Назад</Button>
      </Link>
      <div className="article-edit__changetitle">
        <div className="article-edit__changetitle-text">Укажите заголовок</div>
        <input
          onChange={(e) => changeTitleInput(e.target.value)}
          value={titleInput}
          placeholder="Заголовок"
        />
      </div>
      <div className="article-edit__changetitle">
        <div className="article-edit__changetext-text">Напишите текст статьи</div>
        <textarea
          onChange={(e) => changeTextInput(e.target.value)}
          className="article-edit__changetext-input"
          placeholder="Ваш текст"
          value={textInput}
        />
      </div>
      <div className="article-edit__changetitle">
        <div className="article-edit__changeavatar-text">Ссылка для фотографии</div>
        <input
          onChange={(e) => changeAvatarInput(e.target.value)}
          className="article-edit__changeavatar-input"
          placeholder="Ссылка по типу: https://img.ru/F1G23hdhgd"
          value={avatarInput}
        />
      </div>
      <div className="article-edit__btns">
        {validForm === true ? (
          <Button
            onClick={(e) => changeArticle(e, id, titleInput, textInput, avatarInput)}
            className="article-edit__btns-edit">
            Изменить
          </Button>
        ) : (
          <div style={{ color: '#fff', marginTop: '10px' }}>
            Проверьте правильность введенных вами данных
          </div>
        )}
      </div>
      <div className="article-edit__markdown">
        <div className="article-edit__markdown-prompt">
          Посмотреть правила написания текста Markdown:
        </div>
        <a
          className="article-edit__markdown-href"
          href="https://www.markdownguide.org/basic-syntax/#line-break-best-practices"
          alt="Подсказка markdown"
          target="_blank">
          Можно здесь
        </a>
      </div>
    </form>
  );
}

export default EditArticle;
