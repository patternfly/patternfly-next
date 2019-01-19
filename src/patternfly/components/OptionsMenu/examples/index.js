import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import OptionsMenuSingleExampleRaw from '!raw!./options-menu-single-example.hbs';
import OptionsMenuMultipleExampleRaw from '!raw!./options-menu-multiple-example.hbs';
import OptionsMenuTopExampleRaw from '!raw!./options-menu-top-example.hbs';
import OptionsMenuAlignRightExampleRaw from '!raw!./options-menu-align-right-example.hbs';
import OptionsMenuSingleExample from './options-menu-single-example.hbs';
import OptionsMenuMultipleExample from './options-menu-multiple-example.hbs';
import OptionsMenuTopExample from './options-menu-top-example.hbs';
import OptionsMenuAlignRightExample from './options-menu-align-right-example.hbs';
import docs from '../docs/code.md';
import '../options-menu.scss';

export const Docs = docs;

export default () => {
  const optionsMenuSingleExample = OptionsMenuSingleExample();
  const optionsMenuMultipleExample = OptionsMenuMultipleExample();
  const optionsMenuTopExample = OptionsMenuTopExample();
  const optionsMenuAlignRightExample = OptionsMenuAlignRightExample();

  return (
    <Documentation docs={Docs}>
      <Example
        heading="Options Menu - Single option"
        className="is-expanded-dropdown"
        handlebars={OptionsMenuSingleExampleRaw}
      >
        {optionsMenuSingleExample}
      </Example>
      <Example
        heading="Options Menu - Multiple options"
        className="is-expanded-dropdown"
        handlebars={OptionsMenuMultipleExampleRaw}
      >
        {optionsMenuMultipleExample}
      </Example>
      <Example heading="Options Menu - Top" className="is-expanded-top" handlebars={OptionsMenuTopExampleRaw}>
        {optionsMenuTopExample}
      </Example>
      <Example
        heading="Options Menu - Align Right"
        className="is-expanded-dropdown is-align-right"
        handlebars={OptionsMenuAlignRightExampleRaw}
      >
        {optionsMenuAlignRightExample}
      </Example>
    </Documentation>
  );
};
