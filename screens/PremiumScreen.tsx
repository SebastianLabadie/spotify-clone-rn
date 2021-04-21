import React, { useEffect, useState } from 'react'
import {View,StyleSheet,Text, Button, Vibration} from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';


function Premium() {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);

    const ONE_SECOND_IN_MS = 1000;

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      const handleBarCodeScanned = ({ type, data }:any) => {
        Vibration.vibrate(0.2 * ONE_SECOND_IN_MS)
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };
    
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    return (
        <View style={styles.screen}>
            <Text>PREMIUMMMM</Text>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            >
                <BarcodeMask edgeColor="#62B1F6" showAnimatedLine/> 
            </BarCodeScanner>
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    )
}


const styles = StyleSheet.create({
        screen:{
            width:'100%',
            height:'100%'
        }
})
export default Premium