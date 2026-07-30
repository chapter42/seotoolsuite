import { Metadata } from "next";
import KeywordAutocompleteTool from "@/tools/KeywordResearch/KeywordAutocomplete/";

export const metadata: Metadata = {
  title: "Keyword Autocomplete (Free) | SEOToolSuite",
  description:
    "The Keyword Autocomplete tool generates long-tail keyword ideas using Google autocomplete data for free.",
  openGraph: {
    type: "website",
    title: "Keyword Autocomplete (Free) | SEOToolSuite",
    description:
      "The Keyword Autocomplete tool generates long-tail keyword ideas using Google autocomplete data for free.",
    images: [{ url: "/assets/images/keyword-autocomplete-screenshot.png" }],
  },
  robots: {
    index: false,
  },
};

export default function KeywordAutocompletePage({
  searchParams,
}: {
  searchParams?: Promise<{
    keyword?: string;
    location_code?: string;
    language_code?: string;
  }>;
}) {
  return (
    <div className="keyword-autocomplete-page">
      <KeywordAutocompleteTool searchParams={searchParams} />
    </div>
  );
}
