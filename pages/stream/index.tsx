import Layout from "@/components/layout";
import tw from "tailwind-styled-components";

const Wrapper = tw.div``;

function Live() {
  return (
    <Layout hasTabBar title="라이브">
      <Wrapper className="space-y-4 divide-y-2  py-10">
        {[1, 1, 1, 1, 1].map((i) => (
          <div className="px-4 pt-4 " key={i}>
            <div className="aspect-video w-full rounded-md  bg-slate-400 shadow-sm" />
            <h3 className="mt-2 text-lg text-gray-700">Letsss try potatos</h3>
          </div>
        ))}
        <button className="fixed bottom-24 right-5 rounded-full border-transparent bg-orange-400 p-4 text-white shadow-xl transition-all hover:bg-orange-600 sm:right-[15%] md:right-[20%] lg:right-[27%] xl:right-[32%] 2xl:right-[35%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
      </Wrapper>
    </Layout>
  );
}

export default Live;
