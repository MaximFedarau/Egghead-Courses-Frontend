//Types
import {
  FrameProps,
  PanelProps,
  PanelIconProps,
  CurriculumItemProps,
} from '@app-types/interface';
import { CONTENT_TYPES, STYLE_TYPES } from '@app-types/enum';

//Icons
import {
  IoSadOutline,
  IoCheckmarkDone,
  IoCard,
  IoHeartOutline,
  IoHeart,
  IoCartOutline,
  IoCart,
  IoEyeOutline,
  IoEye,
  IoAlarm,
  IoBarChart,
} from 'react-icons/io5';

//Header Navigation Labels
export const HEADER_NAVIGATION_LABELS = [
  'Home',
  'Product',
  'Pricing',
  'Contact',
];

// Header Mobile Icons
export const HEADER_MOBILE_ICONS: {
  alt: string;
  src: string;
}[] = [
  {
    alt: 'Person Icon',
    src: '/user.png',
  },
  {
    alt: 'Burger Menu Icon',
    src: '/menu.png',
  },
];

// Greetings Frames

export const GREETINGS_FRAMES: FrameProps[] = [
  {
    Icon: IoSadOutline,
    iconType: CONTENT_TYPES.ERROR,
    title: 'Not enough knowledge?',
    children:
      'The gradual accumulation of information about atomic and small-scale behaviour...',
  },
  {
    Icon: IoCheckmarkDone,
    iconType: CONTENT_TYPES.SUCCESS,
    title: 'Find your dream job!',
    children:
      'The gradual accumulation of information about atomic and small-scale behaviour...',
  },
  {
    Icon: IoCard,
    type: STYLE_TYPES.CONTAINED,
    title: '2,769 Online Courses.',
    children:
      'The gradual accumulation of information about atomic and small-scale behaviour...',
  },
];

// Courses Overview Panels

export const COURSES_OVERVIEW_PANELS: PanelProps[] = [
  {
    image: '/courses/plan.png',
  },
  {
    image: '/courses/lady.png',
  },
  {
    image: '/courses/lightbulb.png',
  },
  {
    image: '/courses/pencils.png',
  },
];

// Panels Icons
export const PANEL_ICONS: PanelIconProps[] = [
  {
    IconOutlined: IoHeartOutline,
    IconFilled: IoHeart,
    type: CONTENT_TYPES.ERROR,
  },
  {
    IconOutlined: IoCartOutline,
    IconFilled: IoCart,
    type: CONTENT_TYPES.INFO,
  },
  {
    IconOutlined: IoEyeOutline,
    IconFilled: IoEye,
    type: CONTENT_TYPES.DEFAULT,
  },
];

// Panel Curriculum Info

export const PANEL_CURRICULUM_INFO: CurriculumItemProps[] = [
  {
    children: 'Professional',
    icon: IoAlarm,
    type: CONTENT_TYPES.INFO,
  },
  {
    children: '64 Lessons',
    icon: IoBarChart,
    type: CONTENT_TYPES.ALERT,
  },
  {
    children: '22 hours',
    icon: IoAlarm,
    type: CONTENT_TYPES.INFO,
  },
];
