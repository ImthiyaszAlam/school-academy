import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: spacing.large,
    backgroundColor: colors.background,
  },
  highlightGrid: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginTop: spacing.large,
    width: '100%',
  },
  highlightCardWrapper: {
    flex: 1,
    marginBottom: spacing.large,
    marginHorizontal: spacing.small,
  },
  highlightCardWrapperMobile: {
    flex: 1,
  },
});

export default styles;
