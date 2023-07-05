import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import tw from "tailwind-styled-components";

const Wrapper = tw.div``;
const FileInput = tw.div``;
const NameInput = tw.div``;
const PriceInput = tw.div``;
const ItemDescription = tw.div``;

function Upload() {
  return (
    <Layout canGoBack>
      <Wrapper className="px-6 py-10">
        <FileInput>
          <label className="flex h-48 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input className="hidden " type="file" />
          </label>
        </FileInput>
        <NameInput className="my-5">
          <Input label="name" value="text" placeholder="Write Items Name" />
        </NameInput>
        <PriceInput className="my-5">
          <Input label="price" value="price" placeholder="0.00" />
        </PriceInput>
        <ItemDescription>
          <TextArea areaTitle="Description" label="ItemDescription" />
        </ItemDescription>
        <Button text="Upload product"></Button>
      </Wrapper>
    </Layout>
  );
}
export default Upload;
