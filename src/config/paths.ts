export function appPath(path = '') {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export function appRoute() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return location.pathname.slice(base.length).replace(/\/$/, '') || '/'
}
