'use client';

type Props = {
  onSignIn: () => Promise<void>;
};

const SignIn = ({ onSignIn }: Props) => {
  return (
    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 cursor-pointer"
      onClick={() => {
        onSignIn();
      }}
    >
      Sign In
    </button>
  );
};

export default SignIn;