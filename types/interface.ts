//Types
import { STYLE_TYPES, FRAME_ICON_TYPES } from './enum';
import { IconType } from 'react-icons';

//Greetings Frame Props
export interface FrameProps {
  children: string;
  title: string;
  type?: STYLE_TYPES;
  Icon: IconType;
  iconType?: FRAME_ICON_TYPES;
}
