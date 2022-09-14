import { FunctionComponent } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { TextProps } from "./types";

const { subTitle } = colors;

const StyledText = styled.Text`
  font-size: 20px;
  color: ${subTitle};
  text-align: left;
`;

const SubTitle: FunctionComponent<TextProps> = ({ style, children }) => {
  return <StyledText style={style}>{children}</StyledText>;
};

export default SubTitle;
