/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    NativeModules,
    ImageBackground,
    DeviceEventEmitter
} from 'react-native';
import PullList from './pull/PullList'
let rowData = ['1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8'];
export default class App extends Component {

    static navigationOptions = ({navigation})=> ({
        header:null,
        tabBarLabel:'第二页',
        tabBarIcon: ({ tintColor,focused }) => (
            <Image style={{width:Platform.OS==='ios'?38/2:38,height:Platform.OS==='ios'?40/2:40}}
                   source={focused?AppImages.tab.project_active:AppImages.tab.project_unactive}/>
        ),
    })
    constructor(props){
        super(props);
    }

    componentDidMount() {
    }



    render() {
        return (
            <View style={styles.container}><Text style={styles.hello}>第二页</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    hello: {
        marginTop:20,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    Item:{
        backgroundColor:'gray',
        width:WIDTH,
        height:SCALE(100),
        margin:SCALE(10),
        justifyContent:'center',
        alignItems:'center'
    }
});