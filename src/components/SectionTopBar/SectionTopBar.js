import React from 'react';
import { View } from 'react-native';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionHeading from '../SectionHeading/SectionHeading';
import SectionSubTitle from '../SectionSubTitle/SectionSubTitle';
import { styles } from './SectionTopBar.styles';

/**
 * SectionTopBar component combines SectionTitle, SectionHeading, and SectionSubTitle.
 * @param {object} props
 * @param {string} props.title - The main title text.
 * @param {string} props.heading - The heading text.
 * @param {string} props.subTitle - The subtitle text.
 * @param {'center'|'left'} [props.align='center'] - Alignment type.
 */
const SectionTopBar = ({ title, heading, subTitle, align = 'center' }) => {
  return (
    <View style={align === 'center' ? styles.centerContainer : styles.leftContainer}>
      {title ? <SectionTitle title={title} align={align} /> : null}
      {heading ? <SectionHeading heading={heading} align={align} /> : null}
      {subTitle ? <SectionSubTitle subtitle={subTitle} align={align} /> : null}
    </View>
  );
};

export default SectionTopBar;
