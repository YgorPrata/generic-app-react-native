import React from 'react';
import {TextProps} from 'react-native';
import {Container} from './styles';

export const icons: object = {
  Menu: require('./Menu').default,
};

type Props = TextProps & {
  type: string;
  color: string;
  width: string;
  height: string;
};

function Icon({
  type,
}: // color, width, height
Props) {
  const IconSvg: any = icons[type];
  if (IconSvg) {
    return (
      <Container
      // colors={color}
      // width={width}
      // height={height}
      >
        <IconSvg />
      </Container>
    );
  }
  return null;
}

export default Icon;
