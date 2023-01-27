import {Text, View,StyleSheet} from "react-native";
import {GlobalStyles} from "../constants/styles";

function ExpensesSummary({expenses,periodName}) {
    const sumExpenses = expenses.reduce((currentValue,expense)=>{
       return  currentValue +expense.amount
    },0)
    return (<View style={styles.container}>
        <Text style={styles.period}>{periodName}</Text>
        <Text style={styles.sum}>{sumExpenses.toFixed(2)} € </Text>
    </View>)
}
const styles = StyleSheet.create({
    container :{
        padding :8,
        backgroundColor :GlobalStyles.colors.primary50,
        borderRadius :6,
        flexDirection :'row',
        justifyContent :'space-between',
        alignItems : 'center'
    },
    period :{
        fontSize : 12,
        fontWeight : '600',
        color : GlobalStyles.colors.primary400
    },
    sum :{
        fontSize : 16,
        fontWeight :'bold',
        color : GlobalStyles.colors.primary500
    }

})

export default ExpensesSummary