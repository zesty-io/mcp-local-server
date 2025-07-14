const ZESTY_ACCOUNTS_API_BASE = "https://accounts.api.zesty.io/v1";

export async function getZestyAccountsRequest(path: string) {
  const headers = {
    Authorization: `Bearer ${process.env.ZESTY_SESSION_TOKEN}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(`${ZESTY_ACCOUNTS_API_BASE}/${path}`, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json());
  } catch (error) {
    console.error("Error making Zesty request:", error);
    return null;
  }
}

export async function postZestyAccountsRequest(path: string, payload: object) {
  const headers = {
    Authorization: `Bearer ${process.env.ZESTY_SESSION_TOKEN}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(`${ZESTY_ACCOUNTS_API_BASE}/${path}`, { headers, method: "POST", body: JSON.stringify(payload) });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json());
  } catch (error) {
    console.error("Error making Zesty request:", error);
    return null;
  }
}