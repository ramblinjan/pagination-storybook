import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

import Pagination from '../src/components/Pagination/';

//=======
// FILL IN STORIES FOR THE PAGINATION COMPONENT WITH ACTIONS
// =====

storiesOf('Pagination component', module)
  // Pagination component on first page of five pages
  .add('')
  // Pagination component on last page of pages
  .add('')
  // Pagination component on third page of five pages
  .add('')
