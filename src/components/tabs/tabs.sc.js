import styled, {keyframes} from 'styled-components';

const slideIn = keyframes`
  from {
    margin-top: -50px;
  }
  to {
    margin-top: 0;
  }
`

export const InfoTabBar = styled.div`
  display: flex;
  justify-content: center;
  animation: ${slideIn} 500ms ease-in;
  > a {
    margin: 0 20px;
    text-decoration: none;
  }
`;

export const TabSection = styled.div`
  width: 100%;
  background-color: rgba(255,255,255,0.6);
`;

export const Tab = styled.div`
  font-weight: 400;
  letter-spacing: 3px;
  height: 40px;
  color: black;
  line-height: 40px;
  font-size: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 10%;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease;
  &:hover {
    text-decoration: underline;
    background-color: #2e703f;
    color: white;
  }
`
