import { auth } from "@/auth";
import LoginView from "./loginView";
import Header from "@/components/header";

export default async function Home() {
  const session = await auth();
  console.log(session);
  const user = session?.user;

  return (
    <div>
      {user && (
        <div className="p-4 ">
          <Header user={user}/>
        </div>
      )}
      {!user && (
        <LoginView />
      )}

    </div>
  );
}
