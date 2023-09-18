import React from 'react';
import {TextProps, View} from 'react-native';

const icons: any = {
  Menu: require('./Menu').default,
};

type Props = TextProps & {
  type: string;
  color: string;
  width: number;
  height: number;
};

function Icon({ type = 'Menu', color = 'red', width = 18, height = 18 }: Props) {
  const IconSvg: any = icons[type];
  if (IconSvg) {
    return (
      <View><IconSvg color={color} width={width + 'px'} height={height + 'px'} /></View>
    );
  }
  return null;
}

export default Icon;
