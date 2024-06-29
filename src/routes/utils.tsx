import { Accordion } from '../pages/greatfrontend/user-interface/accordion';
import { LikeButton } from '../pages/greatfrontend/user-interface/like-button';
import { FormattedTime } from '../pages/learners-bucket/low-level-design/time-in-human-readable-format';

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

const learnersBucketRoutes: RouteType = {
  heading: 'Learners Bucket',
  headingType: 'h1',
  isClickable: false,
  path: 'learners-bucket',
  children: [
    {
      heading: 'Low Level Design',
      headingType: 'h2',
      isClickable: false,
      path: 'low-level-design',
      children: [
        {
          heading: 'Time in Human Readable Format (React)',
          headingType: 'h3',
          isClickable: true,
          path: 'time-in-human-readable-format',
          element: <FormattedTime time={new Date()} />,
        },
      ],
    },
  ],
};

const nfsdRoutes: RouteType = {
  heading: 'NFSD',
  headingType: 'h1',
  isClickable: false,
  path: 'nfsd',
  children: [
    {
      heading: 'Low Level Design',
      headingType: 'h2',
      isClickable: false,
      path: 'lld',
      children: [
        {
          heading: 'Real time updates',
          headingType: 'h3',
          isClickable: true,
          path: 'real-time-updates',
          element: <>hello</>,
        },
      ],
    },
  ],
};

export const ROUTES = [greatFrontendRoutes, devToolsTechRoutes, learnersBucketRoutes, nfsdRoutes];
