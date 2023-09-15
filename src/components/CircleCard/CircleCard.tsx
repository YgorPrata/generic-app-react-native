import React from "react";
import { TextProps } from 'react-native';
import { Container } from './styles';

type Props = TextProps & {
    children: any;
    backgroundColor: string;
    padding: string;
};

function CircleCard({
    children,
    backgroundColor,
    padding
}: Props) {
    return (
        <Container
            backgroundColor={backgroundColor}
            padding={padding}
        >
            {children}
        </Container>
    );
}

export default CircleCard;
