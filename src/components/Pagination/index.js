import React, { Component } from 'react';
import './styles.css';

class Pagination extends Component {
  pageSelected(page) {
    const onChange = this.props.onChange;

    if(onChange) {
      onChange(page);
    }
  }

  renderPrev() {
    const disablePrev = (this.props.selectedIndex === 0);

    return (
      <button className='prev' disabled={disablePrev} onClick={() => this.pageSelected(this.props.selectedIndex - 1)}>
        Prev
      </button>
    )
  }

  renderNext() {
    const disabledNext = (this.props.selectedIndex === (this.props.length - 1));

    return (
      <button className='next' disabled={disabledNext} onClick={() => this.pageSelected(this.props.selectedIndex + 1)}>
        Next
      </button>
    )
  }

  renderNumbers() {
    const pages = [...Array(this.props.length).keys()];

    return pages.map((index) => {
      const isActive = this.props.selectedIndex === index;

      return (
        <button className={isActive ? 'is-active' : ''} key={index}
          onClick={() => this.pageSelected(index)}>
          {index + 1}
        </button>
      );
    });
  }

  render() {
    return (
      <div className='pagination'>
        {this.renderPrev()}
        {this.renderNumbers()}
        {this.renderNext()}
      </div>
    )
  }
}

export default Pagination;
