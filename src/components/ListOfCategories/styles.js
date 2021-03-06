import styled from 'styled-components'
import { popDown } from '../../styles/animation'

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    margin-bottom: 1rem;
    width: 100%;
    &.fixed {
        ${popDown()}
        background-color: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: 1px;
        transform: scale(.8);
        z-index: 1;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Item = styled.li`
    padding: 0 8px;
`