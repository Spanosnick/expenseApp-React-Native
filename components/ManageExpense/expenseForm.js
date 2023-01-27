import {Text, View,StyleSheet,Alert} from "react-native";
import Input from "./input";
import {useState} from "react";
import Button from "../UI/Button";
import {getFormattedDate} from "../../util/date";

function expenseForm({onCancel,onSubmit,submitButtonLabel,defaultValues}) {
    const [inputValues,setinputValues] = useState({
        amount:defaultValues ? defaultValues.amount.toString() : '',
        date:defaultValues ? getFormattedDate(defaultValues.date) : '',
        description:defaultValues ? defaultValues.description.toString() : '',
    })

    function inputChangeHandler(inputIdentifier,enteredValue) {
        setinputValues((currentInputsValues) => {
            return{
                ...currentInputsValues,
                // We target and change the value dynamic
                [inputIdentifier] :enteredValue
            }
        })
    }

    function submitHandler(){
        const expenseData = {
            amount : +inputValues.amount,
            date : new Date(inputValues.date),
            description : inputValues.description
        }
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0


        if (!amountIsValid ){
            Alert.alert('Invalid Input','Please check your Amount Input')
            return;
        }else if (!dateIsValid) {
            Alert.alert('Invalid Input','Please check your date Input')
            return;
        }else if (!descriptionIsValid){
            Alert.alert('Invalid Input','Description cant be null')
            return;
        }

        onSubmit(expenseData)
    }


    return <View style={styles.form}>
        <View style={styles.inputRow}>
            <Input
                style={styles.rowInput}
                label={'Amount'} TextInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: inputChangeHandler.bind(this,'amount'),
                value :inputValues.amount
            }
            }/>
            <Input
                style={styles.rowInput}
                label={'Date'}
                TextInputConfig={{
                    value:inputValues.date,
                placeholder: 'YYY-MM-DD',
                maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this,'date'),
            }
            }/>
        </View>
        <Input label={'Description'}

               TextInputConfig={{
                   multiline: true,
                   value:inputValues.description,
                   onChangeText: inputChangeHandler.bind(this,'description'),
               }
               }

        />
        <View style={styles.buttonContainer}>
            <Button textValue={'Cancel'} mode={'flat'} onPress={onCancel} />
            <Button textValue={submitButtonLabel}  onPress={submitHandler} />
        </View>
    </View>
}

const  styles =StyleSheet.create({
    form :{
        marginTop:20
    },
    inputRow :{
        flexDirection :'row',
        justifyContent :'space-between'
    },
    rowInput :{
        flex :1
    },
    buttonContainer :{
        flexDirection :'row',
        alignItems :'center',
        justifyContent :'center'
    }
})
export default expenseForm