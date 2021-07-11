import Constants from 'expo-constants';

const baseUrl = Constants.manifest.extra.apiBaseURL

export const getCategories = async () => {
  const res = await fetch(`${baseUrl}/categories`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error("failed to fetch categories");
  }

  return jsonData.data;
}
