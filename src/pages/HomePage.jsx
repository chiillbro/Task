import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 mt-[80px]">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to HDFC Bank</h1>
          <p className="text-xl mb-6">Empowering Your Financial Future</p>
          <a
            href="#features"
            className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
          >
            Explore More
          </a>
        </div>
      </section>

      {/* Home Content */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="mb-6">
                At HDFC Bank, we offer a wide range of banking services designed
                to meet your financial needs. From savings accounts to loans and
                investments, we are committed to providing you with innovative
                solutions and excellent customer service.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Personal Banking</li>
                <li>Corporate Banking</li>
                <li>Investment Services</li>
                <li>Loan Products</li>
                <li>Online Banking</li>
              </ul>
              <a
                href="#about"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.1bRrEX2yZXvSxCV6Gfc8hgHaEK&pid=Api&P=0&h=180"
                alt="Bank Services"
                className="w-full rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.gEea09hKOZ08-idnSs-XLwHaEK&pid=Api&P=0&h=180"
                alt="About Us"
                className="w-full rounded shadow-lg "
              />
            </div>
            <div className="w-full pl-4 md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About HDFC Bank</h2>
              <p className="mb-6">
                HDFC Bank is one of India's leading private sector banks,
                providing a wide range of financial products and services to
                millions of customers across the country. Established with a
                vision to be a "World Class Indian Bank," we strive to uphold
                the highest standards of professionalism and integrity.
              </p>
              <p className="mb-6">
                Whether you are an individual looking for personalized banking
                solutions or a business seeking efficient financial services,
                HDFC Bank is here to support your goals and aspirations.
              </p>
              <a
                href="#contact"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="mb-6">
                Have questions or need assistance? Contact HDFC Bank today to
                speak with one of our knowledgeable representatives.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Phone: 1800-123-4567</li>
                <li>Email: info@hdfcbank.com</li>
                <li>Address: HDFC Bank, Mumbai, India</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.iUWCJAk1oxfVeuhs8sfjgwHaEt&pid=Api&P=0&h=180"
                alt="Contact Us"
                className="w-full rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
