import React from 'react';
import { View, Text, useWindowDimensions, ImageBackground } from 'react-native';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { highlightData } from '../../content/highlightData';
import { highlightSectionHeader } from '../../content/sectionheaderdata';
import styles from './HighlightSection.style';

const HighlightSections = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80' }}
      style={styles.container}
    >
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
    </ImageBackground>
  );
};

export default HighlightSections;