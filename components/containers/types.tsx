
import { ReactNode } from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface MainWrapperProps{
    children: ReactNode;
    style?:StyleProp<ViewStyle>;
}