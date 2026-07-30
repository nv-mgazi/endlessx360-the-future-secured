export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "what-a-website-costs-in-durban-2026",
    title: "What a business website actually costs in Durban in 2026",
    excerpt:
      "Where the money goes on a R5,590 site versus a R16,900 one, and how to tell which one your business needs.",
    date: "2026-06-18",
    readTime: "5 min read",
    category: "Pricing",
    body: [
      "Most quotes South African businesses receive are a single number with no breakdown, which makes them impossible to compare. A website price is really three things stacked together: design time, build time, and the content and setup work that happens before launch.",
      "On a five to nine page site, design is the smallest part. The bulk of the work is structuring pages so a visitor finds what they need in one or two clicks, wiring up the enquiry paths, and setting up Google Business Profile so nearby customers can actually find you. That's the R5,590 band, and for a plumber, guest house or attorney in Durban it is usually enough.",
      "The jump to R8,590 and beyond is almost always functionality, not more pages. Booking forms that check availability, newsletter automation, member areas, payment gateways — each one adds logic that has to be tested against real use, not just designed.",
      "Above R16,900 you are paying for integration work: CRMs, invoicing systems, stock feeds. If your team currently retypes data between two systems, that's the tier that pays for itself.",
      "A quote should tell you which of these three buckets your money lands in. If it doesn't, ask before you sign.",
    ],
  },
  {
    slug: "when-to-replace-spreadsheets-with-a-system",
    title: "When to stop running your business on spreadsheets",
    excerpt:
      "Four signals that a shared spreadsheet has become a liability, and what a custom system replaces it with.",
    date: "2026-05-02",
    readTime: "6 min read",
    category: "System development",
    body: [
      "Spreadsheets are excellent until more than one person depends on them. The failure is rarely dramatic — it's a slow accumulation of duplicate rows, stale copies and one person who is the only one who understands the formulas.",
      "The first signal is version confusion: someone asks which file is current. The second is manual re-entry — data typed from an email into a sheet, then into an invoice. The third is access control: you want a staff member to update orders but not see pricing or salaries. The fourth is reporting; if answering 'how did last month go' takes an afternoon, the tooling is costing you money.",
      "A custom system fixes those specifically. One record per order, one place to update it, roles that decide who sees what, and a dashboard that answers the monthly question in seconds.",
      "You do not need to replace everything at once. The most successful builds we've delivered started with the single worst process — usually quoting or scheduling — and expanded once the team trusted it.",
    ],
  },
  {
    slug: "local-seo-for-south-african-businesses",
    title: "Local SEO for South African businesses: the parts that matter",
    excerpt:
      "Google Business Profile, service-area pages and review velocity — the three levers that move local rankings.",
    date: "2026-03-27",
    readTime: "4 min read",
    category: "SEO",
    body: [
      "For a business serving Durban, Umhlanga or Pinetown, national keyword rankings matter far less than showing up in the map pack when someone searches with intent nearby.",
      "The single highest-return task is a complete Google Business Profile: correct category, real photos, service areas listed, hours accurate, and the same name, address and phone number as your website. Inconsistency between the two is the most common reason a profile underperforms.",
      "Second, give each service its own page with the location written naturally into the heading and opening paragraph. One page listing eight services will lose to eight focused pages every time.",
      "Third, reviews. Volume matters less than recency — a steady trickle of reviews signals an active business. Asking at the moment a job is finished works far better than a bulk email later.",
      "None of this is fast. Expect movement in six to twelve weeks, and treat anyone promising page one in a fortnight with suspicion.",
    ],
  },
];
