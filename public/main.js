'use strict'
console.log('hello from client-side js')

const socket = io()

socket.on('connect', () => console.log(`Socket connected: ${socket.id}`))
socket.on('disconnect', () => console.log(`Socket disconnected: ${socket.id}`))

const board = document.querySelector('.board')
const status = document.querySelector('.status')

const boardState = [
  ['','',''],
  ['','',''],
  ['','',''],
]

let nextPlayer = 'X'

const drawBoard = b => {
  board.innerHTML = `
    <table>
      <tr>
        <td>${b[0][0]}</td>
        <td>${b[0][1]}</td>
        <td>${b[0][2]}</td>
      </tr>
      <tr>
        <td>${b[1][0]}</td>
        <td>${b[1][1]}</td>
        <td>${b[1][2]}</td>
      </tr>
      <tr>
        <td>${b[2][0]}</td>
        <td>${b[2][1]}</td>
        <td>${b[2][2]}</td>
      </tr>
    </table>
  `
  status.innerText = `${nextPlayer}s Turn`
}
