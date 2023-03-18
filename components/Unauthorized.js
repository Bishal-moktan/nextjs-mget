import Link from 'next/link';

const Unauthorized = () => {
  return (
    <>
      <div className="unauthorized">
        <h2>You are unauthorized</h2>
        <Link href={'/'}>Back to home</Link>
      </div>
    </>
  );
};
export default Unauthorized;
