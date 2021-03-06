import { keyframes, css } from "styled-components"

const fadeInKeyframes = keyframes`
   50%{ transform: scale(1.1); }
`

const popDownKeyFrames = keyframes`
    0%{ 
        margin-top: -100px;

    }
    100%{
        margin-top: 0;
    }
`

export const fadeIn = ({ time = '0.3s', type = 'ease' } = {}) => 
    css`
        animation: ${time} ${fadeInKeyframes} ${type};
`

export const popDown = ({ time = '0.4s', type = 'ease' } = {}) =>
    css`
        animation: ${time} ${popDownKeyFrames} ${type};
`
const animate__login = keyframes`
    0%{ transform: scale(1, 1); }
    50%{ transform: scale(1.1, 1.1) }
    100%{ transform: scale(1, 1) }
`

export const AnimationLogin = ({ time = '.4s', type = 'ease' } = {}) =>
    css`
        animation: ${time} ${animate__login} ${type};
`