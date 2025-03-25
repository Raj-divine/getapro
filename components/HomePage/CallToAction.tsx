import OnBoardingButtons from "./OnBoardingButtons";

export default function CallToActionSection() {
  return (
    <section className='px-16 py-20 max-xs:px-10 flex flex-col justify-center items-center'>
      <h2 className='font-heading text-3xl md:text-5xl font-bold text-center'>
        Ready to connect with a professional?
      </h2>
      <p className='text-xl text-gray-500 text-center mt-5'>
        Join the many users who have found the right expert for their needs.
      </p>
      <div>
        <OnBoardingButtons />
      </div>
    </section>
  );
}
