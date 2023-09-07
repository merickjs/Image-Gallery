const Header = ({ setSearch }) => {
  return (
    <header className="mt-20">
      <form className="flex flex-col justify-center items-center">
        <h1 className="text-md text-[#555555]">Search Images..</h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="w-80  p-2 outline-0 border-b-2 border-blue-600"
          type="text"
          placeholder="Search.."
        />
      </form>
    </header>
  );
};

export default Header;
