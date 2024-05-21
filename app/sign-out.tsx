'use client';

type Props = {
  onSignOut: () => Promise<void>;
};

const SignOut = ({ onSignOut }: Props) => {
  return (
    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 cursor-pointer"
      onClick={() => {
        onSignOut();
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOut;