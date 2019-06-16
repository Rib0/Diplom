import React, { PureComponent } from 'react';
import { addToFave, isInWishlist } from '../../utils';
import SvgIcon from '../../../dist/assets/images/fave.svg';
import cx from 'classnames';

export default class faveButton extends PureComponent {

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
    const buttonClassName = cx({
      fave: true,
      'fave--active': active
    })

    return (
      <SvgIcon className={buttonClassName} onClick={this.onClick}/>
    )
  }
} 
