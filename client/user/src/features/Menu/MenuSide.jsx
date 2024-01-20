export default function MenuSide({ category }) {
  return (
    <div className=" lg:w-1/4">
      <div className="w-full fixed top-18 bg-white flex justify-center shadow-xl lg:hidden">
        <select
          name=""
          id=""
          className=" w-64 my-2 border-2 border-solid border-amber-800 rounded-lg px-2 py-1">
          <option value="All">Tất cả</option>
          {category.map((item, index) => (
            <option key={index} value={item.name}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className=" hidden lg:block leading-loose">
        <div>Tất cả</div>
        {category.map((item, index) => (
          <div>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
