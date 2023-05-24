/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Permissionless',
    imageUrl: 'https://images-ext-1.discordapp.net/external/dgGvsOEqEmUXKYI4K4B0MGfhVcFMo86CPbmF9M86pzc/https/ipfs.loreum.org/ipfs/QmfPWZ6VuFyLqTY92RRCCGRQxUKAhBAHs4vJb7wCT15hZr/5531',
    description: (
      <>
        {/* Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly. */}
      </>
    ),
  },
  {
    title: 'Decentralized',
    imageUrl: 'https://ipfs.loreum.org/ipfs/QmfPWZ6VuFyLqTY92RRCCGRQxUKAhBAHs4vJb7wCT15hZr/5539',
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
      </>
    ),
  },
  {
    title: 'Trusted',
    imageUrl: 'https://ipfs.loreum.org/ipfs/QmfPWZ6VuFyLqTY92RRCCGRQxUKAhBAHs4vJb7wCT15hZr/5538',
    description: (
      <>
        {/* Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer. */}
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className={styles.text__title}>{title}</h3>
      <p className={styles.text__title}>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Loreum DAO is a governance standard.">
      <header className={clsx(styles.heroBanner)}>
        <div className="container">
          <h1 className={styles.hero__title}>{siteConfig.title}</h1>
          <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
