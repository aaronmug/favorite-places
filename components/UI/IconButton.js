import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={size} color={color} onPress={onPress} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    // margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
