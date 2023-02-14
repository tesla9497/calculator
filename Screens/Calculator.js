import { Alert, Modal, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CalcButton from '../Components/CalcButton'

const Calculator = () => {
    const [value, setValue] = useState('0');
    const [showWarning, SetshowWarning] = useState(false);

    const onDigitPress = (val) => {
        if (val == 'C') {
            setValue('0')
        }
        else if (value == '1+3+9') {
            SetshowWarning(true);
        }
        else {
            if (value == '0') {
                setValue(val)
            }
            else {
                setValue(value + val)
            }
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden />

            <Modal
                visible={showWarning}
                transparent
                onRequestClose={() =>
                    SetshowWarning(false)
                }
                animationType='fade'
                hardwareAccelerated>
                <View style={styles.centered_view}>
                    <View style={styles.warning_modal}>
                            <Text style={styles.warnText}>Hello World</Text>
                    </View>
                </View>
            </Modal>

            {/* Display */}
            <View style={styles.displayContainer}>
                <View style={styles.DispContainer}>
                    <Text style={styles.displayTxt}>{value}</Text>
                </View>
            </View>

            {/* SpacingLine */}
            <View style={{ width: '85%', height: 1, backgroundColor: '#363636', marginBottom: 20, alignSelf: 'center' }} />

            {/* Buttons */}
            <View style={{ paddingHorizontal: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.buttonRow}>
                    <CalcButton onPress={() => onDigitPress('C')} title="C" color="#5b5d5c" />
                    <CalcButton onPress={() => onDigitPress('7')} title="7" color="#606262" />
                    <CalcButton onPress={() => onDigitPress('4')} title="4" color="#5b5d5c" />
                    <CalcButton onPress={() => onDigitPress('1')} title="1" color="#5b5d5c" />
                    <CalcButton onPress={() => onDigitPress('.')} title="." color="#5b5d5c" />
                </View>
                <View style={styles.buttonRow}>
                    <CalcButton onPress={() => onDigitPress('+/-')} title="+/-" color="#5b5d5c" />
                    <CalcButton onPress={() => onDigitPress('8')} title="8" color="#5b5c5c" />
                    <CalcButton onPress={() => onDigitPress('5')} title="5" color="#5b5d5c" />
                    <CalcButton onPress={() => onDigitPress('2')} title="2" color="#5b5d5c" />
                    <CalcButton onPress={() => onDigitPress('0')} title="0" color="#5b5d5c" />
                </View>
                <View style={styles.buttonRow}>
                    <CalcButton onPress={() => onDigitPress('%')} title="%" color="#5b5d5c" />
                    <CalcButton onPress={() => onDigitPress('9')} title="9" color="#5b5d5c" />
                    <CalcButton onPress={() => onDigitPress('6')} title="6" color="#5b5d5c" />
                    <CalcButton onPress={() => onDigitPress('3')} title="3" color="#5b5d5c" />
                    <CalcButton onPress={() => onDigitPress('00')} title="00" color="#5b5d5c" />
                </View>
                <View style={styles.buttonColumnLast}>
                    <CalcButton onPress={() => onDigitPress('/')} title="/" color="#5b5d5c" />
                    <CalcButton onPress={() => onDigitPress('x')} title="x" color="#5b5d5c" backgroundColor="#363636" />
                    <CalcButton onPress={() => onDigitPress('-')} title="-" color="#5b5d5c" backgroundColor="#363636" />
                    <CalcButton onPress={() => onDigitPress('+')} title="+" color="#5b5d5c" backgroundColor="#363636" />
                    <CalcButton onPress={() => onDigitPress('=')} title="=" color="#5b5d5c"
                        backgroundColor="#faf5b3"
                        borderRadius={40}
                    />
                </View>
            </View>

        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3e403f',
        paddingTop: 50
    },
    DispContainer: {
        padding: 20
    },
    displayTxt: {
        fontSize: 70,
        color: '#878787',
        textAlign: 'right'
    },
    buttonRow: {
        justifyContent: 'space-between'
    },
    buttonColumnLast: {
        justifyContent: 'space-between',
        backgroundColor: "#363636",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    displayContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3e403f99'
      },
    warning_modal: {
        width: 300,
        height: 350,
        backgroundColor: '#9c9e9d',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      },
      warnText: {
        fontSize: 40,
        color: 'white',
        fontWeight: '300'
      }
})