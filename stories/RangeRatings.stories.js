import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Range} from '../packages/react-instantsearch';
import {withKnobs, object, number} from '@kadira/storybook-addon-knobs';
import Wrapper from './util';

const stories = storiesOf('Range Ratings', module);

stories.addDecorator(withKnobs);

stories.add('default', () =>
  <Wrapper >
    <Range.Rating attributeName="rating" max={6}/>
  </Wrapper>
).add('playground', () =>
  <Wrapper >

    <Range.Rating attributeName="rating"
                  max={number('pagesPadding', 6)}
                  translations={object('translate', {ratingLabel: ' & Up'})}
    />
  </Wrapper>
);
