import {Text, View} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/expensesOutput";
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses-context";
import {getDateMinusDays} from "../util/date";

function  RecentExpenses(){
    const expensesCtx =useContext(ExpensesContext);
    const filterExpenses = expensesCtx.expenses.filter( (expense)=>{
        const today =new Date();
        const date7DaysAgo =getDateMinusDays(today,40);
        return expense.date > date7DaysAgo;
    })
    return <ExpensesOutput expenses={filterExpenses}  expensesPeriod={'Recent Expences'}/>

}
export default RecentExpenses