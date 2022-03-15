import React from 'react';
import {View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Section = (props) => {
    const {style} = props;
    return(
        <View style={[tw.style('p-5 bg-white rounded-lg mt-3'),style]}>
            {props.children}
        </View>
    )
}

export default Section