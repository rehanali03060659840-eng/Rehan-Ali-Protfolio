import type { Project } from "../types/portfolio";

const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  if (!apiUrl)
    throw new ApiError(
      "The API URL is not configured. Set VITE_API_URL in the frontend environment.",
    );
  let response: Response;
  try {
    response = await fetch(`${apiUrl}${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...init?.headers },
    });
  } catch {
    throw new ApiError(
      "The portfolio API could not be reached. Check that the backend is running.",
    );
  }

  const result = (await response.json().catch(() => null)) as {
    message?: string | string[];
  } | null;
  if (!response.ok) {
    const message = Array.isArray(result?.message)
      ? result.message.join(" ")
      : result?.message;
    throw new ApiError(
      message || `The request failed (${response.status}).`,
      response.status,
    );
  }
  return result as T;
}

export function getProjects(): Promise<Project[]> {
  return request<Project[]>("/projects");
}

export function sendContact(payload: {
  name: string;
  email: string;
  message: string;
}): Promise<{ status: string; message: string }> {
  return request("/contact", { method: "POST", body: JSON.stringify(payload) });
}
