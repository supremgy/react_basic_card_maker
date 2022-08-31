import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Noah',
      company: 'Apple',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'supremgy@icloud.com',
      message: 'Just DO!',
      fileName: 'noah',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Aya',
      company: 'Apple',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'supremgy@icloud.com',
      message: 'Just DO!',
      fileName: 'noah',
      fileURL: null,
    },
    {
      id: '3',
      name: 'Noah3',
      company: 'Apple',
      theme: 'light',
      title: 'Software Engineer',
      email: 'supremgy@icloud.com',
      message: 'Just DO!',
      fileName: 'noah',
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
