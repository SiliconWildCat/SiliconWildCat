import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Counter from '../components/Counter';
import MusicSlider from '../components/Music/MusicSlider';
import ToggleMenu from '../components/Music/ToggleMenu';
// import MusicPlayer from '../components/MusicPlayer3';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <ToggleMenu />
      <MusicSlider />
      {/* <MusicPlayer /> */}
    </div>
  );
}
