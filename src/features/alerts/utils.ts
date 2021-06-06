import * as UUID from 'uuid'
import Case from 'case'
import { StoreHash } from '../../interfaces'

export function copyrightStatement(): string {
  return `© 2017 - ${new Date().getFullYear()} LarCity LLC. All rights reserved.`
}

export function GUID(prefix = ''): string {
  return [prefix && Case.snake(prefix), UUID.v4(),].filter((bit) => bit).join('-')
}

/* eslint-disable @typescript-eslint/no-unsafe-return */

export default function hashToArray<T>(hash: StoreHash<T>, LIFO = false): T[] {
  console.debug('Alerts hash', { hash, })
  const { ids, items, } = hash
  const output: T[] = ids.reduce((listOfItems, id) => ([
    ...listOfItems,
    items[id],
  ]), [] as T[])

  if (LIFO) return output.reverse()

  return output
}
