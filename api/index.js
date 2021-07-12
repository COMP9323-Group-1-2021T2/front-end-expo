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

export const getCategoryInfo = async (categoryId) => {
  const res = await fetch(`${baseUrl}/${categoryId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`failed to fetch category info for category id: ${categoryId}`);
  }

  return jsonData.data.info;
}

export const getCategoryArticles = async (categoryId) => {
  const res = await fetch(`${baseUrl}/${categoryId}/articles`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`failed to fetch category articles for category id: ${categoryId}`);
  }

  return jsonData.data;
}

export const getCategoryVideos = async (categoryId) => {
  const res = await fetch(`${baseUrl}/${categoryId}/videos`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`failed to fetch category videos for category id: ${categoryId}`);
  }

  return jsonData.data;
}
