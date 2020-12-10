import React, { useState } from 'react';
import ImageGrid from './ImageGrid/ImageGrid';
import Modal from './Modal/Modal';
import Title from './Title/Title';
import styles from './firegram.module.css';

function Firegram() {
  const [selectedImg, setSelectedImg] = useState(null)
  return (
    <div className={styles.App}>
      <Title/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default Firegram;
