import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";
const hotQuestions = [
  {
    _id: 1,
    title: "SOmwn mkbdf vdkfvkfdnv kdbnodvnd? ndkfvjdf??",
  },
  {
    _id: 1,
    title: "SOmwn mkbdf vghihghuihghuhh  vdkfvkfdnv kdbnodvnd? ndkfvjdf??",
  },
  {
    _id: 3,
    title: "SOmwn mkbdf mbuyg bkhih vdkfvkfdnv kdbnodvnd? ndkfvjdf??",
  },
  {
    _id: 4,
    title:
      "bh bhih b i mbh hihih b hhi bihih   buygug huguh hih ihiiu ihiSOmwn mkbdf vdkfvkfdnv kdbnodvnd? ndkfvjdf??",
  },
  {
    _id: 5,
    title: "SOmwn mkbdf vdkfvkfdnv kdbnodvnd? ndkfvjdf??",
  },
];
const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 22 },
  { _id: 2, name: "java", totalQuestions: 11 },
  { _id: 3, name: "python", totalQuestions: 16 },
  { _id: 4, name: "rust", totalQuestions: 25 },
  { _id: 5, name: "c++", totalQuestions: 15 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
              href={`/questions/${question._id}`}
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevronright"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag key={tag._id}
            _id={tag._id}
            name={tag.name}
            totalQuestions={tag.totalQuestions}
            showCount

            
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
