import { FC } from "react";
import Link from "next/link";

interface IBlogPostMeta {
  title: string;
  heading: string;
  description: string;
  ogImage: string;
}

interface IBlogPostExcerpt {
  description: string;
  image: string;
  alt: string;
  cta: string;
  link: string;
  highlight?: boolean;
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

const BlogPostExcerpt: FC<IBlogPostExcerptProps> = ({
  details: { meta, excerpt },
}) => (
  <>
    <div className="large-6 column">
      <Link href={"/holiday-guides/" + excerpt.link}>
        <a>
          <img loading="lazy" src={excerpt.image} alt={excerpt.alt} />
        </a>
      </Link>
    </div>
    <div className="large-6 column">
      <h2 className="blogPost">
        <Link href={"/holiday-guides/" + excerpt.link}>
          <a>{meta.heading}</a>
        </Link>
      </h2>
      <p>{excerpt.description}</p>
      <Link href={"/holiday-guides/" + excerpt.link}>
        <a className="button small">{excerpt.cta}</a>
      </Link>
    </div>
    <style jsx>
      {`
        p + .button {
          margin-top: 14px;
        }
        a:target::before {
          content: "";
          display: block;
          height: 70px;
          margin: -70px 0 0;
        }
        img {
          border: 10px solid white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
        }
        @media all and (max-width: 1024px) {
          div:nth-of-type(odd) {
            padding-bottom: 20px;
          }
        }
      `}
    </style>
  </>
);

export default BlogPostExcerpt;
