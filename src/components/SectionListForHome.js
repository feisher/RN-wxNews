/**
 * Created by wenxin on 2017/8/18.
 */
import React, {Component, PropTypes} from 'react';
import {
    Text,
    View,
    SectionList,
    StyleSheet, TouchableHighlight,
} from 'react-native';
import {pxToDp} from "../utils/ScreenUtil";
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from "../utils/Toast";


export default class SectionListForHome extends Component {

    static propTypes = {
        dataSource: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.tabIcon = ['logo-android', 'logo-apple', 'logo-chrome', 'ios-film', 'ios-book', 'ios-apps', 'ios-radio'];
        this.tabColor = ['rgb(141,192,89)', '#000', 'rgb(51,154,237)', '#9370db', '#00ced1', 'rgb(249,89,58)', '#ffa500'];
    }


    //界面渲染完回调该方法
    componentDidMount() {

    }

    render() {

        let dataSource = this.props.dataSource;
        console.log('dataSource', dataSource);
        let sections = Object.keys(dataSource).map(key => {
            return dataSource[key];
        });

        console.log('sections', sections);

        return (
            <SectionList
                sections={sections}//设置数据源
                renderItem={this._renderListItem}//渲染条目
                renderSectionHeader={this._renderSectionHeader}
                keyExtractor={item => item.url}
                onEndReachedThreshold={0.5}//
            />
        )

    }

    _renderListItem = ({item}) => {
        return (
            <TouchableHighlight
                style={{
                    justifyContent: 'center',
                    paddingBottom: pxToDp(30),
                    paddingLeft: pxToDp(30),
                    paddingRight: pxToDp(30),
                    backgroundColor: '#fff',
                }}
            >
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="ios-create-outline" color={'#aaa'}/>
                        <Text style={{fontSize: pxToDp(25), color: '#aaa'}}> {item.who ? item.who : 'null'}</Text>
                    </View>
                    <Text style={{color: '#000', fontSize: pxToDp(30),}} numberOfLines={2}>{item.desc}</Text>
                </View>
            </TouchableHighlight>
        )

    }

    _renderSectionHeader = ({section}) => {
        let width = pxToDp(80);
        return (

            <View
                style={styles.section_header}
            >

                <View
                    style={{
                        width: width,
                        height: width,
                        borderRadius: width / 2,
                        backgroundColor: this.tabColor[this._judgeIconAttribute(section.key)],
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Icon name={this.tabIcon[this._judgeIconAttribute(section.key)]} color="#fff" size={width / 2}/>

                </View>

                <Text
                    style={{
                        color: 'steelblue',
                        fontSize: pxToDp(40),
                        marginLeft: pxToDp(20),

                    }}

                >{section.key}</Text>
            </View>

        )

    }


    _judgeIconAttribute(hearderLabel) {
        switch (hearderLabel) {
            case 'Android':
                return 0;
            case 'iOS':
                return 1;
            case '前端':
                return 2;
            case '休息视频':
                return 3;
            case '拓展资源':
                return 4;
            case 'App':
                return 5;
            case '瞎推荐':
                return 6;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section_header: {
        padding: pxToDp(30),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
})