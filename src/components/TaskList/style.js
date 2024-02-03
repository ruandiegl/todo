import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 32px;
    ul{
        width: 100%;
        padding: 0 16px;

    }

    li {
        list-style-type: none;
        color: #fffffe;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;

    }
    li + li{
        margin-top: 16px;
    }
    button{
        padding: 8px;
        border-radius: 50%;
        border: none;
        outline: none;
        cursor: pointer;
        margin: 0 4px;
    }
    .done {
        color: #2cb67d;
        text-decoration: line-through;
    }
    .check{
        background-color: #2cb67d;
    }
    .check:active{
        background-color: #95e7c5;
    }
    .trash {
        background-color: #7f5af0;
    }
    .trash:active {
        background-color: #a48af5;
    }



`;
