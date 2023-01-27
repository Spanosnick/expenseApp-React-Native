import {FlatList, Text} from "react-native";
import ExpenseItem from "./expenseItem";
import expenseItem from "./expenseItem";

function renderExpenseItem (itemData){
    return<ExpenseItem

        amount={itemData.item.amount}
        date={itemData.item.date}
        description={itemData.item.description}
        id={itemData.item.id}

    />
}

function ExpensesList({expenses}) {
    return <FlatList data={expenses} renderItem={renderExpenseItem}
    keyExtractor={(item)=> item.id}
    />

}

export default ExpensesList