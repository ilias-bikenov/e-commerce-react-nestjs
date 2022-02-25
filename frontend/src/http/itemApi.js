import { $host, $authHost } from './index'
import jwt_decode from 'jwt-decode'

export const createType = async (type) => {
  const { data } = await $authHost.post('types', type)
  return data
}

export const getTypes = async () => {
  const { data } = await $host.get('types')
  return data
}

export const createItem = async (item) => {
  const { data } = await $authHost.post('items', item)
  return data
}

export const getItems = async (typeId, page, limit = 10) => {
  const { data } = await $host.get('items', { params: { typeId, page, limit } })
  return data
}

export const getItem = async (id) => {
  const { data } = await $host.get(`items/${id}`)
  return data
}
