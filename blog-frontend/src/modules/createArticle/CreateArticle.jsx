import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { createArticle } from '../../redux/actions/blogActions.js';
import { Button } from '../../components';

import './CreateArticle.scss';

function CreateArticle() {
  const [titleInput, setTitleInput] = React.useState('');
  const [textInput, changeTextInput] = React.useState('');
  const [avatarInput, changeAvatarInput] = React.useState('');
  const [validForm, changeValidForm] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!titleInput || !textInput) {
      changeValidForm(false);
    } else {
      changeValidForm(true);
    }
  }, [titleInput, textInput, avatarInput]);

  const createNewArticle = (e, titleInput, textInput, avatarInput) => {
    e.preventDefault();
    dispatch(createArticle(titleInput, textInput, avatarInput));
  };

  return (
    <form className="article-edit">
      <div className="aricle-edit__type">Создать новую статью</div>
      <Link to="/">
        <Button className="article-edit__btnprev">Назад</Button>
      </Link>
      <div className="article-edit__changetitle">
        <div className="article-edit__changetitle-text">Укажите заголовок</div>
        <input
          onChange={(e) => setTitleInput(e.target.value)}
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
            onClick={(e) => createNewArticle(e, titleInput, textInput, avatarInput)}
            className="article-edit__btns-edit">
            Создать
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

export default CreateArticle;
