import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: spacing.lg,
    backgroundColor: colors.background,
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
