export function isEmpty(value: any): Boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === 'object' && !Array.isArray(value)) {
    return Object.keys(value).length === 0;
  }

  return false;
}
