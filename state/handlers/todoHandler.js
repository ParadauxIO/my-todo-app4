import { supabase } from "../supabase"

const getTodoItems = async () => {
    // SELECT ? FROM TODO_ITEMS
    let {data, error} = await supabase.from("todo_items").select("*");

    if (error) {
        console.error(error);
        return;
    }

    return data;
}

export { getTodoItems }