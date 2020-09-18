import { FunctionComponent } from 'react';
import Layout from './Layout';
import Link from 'next/link';
import { IBlogPostDetails } from './BlogPostExcerpt';
import SocialShare from './SocialShare';

export interface IBlogPostProps {
  children: JSX.Element;
  details: IBlogPostDetails;
}

const BlogPost: FunctionComponent<IBlogPostProps> = ({ children, details }) =>
  <>
    <Layout
      pageTitle={details.meta.title}
      description={details.meta.description}
      ogTitle={details.meta.title}
      ogImage={details.meta.ogImage}
    >
      <article id="blog-post" className="row">
        {children}
        <div id="post-footer">
          {/* <button id="toTop">&#8593;</button> */}
          <div className="large-12 medium-12 small-12">
            <SocialShare
              pageUrl={details.excerpt.link}
              ogImage={details.meta.ogImage}
              title={details.meta.title}
              description={details.excerpt.description}
            />
            <div className="large-6 medium-6 small-6 column text-right">
              <Link href={details.nextPost.link}>
                <a className="button small">{details.nextPost.cta}</a>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
    <style jsx>{`
      article {
        margin-top: 30px;
        padding-bottom: 60px;
      }
      #post-footer div {
        padding: 0;
      }
    `}</style>
  </>

export default BlogPost; 