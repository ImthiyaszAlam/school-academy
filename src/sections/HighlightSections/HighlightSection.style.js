import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: spacing.lg,
    backgroundColor: colors.background,
  },
  imageBackground: {
    width: '100%',
    paddingVertical: spacing.lg,
  },
  contentLayer: {
    width: '100%',
    flex: 1,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  highlightGrid: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: spacing.lg,
    width: '100%',
    gap: spacing.md,
  },
  highlightCardWrapper: {
    flex: 1,
    marginBottom: spacing.lg,
  },
  highlightCardWrapperMobile: {
    flex: 1,
  },
});

export default styles;
