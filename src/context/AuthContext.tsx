import React, { useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import { api } from '../services/api';

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  resetPassword: (data: ResetPasswordProps) => Promise<SucessResetReturn>;
}

type AuthContextProps = {
  children: JSX.Element
}

type SignInData = {
  email: string;
  password: string;
}

type User = {
  name: string;
  email: string;
}

type ResetPasswordProps = {
  email: string;
}

type SucessResetReturn = {
  statusText: string;
  message: string;
}

import { createContext } from 'react';

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    (async () => {
      const { 'nextauth-token': token } = parseCookies();

      if (token) {
        const { data: { user } } = await api.get('/users/show')

        setUser(user);
      }
    })();
  }, [])

  async function signIn({ email, password } : SignInData) {
    const params = JSON.stringify({email, password});

    const { data: { user, token } } = await api.post('/users/auth', params, {
      headers: { 'Content-Type': 'application/json'}
    })

    setCookie(undefined, 'nextauth-token', token, {
      maxAge: 60 * 60 * 1, // 1 hora
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user);

    Router.push('/dash');
  }

  async function resetPassword({ email } : ResetPasswordProps) {
    const params = JSON.stringify({ email });

    const { statusText, data: { message } } = await api.post('/users/forgot/password/validate', params, {
      headers: { 'Content-Type': 'application/json'}
    });  
    
    return { statusText, message }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}