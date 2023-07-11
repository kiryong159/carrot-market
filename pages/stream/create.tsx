import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import tw from "tailwind-styled-components";
import TextArea from "@/components/textarea";
import { useForm } from "react-hook-form";

const Wrapper = tw.div``;
const NameInput = tw.div``;
const PriceInput = tw.div``;
const LiveDescription = tw.div``;

function LiveCreate() {
  const { register, handleSubmit } = useForm();
  return (
    <Layout title="Create Live" canGoBack>
      <Wrapper className="space-y-5 px-4 py-10">
        <NameInput>
          <Input register={register("Livename")} value="text" label="Name" />
        </NameInput>
        <PriceInput>
          <Input
            register={register("LivePrice")}
            value="price"
            label="Price"
            placeholder="0.00"
          />
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
