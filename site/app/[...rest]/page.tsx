import { redirect } from "next/navigation";

/** Catch-all: any route that no page claims redirects to the home page. */
export default function CatchAll() {
  redirect("/");
}
