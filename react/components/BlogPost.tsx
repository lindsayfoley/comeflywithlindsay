import { FunctionComponent } from 'react';
import PostExcerpt from './PostExcerpt';

interface IMetaProps {
  title: string;
  description: string;
  ogImage: string;
}

interface IExcerptProps {
  description: string;
  image: string;
  alt: string;
  cta: string;
}

interface INextPostProps {
  link: string;
  cta: string;
}

export interface IBlogPostDetails {
  meta: IMetaProps;
  excerpt: IExcerptProps;
  nextPost: INextPostProps;
}

export interface IBlogPostProps {
  children: JSX.Element;
  setup: IBlogPostDetails;
}

export const BlogPost: FunctionComponent<IBlogPostProps> = ({ children, setup }) => {
  return (
    <>
      <PostExcerpt setup={setup} />
      <article>{children}</article>
    </>
  )
}

export default BlogPost; 