export type AppSettings = {
  theme: string;
  language: string;
};

export type UserInfo = {
  name: string;
  email: string;
  age: number;
};

export function getAppSettings(): Promise<AppSettings> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "en",
      });
    }, 2000);
  });
}

export function getUserInfo(): Promise<UserInfo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        email: "john.doe@test.com",
        age: 45,
      });
    }, 4000);
  });
}
