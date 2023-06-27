export default function Home() {
  return (
    <div className="m-auto grid w-1/3 gap-10 bg-slate-400 px-10 py-10">
      <div className="rounded-3xl bg-white p-5 shadow-2xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Gray Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$81</span>
        </div>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="m-auto mt-5 w-1/2 rounded-xl bg-blue-500 px-10 py-3 text-center text-white">
          CheckOut
        </div>
      </div>
      <div className="rounded-3xl bg-blue-500 py-10 shadow-2xl ">
        <div className="mb-5 flex justify-between p-6 text-2xl font-semibold text-white">
          <span>Profile</span>
          <span>cart</span>
        </div>
        <div className="relative top-12 flex h-2/3 flex-col rounded-3xl bg-white p-2 ">
          <div className="flex justify-around text-center">
            <div className="flex flex-col">
              <span className="text-slate-500">Orders</span>
              <span className="text-lg font-semibold">340</span>
            </div>
            <div className="relative -top-16 h-28 w-28 rounded-full bg-orange-600"></div>
            <div className="flex flex-col">
              <span className="text-slate-500">Spent</span>
              <span className="text-lg font-semibold">$2,310</span>
            </div>
          </div>
          <div className="-mt-10 flex flex-col text-center">
            <span className="text-lg font-semibold">Tony Molloy</span>
            <span className="text-slate-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-10 shadow-2xl"></div>
      <div className="rounded-lg bg-white p-10 shadow-2xl"></div>
    </div>
  );
}
