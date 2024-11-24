import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const MyComponent = () => {
  const {siteConfig, siteMetadata} = useDocusaurusContext();
  return (
    <div>
      <h1>{siteConfig.title}</h1>
      <div>{siteMetadata.siteVersion}</div>
      <div>{siteMetadata.docusaurusVersion}</div>
    </div>
  );
};