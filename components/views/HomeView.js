import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-web";
import { getTodoItems } from "../../state/handlers/todoHandler";
import { supabase } from "../../state/supabase";

export default function HomeView() {
    let [todoListInputText, setTodoListInputText] = useState("");
    let [todoListItems, setTodoListItems] = useState([]);

    useEffect(() => {
        async function load() {
            setTodoListItems(await getTodoItems())
        }

        load();
    }, [])

    function addItem() {
        setTodoListItems(todoListItemsOld => [...todoListItems, {
                id: todoListItemsOld[todoListItemsOld.length-1] !== undefined 
                ? todoListItemsOld[todoListItemsOld.length-1].id + 1
                : 1,
                item: todoListInputText
            }]
        )
    }

    function complete(itemToBeDeleted) {
        setTodoListItems(todoListItemsOld => todoListItemsOld.filter(item => item !== itemToBeDeleted))
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>My to do app</Text>
            </View>
            <View style={styles.topBarControls}>
                <TextInput style={styles.todoInput} value={todoListInputText} onChangeText={setTodoListInputText}/>
                <TouchableOpacity onPress={addItem} style={styles.button}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.todoListItems}>
                {
                    todoListItems.map(item => <View key={item.id} style={styles.todoListItem}>
                        <Text>{item.content}</Text>
                        <TouchableOpacity style={styles.todoListCompleteButton} onPress={() => {
                            complete(item)
                        }}>
                            <Text style={styles.todoListCompleteButtonLabel}>x</Text>
                        </TouchableOpacity>
                    </View>)
                }
            </View>

            <Button title="Logout" onPress={() => {
                (async () => {
                    await supabase.auth.signOut()
                })()
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1D3557"
    },
    header: {
        color: "#F1FAEE",
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    },
    button: {
        marginTop: 25,
        backgroundColor: "#457B9D",
        padding: 20
    },
    topBarControls: {
        backgroundColor: "",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginRight: 30
    },
    todoInput: {
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25,
        padding: 10,
        backgroundColor: "#457B9D",
        fontSize: 25
    },
    topBarButton: {
        paddingLeft: 25,
        paddingRight: 25
    },
    todoListItems: {
        margin: 25
    },
    todoListItem: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "#457B9D",
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    todoListCompleteButton: {
        backgroundColor: "#ffafcc",
        borderColor: "#E63946",
        borderWidth: 2,
        width: 25,
        height: 25
    },
    todoListCompleteButtonLabel: {
        textAlign: "center"
    }
});