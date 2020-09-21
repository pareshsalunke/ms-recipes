import MarleySpoonSVG from './Logo';
import styled from 'styled-components';
import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

const NavbarBase = (props: Props) => {
  const { className } = props;
  return (
    <nav className={cn('navbar-container', className)}>
      <Link href="/" as={`/`}>
        <a>
          <MarleySpoonSVG />
        </a>
      </Link>
    </nav>
  )
};

const Navbar = styled(NavbarBase)`
  position: fixed;
  z-index: 1;
  top: 0;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  height: 40px;
  width: 100%;
  background-color: beige;
`

export default Navbar;