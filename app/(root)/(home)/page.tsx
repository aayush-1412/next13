import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import Link from "next/link";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    tags: [
      { _id: "1", name: "c++" },
      { _id: "2", name: "elixir" },
    ],
    author: {
      _id: "authorId1",
      name: "j gjhb",
      picture: "url_to_author_picture1",
    },
    upvotes: 10,
    views: 7850,
    answers: [],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "Node.js Vs Bun | Which one is better for creating APIs?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "elixir" },
    ],
    author: {
      _id: "authorId2",
      name: "alex w",
      picture: "url_to_author_picture2",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2022-04-08T12:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex-col justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          placeholder="Search Questions"
          route="/"
          iconPosition="left"
          imgsrc="/assets/icons/search.svg"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
        <HomeFilters />
        <div className="mt-10 flex w-full flex-col gap-6 ">
          {/* looping thrubquestions */}
          {questions.length > 0 ? (
            questions.map((question) => (
              <QuestionCard
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                upvotes={question.upvotes}
                author={question.author}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            ))
          ) : (
            <NoResult
              title="There is No Questions to show"
              description=" Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
              link="/ask-question"
              linkTitle="Ask a Question"
            />
          )}
        </div>
      </div>
    </>
  );
}
