/**
 * Created by Felix on 2016/7/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import Home from './Home';

export default class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{params:{name:'Home页面'},component:Home}}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromBottom;
                }}
                renderScene={(route, navigator) =>{
                    let DefaultComponent=route.component;
                    let number=12;
                    return <DefaultComponent number={number} {...route.params} navigator={navigator}/>
                }
              }
            />
        );
    }
}

const styles = StyleSheet.create({
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);