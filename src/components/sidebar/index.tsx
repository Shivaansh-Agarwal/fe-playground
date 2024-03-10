import { ROUTES, RouteType } from '../../routes/utils.tsx';
import { getHeadingStyleClasses } from './utils';

const SideBarItem = (props: RouteType & { prevPath?: string }) => {
  const HeadingTag = props.headingType;
  const currPath = (props.prevPath ?? '') + '/' + props.path;
  return (
    <div>
      <HeadingTag className={getHeadingStyleClasses(props.headingType, props.isClickable)}>
        {props.isClickable ? <a href={currPath}>{props.heading}</a> : props.heading}
      </HeadingTag>
      {props.children?.map((child, index) => (
        <SideBarItem key={index} prevPath={currPath} {...child} />
      ))}
    </div>
  );
};

export const SideBar = () => {
  return (
    <div className='flex flex-col justify-start items-start gap-6 pl-1 pr-4 mr-2 border-r h-screen'>
      {ROUTES.map((route, index) => (
        <SideBarItem key={index} {...route} />
      ))}
    </div>
  );
};
