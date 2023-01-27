import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ManageExpense from "./screens/ManageExpense";
import {GlobalStyles} from "./constants/styles";
import {Ionicons} from '@expo/vector-icons'
import IconButton from "./components/UI/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpensesOverView() {
    return <Tab.Navigator screenOptions={ ({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight :({tintColor}) =>  <IconButton
            icon={'add'}
            size={30}
            color={'blue'}
            onPress={ () => {navigation.navigate('ManageExpense')}      }/>
    })}>
        <Tab.Screen name={'Recent Expenses'} component={RecentExpenses}
                    options={{
                        tabBarIcon: ({color, size,}) => <Ionicons name={'hourglass'} size={25} color={color}/>
                    }
                    }/>
        <Tab.Screen name={'All Expenses'} component={AllExpenses}
                    options={{
                        tabBarIcon: ({color, size,}) => <Ionicons name={'calendar'} size={25} color={color}/>
                    }
                    }/>
    </Tab.Navigator>
}

export default function App() {

    return (
        <>
            <ExpensesContextProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                    headerStyle:{
                        backgroundColor :GlobalStyles.colors.primary500,

                    }
                }}>
                    <Stack.Screen
                        name="Expenses OverView"
                        component={ExpensesOverView}
                        options={{headerShown: false}}/>
                    <Stack.Screen
                        name="ManageExpense"
                        component={ManageExpense}
                    />
                </Stack.Navigator>
            </NavigationContainer>
                </ExpensesContextProvider>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
