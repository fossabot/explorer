/*!
 * Phylogeny Explorer
 *
 * @summary
 * @author John Ropas
 * @since 02/10/2016
 *
 * Copyright(c) 2016 Phylogeny Explorer
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Content.css';

class Content extends Component {

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  componentWillMount() {
    this.context.setTitle(this.props.title);
  }

  componentWillReceiveProps(nextProps) {
    this.context.setTitle(nextProps.title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.path === '/' ? null : <h1>{this.props.title}</h1>}
          <div dangerouslySetInnerHTML={{ __html: this.props.content || '' }} />
        </div>
      </div>
    );
  }

}

export default withStyles(s)(Content);
