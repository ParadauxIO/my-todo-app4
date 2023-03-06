import { Alert } from "react-native";
import { supabase } from "../supabase";

let signIn = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) Alert.alert(error.message);

    return error;
};

let signUp = async (email, password) => {
    const { error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) Alert.alert(error.message);

    return error;
};

export { signIn, signUp };