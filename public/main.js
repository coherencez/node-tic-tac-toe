'use strict'
const socket = io()


const board = document.querySelector('.board')
const status = document.querySelector('.status')

const renderStatus = game => {
  const result = game.result

  if(game.result === 'Tie') {
    return status.innerText = "It's a tie!"
  }

  if(game.result) {
    return status.innerText = `${game.result} WON!`
  }

  if(game.toMove === `/#${socket.id}`) {
    return status.innerText = `Make your move`
  }
}

const renderBoard = game => {
  const b = game.board
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
}

board.addEventListener('click', ({target}) => {
  const col = target.cellIndex
  const row = target.closest('tr').rowIndex

  socket.emit('make move', {row, col})
 })

 const render = game => {
   renderStatus(game)
   renderBoard(game)
 }

 socket.on('connect', () => console.log(`Socket connected: ${socket.id}`))
 socket.on('disconnect', () => console.log(`Socket disconnected: ${socket.id}`))
 socket.on('error', console.error)
 socket.on('new game', render)
 socket.on('move made', render)
