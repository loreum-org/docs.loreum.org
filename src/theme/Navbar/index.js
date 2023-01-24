/* eslint-disable header/header */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
[object Object]
 */
import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function NavbarImageLogo() {
  return (
    <Link to="/" className={styles.flex_nav}>
      <div className={styles.flex__logo}>
          <div className={styles.image__white}>
            <img src='https://cdn.loreum.org/logos/white.svg' alt='white' />
          </div>
          <div className={styles.image__black}>
            <img src='https://cdn.loreum.org/logos/black.svg' alt='black' />
          </div>
      </div>
      <p className={styles.text_logo}>Loreum</p>
    </Link>
  );
}

export default function Navbar() {
  return (
        <NavbarLayout>
          <div className={styles.flex__none}>
            <NavbarImageLogo />
          </div>
            <NavbarContent />
            <div className={styles.flex_navbar}> 
              <NavbarImageLogo />
            </div>
      </NavbarLayout>
    
  );
}
