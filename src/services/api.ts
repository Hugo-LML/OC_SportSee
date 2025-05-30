import { User, UserActivity, UserAverageSession, UserPerformance } from '../types';

const BASE_URL = 'http://localhost:3000';

async function apiGet<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`GET ${endpoint} failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data;
}

export async function getUser(userId: number) {
  return apiGet<User>(`/user/${userId}`);
}

export async function getUserActivity(userId: number) {
  return apiGet<UserActivity>(`/user/${userId}/activity`);
}

export async function getUserAverageSession(userId: number) {
  return apiGet<UserAverageSession>(`/user/${userId}/average-sessions`);
}

export async function getUserPerformance(userId: number) {
  return apiGet<UserPerformance>(`/user/${userId}/performance`);
}
