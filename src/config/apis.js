const LINE = '/api'
const TEST = '/data'

export const baseURL = process.env.NODE_ENV === 'production' ? LINE : TEST
