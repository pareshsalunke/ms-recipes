import styled from 'styled-components';
import cn from 'classnames';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
}

const ErrorBase = ({ className, children}: Props) => {
  return (
    <>
      <div className={cn(className,'error-container')}>
        <div className={'error-not-available'}>
          <h2>{children}</h2>
        </div>
      </div>
    </>
  )
};

const CustomError = styled(ErrorBase)`
  &.error-container {
    display: flex;
    width: 100%;
    justify-content: center;
      
    & .error-not-available {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 450px;
      height: 64px;
      border: 1px solid red;
    }
  }
`;

export default CustomError;