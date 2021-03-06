import styled from 'styled-components'
import { AnimationLogin } from '../../styles/animation'

export const Article = styled.article`
    min-height: 200px;
`

export const ImgWrapper = styled.div`
    display: block;
    overflow: scroll;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Img = styled.img`
    ${AnimationLogin()}
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 25px;
    border-radius: 10px;
`