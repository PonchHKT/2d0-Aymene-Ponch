import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './tasks';
import Icon from 'react-native-vector-icons/FontAwesome';

export function todolist({ navigation }) {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }
    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}>Today's tasks</Text>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('profil')}>
            <Icon style={styles.userIcon} name={'user-circle-o'} color={'black'}/>
            </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.userDisconnect} 
                onPress={() => navigation.navigate('login')}> 
                <Icon size={48} name={'sign-out'} color={'black'}/>
                </TouchableOpacity>
            </View>
            <View style={styles.items}>
                {
                    taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                <Task text={item} />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>

    <KeyboardAvoidingView
    style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} /> 
        <TouchableOpacity style={styles.btnPlus} onPress={() => handleAddTask()}>
        <Text style={styles.text} >+</Text>
     </TouchableOpacity>

    </KeyboardAvoidingView>
    
    <View>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED'
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 20,
        top: 33,
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 30,
        right: 35,
        width: '100%', 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        right: 15,
        top: 325,
        position: 'absolute',
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    btnPlus: {
        height: 59,
        width: 59,
        right: -15,
        borderRadius: 45,    
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        marginTop: 20,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        borderRadius: 60,
        borderColor: '#C0C0C0',
      }, 
      text: {
        color: '#eb401a',
        fontSize: 40,
        textAlign: 'center',
        zIndex: 10,
        left: 0,
        top: -1,
      },
      userIcon: {
          width: 60,
          height: 60,
          fontSize: 40,
          alignSelf: 'flex-end',
      },
      userDisconnect: {
        fontSize: 50,
        alignSelf: 'flex-end',
        bottom: 63,
        right: 70,
    },

      
});