import styled from 'styled-components'


export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column nowrap;
    background-color: white;
`

export const TextArea = styled.textarea`
    height: 110px;
    width: 300px;
    resize: none;
    border-radius: 3px;
    background-color: #D3D3D3;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: .5rem;
    border: none;
`

export const CharacterCountDiv = styled.div`
    width: 300px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-top: .5rem;
`

export const CharacterCountColumn = styled.div`
    flex-basis: 33%;
`

export const Button = styled.button`
    border: none;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    &:hover {
        cursor: pointer;
        background: #808080;
    }
`

export const MessageContainer = styled.div`
    width: 300px;
    height: 300px;
    margin-bottom: 2rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
`

export const Message = styled.p`
    position: relative;
    background: #0084bd;
    border-radius: .4rem;
    height: 75px;
    width: 150px;
    padding: 1rem;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-top-color: #0084bd;
        border-bottom: 0;
        border-left: 0;
        margin-left: -10px;
        margin-bottom: -20px;
    }
`