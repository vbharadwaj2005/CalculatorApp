import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../styles/themeContext";
import { Styles } from "../styles/globalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
}
export default function Button({ title, onPress }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity 
            style={Styles.btnDark} 
            onPress={onPress}>
            <Text style={Styles.smallTextLight}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}