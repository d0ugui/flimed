import React, { useEffect, useState } from 'react';

import { setCookie, parseCookies, destroyCookie } from 'nookies';

import Router from 'next/router';

import { api } from '../services/api';

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  resetPassword: (data: ResetPasswordData) => Promise<SucessResetReturn>;
  newPassword: (data: NewPasswordData) => Promise<SucessResetReturn>
  signOut: () => void;
  newTask: ({ title, content, description } :NewTaskData) => Promise<SucessResetReturn>;
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

type ResetPasswordData = {
  email: string;
}

type SucessResetReturn = {
  statusText: string;
  message: string;
}

type NewPasswordData = {
  key: string;
  password: string;
}

type NewTaskData = {
  title: string;
  content: string;
  description: string;
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
      maxAge: 60 * 10, // 10 min
    })

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setUser(user);

    Router.push('/notes');
  }

  async function signOut() {
    setUser(null);
    destroyCookie(undefined, 'nextauth-token');
    api.defaults.headers.common['Authorization'] = 0;
    Router.push('/');
  }

  async function resetPassword({ email } : ResetPasswordData) {
    const params = JSON.stringify({ email });

    const { statusText, data: { message } } = await api.post('/users/forgot/password/validate', params, {
      headers: { 'Content-Type': 'application/json'}
    });  

    return { statusText, message }
  }

  async function newPassword({ key, password } : NewPasswordData) {
    const params = JSON.stringify({ password });

    const { statusText, data: { message } } = await api.patch('/users/forgot/password/reset', params, {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      }
    });  

    return { statusText, message }
  }

  async function newTask({ title, content, description }: NewTaskData) {
    const params = JSON.stringify({ title, content, description });

    const { statusText, data: {message} } = await api.post('/notes/create', params);

    return { statusText, message };
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      signIn, 
      resetPassword, 
      newPassword, 
      signOut,
      newTask
    }}>
      {children}
    </AuthContext.Provider>
  )
}