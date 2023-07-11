import FloatingButton from "@/components/floating-button";
import Items from "@/components/Items";
import Layout from "@/components/layout";
import tw from "tailwind-styled-components";

const Wrapper = tw.div`
`;

export default function Home() {
  return (
    <Layout title="홈" hasTabBar>
      <Wrapper className="  flex flex-col space-y-5 py-10  ">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Items
            id={i}
            key={i}
            heart={i}
            price={99}
            comment={i}
            name="New iPhone 14"
          ></Items>
        ))}
        <FloatingButton href="/items/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </Wrapper>
    </Layout>
  );
}
