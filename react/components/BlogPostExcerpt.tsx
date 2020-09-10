import { FunctionComponent } from 'react';

interface IBlogPostMeta {
  title: string;
  description: string;
  ogImage: string;
}

interface IBlogPostExcerpt {
  description: string;
  image: string;
  alt: string;
  cta: string;
}

interface IRecommendedNextPost {
  link: string;
  cta: string;
}

export interface IBlogPostDetails {
  meta: IBlogPostMeta;
  excerpt: IBlogPostExcerpt;
  nextPost: IRecommendedNextPost;
}

interface IBlogPostExcerptProps {
  details: IBlogPostDetails;
}

const BlogPostExcerpt: FunctionComponent<IBlogPostExcerptProps> = ({
  details: { meta, excerpt } = {}
}) => (
    <>
      <h1 className="blogPost">
        {meta.title}
      </h1>
      <div className="details">
        <p>{excerpt.description}</p>
      </div>
      <style jsx>
        {`
        h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f39c12;
        }
        .great-title {
          font-size: 2rem;
        }
        .details span {
          color: #bdbdbd;
          margin-right: 1rem;
        }
        .details {
          margin-bottom: 1rem;
        }
      `}
      </style>
    </>
  );

export default BlogPostExcerpt;