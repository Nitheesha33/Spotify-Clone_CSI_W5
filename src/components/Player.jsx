import React from "react";
import styled from "styled-components";
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaRandom, FaRedo, FaVolumeUp } from "react-icons/fa";

const PlayerContainer = styled.div`
  background: #181818;
  color: #fff;
  padding: 12px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
const ProgressBar = styled.input`
  width: 300px;
`;
const Volume = styled.input`
  width: 100px;
`;

function Player() {
  return (
    <PlayerContainer>
      <Controls>
        <FaRandom />
        <FaStepBackward />
        <FaPlay />
        <FaStepForward />
        <FaRedo />
      </Controls>
      <ProgressBar type="range" min="0" max="100" />
      <Controls>
        <FaVolumeUp />
        <Volume type="range" min="0" max="100" />
      </Controls>
    </PlayerContainer>
  );
}

export default Player; 