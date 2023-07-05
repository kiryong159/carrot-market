import Items from "@/components/Items";
import Layout from "@/components/layout";
import tw from "tailwind-styled-components";

const Wrapper = tw.div``;

const ItemInfo = tw.div``;
const SvgBox = tw.div``;
const Img = tw.div``;

function Sold() {
  return (
    <Layout title="판매내역" canGoBack>
      <Wrapper className="flex flex-col space-y-5 py-16">
        {[1, 1, 1, 1, 1].map((_, i) => (
          <Items
            id={i}
            key={i}
            name={`New iphone ${i}`}
            price={16 + 247 * i}
            heart={i}
            comment={i}
          />
        ))}
      </Wrapper>
    </Layout>
  );
}

export default Sold;
