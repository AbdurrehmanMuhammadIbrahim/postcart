import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col mb-5'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='bg-gradient-to-r from-blue-200 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
        PostCart is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;