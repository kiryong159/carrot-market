import FloatingButton from "@/components/floating-button";
import Layout from "@/components/layout";
import Link from "next/link";
import tw from "tailwind-styled-components";

const Wrapper = tw.div``;

const Name = tw.div``;

function Community() {
  return (
    <Layout title="동네생활" hasTabBar>
      <Wrapper className="space-y-8 px-6 py-10">
        {[1, 2, 3, 4, 5, 1, 1, 1].map((_, i) => (
          <Link
            href={`/community/${i}`}
            key={i}
            className="flex cursor-pointer flex-col items-start"
          >
            <span className="flex items-center rounded-full bg-gray-300 px-2.5 py-0.5 text-xs  font-medium ">
              동네질문
            </span>
            <div className="mt-2 text-gray-700 ">
              <span className="font-medium text-orange-500">Q.</span> What is
              the best mandu restaurant?
            </div>
            <Name className="mt-5 flex w-full items-center justify-between text-xs font-medium text-gray-500">
              <span>니꼬</span>
              <span>18시간 전</span>
            </Name>
            <div className="mt-3 flex w-full space-x-5 border-b-[2px] border-t py-2.5 text-gray-700">
              <span className="flex items-center space-x-2 text-sm">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>궁금해요 1</span>
              </span>
              <span className="flex items-center space-x-2 text-sm">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>답변 1</span>
              </span>
            </div>
          </Link>
        ))}
        <FloatingButton href="/community/write">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </FloatingButton>
      </Wrapper>
    </Layout>
  );
}

export default Community;
