import { Helmet } from "react-helmet-async";

// The one place the public origin is written for page metadata.
export const SITE_URL = "https://endlessx360.co.za";
export const OG_IMAGE = `${SITE_URL}/og-endlessx360.jpg`;

type Props = {
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/privacy". Used for canonical and og:url. */
  path: string;
  noindex?: boolean;
};

const PageMeta = ({ title, description, path, noindex = false }: Props) => {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex" : "index, follow"} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="EndlessX360" />
      <meta property="og:locale" content="en_ZA" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
};

export default PageMeta;
