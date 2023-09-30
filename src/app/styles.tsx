import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const Video = styled.video`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`;
