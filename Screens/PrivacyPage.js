import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PrivacyPage = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="md-arrow-round-back" size={25}/>
                <Text style={styles.headerText}>Privacy</Text> 
            </View>
            <View style={styles.list}>
                <Text style={styles.listText}>Contact information visibility</Text> 
            </View>
            <View style={styles.list}>
                <Text style={styles.listText}>All information</Text> 
                <Switch
                trackColor={{false: 'black', true:'teal'}}
                thumbColor='white'
                />
            </View>
            <View style={styles.list}>
                <Text style={styles.listText}>Phone contact</Text> 
                <Switch
                trackColor={{false: 'black', true:'teal'}}
                thumbColor='white'
                />
            </View>
            <View style={styles.list}>
                <Text style={styles.listText}>Email Address</Text> 
                <Switch
                trackColor={{false: 'black', true:'teal'}}
                thumbColor='white'
                />
            </View>
            <View style={styles.list}>
                <Text style={styles.listText}>Home Address</Text> 
                <Switch
                trackColor={{false: 'black', true:'teal'}}
                thumbColor='white'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        
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
        borderBottomWidth: 1
    },
    
      headerText:{
        paddingLeft: '20%',
        fontSize: 18
      },
    
      list: {
        width: '100%',
        height: '8%',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '4%'
      },
    
      listText:{
    
      }
})

export default PrivacyPage;