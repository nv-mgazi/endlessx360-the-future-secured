import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const NotFound = () => (
  <div className="midnight flex min-h-screen items-center justify-center px-5">
    <PageMeta
      title="Page not found | EndlessX360"
      description="The page you were looking for is not available on endlessx360.co.za."
      noindex
    />
    <div className="max-w-md text-center">
      <div className="mn-eyebrow">404</div>
      <h1 className="mt-5 mn-h2">This page doesn't exist.</h1>
      <p className="mt-5 text-lg leading-relaxed text-[hsl(var(--mn-muted))]">
        The link may be outdated, or the page may have moved. Start again from the home page.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-12 items-center rounded-full px-7 text-sm font-semibold mn-btn-primary"
      >
        Back to home
      </Link>
    </div>
  </div>
);

export default NotFound;
