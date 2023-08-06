import Header from "../components/Header";

export default function NavLayaout({children}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
