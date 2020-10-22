import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeCell = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="md-arrow-back" size={25}/>
                <Text style={styles.headerText}>HomeCell</Text> 
            </View>
            <View style={styles.cont}>
                <View style={styles.image}>
                    
                </View>
            </View>
            <Text style={styles.subhead1}>Home Cell</Text>
            <Text style={styles.subhead2}>Home cell is a vital part of Jubilee Christain Church Int'l.
                This is because it is the best way you can connect others with the passion in the Church.
            </Text>
            <Text style={styles.subhead2}> Each home cell group is a healthy community of people, expressing
                what they believe, exploring their faith together and developing friendship.
            </Text>
            <Text style={styles.subhead2}> Most of the home cell group meet at least once in a month.
            </Text>
            <Text style={styles.subhead2}> If you want to plug into any of the life group, register below.
            </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    cont:{
        width: '100%',
        height: '20%',
        alignItems: 'center',
        marginBottom: 20
    },

    header:{
        width: '100%',
        height: '11%',
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 4,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: '7%',
        paddingBottom: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: '3%'
    },
    
    headerText:{
        marginLeft: '15%',
        fontSize: 18
    },

    image:{
        width: '94%',
        height: '100%',
        borderWidth:1,
        borderColor: '#ccc',
        borderRadius: 10,
    },

    subhead1: {
        fontSize: 18,
        fontWeight: '900',
        marginLeft: 20,
        fontWeight: '900',
        marginBottom: 15
    },

    subhead2:{
        fontSize: 14,
        marginBottom: 18,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15
    },


})

export default HomeCell;