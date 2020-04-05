import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props) => {
  const { icon, prefix = 'fas', className } = props;

  return <span className='icon'><FontAwesomeIcon className={className} icon={[prefix, icon]} /></span>
} 