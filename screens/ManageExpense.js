import {Text, View, StyleSheet, TextInput} from "react-native";
import {useContext, useLayoutEffect} from "react";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/styles";
import Button from "../components/UI/Button";
import {ExpensesContext} from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/expenseForm";

function  ManageExpense({route,navigation}){
    const expensesCtx = useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedExpense = expensesCtx.expenses.find(expense =>expense.id == editedExpenseId)


    useLayoutEffect( () =>{
        navigation.setOptions({
            title : isEditing ?'Edit Expense' : 'Add Expense'
        })
    },[navigation,isEditing])
    function  deleteExpense() {
        expensesCtx.deleteExpense(editedExpenseId)
        navigation.goBack();
    }
    function cancelHandler(){
        navigation.goBack();

    }
    function confirmHandler( expenseData){
        if (isEditing){
            expensesCtx.updateExpense(editedExpenseId,expenseData)
        }else{
            expensesCtx.addExpense(expenseData);
        }
        navigation.goBack();
    }

    return <View style={style.container}>
        <View>
            <ExpenseForm
                onCancel={cancelHandler}
                submitButtonLabel={isEditing ?'Update' : 'Add'}
                onSubmit={confirmHandler}
                defaultValues={selectedExpense}
            />
        </View>

        {isEditing && <View style={style.deleteContainer}><IconButton icon={'trash'} color={'red'} size={30} onPress={deleteExpense}/></View>}
    </View>

}
export default ManageExpense

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor :GlobalStyles.colors.primary800
    },
    deleteContainer :{
        marginTop:16,
        paddingTop :8,
        borderTopWidth :5,
        borderTopColor :GlobalStyles.colors.primary200,
        alignItems :'center'
    }


})