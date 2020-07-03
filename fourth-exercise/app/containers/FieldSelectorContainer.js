import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleFilter } from '../store/filterReducers';
import FieldsSelector from '../components/FieldsSelector';
import { getFilterByStatus } from '../selectors/filterSelectors';

const mapStateToProps = state => ({
  filters: state.filters,
  selectedFilters: getFilterByStatus(state, true),
  unselectedFilters: getFilterByStatus(state, false),
})

const mapDispatchToProps = ({
  toggleFilter,
})

class FieldListContainer extends Component {
  render() {
    return (<FieldsSelector
      selectedFilters={this.props.selectedFilters}
      unselectedFilters={this.props.unselectedFilters}
      toggleFilter={this.props.toggleFilter}
    />)
  }
}

FieldListContainer.propTypes = {
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
  unselectedFilters: PropTypes.arrayOf(PropTypes.string),
  toggleFilter: PropTypes.func.isRequired,
}

FieldListContainer.defaultProps = {
  selectedFilters: [],
  unselectedFilters: [],
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldListContainer);
