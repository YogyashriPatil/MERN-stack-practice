import Image from "next/image";

export default function Home() {
  return (
    <div >
      hi there
      <Button>Sign in</Button>
    </div>
  );
}

function Button({children}){
  return <button>{children}</button>
}