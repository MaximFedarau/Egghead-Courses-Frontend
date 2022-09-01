//Types
import { STYLE_TYPES, CONTENT_TYPES } from './enum';
import { BASE_CONTENT_TYPES, PANEL_ICON_TYPES } from './types';
import { IconType } from 'react-icons';

//Greetings Frame props
export interface FrameProps {
  children: string;
  title: string;
  type?: STYLE_TYPES;
  Icon: IconType;
  iconType?: BASE_CONTENT_TYPES;
}

// CoursesOverview Panel props
export interface PanelProps {
  image: string;
  path: string;
}

// PanelIcon props
export interface PanelIconProps {
  IconOutlined: IconType;
  IconFilled: IconType;
  type: PANEL_ICON_TYPES;
}

// Panel CurriculumItem props
export interface CurriculumItemProps {
  children: string;
  icon: IconType;
  type: CONTENT_TYPES;
}

// ServiceOverview TeacherCard props

export interface TeacherCardProps {
  image: string;
  path: string;
}
