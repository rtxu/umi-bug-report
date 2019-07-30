import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TestStorybook from './TestStorybook';

export const data = {
};

export const actions = {
};

storiesOf('TestStorybook', module)
  .add('default', () => <TestStorybook {...data} {...actions} />)