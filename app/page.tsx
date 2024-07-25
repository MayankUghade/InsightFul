import Dashboard from "@/components/Dashboard/Dashbooard";
import LandingPage from "@/components/LandingPage";
import { auth } from "@/lib/auth";
export default async function Home() {
  const session = await auth();
  return <div>{session ? <Dashboard /> : <LandingPage />}</div>;
}
