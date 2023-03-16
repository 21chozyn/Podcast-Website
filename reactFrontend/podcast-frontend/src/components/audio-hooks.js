import React, { createContext, useState,useContext } from "react";
import coverArt from "../assets//images/coverArt1.jpg";
import defaultAudio from "../assets/audio/audio1.mp3";
const AudioContext = createContext();
export const useAudio = () => useContext(AudioContext);

const audioData = {
  audioSrc: defaultAudio,
  coverArt: coverArt,
  isPlaying: false,
};

export default function AudioContextProvider ({ children }) {
  const [audioSrc, setAudioSrc] = useState(audioData.audioSrc);
  const [coverArt, setCoverArt] = useState(audioData.coverArt);
  const [isPlaying, setIsPlaying] = useState(audioData.isPlaying);
  return (
    <AudioContext.Provider
      value={{ audioSrc, setAudioSrc,coverArt, setCoverArt,isPlaying, setIsPlaying }}
    >
      {children}
    </AudioContext.Provider>
  );
};
