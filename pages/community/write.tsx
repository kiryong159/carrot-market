import Button from "@/components/button";
import Layout from "@/components/layout";

function Write() {
  return (
    <Layout title="Write Question" canGoBack>
      <form className="px-4 py-10">
        <textarea
          rows={4}
          placeholder="Ask a question! "
          className=" w-full resize-none appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
        />
        <Button text="Submit"></Button>
      </form>
    </Layout>
  );
}

export default Write;
