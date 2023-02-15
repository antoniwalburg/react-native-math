import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
import { useState , useRef, useEffect} from 'react';
import { Platform } from 'react-native';

const font = Platform.OS === 'ios' ? 'Kanit-Bold' : 'Kanit-Bold';

const App = () => {

  const [actualData, setActualData] = useState(null);
  const [count, setCount] = useState(0);

  exportsModulator = function(number){
    if(number > 0){
      if(number % 2 == 0){
        const evenText = "Even Number";
        return evenText;
      } else {
        const oddText = "Odd Number";
        return oddText;
      }
    }
  }
  exportsPerfect = function(number){
    if(number > 0){
      if(Math.ceil(Math.sqrt(number)) == Math.floor(Math.sqrt(number))){
        return true;
      }
    }
  }
  exportPrime = function(number){
    if(number > 0){
      for(let i = 2, s = Math.sqrt(number); i <= s; i++) {
        if(number % i === 0){
            return false;
        }
      }
      return true;
    }
  }

  const getData = () => {
    const url = `http://numbersapi.com/${count}/math`;
    fetch(url)
      .then((response) => response.text())
      .then(data => setActualData(data)).then(() => {
        console.log("Fetched Successfully ✅");
      })
      .catch((error) => {
        console.log('Fetch Failed ❌' ,error)
      });
  }

  const handleIncrementPress = () => {
    setCount(count + 1);
    setActualData(null);
  }
  const handleDecrementPress = () => {
    setCount(count - 1);
    setActualData(null);
  }
  const handleResetPress = () => {
    setCount(0);
    setActualData(null);
  }

  const Modulator = exportsModulator(count);
  const isPerf = exportsPerfect(count);
  const isPrime = exportPrime(count);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button 
          onPress={getData}
          title="About Number"
        />
        <Button 
          onPress={handleIncrementPress}
          title="Increase Number"
        />
        <Button 
          onPress={handleDecrementPress}
          title="Decrease Number"
        />
        <Text style={styles.sectionNumber}>{count}</Text>

        {count > 0 ? <Text style={styles.sectionTitle}>{Modulator}</Text> : null}

        {isPerf ? <Text style={styles.sectionTitle}>{"Perfect Square"}</Text> : null}

        {isPrime ? <Text style={styles.sectionTitle}>{"Prime"}</Text> : null}

        {actualData ? <Text style={styles.sectionTitle}> {actualData} </Text> : null}
        
        <Button 
          onPress={handleResetPress}
          title="Reset Number"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  sectionNumber: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
