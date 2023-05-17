/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
[object Object]
 */
// eslint-disable-next-line header/header
import React from 'react';
import Link from '@docusaurus/Link';
// import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// const featuresLinks = [
//   {
//     title: 'Stack Overflow',
//     link: 'https://stackoverflow.com/questions/tagged/docusaurus',
//   },
//   {
//     title: 'Twitter',
//     link: 'https://twitter.com/docusaurus',
//   },
//   {
//     title: 'Discord',
//     link: 'https://discordapp.com/invite/docusaurus',
//   }
// ];

const featureLogo = [
  {
    title: 'Loreum',
    alt: 'Loreum Logo',
    src: 'https://cdn.loreum.org/logos/white.svg',
  }
];

export function FooterLogoDisplay() {

  return (
  <div className={styles.footer__bottom}>
    {featureLogo.map(({id, title, src, alt}) => (
    <div key={id} className={styles.flex__bottom}>
      <div className={styles.image}>
        <img className={styles.img__logo} src={src} alt={alt} />
      </div>
      <h1 className={styles.footer__title}>{title}</h1>
      <p className={styles.footer__text}>Copyright © ${new Date().getFullYear()} Meta Platforms, Inc. Built with Docusaurus.</p>
    </div>
  ))}
  </div>
  )
  
}

export default function FooterDisplay() {
  return (
    <>
    {/* <FooterLogoDisplay /> */}
    <div className={styles.flex__box}>

      <div className={styles.features__link}>
        <Link
          className={styles.link__social}
          to="https://github.com/loreum-org">
          GitHub
        </Link>
      </div>
      <div className={styles.features__link_1}>
        <Link
          className={styles.link__social}
          to="https://discord.gg/JPFCJFHKxE">
          Discord
        </Link>
      </div>
      <div className={styles.features__link_2}>
        <Link
          className={styles.link__social}
          to="https://twitter.com/loreumdao">
          Twitter
        </Link>
      </div>
    </div>
    </>
  )
}