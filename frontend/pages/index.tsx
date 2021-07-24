import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Counter from '../components/Counter';
import TTS from '../components/Tts';
import MusicSlider from '../components/Music/MusicSlider';
import ToggleMenu from '../components/Music/ToggleMenu';
import MusicPlayer from '../components/musicPlayer';

export default function Home() {
  return (
    <div className="container">
      {/* <TTS /> 
      <Link href="/tts"></Link>
      <Link href="/music"></Link>
       */}
      <ToggleMenu />
      <MusicSlider />
      <MusicPlayer />
    </div>
  );
}
