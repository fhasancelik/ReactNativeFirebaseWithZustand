import { StyleSheet, Text, View ,TextInput, Button} from 'react-native'
import React from 'react'
import {Controller, useForm} from 'react-hook-form';
import authCheck from '../zustand/store';
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {
const navigation =useNavigation()


  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    getValues,
  } = useForm({
    defaultValues: {
      name:'Hasan',
      email: 'Hasan@gmail.com',
      password: '123456',
    },
  });

  const values = getValues();

const signUp=()=>{
  console.log('bas')
  auth()
  .createUserWithEmailAndPassword(values.email, values.password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

}

  return (
    <View>
  <Text>Create Profile</Text>

  <View>
    <Controller
    name='name'
    control={control}
    rules={{required:{

      value:true,
      message:'You must enter your name'
    }}}
    render={({field:{onChange,onBlur,value}})=>(<TextInput 
      placeholder='Enter User Name'
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}/>)}
    
    />

    {errors.name&&(
      <Text style={styles.texterror}>{errors?.name?.message}</Text>
    )}

<Controller
    name='email'
    control={control}
    rules={{required:true}}
    render={({field:{onChange,onBlur,value}})=>(<TextInput 
      placeholder='Enter Email'
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}/>)}
    
    />

{errors.email&&(
      <Text style={styles.texterror}>{errors?.email?.message}</Text>
    )}


<Controller
    name='password'
    control={control}
    rules={{required:{

      value:true,
      message:'You must enter password'
    },
  maxLength:{
    value:15,
    message:'Password must be less then 15 character'
  },
minLength:{
  value:6,
  message:'Password must be more then 6 character'
}}}
    render={({field:{onChange,onBlur,value}})=>(<TextInput 
      placeholder='Enter Password'
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
     />)}
    
    />

{errors.password&&(
      <Text style={styles.texterror}>{errors?.password?.message}</Text>
    )}


  </View>


         <View>
         <Button title='Sign Up' onPress={handleSubmit(signUp)}/>
            <Button title='Sign In' onPress={()=>navigation.navigate('SignIn')}/>

         </View>


    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  error: {
    fontSize: 12,
    fontWeight: '600',
    color: 'red',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textInput: {
    padding: 15,
    borderWidth: 1,
    marginVertical: 15,
    borderRadius: 10,
    borderColor: 'gray',
  },
});

export default SignUp

