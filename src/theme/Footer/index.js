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
// eslint-disable-next-line import/no-extraneous-dependencies
import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLayout from '@theme/Footer/Layout';
import FooterDisplay from '../../pages/footer';
import styles from './styles.module.css'

function Footer() {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {links} = footer;
  return (
      <>
        <FooterLayout
          className={styles.footer__bg}
          links={links && links.length > 0 && <FooterLinks links={links} />}
          />
        <FooterDisplay />
      </>
  );
}
export default React.memo(Footer);
