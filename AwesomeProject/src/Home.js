/**
 * Created by Felix on 2016/7/1.
 */

import React,{
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Navigator,
}from 'react-native';

import Page_One from './Page_One';
import Page_Two from './Page_Two';
//import Page_Three from './Page_Three';

export default class Home extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}/>
                <TouchableHighlight
                    onPress={()=>this.props.navigator.push({
                        sceneConfig:Navigator.SceneConfigs.FloatFromRight,
                        component:Page_One,
                        params:{
                            name:'Page_One页面'
                        }
                    })}
                >
                    <Text style={[styles.page1, styles.text]}> 跳转到Page1</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={()=>this.props.navigator.push({
                        sceneConfig:Navigator.SceneConfigs.FloatFromBottom,
                        component:Page_Two,
                        params:{
                            name:'Page_Two页面'
                        }
                    })}
                >
                 <Text style={[styles.page2, styles.text]}>跳转到Page2</Text>
                </TouchableHighlight>
/*                <TouchableHighlight
                    onPress={()=>this.props.navigator.push({
                        sceneConfig:Navigator.sceneConfigs.HorizontalSwipeJumpFromRight,
                        component:Page_Three,
                        params:{
                            name:'Page_Three页面'
                        }
                    })}
                >
                    <Text style={[styles.page3, styles.text]}>跳转到Page3</Text>
                </TouchableHighlight>*/

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff',
    },
    title:{
        fontSize:60,
    },
    text:{
        textAlign:'center',
        color:'#333333',
        marginBottom:5,
    },
    page1:{
        fontSize:40,
        backgroundColor:'red',
    },
    page2:{
        fontSize:40,
        backgroundColor:'blue',
    },
    page3:{
        fontSize:40,
        backgroundColor:'yellow',
    },

});