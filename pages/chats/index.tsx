import Layout from "@/components/layout";
import Link from "next/link";
import tw from "tailwind-styled-components";

const Wrapper = tw.div``;

function Chats() {
  return (
    <Layout title="채팅" hasTabBar>
      <Wrapper className="divide-y-[1px] divide-orange-200 overscroll-none py-10">
        {[1, 2, 3, 4, 5].map((i) => (
          <Link
            href={`/chats/${i}`}
            key={i}
            className="flex cursor-pointer items-center space-x-3 px-4 py-3"
          >
            <div className="h-12 w-12 rounded-full bg-slate-500" />
            <div>
              <p className="font-medium text-gray-700">Steve Jebs</p>
              <p className="text-sm text-gray-500">See you ~~~</p>
            </div>
          </Link>
        ))}
      </Wrapper>
    </Layout>
  );
}

export default Chats;
