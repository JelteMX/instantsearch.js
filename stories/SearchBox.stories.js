import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {SearchBox, Hits, highlight, RefinementList, CurrentFilters, Pagination} from '../packages/react-instantsearch';
import {withKnobs, object} from '@kadira/storybook-addon-knobs';
import Wrapper from './util';

const stories = storiesOf('SearchBox', module);

stories.addDecorator(withKnobs);

stories.add('default', () =>
  <Wrapper >
    <SearchBox/>
  </Wrapper>
).add('playground', () =>
  <Wrapper >
    <SearchBox
      translations={object('translate', {
        submit: null,
        reset: null,
        submitTitle: 'Submit your search query.',
        resetTitle: 'Clear your search query.',
        placeholder: 'Search your website.',
      })}
    />
  </Wrapper>
).add('Getting Started', () =>
  <Wrapper >
    <div className="container">
      <CurrentFilters/>
      <SearchBox />
      <RefinementList attributeName="category" />
      <ProductHits />
      <Pagination />
    </div>
  </Wrapper>
);

const ProductHits = Hits.connect(({hits}) => {
  const hitComponents = hits.map(hit =>
    <div key={hit.objectID}>
      <span className="hit-name">{highlight('name', hit)}</span>
    </div>
  );

  return <div className="hits">{hitComponents}</div>;
});
