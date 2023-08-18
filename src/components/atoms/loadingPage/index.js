import React from 'react';
import Logo from '@components/atoms/logo';
import Head from 'next/head';
import Style from './style';

const LoadingPage = () => {
  return (
    <Style>
      <Head>
        <title> Lermo - Social Learning Network </title>
        <meta property="og:url" content="http://lermo.io" />
        <meta property="og:type" content="Lermo – Social Learning Network" />
        <meta property="og:title" content="Lermo – Social Learning Network" />
        <meta property="og:description" content="The education system that all of us can freely access and share knowledge, information, and experience with each other. The education system that truly belongs to everyone." />
        <meta property="og:image" content="https://www.lermo.io/images/slider/slide2.png" />
      </Head>
      <div className="content">
        <Logo /> L O A D I N G . .
      </div>
    </Style>
  );
};

export default LoadingPage;
