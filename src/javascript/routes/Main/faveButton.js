import React, { PureComponent } from 'react';
import { addToFave, isInWishlist } from 'javascript/utils';
import Svg from 'javascript/components/Svg';
import cx from 'classnames';

export default class faveButton extends PureComponent {
  state = {
    active: isInWishlist(this.props.id),
  };

  onClick = () => {
    const { id } = this.props;
    addToFave(id);
    this.setState({ active: !this.state.active });
  };

  render() {
    const { active } = this.state;
    const buttonClassName = cx({
      fave: true,
      'fave--active': active,
    });

    return <Svg name={2} />;
  }
}
