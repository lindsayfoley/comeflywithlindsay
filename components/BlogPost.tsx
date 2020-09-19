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
      <section>
        <main className="row">
          <article id="blog-post" className="large-12 column">
            {children}
            <div>
              <div id="post-footer" className="large-12">
                <div className="large-6 medium-6 small-6 column">
                  <SocialShare
                    path={details.excerpt.link}
                    ogImage={details.meta.ogImage}
                    title={details.meta.title}
                    description={details.excerpt.description}
                  />
                </div>
                <div className="large-6 medium-6 small-6 column text-right">
                  <Link href={details.nextPost.link}>
                    <a className="button small">{details.nextPost.cta}</a>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </main>
      </section>
    </Layout>
    <style jsx>{`
      section {
        width: 100%;
        background-color: #F3F3F3;
        padding: 30px 0;
      }
      #post-footer > div {
        padding: 0;
      }
    `}</style>
  </>

export default BlogPost; 