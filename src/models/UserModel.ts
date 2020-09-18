interface User {
  email?: string;
  username?: string;
  _id?: string;
  password?: string;
  name?: string;
}

type Auth = {
  user?: User | null;
  loading?: boolean;
};

export default User;
export type { Auth };
