import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  max-xss:mb-[70px]  w-full h-auto border-t-2 border-gray-200 bg-[#0B1419] text-white">
      <div className=" max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4 grid max-sm:pb-[20px] px-16 grid-cols-6  gap-[40px] mt-10 mb-6 pb-10 border-b border-gray-400 ">
        {/* social */}
        <div className="flex flex-col gap-[20px] max-sm:gap-[10px]">
          <h4 className="max-sm:text-[14px] text-base font-semibold">Social</h4>
          <ul className="flex flex-col gap-[15px]  text-[#A9A9A6]  font-semibold text-[14px]">
            <li>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="w-[20px] h-[20px] " />
                <span className="text-sm max-sm:text-[12px]">WhatsApp</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <CiFacebook className="w-[20px] h-[20px]" />
                <span className="text-sm max-sm:text-[12px]">Facebook</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <CiTwitter className="w-[20px] h-[20px]" />
                <span className="text-sm max-sm:text-[12px]">Twitter</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <FaInstagram className="w-[20px] h-[20px]" />
                <span className="text-sm max-sm:text-[12px]">Instagram</span>
              </div>
            </li>
          </ul>
        </div>

        {/* About  */}
        <div className="flex flex-col gap-[20px] max-sm:gap-[10px]">
          <h4 className="max-sm:text-[14px] text-base font-semibold">
            Contact
          </h4>
          <ul className="max-sm:text-[12px] max-sm:gap-[5px] flex flex-col gap-[15px]  text-[#A9A9A6]  font-semibold text-[14px]">
            <li>
              <span>Overview</span>
            </li>
            <li>
              <span>Investor Relations</span>
            </li>
            <li>
              <span>Careers</span>
            </li>
            <li>
              <span>Other Stakeholders` Information</span>
            </li>
            <li>
              <span>News Room</span>
            </li>
            <li>
              <span>Corporate Governance</span>
            </li>
            <li>
              <span>CSR</span>
            </li>
          </ul>
        </div>

        {/* Useful Links  */}
        <div className="flex flex-col gap-[20px] max-sm:gap-[10px]">
          <h4 className="max-sm:text-[14px] text-base font-semibold">
            Useful links
          </h4>
          <ul className=" cursor-pointer max-sm:text-[12px] max-sm:gap-[5px] flex flex-col gap-[15px]  text-[#A9A9A6]  font-semibold text-[14px]">
            <li>
              <span className="underline hover:no-underline">
                List of third parties engaged by Bank
              </span>
            </li>
            <li>
              <span className="underline hover:no-underline">
                SmartWealth terms and conditions
              </span>
            </li>
            <li>
              <span className="underline hover:no-underline">
                Penal Charges
              </span>
            </li>
            <li>
              <span className="underline hover:no-underline">New Issuance</span>
            </li>
            <li>
              <span className="underline hover:no-underline">Privacy</span>
            </li>
            <li>
              <span className="underline hover:no-underline">
                Quick Money - Top-Up on Car Loan
              </span>
            </li>
            <li>
              <span className="underline hover:no-underline">
                Jaldi Five - Top-Up on Car Loan
              </span>
            </li>
            <li>
              <span className="underline hover:no-underline">
                Car Loan BT Top-Up Calculator
              </span>
            </li>
            <li>
              <span className="underline hover:no-underline">
                Pre-Approved Car Loan
              </span>
            </li>
            <li>
              <span className="underline hover:no-underline">
                Important Messages
              </span>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-[20px] max-sm:gap-[10px]">
          <h4 className="max-sm:text-[14px] text-base font-semibold">
            Need Help
          </h4>
          <ul className="max-sm:text-[12px] max-sm:gap-[5px] flex flex-col gap-[15px]  text-[#A9A9A6]  font-semibold text-[14px]">
            <li>
              <span>Grievance Redressal Digital</span>
            </li>
            <li>
              <span>Product Features and Policy</span>
            </li>
            <li>
              <span>We Care For You</span>
            </li>
            <li>
              <span>FAQS</span>
            </li>
            <li>
              <span>Insta Service</span>
            </li>
            <li>
              <span>Customer Care</span>
            </li>
            <li>
              <span>Grievance Redressal Officer</span>
            </li>
            <li>
              <span>Contact Us</span>
            </li>
            <li>
              <span>Use Of Unparliamentary Language By Customers</span>
            </li>
            <li>
              <span>Active Channel Partners</span>
            </li>
          </ul>
        </div>

        {/* Resources  */}
        <div className="flex flex-col max-lg:col-span-2 max-xl:col-span-full col-span-2 gap-[20px] max-sm:gap-[10px]">
          <h4 className="max-sm:text-[14px] text-base font-semibold">
            Resources
          </h4>
          <div className="flex flex-wrap  text-[#A9A9A6]   font-semibold max-sm:text-[12px] text-[14px]">
            <span id="link">Home Loan</span>
            <span id="link">Non-Withdrawable-Interest-Rates-for-2Cr-above</span>
            <span id="link">Interest Rates for 5Cr and above</span>
            <span id="link">Ways To Bank</span>
            <span id="link">Rates</span>
            <span id="link">Fees & Charges</span>
            <span id="link">Bank Holiday List</span>
            <span id="link">Glossary</span>
            <span id="link">Watch Videos</span>
            <span id="link">Learning Centre</span>
            <span id="link">Auction Notices</span>
            <span id="link">PayZapp</span>
          </div>
        </div>
      </div>
      <div className="text-center h-[60px] max-sm:text-[12px] text-base">
        © 2023 <span className="multi-color-text">HDFC Bank Ltd</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
