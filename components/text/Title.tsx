import { FunctionComponent } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { TextProps } from "./types";

const {title} = colors;

const StyledText = styled.Text`
    font-size:40px;
    font-weight: bold;
    color:${title};
    text-align:left;
`

const Title: FunctionComponent<TextProps> = ({style,children})=>{
    return <StyledText style={style}>{children}</StyledText>
}

export default Title;