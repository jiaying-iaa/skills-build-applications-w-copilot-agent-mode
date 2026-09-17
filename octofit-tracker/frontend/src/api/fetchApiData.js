// Normalizes API responses that may be a plain array or a paginated object.
export function normalizeApiResponse(data) {
  if (Array.isArray(data)) {
    return data;
  }
  if (data && Array.isArray(data.results)) {
    return data.results;
  }
  if (data && Array.isArray(data.data)) {
    return data.data;
  }
  return [];
}

export async function fetchApiData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request to ${url} failed with status ${response.status}`);
  }
  const data = await response.json();
  return normalizeApiResponse(data);
}
