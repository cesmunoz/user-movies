import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardList from '../components/CardList';
import { fetchUsers } from '../store/usersReducers';
import { fetchMovies } from '../store/moviesReducer';
import { getUsers } from '../selectors/userSelectors';
import { getUserMoviesIds } from '../selectors/movieSelectors'
import { getFilterByStatus } from '../selectors/filterSelectors';

const mapStateToProps = state => ({
  users: getUsers(state),
  movies: getUserMoviesIds(state),
  filters: getFilterByStatus(state, true),
})

const mapDispatchToProps = ({
  fetchUsers,
  fetchMovies,
})

class CardListContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (<CardList users={this.props.users} />)
  }
}

CardListContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
  fetchUsers: PropTypes.func.isRequired,
}

CardListContainer.defaultProps = {
  users: {},
}

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer);
