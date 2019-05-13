import React, { Component } from 'react';
import { addToFave, isInWishlist } from '../../utils';
import SvgIcon from '../../../dist/assets/images/fave.svg';

export default class faveButton extends Component {

  state = {
    active: isInWishlist(this.props.id)
  }

  onClick = () => {
    const { id } = this.props;
    addToFave(id);
    this.setState(prevState => ({
      active: !prevState.active
    }))
  }

  render () {
    const { active } = this.state;

    return (
      <SvgIcon className={`fave ${active ? 'fave--active' : ''}`} onClick={this.onClick}/>
    )
  }
} 