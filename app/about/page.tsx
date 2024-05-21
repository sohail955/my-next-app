

import { getLogtoContext, signIn, signOut } from '@logto/next/server-actions';
import SignIn from '../sign-in';
import SignOut from '../sign-out';
import { logtoConfig } from '../logto';

const about = async () => {
  const { isAuthenticated } = await getLogtoContext(logtoConfig);
  return (
    <main className='relative flex flex-col gap-4 items-center justify-center px-4 bg-white h-screen'>
      <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Welcome To LogTo
      </div>
      <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Authentication
      </div>
      <div>
        {isAuthenticated ? (
          <SignOut
            onSignOut={async () => {
              'use server';

              await signOut(logtoConfig);
            }}
          />
        ) : (
          <SignIn
            onSignIn={async () => {
              'use server';

              await signIn(logtoConfig);
            }}
          />
        )}
      </div>
      <a href="/" className="bg-white w-fit text-dark cursor-pointer">
        Back To Home
      </a>
      {isAuthenticated ? (
        <>
          <p>Your Account Balance is : 100 Credits</p>
          <div>
            <button className='bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 cursor-pointer m-2'>Deposit Now</button>
            <button className='bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 cursor-pointer m-2'>Withdraw Now</button>
          </div>
        </>
      ) : (
        <>
          Email address: test@gmail.com,
          Phone number: 123456789,
          Username: test,
          New password: 1AhCWGmx
        </>
      )}
    </main>
  )
}

export default about
