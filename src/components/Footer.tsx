const Footer = () => {
  return (
    <section className="py-10 bg-muted/50 sm:pt-16 lg:pt-24 m-4 rounded-2xl">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            {/* <img
              className="w-auto h-9"
              src="/logo.svg"
              alt="HomeStyle Furnishings"
            /> */}
            <h2 className="text-2xl font-bold">Home Style Furnishings</h2>
            <p className="text-base leading-relaxed text-gray-400 mt-7">
              Bringing comfort and style to your home with beautiful furniture,
              lighting, rugs, and more. Curated with quality and value in mind.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              {/* Social icons */}
              {/* You can replace or update links/icons as needed */}
              <li>
                <a href="#" className="social-icon">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    ...{" "}
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    ...{" "}
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    ...{" "}
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Shop Categories */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Shop
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" className="footer-link">
                  Living Room
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Bedroom
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Dining
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Office
                </a>
              </li>
            </ul>
          </div>

          {/* Home Décor */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Home Décor
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" className="footer-link">
                  Lamps
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Rugs
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Wall Art
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Mirrors
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Stay Updated
            </p>
            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-800" />

        <p className="text-sm text-center text-gray-400">
          © {new Date().getFullYear()} HomeStyle Furnishings. All rights
          reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
