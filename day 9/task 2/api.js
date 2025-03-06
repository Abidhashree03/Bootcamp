const API_URL = "http://localhost:3000/students";

export const fetchStudents = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
