import Layout from "@/components/layout";

function Write() {
  return (
    <Layout canGoBack>
      <form className="px-4 py-16">
        <textarea
          rows={4}
          placeholder="Ask a question! "
          className=" w-full resize-none appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
        />
        <button className="mt-2 w-full rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500  focus:ring-offset-2">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default Write;
