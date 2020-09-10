import { FunctionComponent } from 'react';

export interface IBlogPostProps {
  children: JSX.Element;
}

const BlogPost: FunctionComponent<IBlogPostProps> = ({ children }) =>
  <article>{children}</article>


export default BlogPost; 