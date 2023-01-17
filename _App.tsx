
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { useForm, Controller } from "react-hook-form";
import { NativeBaseProvider, Box } from "native-base";

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

function App() {
    //   const [email, setEmail] = useState('');
    //   const [password, setPassword] = useState('');

    //   const [isError, setIsError] = useState(false);
    //   const [message, setMessage] = useState('');


    //   const onSubmitHandler = () => {
    //       const payload = {
    //           email,
    //           password,
    //       };
    //       fetch(`https://devapi.thefavored-one.com/member/login`, {
    //           method: 'POST',
    //           headers: {
    //               'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify(payload),
    //       })
    //       .then(async res => { 
    //           try {
    //               const jsonRes = await res.json();
    //               if (res.status !== 200) {
    //                   setIsError(true);
    //                   setMessage(jsonRes.message);
    //               } else {
    //                   setIsError(false);
    //                   setMessage(jsonRes.message);
    //               }
    //           } catch (err) {
    //               console.log(err);
    //           };
    //       })
    //       .catch(err => {
    //           console.log(err);
    //       });
    //   };

    //   const getMessage = () => {
    //      // const status = isError ? `Error: ` : `Success: `;
    //       // return status + message;
    //       return message
    //   }


    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const onSubmit = (data: any) => console.log(data);


    return (
        // <View style={styles.image}>
        //     <View style={styles.card}>
        //         <Text style={styles.heading}>Login</Text>
        //         <View style={styles.form}>
        //                 <View style={styles.inputs}>
        //                     <Controller
        //                         control={control}
        //                         rules={{
        //                             required: true,
        //                         }}
        //                         render={({ field: { onChange, onBlur, value } }) => (
        //                             <TextInput
        //                                 style={styles.input}
        //                                 onBlur={onBlur}
        //                                 onChangeText={onChange}
        //                                 value={value}
        //                             />
        //                         )}
        //                         name="username"
        //                     />
        //                     {errors.username && <Text>Username tidak boleh kosong!</Text>}

        //                     <Controller
        //                         control={control}
        //                         rules={{
        //                             maxLength: 100,
        //                             required: true,
        //                         }}
        //                         render={({ field: { onChange, onBlur, value } }) => (
        //                             <TextInput
        //                                 style={styles.input}
        //                                 onBlur={onBlur}
        //                                 onChangeText={onChange}
        //                                 value={value}
        //                                 secureTextEntry={true}
        //                             />
        //                         )}
        //                         name="password"
        //                     />
        //                     {errors.password && <Text>Password tidak boleh kosong!</Text>}
        //                     <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        //             </View>
        //         </View>
        //     </View>
        // </View>

        <NativeBaseProvider>
            <Box>Hello WORD</Box>
        </NativeBaseProvider>

    );
};

// const styles = StyleSheet.create({
//     image: {
//         flex: 1,
//         width: '100%',
//         alignItems: 'center',
//         backgroundColor: 'white'
//     },
//     card: {
//         flex: 1,
//         backgroundColor: 'white',
//         shadowOpacity: 10,
//         shadowColor: 'black',
//         shadowRadius: 5,
//         shadowOffset: {width: 1, height: 2},
//         width: '80%',
//         marginTop: '40%',
//         borderRadius: 20,
//         maxHeight: 380,
//         paddingBottom: '30%',
//     },
//     heading: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         marginLeft: '25%',
//         marginTop: '5%',
//         marginBottom: '30%',
//         color: 'black',
//     },
//     form: {
//         flex: 1,
//         justifyContent: 'space-between',
//         paddingBottom: '5%',
//     },
//     inputs: {
//         width: '100%',
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingTop: '10%',
//         color: 'gray',

//     },
//     input: {
//         color: 'gray',
//         width: '80%',
//         paddingLeft: 20,
//         borderWidth: 1,
//         marginTop: 10,
//         borderRadius: 20,
//         borderBottomColor: 'black',
//         paddingTop: 10,
//         fontSize: 16,
//         minHeight: 40,
//     },
//     button: {
//         width: '80%',
//         backgroundColor: '#00ffff',
//         height: 40,
//         borderRadius: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginVertical: 5,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold'

//     },
//     buttonAlt: {
//         width: '80%',
//         borderWidth: 1,
//         height: 40,
//         borderRadius: 50,
//         borderColor: 'black',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginVertical: 5,
//     },
//     buttonAltText: {
//         color: 'black',
//         fontSize: 16,
//         fontWeight: '400',
//     },
//     message: {
//         fontSize: 16,
//         marginVertical: '5%',
//     },
// });


export default App;
