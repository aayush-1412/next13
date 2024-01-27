import Question from "@/components/forms/Question";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask-question | Dev Overflow",
  description: "Ask quesiton page of Dev Overflow",
};

const AskQuestion = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question />
      </div>
    </div>
  );
};
export default AskQuestion;
