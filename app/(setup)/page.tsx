import { redirect } from "next/navigation";


import { initialProfile } from "@/lib/initial-profile";


const SetupPage = async () => {
  const profile = await initialProfile();

  

  return redirect('/hello');
}
 
export default SetupPage;