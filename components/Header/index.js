import React from 'react'
import { Image, View } from 'react-native'
import styles from './styles'

const Header = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/Images/logo.png')} />
            <Image style={styles.menu} source={require('../../assets/Images/menu.png')} />
        </View>
    );
};

export default Header;