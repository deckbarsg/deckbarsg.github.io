const FoodItemCard = (props) => {
  return (
    <>
      <div class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
        <div class="bg-white rounded-lg mt-5">
          <img
            src= {props.url}
            class="h-40 rounded-md"
            alt=""
          />
        </div>
        <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
          <div class="py-5 px-5">
            <span class="font-bold text-gray-800 text-lg">{props.title}</span>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-600 font-light">{props.des}</div>
              <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end cols --> */}
    </>
  );
};

export default FoodItemCard;
