import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class CalcButton extends Component {

    static defaultprops = {
        onPress: function () { },
        title: "",
        color: "white",
        backgroundColor: "black",
    }
    render() {
        var bc = this.props.backgroundColor;
        var br = this.props.borderRadius;
        return (
            <TouchableOpacity style={[styles.CalcBtn, { backgroundColor: bc, borderRadius: br }]} onPress={this.props.onPress}>
                <Text style={[styles.valueTxt, { color: this.props.color }]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    CalcBtn: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    valueTxt: {
        fontSize: 30,
        // fontWeight: 'bold'
    }
})