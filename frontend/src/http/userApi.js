import { $host, $authHost } from './index'
import jwt_decode from 'jwt-decode'

export const signUp = async (email, password) => {
  const { data } = await $host.post('/auth/sign-up', { email, password })
  localStorage.sestItem('token', data.token)
  return jwt_decode(data.token)
}

export const signIn = async (email, password) => {
  const { data } = await $host.post('auth/sign-in', { email, password })
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const authorize = async () => {
  const { data } = await $authHost.get('auth/check')
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}