import { FunctionComponent } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { MainWrapperProps } from "./types";

const {background} = colors;

const StyledView = styled.View`
    flex:1;
    padding-top: 40px;
    background-color: ${background};
    justify-content: center;
`

const MainWrapper: FunctionComponent<MainWrapperProps> = ({style,children})=>{
    return <StyledView style={style}>{children}</StyledView>
}

export default MainWrapper;