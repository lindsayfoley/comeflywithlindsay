import { DOMAIN } from './constants';
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon
} from 'react-share';
import { FunctionComponent } from 'react';
import { ISocialShareProps } from './SocialShare';

const FacebookShare: FunctionComponent<ISocialShareProps> = ({ pageUrl, ogImage }) =>
  <>
    <FacebookShareButton url={`${DOMAIN}${pageUrl}`}>
      <FacebookIcon />
    </FacebookShareButton>
    <PinterestShareButton url={`${DOMAIN}${pageUrl}`} media={ogImage}>
      <PinterestIcon />
    </PinterestShareButton>
  </>

export default FacebookShare;