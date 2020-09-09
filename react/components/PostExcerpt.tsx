import { FunctionComponent } from 'react';
import { IBlogPostDetails } from './BlogPost';

interface IPostExcerptProps {
  setup: IBlogPostDetails;
}

const PostExcerpt: FunctionComponent<IPostExcerptProps> = ({
  setup: { meta, excerpt } = {}
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

export default PostExcerpt;