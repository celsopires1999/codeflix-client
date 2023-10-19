import { getUserInfo } from "@/app/lib/settings";

export default async function UserPage() {
  const { name, email, age } = await getUserInfo();

  return (
    <div>
      <h1 className="text-2xl font-bold">Settings Page</h1>
      <div className="border border-dashed border-red-500 p-4">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
