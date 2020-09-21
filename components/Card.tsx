import React, { ReactNode } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

interface Props {
  className: string;
  children: ReactNode;
}

const CardBase = (props: Props) => {
  const {
    className,
    children,
    ...other
  } = props;
  return (
    <li
      className={classnames('card', className)}
      { ...other }
    >
      {children}
    </li>
  );
}

const Card = styled(CardBase)`
  &.card {
    display: flex;
    padding: 1rem;
    width: 100%;
    align-items: center;
    @media(min-width: 40rem) {
      width: 50%;
    }
    @media(min-width: 56rem) {
      width: 38.3333%;
    }
  
    &.float:hover {
      box-shadow: 0 10px 10px -10px rgba(#7f8c8d, 1);
    }
  }
`

export default Card;