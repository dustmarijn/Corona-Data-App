import React  from 'react';
import {Text,View} from 'react-native';
import RivmData from '../../Api/DataApi';
import { Provider } from 'react-redux';

export default  function DifferenceTestingScreen({navigation }) {



  return(
      <Provider>
        <View style={{padding: 20}}>
            <Text style={{color: '#00a7d0', fontSize: 30}}>Het vershil tussen vrij testen en particulier testen.</Text>
             <Text>{RivmData.Date}</Text>

        </View>
      </Provider>
  )
}
