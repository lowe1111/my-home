import React from 'react';

import github from '../../images/github_new.svg';
import linkedIn from '../../images/linked_new.svg';
import twitter from '../../images/twitter_new.svg';
import spotify from '../../images/spotify_new.svg';

import {AvatarImage, HeaderSection, ImageContainer, LinkContainer, LinkImg, Title} from "./header.sc";
import {InfoHeader} from "./header.sc";

const Header = () => (
    <InfoHeader>
        <HeaderSection>
            <LinkContainer>
                <a href="https://github.com/lowe1111" target="_blank"><LinkImg src={github} /></a>
                <a href="https://www.linkedin.com/in/lorenz-wei%C3%9F-032689165/" target="_blank"><LinkImg src={linkedIn} /></a>
                <a href="https://twitter.com/lorenzweisz" target="_blank"><LinkImg src={twitter} /></a>
                <a href="https://www.spotify.com/de/" target="_blank"><LinkImg src={spotify} /></a>
            </LinkContainer>
        </HeaderSection>
        <HeaderSection>
            <Title>Lorenz Weiß</Title>
        </HeaderSection>
        <HeaderSection>
          <ImageContainer>
            <AvatarImage  />
          </ImageContainer>
        </HeaderSection>
    </InfoHeader>
)

export default Header;
