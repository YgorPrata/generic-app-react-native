import React from "react";
import { TextProps } from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import { Float } from "react-native/Libraries/Types/CodegenTypes";

type Props = TextProps & {
    children: any;
    colors: [string];
    stops: [Float],
    center: [number],
    radius: number,
    style: object,
};

function CardRadialGradient({ children, colors, stops, center, radius, style }: Props) {
    return (
        <RadialGradient
            colors={colors}
            stops={stops}
            center={center}
            radius={radius}
            style={style} 
        >
            {children}
        </RadialGradient>
    );
}

export default CardRadialGradient;
