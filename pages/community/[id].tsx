import Button from "@/components/button";
import Layout from "@/components/layout";
import tw from "tailwind-styled-components";
import TextArea from "@/components/textarea";

const Wrapper = tw.div``;
const UserProfile = tw.div``;
const Q = tw.div``;
const A = tw.div``;
const Reply = tw.div``;

function CommunityPostDetail() {
  return (
    <Layout canGoBack>
      <Wrapper className=" py-10">
        <div className="mb-3 px-4">
          <span className="inline-flex items-center rounded-full bg-gray-300 px-2.5 py-0.5 text-xs  font-medium ">
            동네질문
          </span>
        </div>
        <UserProfile className="mb-5 flex cursor-pointer items-center space-x-3 border-b px-4 py-3">
          <div className="h-10 w-10 rounded-full bg-slate-500" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </UserProfile>
        <Q>
          <div className="mt-2 px-4 text-gray-700 ">
            <span className="font-medium text-orange-500">Q.</span> What is the
            best mandu restaurant?
          </div>
          <div className="mt-3 flex w-full space-x-5 border-b-[2px] border-t px-4 py-2.5 text-gray-700">
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
        </Q>
        <A className="my-5 space-y-5 px-4">
          <div className="flex space-x-3">
            <div className="h-8 w-8 rounded-full bg-slate-500" />
            <div>
              <span className="block text-sm font-medium text-gray-900">
                Steve Jebs
              </span>
              <span className="block text-xs text-gray-500">2시간 전</span>
              <p className="mt-1 text-gray-700">
                The best mandu restaurant is the one next to my house.
              </p>
            </div>
          </div>
        </A>

        <Reply className="px-4">
          <TextArea
            areaTitle="답변을 입력해주세요!"
            label="Reply"
            placeholder="Answer this question!"
          />
          <Button text="Reply" />
        </Reply>
      </Wrapper>
    </Layout>
  );
}
export default CommunityPostDetail;
