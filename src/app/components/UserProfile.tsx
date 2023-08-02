import Image from "next/image";

export function UserProfile() {
  return (
    <div className="flex items-center space-x-4">
      <p className="hidden cursor-not-allowed lg:inline">Kids</p>
      <Image
        width={30}
        height={30}
        src="/profile.png"
        alt="Profile"
        className="cursor-pointer rounded"
      />
    </div>
  );
}
