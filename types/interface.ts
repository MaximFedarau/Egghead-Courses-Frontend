//Types
import { STYLE_TYPES, CONTENT_TYPES } from './enum';
import { BASE_CONTENT_TYPES, PANEL_ICON_TYPES } from './types';
import { IconType } from 'react-icons';

//Greetings Frame Props
export interface FrameProps {
  children: string;
  title: string;
  type?: STYLE_TYPES;
  Icon: IconType;
  iconType?: BASE_CONTENT_TYPES;
}

// Courses Overview Panel Props
export interface PanelProps {
  image: string;
}

// Panel Icon component Props
export interface PanelIconProps {
  IconOutlined: IconType;
  IconFilled: IconType;
  type: PANEL_ICON_TYPES;
}

// Panel Curriculum Item Props
export interface CurriculumItemProps {
  children: string;
  icon: IconType;
  type: CONTENT_TYPES;
}
