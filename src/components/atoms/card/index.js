import React from 'react';
import PropTypes from 'prop-types';
import Style from './style';

const Card = ({ children, icon }) => {
  return (
    <Style>
      {icon && (<div className="icon-card">{icon}</div>)}
      <div className="icon-content">
        {children}
      </div>
    </Style>
  );
};

Card.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  icon: null,
};

export default Card;
