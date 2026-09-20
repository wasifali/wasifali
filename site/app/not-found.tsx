import { redirect } from "next/navigation";

/** Unknown routes (and notFound() calls) land on the home page instead of a 404 screen. */
export default function NotFound() {
  redirect("/");
}
