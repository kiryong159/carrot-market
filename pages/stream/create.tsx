import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import tw from "tailwind-styled-components";
import TextArea from "@/components/textarea";

const Wrapper = tw.div``;
const NameInput = tw.div``;
const PriceInput = tw.div``;
const LiveDescription = tw.div``;

function LiveCreate() {
  return (
    <Layout title="Create Live" canGoBack>
      <Wrapper className="space-y-5 px-4 py-10">
        <NameInput>
          <Input value="text" label="Name" />
        </NameInput>
        <PriceInput>
          <Input value="price" label="Price" placeholder="0.00" />
        </PriceInput>
        <LiveDescription>
          <TextArea label="LiveDescription" areaTitle="Live Description" />
        </LiveDescription>
        <Button text=" Go Live"></Button>
      </Wrapper>
    </Layout>
  );
}

export default LiveCreate;
