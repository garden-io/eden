/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

export const flatten = (list) => list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

export const chunk = (arr, length) =>
  Array.from({ length: Math.ceil(arr.length / length) }).map((_, n) => arr.slice(n * length, n * length + length))

export const unique = (arr) => [...new Set(arr)]

export const intersection = (arr1, arr2) => arr1.filter((n) => arr2.includes(n))

export const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

export const isLast = (index, array) => index === array.length - 1

export const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
