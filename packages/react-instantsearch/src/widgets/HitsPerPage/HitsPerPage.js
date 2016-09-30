import React, {PropTypes, Component} from 'react';

import themeable from '../../core/themeable';

import LinkList from '../../components/LinkList';
import theme from './HitsPerPage.css';

class HitsPerPage extends Component {
  static propTypes = {
    refine: PropTypes.func.isRequired,
    hitsPerPage: PropTypes.number.isRequired,
    applyTheme: PropTypes.func.isRequired,
    createURL: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.number.isRequired,
          label: PropTypes.node,
        })
      ).isRequired,
  };

  render() {
    const {
      hitsPerPage,
      refine,
      items,
      applyTheme,
      createURL,
    } = this.props;

    return (
      <LinkList
        items={items.map(item =>
          typeof item === 'number' ? {value: item, label: item} : item
        )}
        onSelect={refine}
        selectedItem={hitsPerPage}
        applyTheme={applyTheme}
        createURL={createURL}
      />
    );
  }
}

export default themeable(theme)(HitsPerPage);
