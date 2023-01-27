import {Pressable, Text, View,StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/styles";

function  Button ({textValue,onPress,mode}){
    return <View>
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={[styles.button,mode === 'flat' && styles.flat]}>
                <Text style={[styles.buttonText,mode === 'flat'&& styles.flatText ]}>{textValue}</Text>
            </View>
        </Pressable>
    </View>
}
export default Button;

const styles = StyleSheet.create({
    button:{
        borderRadius :5,
        padding :8,
        backgroundColor :GlobalStyles.colors.primary500,
        marginHorizontal :15
    },
    flat :{
        backgroundColor : 'transparent'
    },
    buttonText :{
        color :'white',
        textAlign :'center'
    },
    flatText :{
        color :GlobalStyles.colors.primary200
    },
    pressed :{
        opacity : 0.5,
        backgroundColor : 'white',
        borderRadius :5,
    }

})