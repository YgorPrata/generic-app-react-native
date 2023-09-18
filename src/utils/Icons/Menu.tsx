import React from "react";
import Svg, {
    G,
    Path,
    // Circle,
    // Ellipse,
    // Text,
    // TSpan,
    // TextPath,
    // Polygon,
    // Polyline,
    // Line,
    // Rect,
    // Use,
    // Image,
    // Symbol,
    // Defs,
    // LinearGradient,
    // RadialGradient,
    // Stop,
    // ClipPath,
    // Pattern,
    // Mask,
} from 'react-native-svg';
import { TextProps } from "react-native-svg/lib/typescript/lib/extract/extractText";

type Props = TextProps & {
    color: string;
    width: string;
    height: string;
};

function Menu({color, width, height}: Props) {
    return (
        <Svg width={width} height={height} viewBox="0 0 33 29">
            <G fill="none" fillRule="nonzero">
                <G fill="currentColor" stroke="currentColor" strokeWidth="1.8">
                    <Path d="M31.928 5.53c0 .65-.398 1.177-.887 1.177H2.578c-.49 0-.887-.527-.887-1.176 0-.65.397-1.176.887-1.176h28.463c.49 0 .887.526.887 1.176zM31.217 17.095H2.755c-.49 0-.888-.526-.888-1.176 0-.65.397-1.176.888-1.176h28.462c.49 0 .887.527.887 1.176 0 .65-.397 1.176-.887 1.176zM32.104 26.308c0 .65-.397 1.176-.887 1.176H2.755c-.49 0-.888-.526-.888-1.176 0-.65.397-1.176.888-1.176h28.462c.49 0 .887.527.887 1.176z" fill={color} />
                </G>
            </G>
        </Svg>
    );
}

export default Menu;
