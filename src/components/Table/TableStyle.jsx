import styled from "styled-components";

export const TableContainer = styled.table`
    width: 98%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1120px;
    margin: 20px auto;
`

export const Th = styled.th`
    border-bottom: inset;
    padding-bottom: 5px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : auto)};
`