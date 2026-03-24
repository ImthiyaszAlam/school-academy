import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { highlightData } from '../../content/highlightData';
import { highlightSectionHeader } from '../../content/sectionheaderdata';
import styles from './HighlightSection.style';

const HighlightSections = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <SectionWrapper style={styles.container}>
      <SectionTopBar
        title={highlightSectionHeader.title}
        heading={highlightSectionHeader.heading}
        subTitle={highlightSectionHeader.subTitle}
        align={highlightSectionHeader.align}
      />

      {/* Highlight Cards Grid */}
      <View style={styles.highlightGrid}>
        {highlightData.map((highlight) => (
          <View
            key={highlight.id}
            style={[
              styles.highlightCard,
              isMobile && styles.highlightCardMobile,
            ]}
          >
            <Text style={styles.iconContainer}>{highlight.icon}</Text>
            <Text style={styles.highlightTitle}>{highlight.title}</Text>
            <Text style={styles.highlightDescription}>
              {highlight.description}
            </Text>
          </View>
        ))}
      </View>
    </SectionWrapper>
  );
};

export default HighlightSections;