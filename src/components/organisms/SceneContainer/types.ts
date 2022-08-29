import { ViewStyle } from 'react-native';

export type Props = {
  forceInset?: { top: 'never'; bottom: 'never' };
  testID?: string;
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle;
};
