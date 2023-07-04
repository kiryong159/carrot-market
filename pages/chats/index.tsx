import Layout from "@/components/layout";
import tw from "tailwind-styled-components";

const Wrapper = tw.div``;
const UserProfile = tw.div``;

function Chats() {
  return (
    <Layout title="채팅" hasTabBar>
      <Wrapper className="divide-y-[1px] divide-orange-200 py-10">
        {[1, 1, 1].map((i) => (
          <UserProfile
            key={i}
            className="flex cursor-pointer items-center space-x-3 px-4 py-3"
          >
            <div className="h-12 w-12 rounded-full bg-slate-500" />
            <div>
              <p className="font-medium text-gray-700">Steve Jebs</p>
              <p className="text-sm text-gray-500">See you ~~~</p>
            </div>
          </UserProfile>
        ))}
      </Wrapper>
    </Layout>
  );
}

export default Chats;
