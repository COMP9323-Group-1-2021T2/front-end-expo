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

export const login = async (email, password) => {
  const res = await fetch(`${baseUrl}/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email,
      password
    }),
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`Login failed. Check your email and password.`);
  }

  return jsonData.accessToken;
}

export const createVideo = async (accessToken, categoryId, title, url, image, description) => {
  const res = await fetch(`${baseUrl}/${categoryId}/videos`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify({
      title,
      url,
      image,
      description
    }),
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to create a video`);
  }

  return jsonData.data;
}

export const deleteVideo = async (accessToken, categoryId, videoId) => {
  const res = await fetch(`${baseUrl}/${categoryId}/videos/${videoId}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    method: "DELETE",
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to delete a video`);
  }

  return jsonData.data;
}

export const updateVideo = async (accessToken, categoryId, videoId, title, url, image, description) => {
  const res = await fetch(`${baseUrl}/${categoryId}/videos/${videoId}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    method: "PUT",
    body: JSON.stringify({
      title,
      url,
      image,
      description
    }),
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to update a video`);
  }

  return jsonData.data;
}

export const createArticle = async (accessToken, categoryId, title, url, image, description) => {
  const res = await fetch(`${baseUrl}/${categoryId}/articles`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify({
      title,
      url,
      image,
      description
    }),
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to create an article`);
  }

  return jsonData.data;
}

export const updateArticle = async (accessToken, categoryId, articleId, title, url, image, description) => {
  const res = await fetch(`${baseUrl}/${categoryId}/articles/${articleId}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    method: "PUT",
    body: JSON.stringify({
      title,
      url,
      image,
      description
    }),
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to update an article`);
  }

  return jsonData.data;
}

export const deleteArticle = async (accessToken, categoryId, articleId) => {
  const res = await fetch(`${baseUrl}/${categoryId}/articles/${articleId}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    method: "DELETE",
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to delete an article`);
  }

  return jsonData.data;
}

export const getQuestions = async (accessToken) => {
  const url = accessToken ? `${baseUrl}/questions/admin` : `${baseUrl}/questions`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`failed to fetch questions`);
  }

  return jsonData.data;
}

export const createQuestion = async (question) => {
  const res = await fetch(`${baseUrl}/questions`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      question,
    }),
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to create a question`);
  }

  return jsonData.data;
};

export const answerQuestion = async (accessToken, questionId, answer) => {
  const res = await fetch(`${baseUrl}/questions/${questionId}/answer`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify({
      answer,
    }),
  });

  const jsonData = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to answer a question`);
  }

  return jsonData.data;
};
