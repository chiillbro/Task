export default function Navbar() {
  return (
    <div className="fixed right-0 top-0 w-full px-4 flex gap-8 items-center bg-blue-900">
      <div className="w-[20%] max-md:w-full flex flex-col items-center justify-center">
        <img
          src="https://logolook.net/wp-content/uploads/2021/11/HDFC-Bank-Logo.svg"
          width={150}
          height={50}
          alt="HDFC Bank Logo"
        />
      </div>
      <div className=" max-md:hidden w-[80%] flex  justify-evenly items-center text-white text-xl">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Pay</p>
        <p className="cursor-pointer">Save</p>
        <p className="cursor-pointer">Invest</p>
        <p className="cursor-pointer">Borrow</p>
        <p className="cursor-pointer">Insure</p>
        <p className="cursor-pointer">Shop</p>

        <p className="cursor-pointer underline">Personal</p>
        <p className="cursor-pointer">NRI</p>
        <p className="cursor-pointer">SME</p>
        <p className="cursor-pointer">Wholesale</p>
        <p className="cursor-pointer">Agri</p>
      </div>
    </div>
  );
}
