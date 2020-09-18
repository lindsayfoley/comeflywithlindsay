import { FunctionComponent } from 'react';
import { DOMAIN, BLOG_POST_SOCIAL_ICON_SIZE } from './constants';
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

export interface ISocialShareProps {
  pageUrl: string;
  ogImage: string;
  title: string;
  description: string;
}

const SocialShare: FunctionComponent<ISocialShareProps> = ({
  pageUrl,
  ogImage,
  title,
  description
}) =>
  <>
    <FacebookShareButton url={`${DOMAIN}${pageUrl}`}>
      <FacebookIcon size={BLOG_POST_SOCIAL_ICON_SIZE} />
    </FacebookShareButton>
    <PinterestShareButton url={`${DOMAIN}${pageUrl}`} media={`${DOMAIN}${ogImage}`}>
      <PinterestIcon size={BLOG_POST_SOCIAL_ICON_SIZE} />
    </PinterestShareButton>
    <WhatsappShareButton url={`${DOMAIN}${pageUrl}`} title={title}>
      <WhatsappIcon size={BLOG_POST_SOCIAL_ICON_SIZE} />
    </WhatsappShareButton>
    <EmailShareButton url={`${DOMAIN}${pageUrl}`} subject={title} body={description}>
      <EmailIcon size={BLOG_POST_SOCIAL_ICON_SIZE} />
    </EmailShareButton>
  </>

export default SocialShare;