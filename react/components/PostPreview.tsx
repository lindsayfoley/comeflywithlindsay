import Link from 'next/link'
import { FunctionComponent } from 'react'
import PostExcerpt from './PostExcerpt'
import { IBlogPostProps } from './BlogPost';

interface IPostProps {
  link: string;
  module: IBlogPostProps;
}

interface IPostPreviewProps {
  post: IPostProps;
}

export const PostPreview: FunctionComponent<IPostPreviewProps> = ({ post }) => {
  const {
    link,
    module: { setup },
  } = post

  return (
    <article>
      <PostExcerpt setup={setup} />
      <Link href={'/holiday-guides' + link}>
        <a>{setup.excerpt.cta}</a>
      </Link>
    </article>
  )
}
