import React from 'react';
import PropTypes from 'prop-types';


var ZyngaScroller = require('./ZyngaScroller.jsx');
var TouchableArea = require('./TouchableArea.jsx');

var cloneWithProps = require('react/lib/cloneWithProps');

function isTouchDevice() {
  return 'ontouchstart' in document.documentElement // works on most browsers
    || 'onmsgesturechange' in window; // works on ie10
}

class ScrollArea extends React.Component {
  componentWillMount() {
    this.scroller = new ZyngaScroller(isTouchDevice() ? this._handleScroll : this._doNothing);
  }

  render() {
    if (!isTouchDevice()) {
      return this.props.children;
    }

    return (
      <TouchableArea scroller={this.scroller}>
        {this.props.children}
      </TouchableArea>
    );
  }

  onContentDimensionsChange = (tableWidth, tableHeight, contentWidth, contentHeight) => {
    this.scroller.setDimensions(
      tableWidth,
      tableHeight,
      contentWidth,
      contentHeight
    );
  };

  _handleScroll = (left, top) => {
    this.props.handleScroll(left, top);
  };

  _doNothing = (left, top) => {

  };
}

module.exports = ScrollArea;
