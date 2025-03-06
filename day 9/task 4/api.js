const API_URL = "http://localhost:3000/students";

export const fetchStudents = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};
