//Types
import {
  FrameProps,
  PanelProps,
  PanelIconProps,
  CurriculumItemProps,
  TeacherCardProps,
} from 'types/interface';
import { CONTENT_TYPES, STYLE_TYPES, CONTENT_SIZES } from 'types/enum';

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
  IoPerson,
  IoMenu,
} from 'react-icons/io5';
import { IconType } from 'react-icons';

// Header Navigation Labels
export const HEADER_NAVIGATION_LABELS: {
  name: string;
  path: string;
}[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Product',
    path: '/',
  },
  {
    name: 'Pricing',
    path: '/',
  },
  {
    name: 'Contact',
    path: '/',
  },
];

// Header Mobile Icons
export const HEADER_MOBILE_ICONS: {
  alt: string;
  Icon: IconType;
  size: Exclude<CONTENT_SIZES, CONTENT_SIZES.SMALL>;
}[] = [
  {
    alt: 'Person Icon',
    Icon: IoPerson,
    size: CONTENT_SIZES.MEDIUM,
  },
  {
    alt: 'Burger Menu Icon',
    Icon: IoMenu,
    size: CONTENT_SIZES.LARGE,
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

// CoursesOverview Panels

export const COURSES_OVERVIEW_PANELS: PanelProps[] = [
  {
    image: '/images/courses-overview/courses/plan.png',
    path: '/',
  },
  {
    image: '/images/courses-overview/courses/lady.png',
    path: '/',
  },
  {
    image: '/images/courses-overview/courses/lightbulb.png',
    path: '/',
  },
  {
    image: '/images/courses-overview/courses/pencils.png',
    path: '/',
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

// Panel CurriculumItem Info

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

//ServiceOverview TeacherCard info

export const TEACHERS_INFO: TeacherCardProps[] = [
  {
    image: '/images/service-overview/teachers/lady-1.png',
    path: '/',
  },
  {
    image: '/images/service-overview/teachers/lady-2.png',
    path: '/',
  },
];
