import { useExternalLink } from '../../context/ExternalLinkContext';

export default function ExternalLink({
  href,
  siteName,
  children,
  className = '',
  ...props
}) {
  const { openExternalLink } = useExternalLink();

  return (
    <a
      href={href}
      className={`external-link ${className}`.trim()}
      onClick={(event) => openExternalLink(event, siteName, href)}
      {...props}
    >
      {children}
    </a>
  );
}
