/** Backend opcional. Em hospedagem estática (GitHub Pages) deixe VITE_API_URL vazio. */
const RAW = (import.meta.env.VITE_API_URL as string | undefined) ?? '';
export const API_BASE = RAW.replace(/\/+$/, '');
export const CONTACT_EMAIL = 'kraefegg.mos3@gmail.com';

export class BackendUnavailableError extends Error {
  constructor() {
    super('BACKEND_UNAVAILABLE');
    this.name = 'BackendUnavailableError';
  }
}

/** fetch JSON; lança BackendUnavailableError se a API não existir/responder JSON. */
export async function apiJson<T = any>(path: string, init?: RequestInit): Promise<{ ok: boolean; data: T }> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, init);
  } catch {
    throw new BackendUnavailableError();
  }
  const type = res.headers.get('content-type') || '';
  if (!type.includes('application/json')) throw new BackendUnavailableError();
  try {
    return { ok: res.ok, data: (await res.json()) as T };
  } catch {
    throw new BackendUnavailableError();
  }
}

export function openMailto(subject: string, body: string) {
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;
