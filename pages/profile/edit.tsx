import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import tw from "tailwind-styled-components";

const Wrapper = tw.div``;
const EmailEdit = tw.div``;
const InputBox = tw.div``;
const PhoneEdit = tw.div``;
const SubmitBtn = tw.button``;
const ProfilePhoto = tw.div``;
function EditProfile() {
  return (
    <Layout canGoBack>
      <Wrapper className="space-y-4 px-4 py-10">
        <ProfilePhoto className="flex items-center space-x-3">
          <div className="h-14 w-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm font-medium shadow-sm ring-orange-500 focus:ring"
          >
            Change Photo
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </ProfilePhoto>
        <EmailEdit>
          <Input label="Email address" value="text" />
        </EmailEdit>
        <PhoneEdit>
          <Input value="phone" label=" Phone Number" />
        </PhoneEdit>
        <Button text="Update Profile" />
      </Wrapper>
    </Layout>
  );
}

export default EditProfile;
