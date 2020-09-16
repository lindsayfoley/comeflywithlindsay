import { FunctionComponent } from 'react';
import Layout from './Layout';

export interface IBlogPostProps {
  children: JSX.Element;
}

const BlogPost: FunctionComponent<IBlogPostProps> = ({ children }) =>
  <>
    <Layout
      pageTitle="Welcome to my Travel Blog | Come Fly With Lindsay"
      description="I have been documenting my travel adventures to give you an insight into the destinations I visit, covering where to stay, where to eat and what to see."
      ogTitle="Welcome to my Travel Blog"
      ogImage="/images/vancouver/cycling-around-stanley-park-in-vancouver.jpg"
    >
      <article id="blog-post" className="row">
        {children}
      </article>
    </Layout>
    <style jsx>{`
      article {
        margin-top: 30px;
        padding-bottom: 60px;
      }
    `}</style>
  </>

export default BlogPost; 