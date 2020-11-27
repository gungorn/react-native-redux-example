import React from 'react';
import { View, Text } from 'react-native';

const RENDER = () => {
    React.useEffect(() => console.log('S0'));

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10, backgroundColor: 'blue' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>S0 </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>S0 </Text>
        </View>
    );
}

export default RENDER;