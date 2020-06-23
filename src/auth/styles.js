import styled from 'styled-components';

export const WrapPaper = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    background: #ecf0f3;
    width: 340px;
    /* height: 200px; */
    box-shadow:  7px 7px 10px #cbced1, -7px -7px 10px #ffffff;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: space-around;
    border-radius: 10px;
`;

export const Input = styled.input`
    height: 56px;
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-top:28px;
    background: none;
    border: 2px solid rgba(25, 25, 25, 0.32);
    box-sizing: border-box;
`;

export const Title2 = styled.div`
    position: absolute;
    left: 8.59%;
    top: 10.1%;

    /* H5 / Roboto Regular */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */
    color: #3D5170;
    mix-blend-mode: normal;
`;

export const Select = styled.select`
    height: 35px;
    color: #90d2c6;
    font-size: 2em;
    border: 1px solid #90d2c6;
    border-radius: 10px;
    margin: 15px;
    padding: 10px;
`;

export const Button = styled.button`
    background: ${props => props.primary ? "#90d2c6" : "white"};
    color: ${props => props.primary ? "white" : "#90d2c6"};
    height: 35px;
    font-size: 2em;
    margin: 15px;
    padding: 0.25em 1em;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;