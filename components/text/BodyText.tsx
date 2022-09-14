import { FunctionComponent } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { TextProps } from "./types";

const {primary} = colors;

const StyledText = styled.Text`
    font-size:13px;
    color:${primary};
    text-align:left;
`

const BodyText: FunctionComponent<TextProps> = ({style,children})=>{
    return <StyledText style={style}>{children}</StyledText>
}

export default BodyText;