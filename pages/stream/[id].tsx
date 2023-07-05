import Layout from "@/components/layout";
import Message from "@/components/message";
import tw from "tailwind-styled-components";

const Wrapper = tw.div``;
const Left = tw.div``;
const Right = tw.div``;
const LiveChat = tw.div``;
const TypingBox = tw.div``;

function LiveDetail() {
  return (
    <Layout canGoBack>
      <Wrapper className="space-y-4 px-4  py-10">
        <div className="aspect-video w-full rounded-md  bg-slate-400 shadow-sm" />
        <h3 className="mt-2  text-2xl font-bold text-gray-900">
          Letsss try potatos
        </h3>
        <span className="mt-3 block text-xl text-gray-900">$140</span>

        <p className=" my-6 text-gray-700">
          대충 라이브 물건 설명 하는칸 fixed inset-x-0 bottom-2 mx-auto w-full
          max-w-md px-2 w-full rounded-full border-gray-300 pr-14 shadow-sm
          focus:border-orange-500 focus:outline-none focus:ring-orange-500
          button className=flex items-center rounded-full bg-orange-500 px-3
          text-sm text-white hover:bg-orange-600 focus:ring-2
          focus:ring-orange-400 focus:ring-offset-2
        </p>

        <LiveChat className="h-[50vh] space-y-4 overflow-y-scroll rounded-md border border-orange-100 px-4 py-10">
          <Message text="Hi how much are you selling them for?" />
          <Message text="I want ￦20,000" reverse />
          <Message text="ㅗ" />
          <Message text="Hi how much are you selling them for?" />
          <Message text="I want ￦20,000" reverse />
          <Message text="ㅗ" />
          <Message text="Hi how much are you selling them for?" />
          <Message text="I want ￦20,000" reverse />
          <Message text="ㅗ" />
        </LiveChat>
        <TypingBox className="fixed inset-x-0 bottom-2 mx-auto w-full max-w-md px-2">
          <div className="relative flex items-center ">
            <input
              type="text"
              className="w-full rounded-full border-gray-300 pr-14 shadow-sm focus:border-orange-500 focus:outline-none  focus:ring-orange-500 "
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-2  ">
              <button className="flex items-center rounded-full bg-orange-500 px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-400  focus:ring-offset-2">
                &rarr;
              </button>
            </div>
          </div>
        </TypingBox>
      </Wrapper>
    </Layout>
  );
}

export default LiveDetail;
