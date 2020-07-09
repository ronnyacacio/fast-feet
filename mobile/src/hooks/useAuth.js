import { useContext } from 'react';

import { AuthContext } from '../contexts/auth';

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
