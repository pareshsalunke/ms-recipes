import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import styled from 'styled-components';
import cn from 'classnames';

interface Props {
  className?: string;
  children?: ReactNode;
  title?: string;
}

const LayoutBase = (props: Props) => {
  const { children, className, title = 'Marley Spoon Recipes' } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className={cn(className,'site-wrapper')}>
        { children }
      </div>
    </>
  )
}

const Layout = styled(LayoutBase)`
  &.site-wrapper {
    display: flex;
    margin-top: 150px;
  }
`;

export default Layout;
