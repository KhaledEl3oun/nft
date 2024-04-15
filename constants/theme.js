import { PixelRatio } from "react-native";
const fontScale = PixelRatio.getFontScale();
export const SIZES = {
    small: 9 * fontScale,
    medium: 14 * fontScale,
    large: 18 * fontScale,
    Xlarge: 24 * fontScale,
};

export const COLORS = {
    bg: "#111827" ,
    cardBg: "#1f2937" ,
    secound: "#4f46e5" ,
    white: "#fff" ,
    black: "#000" ,
    grey: "#ddd" ,
};
export const FONTS = {
    bold: "InterBold" ,
    light: "InterLight" ,
    medium: "InterMedium" ,
    regular: "InterRegular" ,
    semiBold: "InterSemiBold" ,
};