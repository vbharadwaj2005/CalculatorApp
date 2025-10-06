import { useContext } from "react";
import { Pressable, Text } from "react-native";
import { ThemeContext } from "../styles/themeContext";
import { Styles } from "../styles/globalStyles";
import { myColors } from "../styles/colors";

interface ButtonProps {
    onPress: () => void;
    title: string;
}

const getButtonStyle = (title: string) => {
    if (['+', '-', '×', '÷', '=', '%'].includes(title)) {
        return {
            ...Styles.btnDark,
            backgroundColor: myColors.white,
        };
    }
    if (['C', 'HClr', '⌫'].includes(title)) {
        return {
            ...Styles.btnDark,
            backgroundColor: myColors.surfaceContainerHighest,
        };
    }
    return Styles.btnDark;
};

const getTextStyle = (title: string) => {
    if (['+', '-', '×', '÷', '=', '%'].includes(title)) {
        return {
            ...Styles.smallTextLight,
            color: myColors.dark,
        };
    }
    if (['C', 'HClr', '⌫'].includes(title)) {
        return {
            ...Styles.smallTextLight,
            color: myColors.white,
        };
    }
    return Styles.smallTextLight;
};

export default function Button({ title, onPress }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <Pressable
            style={getButtonStyle(title)}
            onPress={onPress}>
            <Text style={getTextStyle(title)}>
                {title}
            </Text>
        </Pressable>
    );
}