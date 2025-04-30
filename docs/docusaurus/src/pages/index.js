import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@theme/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Scalable AI Agent Platform for Small Businesses">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>Frontend</h3>
                <p>Next.js with HuggingFace's Open Chat UI</p>
              </div>
              <div className="col col--4">
                <h3>Backend</h3>
                <p>FastAPI with Supabase Authentication</p>
              </div>
              <div className="col col--4">
                <h3>Workflow</h3>
                <p>N8N for automation and orchestration</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 