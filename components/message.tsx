import { cls } from "@/libs/server/utils";

interface IMessage {
  text: string;
  reverse?: boolean;
}

function Message({ text, reverse }: IMessage) {
  return (
    <div
      className={cls(
        "flex items-start ",
        reverse ? "flex-row-reverse space-x-reverse" : "space-x-2"
      )}
    >
      <div className="h-8 w-8 rounded-full bg-slate-500" />
      <div className="w-1/2 rounded-md border border-gray-300 p-2 text-sm font-medium text-gray-900">
        <p>{text}</p>
      </div>
    </div>
  );
}
export default Message;
