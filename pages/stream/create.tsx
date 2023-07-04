import Layout from "@/components/layout";
import tw from "tailwind-styled-components";

const Wrapper = tw.div``;
const NameInput = tw.div``;
const PriceInput = tw.div``;
const LiveDescription = tw.div``;

function LiveCreate() {
  return (
    <Layout canGoBack>
      <Wrapper className="space-y-5 px-4 py-16">
        <NameInput>
          <label
            htmlFor="livename"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="flex items-center rounded-md shadow-sm">
            <input
              id="livename"
              type="text"
              className="w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            />
          </div>
        </NameInput>
        <PriceInput>
          <label
            htmlFor="price"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <div className="relative flex items-center rounded-md shadow-sm">
            <div className="pointer-events-none absolute left-0 flex items-center justify-center pl-3">
              <span className="text-sm text-gray-500">$</span>
            </div>
            <input
              id="price"
              type="text"
              placeholder="0.00"
              className="w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 pl-7 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            />
            <div className="pointer-events-none absolute right-0 flex items-center justify-center pr-3">
              <span className="text-sm text-gray-500">USD</span>
            </div>
          </div>
        </PriceInput>
        <LiveDescription>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            rows={4}
            className=" w-full resize-none appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
        </LiveDescription>
        <button className="mt-4 w-full rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500  focus:ring-offset-2">
          Go Live
        </button>
      </Wrapper>
    </Layout>
  );
}

export default LiveCreate;
