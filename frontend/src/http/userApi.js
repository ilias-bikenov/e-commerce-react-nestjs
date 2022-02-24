import { $host, $authHost } from './index'

export const signUp = async (email, password) => {
  const response = await $host.post('/auth/sign-up', { email, password, role: 'ADMIN' })
  return response
}

export const signIn = async (email, password) => {
  const response = await $host.post('auth/sign-in', { email, password })
  return response
}

export const authorize = async () => {
  const response = await $host.post('api/auth/sign-up')
  return response
}