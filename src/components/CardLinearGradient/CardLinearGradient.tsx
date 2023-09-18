import React from "react";
import { TextProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = TextProps & {
    children: any;
    colors: [string];
    start: { x: number, y: number},
    end: { x: number, y: number},
    style: object,
};

function CardLinearGradient({
    children,
    colors,
    start,
    end,
    style
}: Props) {
    return (
        <LinearGradient 
            colors={colors}
            start={start} end={end}
            // locations={[0,0.1,0.6]}
            style={style} 
        >
            {children}
        </LinearGradient>
    );
}

export default CardLinearGradient;
