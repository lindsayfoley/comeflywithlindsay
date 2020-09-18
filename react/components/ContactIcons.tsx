import { FunctionComponent } from 'react';
import {
  FOOTER_SOCIAL_ICON_SIZE,
  COME_FLY_WITH_LINDSAY_INSTAGRAM,
  COME_FLY_WITH_LINDSAY_PINTEREST,
  COME_FLY_WITH_LINDSAY_FACEBOOK,
  PORTFOLIO_SITE,
  EMAIL_ADDRESS
} from '../constants';
import { SocialIcon } from 'react-social-icons';

const iconUrls = [
  COME_FLY_WITH_LINDSAY_INSTAGRAM,
  COME_FLY_WITH_LINDSAY_PINTEREST,
  COME_FLY_WITH_LINDSAY_FACEBOOK,
  PORTFOLIO_SITE,
  EMAIL_ADDRESS
];

const ContactIcons: FunctionComponent = () =>
  <>
    {iconUrls.map(url =>
      <SocialIcon
        key={url}
        url={url}
        fgColor="white"
        bgColor={url === PORTFOLIO_SITE ? "#C27AC0" : undefined}
        style={{ height: FOOTER_SOCIAL_ICON_SIZE, width: FOOTER_SOCIAL_ICON_SIZE }}
      />
    )}
  </>

export default ContactIcons;