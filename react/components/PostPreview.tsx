import { FunctionComponent } from 'react'
import Link from 'next/link'
import BlogPostExcerpt, { IBlogPostDetails } from './BlogPostExcerpt'
import { IBlogPostProps } from './BlogPost';

interface IPostDetails extends IBlogPostProps {
  details: IBlogPostDetails;
}

interface IPostProps {
  link: string;
  module: IPostDetails;
}

interface IPostPreviewProps {
  post: IPostProps;
}

export const PostPreview: FunctionComponent<IPostPreviewProps> = ({ post }) => {
  const { link, module: { details } } = post

  return (
    <article>
      <BlogPostExcerpt details={details} />
      <Link href={'/holiday-guides' + link}>
        <a>{details.excerpt.cta}</a>
      </Link>
    </article>
  )
}
