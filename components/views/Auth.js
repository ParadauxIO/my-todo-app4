import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { signIn, signUp } from "../../state/handlers/authHandler.js"

export default function Auth() {
    const [email, setEmaiil] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View styles={styles.topBar}>
                <Text style={styles.topBarText}>Authentication</Text>
            </View>
            <View style={styles.fields}>
                <View style={styles.field}>
                    <Text style={styles.fieldText}>Email</Text>
                    <TextInput
                        style={styles.fieldInput}
                        value={email}
                        onChangeText={setEmaiil}
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.fieldText}>Password</Text>
                    <TextInput
                        style={styles.fieldInput}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity
                    style={[styles.button, styles.buttonActive]}
                    onPress={() => {
                        signUp(email, password);
                    }}
                >
                    <Text style={styles.buttonActiveText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        signIn(email, password);
                    }}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414",
    },
    topBar: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    topBarText: {
        color: "#CCC",
        fontSize: 24,
        textAlign: "center",
    },
    fields: {},
    field: {},
    fieldText: {
        color: "white",
        fontSize: 16,
        margin: 16,
        marginTop: 3,
        marginBottom: 3,
    },
    fieldInput: {
        color: "white",
        backgroundColor: "#181818",
        padding: 10,
        fontSize: 14,
        margin: 16,
        marginTop: 3,
        marginBottom: 3,
    },
    button: {
        backgroundColor: "#181818",
        margin: 12,
        borderRadius: 12,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonText: {
        fontSize: 10,
        color: "#CCC",
        textTransform: "uppercase",
    },
    buttonActive: {
        backgroundColor: "#709fc5",
    },
    buttonActiveText: {
        color: "black",
    },
});