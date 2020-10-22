import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';

const BookOfEsther = () => {
    return(
        <View style={styles.screen}>
            <View style={styles.header}>
                <Icon name="md-arrow-back" size={25}/>
                <Text style={styles.headerText}>The Book of Esther</Text> 
                <Icon name="md-volume-low" size={25}/>
            </View>
            <View style={styles.chapter}>
                <Text style={styles.subhead1}>Esther 1</Text>
                <Text style={styles.subhead2}>The Kings Banquet</Text>
                <Text style={styles.subhead3}>1:1 But i must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and i will give you a complete account of
                  the system, and expound the actual teachings of the great explorer of the truth, the master
                  builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
                  it is pleasure, but because those who do not know how to pursue pleasure rationally encounters 
                  consequencies that are extremely painful. Nor again is there anyone who loves or pursues or
                  desires to obtain pain of itself, because it is pain, but because ocassionally circumstance
                  occur in which toil and pain can procure him some great pleasure. To take a trivial example, 
                  which of us ever undertakes a laborious physical exercise, except to obtain some advantage from
                  it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                  annoying consequences, or one who avoids a pain that produces. </Text>
            </View>
            <View style={styles.footer}>
                <Material name="navigate-before" size={30}/>
                <Material name="play-circle-outline" size={30}/>
                <Material name="navigate-next" size={30}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column'
    },

    header:{
        width: '100%',
        height: '12%',
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 4,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingLeft: '7%',
        paddingRight: '7%',
        paddingBottom: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },

    headerText:{
        fontSize: 16
    },

    chapter: {
        width: '100%',
        height: '81%',
        padding: 12
    },

    footer:{
        width: '100%',
        height: '7%',
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingLeft: '7%',
        paddingRight: '7%',
        paddingBottom: 10,
        borderTopColor: '#ccc',
        borderTopWidth: 0.1,
    },

    subhead1: {
        fontSize: 16,
        fontWeight: '900'
    },

    subhead2:{
        fontSize: 12,
        marginBottom: 18
    },

    subhead3:{
        fontSize: 14
    }
})

export default BookOfEsther;