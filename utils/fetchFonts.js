import * as Font from 'expo-font'

const fetchFonts = () => {
    return Font.loadAsync({
        'ibm-plex': require('../assets/fonts/IBMPlexSansArabic-Regular.ttf'),
        'ibm-plex-medium': require('../assets/fonts/IBMPlexSansArabic-Medium.ttf'),
        'ibm-plex-semibold': require('../assets/fonts/IBMPlexSansArabic-SemiBold.ttf'),
        'ibm-plex-bold': require('../assets/fonts/IBMPlexSansArabic-Bold.ttf')
    })
}

export default fetchFonts