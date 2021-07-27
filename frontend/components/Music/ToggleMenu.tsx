import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelector';
import { RootState } from '../../modules';
import { useSelector } from 'react-redux';
import { changeSelect } from '../../modules/music';
import { redirect } from 'next/dist/next-server/server/api-utils';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: #0D0C1D;
    color: #EFFFFA;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  `;
const theme = {
  primaryDark: '#0D0C1D',
  primaryLight: 'white',

  primaryHover: '#343078',
  mobile: { normal: '1024px', iphone_x: '380px', Ipad: '770px', dev: '830px' },
};

const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  z-index: 8000;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 500;
  color: white;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    color: white;
    background: ${({ theme, open }) =>
      open ? theme.primaryLight : theme.primaryLight};

    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
const StyledMenu = styled.nav<{ open: boolean; selectNum: number }>`
  display: flex;
  background: transparent;
  flex-direction: column;
  justify-content: center;
  height: 70%;
  text-align: left;
  padding: 2rem;
  position: absolute;

  border: 0.2rem solid white;
  border-radius: 20px;
  margin-top: 5rem;
  z-index: 200;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-120%)')};
  /* @media screen and (max-width: 769px) {
    width: 50%;
  } */
  @media screen and (max-width: 1024px) {
    height: 60%;
  }
  @media screen and (max-width: 769px) {
    top: 2%;
    width: 90%;
    left: -5%;
    height: 100%;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-102%)')};
  }
  @media screen and (max-width: 280px) {
    width: 85%;
  }
  width: 30%;
  margin-left: 10%;
`;

const MusicList = styled.div<{ index: number; selectNum: number }>`
  font-size: 1rem;
  width: 50%;
  text-transform: uppercase;
  padding: 1rem 0;
  padding-left: 0.5rem;
  cursor: pointer;
  font-weight: 300;
  letter-spacing: 0.5rem;
  color: white;
  text-decoration: none;
  border: 0.3rem solid white;
  transition: color 0.3s linear;
  :first-child {
    margin-top: 0rem;
  }
  margin-top: 4rem;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  border: ${(props) =>
    props.index === props.selectNum && '0.3rem solid #8e63e8'};
  font-weight: ${(props) => props.index === props.selectNum && '800'};

  &:hover {
    font-weight: 400;
    border: 0.3rem solid #8e63e8;
  }
  @media (max-width: ${({ theme }) => theme.mobile.Ipad}) {
    font-size: 1.2rem;
    text-align: center;
    border: 0.3rem solid white;

    margin-top: 5rem;
    width: 100%;
    padding: 2rem 2rem;
    ${(props) =>
      props.index === props.selectNum && {
        fontWeight: 400,
        border: '0.3rem solid #8e63e8',
      }}

    &:hover {
      font-weight: 400;
      border: 0.3rem solid #8e63e8;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile.normal}) {
    font-size: 1.2rem;
    /* padding: 0; */
  }
  @media (max-width: ${({ theme }) => theme.mobile.dev}) {
    font-size: 1rem;
    /* padding: 0; */
  }
  @media (max-width: ${({ theme }) => theme.mobile.iphone_x}) {
    font-size: 1rem;
  }
`;
export default function ToggleMenu() {
  const [open, setOpen] = useState(true);
  const { selectNum, musics } = useSelector(({ music }: RootState) => ({
    selectNum: music.selectNum,
    musics: music.musics,
  }));
  const dispatch = useAppDispatch();
  const onChangeNum = ({ e, index }) => {
    e.preventDefault();
    dispatch(changeSelect(index));
    console.log(e.target);
  };
  return (
    <div className="toggle_bar">
      <ThemeProvider theme={theme}>
        <>
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </StyledBurger>
          <div className="musicList">
            <div className="toggle_bar">
              <StyledMenu open={open} selectNum={selectNum}>
                {musics.map((music, index) => (
                  <MusicList
                    index={index}
                    selectNum={selectNum}
                    onClick={(e) => {
                      onChangeNum({ e, index });
                      console.log(index);
                    }}
                    key={music.title}
                  >
                    {music.title}
                  </MusicList>
                ))}
              </StyledMenu>
            </div>
          </div>
        </>
      </ThemeProvider>
    </div>
  );
}
