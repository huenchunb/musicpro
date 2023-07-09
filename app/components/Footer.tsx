import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-light border mt-4 d-flex justify-content-center align-items-center">
      <p className="m-0 p-2 text-center">Created by MUSICPRO</p>
      <Link href={"/adminlogin"} className="small">
        Entrar administración
      </Link>
    </footer>
  );
};
