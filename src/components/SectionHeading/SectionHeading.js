
import { View, Text } from 'react-native';
import styles from './SectionHeading.style';

const SectionHeading = ({ heading }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
};

export default SectionHeading;
