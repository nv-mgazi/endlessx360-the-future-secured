import { Helmet } from "react-helmet-async";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

type Props = {
  title: string;
  description: string;
  /** Route path for canonical and og:url. Omitted on pages that must not be indexed. */
  path?: string;
  noindex?: boolean;
};

const PageMeta = ({ title, description, path, noindex = false }: Props) => {
  const url = path ? `${SITE_URL}${path === "/" ? "/" : path}` : undefined;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url ? <link rel="canonical" href={url} /> : <link rel="canonical" href="" />}
      <meta name="robots" content={noindex ? "noindex" : "index, follow"} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="EndlessX360" />
      <meta property="og:locale" content="en_ZA" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url ? <meta property="og:url" content={url} /> : <meta property="og:url" content="" />}
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
};

export default PageMeta;
