
import { View, Text } from 'react-native';
import styles from './SectionHeading.style';

const SectionHeading = ({ heading, align = 'center' }) => {
  return (
    <View style={[styles.container, align === 'left' && { justifyContent: 'flex-start' }] }>
      <Text style={[styles.text, align === 'left' && { textAlign: 'left', alignSelf: 'flex-start' }]}>{heading}</Text>
    </View>
  );
};

export default SectionHeading;
