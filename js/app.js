document.addEventListener('DomContentLoaded', () => {

    const grid = document.querySelector('.grid')
    let squares = Array.from(grid.querySelectorAll('div'))
    const width = 10
    const height = 20
    let CurrentPosition = 4

    //The Tetrominoes
    const  Tetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]

    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ]

    const oTetromino = [
        [0,1, width, width+1],
        [0,1, width, width+1],
        [0,1, width, width+1],
        [0,1, width, width+1]
    ]

    const iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
    ]

    const Tetromiones = [Tetromino, zTetromino, tTetromino, oTetromino, iTetromino]
    
    //randomly select Tetromino
    let random = Math.floor(Math.random()*theTetromiones.lenght)
    let CurrentRotation = 0
    let current = theTetromiones[random][currentRotation]


    //draw the shape
    function draw() {
        current.forEach ( index => (
            square[CurrentPosition + index].classList.add('block')
        )

        )        
    }
})


