import React, {PropTypes, Component} from 'react';

import themeable from '../../core/themeable';

import Select from '../../components/Select';
import theme from './HitsPerPageSelect.css';

class HitsPerPageSelect extends Component {
  static propTypes = {
    refine: PropTypes.func.isRequired,
    applyTheme: PropTypes.func.isRequired,
    hitsPerPage: PropTypes.number.isRequired,
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
    } = this.props;

    return (
      <Select
        onSelect={refine}
        selectedItem={hitsPerPage}
        items={items}
        applyTheme={applyTheme}
      />
    );
  }
}

export default themeable(theme)(HitsPerPageSelect);
