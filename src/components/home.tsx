import { useUser } from "@clerk/clerk-react";

export default function Home() {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  if (!user) return null;

//   const updateUser = async () => {
//     // Update data via an API endpoint
//     const updateMetadata = await fetch("/api/updateMetadata");

//     // Check if the update was successful
//     if (updateMetadata.message !== "success") {
//       throw new Error("Error updating");
//     }

//     // If the update was successful, reload the user data
//     await user.reload();
//   };

  return (
    <>
      {/* <button onClick={updateUser}>Click me to update your metadata</button> */}
      <p>{user?.id}</p>
      <p>{user?.username}</p>
      <p>emailAddresses: {user?.emailAddresses[0].emailAddress}</p>
      <p>fullName: {user?.fullName}</p>
      <p>provider: {user?.externalAccounts[0].provider}</p>
      <p>publicMetadata: {JSON.stringify(user.publicMetadata.example) || ""}</p>
      <p>unsafeMetadata: {JSON.stringify(user?.unsafeMetadata) || ""}</p>
      <p>Email: {user?.primaryEmailAddress?.toString() || ""}</p>
    </>
  );
}
