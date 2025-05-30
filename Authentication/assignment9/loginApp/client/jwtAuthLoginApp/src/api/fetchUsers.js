export async function fetchUsers() {
  try {
    const response = await fetch("http://localhost:8015/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }

// await fetch("http://localhost:5000/users")
//   .then((res) => {
//     if (!res.ok) throw new Error(`HTTP status ${res.status}`);
//     return res.json();
//   })
//   .then((data) => setUsers(data))
//   .catch((err) => console.error("Detailed Fetch Error:", err));







}