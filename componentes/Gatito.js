import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";


function Gatito(props) {
    return(
        <View>
            <Image style={styles.Gatito} source = {props.imagen}/>
            <Text style={styles.titulo}>{props.nombre}</Text>
        </View>
    );
}

export default Gatito;
const styles = StyleSheet.create({
    Gatito:{
        marginTop:10,
        borderRadius:8,
        width:300,
        height:300,
    },
    titulo:{
        FontSize:12,
        fontWeight:'bold',
        color:'blue',
    }
}

)