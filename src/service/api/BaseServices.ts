export default class BaseServices {
  static getHeaders = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    const tz = Math.floor(new Date().getTimezoneOffset() / 60) * -1;

    // headers.append("Access-Control-Allow-Origin", "*")
    // headers.append("Origin", "*")
    // headers.append("Credentials", "same-origin")

    headers.append("timezone", `${tz}`);
    const lang = localStorage.getItem("i18nLng") || "fr";
    headers.append("Accept-Language", lang);
    headers.append("lang", lang);
    return headers;
  };

  static async request(url: string, options: RequestInit) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      if (error instanceof Error) {
        return { error: error.message };
      }
      return { error: "An unknown error occurred" };
    }
  }

  static postRequest = async (url: string, body: object) => {
    return this.request(url, {
      method: "POST",
      headers: this.getHeaders(),
      mode: "cors",
      body: JSON.stringify(body),
    });
  };

  static postFileRequest = async (url: string, body: FormData) => {
    return this.request(url, {
      method: "POST",
      mode: "cors",
      body,
    });
  };

  static getRequest = async (url: string) => {
    return this.request(url, {
      method: "GET",
      headers: this.getHeaders(),
      mode: "cors",
    });
  };

  static putRequest = async (url: string, body: object) => {
    return this.request(url, {
      method: "PUT",
      headers: this.getHeaders(),
      mode: "cors",
      body: JSON.stringify(body),
    });
  };

  static deleteRequest = async (url: string) => {
    return this.request(url, {
      method: "DELETE",
      headers: this.getHeaders(),
      mode: "cors",
    });
  };
}
