import * as UUID from 'uuid'
import Case from 'case'

export function copyrightStatement(): string {
  return `© 2017 - ${new Date().getFullYear()} LarCity LLC. All rights reserved.`
}

export function GUID(prefix = ''): string {
  return [prefix && Case.snake(prefix), UUID.v4(),].filter((bit) => bit).join('-')
}
