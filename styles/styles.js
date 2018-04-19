import { StyleSheet } from 'react-native';
import { colors, dimensions, padding } from './theme';

let iconSize = dimensions.icon_std;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginBottom: padding.std,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        width: dimensions.fullWidth - 40,
        height: 56,
        paddingLeft: padding.std,
    },
    button: {
        backgroundColor: colors.primaryDark,
        width: dimensions.fullWidth - 40,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },    
});
