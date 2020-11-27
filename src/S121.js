import React from 'react';
import { View, Text } from 'react-native';

const RENDER = () => {
    React.useEffect(() => console.log('S121'));

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10, backgroundColor: 'gray' }}>
            <Text onPress={() => ThemeContext.setBlue()} style={{ fontWeight: 'bold', fontSize: 20 }}>S121 </Text>
            <Text onPress={() => ThemeContext.setBlue()} style={{ fontWeight: 'bold', fontSize: 20 }}>S121 </Text>
        </View>
    );
}

export default RENDER;