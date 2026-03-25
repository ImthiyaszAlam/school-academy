import AboutInfoCard from './components/AboutInfoCard/AboutInfoCard';
import { faSchool, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/util/Button';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import styles from './AboutSection.styles';
import SectionTopBar from '../../components/SectionTopBar/SectionTopBar';
import { aboutSectionHeader } from '../../content/sectionheaderdata';


// Use the same favicon as AcademicsSection
const ABOUT_ICON = require('../../../assets/favicon.png'); // Adjust path if needed

//const ABOUT_IMAGE = require('../../../assets/about-image.jpg'); // Replace with your image path
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Replace with your image path

const AboutSection = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <SectionWrapper style={styles.sectionContainer}>
      <View style={[styles.contentContainer, isMobile && styles.contentContainerMobile]}>
        <View style={[styles.imageContainer, isMobile && styles.imageContainerMobile]}>
          <Image
            source={ABOUT_IMAGE}
            style={[styles.image, isMobile && styles.imageMobile]}
            resizeMode="cover"
            accessible
            accessibilityLabel="About our school"
          />
        </View>
        <View style={[styles.textContainer, isMobile && styles.textContainerMobile]}>
          <SectionTopBar
            title={aboutSectionHeader.title}
            heading={aboutSectionHeader.heading}
            subTitle={aboutSectionHeader.subTitle}
            align={isMobile ? 'center' : 'left'}
          />

          {/* Center the info cards and text on mobile */}
          <View style={[styles.infoRow, isMobile && styles.infoRowMobile]}>
            <View style={[styles.infoColumnLeft, isMobile && styles.infoColumnLeftMobile]}>
              <AboutInfoCard
                icon={faSchool}
                title="Our Mission"
                subtitle="Empowering students for a brighter future"
              />
              <AboutInfoCard
                icon={faUserGraduate}
                title="Academic Excellence"
                subtitle="Dedicated to holistic education and personal growth"
              />
            </View>
            <View style={[styles.infoColumnRight, isMobile && styles.infoColumnRightMobile]}>
              <Text style={styles.paragraph}>
                Our school provides a supportive environment where every student can thrive academically and grow with confidence. We emphasize meaningful learning built on strong foundations. Through a well-rounded approach, we nurture curiosity, strengthen core skills, and encourage critical thinking and communication.
              </Text>
            </View>
          </View>

          <View style={styles.actionRow}>
            <Button
              title="Learn More"
              onPress={() => {}}
              style={styles.learnMoreButton}
            />
            <Button
              title="Contact Us"
              onPress={() => {}}
            />
          </View>


        </View>
      </View>
    </SectionWrapper>
  );
};

export default AboutSection;
