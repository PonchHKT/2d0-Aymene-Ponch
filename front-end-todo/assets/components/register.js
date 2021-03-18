import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, TouchableOpacity, CheckBox, Alert } from 'react-native';
import bgImage from '../images/background.jpg';
import Icon from 'react-native-vector-icons/Ionicons'
import GPicker from './genderpicker.js';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { nameValidator } from '../helpers/register/nameValidator';
import { emailValidator } from '../helpers/register/emailValidator';
import { passwordValidator } from '../helpers/register/passwordValidator';
import { birthValidator } from '../helpers/register/birthValidator';



const { width: WIDTH } = Dimensions.get('window')

export function register({ navigation }) {
    const [security, setSecurity] = useState(true)
    const [isSelected, setSelection] = useState(false);


    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [name, setName] = useState({ value: '', error: '' })
    const [birth, setBirth] = useState({ value: '', error: ''})
  
    const onRegisterPressed = () => {
      const emailError = emailValidator(email.value)
      const passwordError = passwordValidator(password.value)
      const nameError = nameValidator(name.value)
      const birthError = birthValidator(birth.value)
      if (emailError || passwordError) {
        setEmail({ ...email, error: emailError })
        setPassword({ ...password, error: passwordError })
        setName({ ...name, error: nameError })
        setBirth({ ...birth, error: birthError })

        return
      }
      navigation.reset({
        index: 0,
        routes: [{ name: 'todolist' }],
      })
    }
    const changeSecurity = () => {
      if(security == true) {
        setSecurity(false)
      } else {
        setSecurity(true)
      }
    }
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View>
        <Text style={styles.logoText}>Register</Text>
      </View>

      <View>
        <TouchableOpacity 
        style={styles.userBack} 
        onPress={() => navigation.navigate('login')}> 
        <Icon size={48} name={'ios-return-up-back-outline'} color={'rgba(255, 255, 255, 0.7)'}/>
        </TouchableOpacity>
        </View>
      
      <View style={styles.inputContainer}>
        <Icon name={'ios-person-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
        <TextInput
        style={styles.input}
        placeholder={'Username'}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underlineColorAndroid='transparent'
        returnKeyType="done"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <Text style={styles.error}>{name.error}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'mail-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
        <TextInput
        style={styles.input}
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder={'Email adress'}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underlineColorAndroid='transparent'
      />
      <Text style={styles.error}>{email.error}</Text>
      </View>

      <View style={styles.inputContainer}>
      <Icon name={'fitness-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
        <TextInput
        style={styles.input}
        placeholder={'DD/MMM/YYYY'}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underlineColorAndroid='transparent'
        returnKeyType="done"
        value={birth.value}
        onChangeText={(text) => setBirth({ value: text, error: '' })}
        error={!!birth.error}
        errorText={birth.error}
      />
      <Text style={styles.error}>{birth.error}</Text>
      </View>

      <View style={styles.inputContainer}>
      <Icon2 name={'venus-mars'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
      <GPicker/>
      </View>


      <View style={styles.inputContainer}>
        <Icon name={'lock-closed-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
        <TextInput
        style={styles.input}
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        placeholder={'Password'}
        secureTextEntry={security}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        underlineColorAndroid='transparent'
      />
      <Text style={styles.error}>{password.error}</Text>
      
      <TouchableOpacity style={styles.btnEye}>
        <Icon onPress={changeSecurity} name={'ios-eye-outline'} size={26} color={'rgba(255, 255, 255, 0.7)'}/>
      </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
      <CheckBox
      value={isSelected}
      onValueChange={setSelection}
      style={styles.checkbox}
      />
      <Text style={styles.label}>Do you accept our terms and conditions ?</Text>

      <TouchableOpacity>
      <Icon onPress={() => Alert.alert('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')} 
      name={'information-circle-outline'} style={styles.cgusize} size={28} color={'rgba(255, 255, 255, 0.7)'}>
      </Icon>
      </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.btnLogin}>
      <Text 
      onPress={() => navigation.navigate('todolist')} 
      style={styles.text}  
      onPress={onRegisterPressed}
      mode="contained">Register</Text>
      </TouchableOpacity>
      
      <View style={styles.container}>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
  }

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    opacity: 0.5
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,    
    backgroundColor: '#eb401a',
    justifyContent: 'center',
    marginTop: 5,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
  noAccount: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  clickUnderline: {
    textDecorationLine: 'underline',
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  cgusize: {
      fontSize: 20,
      marginLeft: 3,
      paddingTop: 7,
      color: 'white',
  },
  error: {
    alignSelf: 'center',
    color: 'red',
    backgroundColor: 'transparent',
    fontSize: 16,
  },
  userBack: {
    fontSize: 50,
    alignSelf: 'flex-end',
    bottom: 40,
    right: 130,
  },
});
