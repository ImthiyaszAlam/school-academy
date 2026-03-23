
import { View, Text } from 'react-native';
import styles from './SectionHeading.style';

const SectionHeading = ({ heading, align = 'center' }) => {
  const containerStyle = align === 'left' ? styles.containerLeft : styles.container;
  const textStyle = align === 'left' ? styles.textLeft : styles.text;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{heading}</Text>
    </View>
  );
};

export default SectionHeading;
