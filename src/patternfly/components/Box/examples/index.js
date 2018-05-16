import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import Example1 from './example1.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const example1 = Example1();

  return (
    <Documentation docs={Docs}>
      <Example heading="Box">{example1}</Example>
    </Documentation>
  );
};
