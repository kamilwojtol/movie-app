import React from 'react'
import Brand from './Brand/Brand';
import Navbar from './Navbar/Navbar';
import HeaderButtons from './HeaderButtons/HeaderButtons';

import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Brand />
      <Navbar />
      <HeaderButtons />
    </div>
  )
}
