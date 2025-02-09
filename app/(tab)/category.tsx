import React from 'react';
import { View, Text } from 'react-native';
import SimpleComponent from '../component/SimpleComponent'; // Import the new component

export default function Category() {
  return (
    <View>
      <Text>Category Page</Text>
      <SimpleComponent />
    </View>
  );
}

// Remove the SimpleComponent function from here
