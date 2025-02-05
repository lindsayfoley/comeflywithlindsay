interface ExternalLinkProps {
  cta: string;
  href: string;
  isInternal?: boolean;
}

const ExternalLink = ({ cta, href }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank">
      {cta}
    </a>
  );
};

export default ExternalLink;
