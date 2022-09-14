import { DefaultTheme } from "@react-navigation/native";
import colors from "../components/colors";

export default {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
