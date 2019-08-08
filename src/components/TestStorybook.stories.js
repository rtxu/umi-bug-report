import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TestStorybook from './TestStorybook';
import {A, B} from './A';

export const data = {
  A,
  B,
};

export const actions = {
};

storiesOf('TestStorybook', module)
  .add('default', () => <TestStorybook {...data} {...actions} />)