/**
 * Created by Felix on 2016/7/2.
 */
import React,{
    AppRegistry,
    Component,
    View,
    Text,
    Navigator,
    TouchableHighlight,
}from 'react-native';

import Page_Two from './Page_Two'

export default class Page_One extends Component{
    render(){
        return(
            <View style={styles.container}>
/*                <Text style={styles.title}>{this.props.name}</Text>
                <TouchableHighlight
                    onPress={()=>this.props.navigator.push({
                        sceneConfig:NavigatorSceneConfigs.FloatFromBottom,
                        component:Page_Two,
                        params:{
                            name:'Page2页面'
                        }
                    })}
                >
                    <Text style={[styles.text]}>跳转到Page2</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={()=>this.props.navigator.pop()}
                >
                    <Text style={[styles.text]}>返回</Text>
                </TouchableHighlight>*/

            </View>
        );
    }
}

const styles = Stylesheet.create({
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
        marginBottom:'#00ced1',
        fontSize:40,
    }
});
