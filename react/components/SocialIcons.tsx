import { FunctionComponent } from "react"

const SocialIcons: FunctionComponent = () => {
  return (
    <>
      <div className="large-6 medium-6 small-6 column social-share">
        <div className="fb-share-button" data-href="" data-layout="button" data-size="large" data-mobile-iframe="true">
          <a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php">Share</a>
        </div>
        <a data-pin-save data-pin-tall="true" href="https://www.pinterest.com/pin/create/button/"></a>
      </div>
      <style jsx>{`
        .social-share { 
          line-height: 40px; 
        }
        .social-share > div span, 
        .social-share > span { 
          vertical-align: middle!important; 
        }
        .social-share > span { 
          margin-left: 10px; 
        }
        @media all and (max-width: 480px) {
          article { 
            padding-bottom: 10px; 
          }
          .social-share, 
          .social-share + div { 
            width: 100%!important; 
            text-align: center; 
          }
          .social-share { 
            padding-bottom: 20px!important; 
            border-bottom: 1px dotted #dfdfdf;
          }
          .social-share + div { 
            margin-top:20px; 
          }
        }
      `}</style>
    </>
  )
}

export default SocialIcons;