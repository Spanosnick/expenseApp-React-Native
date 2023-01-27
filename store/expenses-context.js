import {createContext, useReducer} from "react";
const DUMMY_EXPENSES =[
    {
        id:'e1',
        description :'A pair of shoes',
        amount :5.45,
        date : new Date('2022-11-19')
    },
    {
        id:'e2',
        description :'A pair of t-shirts',
        amount :25.45,
        date : new Date('2022-12-01')
    },
    {
        id:'e3',
        description :'Ipone 10 pro',
        amount :205.45,
        date : new Date('2022-12-15')
    },
    {
        id:'e4',
        description :'PlayStation 5',
        amount :500.45,
        date : new Date('2023-01-10')
    },
    {
        id:'e5',
        description :'Udemy Course',
        amount :9.45,
        date : new Date('2023-01-25')
    },
    {
        id:'e6',
        description :'A pair of shoes',
        amount :5.45,
        date : new Date('2022-11-19')
    },
    {
        id:'e7',
        description :'A pair of t-shirts',
        amount :25.45,
        date : new Date('2022-12-01')
    },
    {
        id:'e8',
        description :'Ipone 10 pro',
        amount :205.45,
        date : new Date('2022-12-15')
    },
    {
        id:'e9',
        description :'PlayStation 5',
        amount :500.45,
        date : new Date('2023-01-10')
    },
    {
        id:'e10',
        description :'Udemy Course',
        amount :9.45,
        date : new Date('2023-01-25')
    },
    {
        id:'e11',
        description :'Ipone 10 pro',
        amount :205.45,
        date : new Date('2022-12-15')
    },
    {
        id:'e12',
        description :'PlayStation 5',
        amount :500.45,
        date : new Date('2023-01-10')
    },
    {
        id:'e13',
        description :'Udemy Course',
        amount :9.45,
        date : new Date('2023-01-10')
    }
]

export const ExpensesContext = createContext({
    expenses:[],
    addExpense :({description,amount,date}) =>{},
    deleteExpense :(id) =>{},
    updateExpense :(id,{description,amount,date}) =>{},
});

function expensesReducer(state,action){
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload,id:id},...state]
        case 'UPDATE':
            const updatetableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id)
            const updateTableExpense = state[updatetableExpenseIndex];
            const updatedItem = {...updateTableExpense,...action.payload.data};
            const updatedExpenses = [...state];

            updatedExpenses[updatetableExpenseIndex] =updatedItem
            return updatedExpenses;
        case 'DELETE':
            return  state.filter((expense) => expense.id !== action.payload)
        default :
            return state;
    }
}

function  ExpensesContextProvider({children}){
   const [expensesState,dispatch]= useReducer(expensesReducer,DUMMY_EXPENSES);

   function addExpense(expenseData){
       dispatch({type:'ADD',payload : expenseData});
   }
    function updateExpense(id,expenseData){
        dispatch({type:'UPDATE',payload : {id:id,data:expenseData}});
    }

    function deleteExpense(id){
        dispatch({type:'DELETE',payload : id });
    }


    const value = {
       expenses : expensesState,
        addExpense :addExpense,
        updateExpense :updateExpense,
        deleteExpense :deleteExpense
    }

    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>
}
export default ExpensesContextProvider