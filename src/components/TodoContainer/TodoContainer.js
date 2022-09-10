import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoContainer.module.css';

const TodoContainer = (props) => (
  <div className={styles.TodoContainer}>
    TodoContainer Component: {props.name}
  </div>
);

TodoContainer.propTypes = {};

TodoContainer.defaultProps = {};

export default TodoContainer;
