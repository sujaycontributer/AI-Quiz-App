import Link from "next/link";
import {getServerSession} from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import FrontPage from "./components/FrontPage";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // if(!session) {
  //   // redirect("api/auth/signin");
  //   redirect("/signin")

  // }

  return (
    <div>
    <FrontPage />
    </div>
  );
}
