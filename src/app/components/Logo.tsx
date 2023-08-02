import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={90}
      height={90}
      className="cursor-pointer"
    />
  );
}
