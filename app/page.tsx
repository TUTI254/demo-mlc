import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
const Home = async () => {
  const session = await getAuthSession();
  return (
    <>
      <h1 className="text-center text-2xl">
        {" "}
        Welcome to MLC Generation Feature
      </h1>
      {session?.user ? (
        //  mlc generate component
        <p className="text-center text-green-500 font-semibold">
          proceed to generate your mlc
          <Link href={"/mlc"} className="animate-pulse text-green-700">
            {" "}
            Here !
          </Link>
        </p>
      ) : (
        // please login to generate your mlc
        <p className="text-center text-red-600 font-semibold">
          Please login to generate your mlc
        </p>
      )}
    </>
  );
};
export default Home;
