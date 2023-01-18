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
import styles from './styles.module.css';

function NavbarImageLogo() {
  return (
    <div className={styles.flex__logo}>
        <div className={styles.image__white}>
          <img src='https://cdn.loreum.org/logos/white.svg' alt='white' />
        </div>
        <div className={styles.image__black}>
          <img src='https://cdn.loreum.org/logos/black.svg' alt='black' />
        </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <NavbarLayout>
      <NavbarImageLogo />
      <NavbarContent />
    </NavbarLayout>
  );
}
