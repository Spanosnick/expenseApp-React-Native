import {View,StyleSheet} from "react-native";
import ExpesesList from "../expesesList";
import ExpensesSummary from "../expensesSummary";
import {GlobalStyles} from "../../constants/styles";


function ExpensesOutput({expenses,expensesPeriod}) {

    return <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
        <ExpesesList expenses={expenses} />
    </View>
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container : {
        flex :1,
        padding : 20,
        backgroundColor : GlobalStyles.colors.primary700
    }
})