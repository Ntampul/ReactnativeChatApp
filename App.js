import react from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { View } from "react-native-web";
import  chat  from "./screens/chat";

const stack  = createStackNavigator();


function chatStack() {

    return(
        <Stack.Navigator>
           <Stack.Screen name="chat" component={chat} />
        </Stack.Navigator>
    );
}

function RootNavigator () {
    return (
        <NavigationContainer>
            <chatStack />
        </NavigationContainer>
    )
}

export default function App(){
    return<RootNavigator />
}
