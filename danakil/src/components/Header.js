import ETTlogo from "./sampleLogo.webp";

const Header = () => {
  return (
    <div className="flex font-sans bg-stone-700 text-amber-300 justify-between w-100 h-16">
      <div className="flex justify-normal w-3/6">
        <img
          className="flex rounded-full ml-5"
          src={ETTlogo}
          alt="ETTlogo"
        ></img>
        <div className="flex items-center">
          <h1 className="font-bold pl-4">
            Ethio travel and tour (ETT) <br></br> &nbsp; &nbsp; &nbsp; &nbsp;
            Danakil Trip
          </h1>
        </div>
      </div>

      <div className="flex items-center w-3/6  justify-evenly">
        <a href="#">Home</a>
        <a href="#">Attractions</a>
        <a href="#">Packages</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Header;
