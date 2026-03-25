import { StyleSheet } from 'react-native';
import { colors, spacing, typography, layout } from '../../theme';


export default StyleSheet.create({
    container: {
        paddingVertical: '10%',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent black
        padding: spacing.md,
        paddingHorizontal: '10%',
        justifyContent: 'center',
    },
    title: {
        ...typography.headingMedium,
        color: colors.textPrimary,
        marginBottom: spacing.sm,
        textAlign: 'center',
    },
});