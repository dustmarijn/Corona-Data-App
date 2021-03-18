import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Button({style, onPress, title, children}) {
    return (
        <TouchableOpacity style={style ? style : null} onPress={onPress ? onPress : null}>
            {title ?
                <Text style={{
                    color: style?.color,
                    fontSize: style?.fontSize,
                    fontWeight: style?.fontWeight,
                    textTransform: style?.textTransform
                }}>{title ? title : null}</Text>
            : null}
                {children}
        </TouchableOpacity>
    )
}
