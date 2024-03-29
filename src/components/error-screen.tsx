import { NavLink } from "react-router-dom";

export default function ErrorScreen() {
  return (
    <>
      <div className="min-h-full px-4 py-16 bg-white sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">Error</p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">There was an error</h1>
                <p className="mt-1 text-base text-gray-500">Please reload the page to try again.</p>
              </div>
              <div className="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <NavLink
                  to="/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-current='page'
                >
                  Go back home
                </NavLink>
                <a
                  href="mailto:xyz@gmail.com"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Contact support
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
