import { FC } from 'react';
import { DOMAIN, BLOG_POST_SOCIAL_ICON_SIZE, FACEBOOK_APP_ID } from '../constants';
import {
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

export interface ISocialShareProps {
  path: string;
  ogImage: string;
  title: string;
  description: string;
}

const SocialShare: FC<ISocialShareProps> = ({
  path,
  ogImage,
  title,
  description
}) => {

  const url = `${DOMAIN}/${path}`;

  return (
    <aside id="share-icons">
      <a
        target="_blank"
        href={`//www.facebook.com/dialog/share?app_id=${FACEBOOK_APP_ID}&display=popup&href=${url}`}>
        <FacebookIcon size={BLOG_POST_SOCIAL_ICON_SIZE} />
      </a>
      <PinterestShareButton url={url} media={`${DOMAIN}${ogImage}`}>
        <PinterestIcon size={BLOG_POST_SOCIAL_ICON_SIZE} />
      </PinterestShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={BLOG_POST_SOCIAL_ICON_SIZE} />
      </WhatsappShareButton>
      <EmailShareButton url={url} subject={title} body={description}>
        <EmailIcon size={BLOG_POST_SOCIAL_ICON_SIZE} />
      </EmailShareButton>
      <style jsx>{`
        #share-icons {
          display: flex;
        }
        @media screen and (max-width: 23.438rem) {
          #share-icons {
            justify-content: center;
          }
        }
      `}</style>
    </aside>
  )
}

export default SocialShare;