import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Button({style, onPress, title}) {
    return (
        <TouchableOpacity style={style ? style : null} onPress={onPress ? onPress : null}>
            <Text style={{color: style?.color, fontSize: style?.fontSize, fontWeight: style?.fontWeight, textTransform: style?.textTransform}}>{title ? title : 'Geen titel gezet'}</Text>
        </TouchableOpacity>
    )
}
