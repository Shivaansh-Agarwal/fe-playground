import { Accordion } from '../pages/greatfrontend/user-interface/accordion';
import { LikeButton } from '../pages/greatfrontend/user-interface/like-button';

export type RouteType = {
  heading: string;
  headingType: 'h1' | 'h2' | 'h3';
  isClickable: boolean;
  path: string;
  children?: RouteType[];
  element?: React.ReactNode;
  difficulty?: 'easy' | 'medium' | 'hard';
};

const greatFrontendRoutes: RouteType = {
  heading: 'Great Frontend',
  headingType: 'h1',
  isClickable: false,
  path: 'great-frontend',
  children: [
    {
      heading: 'User Interface',
      headingType: 'h2',
      isClickable: false,
      path: 'user-interface',
      children: [
        {
          heading: 'like-button',
          headingType: 'h3',
          isClickable: true,
          path: 'like-button',
          element: <LikeButton />,
          difficulty: 'medium',
        },
        {
          heading: 'accordion',
          headingType: 'h3',
          isClickable: true,
          path: 'accordion',
          element: <Accordion />,
          difficulty: 'easy',
        },
      ],
    },
    {
      heading: 'Javascript',
      headingType: 'h2',
      isClickable: false,
      path: 'javascript',
      children: [],
    },
  ],
};

const devToolsTechRoutes: RouteType = {
  heading: 'DevTools.Tech',
  headingType: 'h1',
  isClickable: false,
  path: 'devtools.tech',
  children: [],
};

export const ROUTES = [greatFrontendRoutes, devToolsTechRoutes];
