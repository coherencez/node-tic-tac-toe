'use strict'
console.log('hello from client-side js')

const socket = io()

socket.on('connect', () => console.log(`Socket connected: ${socket.id}`))
socket.on('disconnect', () => console.log(`Socket disconnected: ${socket.id}`))
