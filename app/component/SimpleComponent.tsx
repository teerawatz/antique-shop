import React from 'react';
import { View, Text } from 'react-native';

export default function SimpleComponent() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <View>
      <Text>Simple Component</Text>
      {items.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}
