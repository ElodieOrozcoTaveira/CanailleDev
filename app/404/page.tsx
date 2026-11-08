import type { Metadata } from "next";
import NotFoundContent from "../components/NotFound/NotFoundContent";

export const metadata: Metadata = {
  title: "Page introuvable - Elodie Orozco Taveira",
};

export default function Error() {
  return <NotFoundContent />;
}
