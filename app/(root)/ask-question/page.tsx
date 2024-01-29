import Question from "@/components/forms/Question";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import type { Metadata } from "next";
import { getUserById } from "@/lib/actions/user.action";

export const metadata: Metadata = {
  title: "Ask-question | Dev Overflow",
  description: "Ask quesiton page of Dev Overflow",
};

const AskQuestion = async () => {
  // const { userId } = auth();
  const userId="CL123"

  if (!userId) redirect("/sign-in");
  const mongoUser=await getUserById({userId})
  console.log(mongoUser)
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};
export default AskQuestion;
