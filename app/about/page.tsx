import { getLogtoContext, signIn, signOut } from '@logto/next/server-actions';
import SignIn from '../sign-in';
import SignOut from '../sign-out';
import { logtoConfig } from '../logto';

const about = async () => {
  const { isAuthenticated } = await getLogtoContext(logtoConfig);
  return (
    <main className='relative flex flex-col gap-4 items-center justify-center px-4 bg-white h-screen'>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to about page</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Access Auth, Wallet and Subscriptions detail.</p>
          </div>
          {
            isAuthenticated ? (
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">Logto Authentication</h3>
                  <p className="mt-3 mb-2 text-base leading-7 text-gray-600">You are Logged in</p>
                  <SignOut
                    onSignOut={async () => {
                      'use server';
                      await signOut(logtoConfig);
                    }}
                  />
                  <div className="mt-6 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Subscriptions</h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                  </div>
                  <ul role="list" className="mt-3 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                    <li className="flex gap-x-3 cursor-pointer">
                      <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      1000 Credits Monthly
                    </li>
                    <li className="flex gap-x-3 cursor-pointer">
                      <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      1000 Credits Yearly
                    </li>
                    <li className="flex gap-x-3 cursor-pointer">
                      <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      2000 Credits Monthly
                    </li>
                    <li className="flex gap-x-3 cursor-pointer">
                      <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      2000 Credits Yearly
                    </li>
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">Wallet Balance</p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">100</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Credits</span>
                      </p>
                      <a href="#" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Withdraw Now</a>
                      <p className="mt-6 text-xs leading-5 text-gray-600">This will only be shown to Agencies because they can Withdraw.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='rounded-2xl bg-gray-50 my-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center'>
                <div className="mx-auto max-w-xs p-8">
                  <SignIn
                    onSignIn={async () => {
                      'use server';
                      await signIn(logtoConfig);
                    }}
                  />
                  <p className='mt-6 text-base leading-7 text-dark'>
                    Email address: test@gmail.com, <br />
                    Phone number: 123456789, <br />
                    Username: test, <br />
                    New password: 1AhCWGmx
                  </p>
                </div>
              </div>
            )
          }

          <div className='mt-6 text-center'>
            <a href="/" className="bg-white w-fit text-dark cursor-pointer">
              Back To Home Page
            </a>
          </div>

        </div>
      </div>
    </main>
  )
}

export default about
