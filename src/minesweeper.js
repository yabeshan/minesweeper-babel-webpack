let bomb = 'X';
let defaultBoard = 
`X O O X X X O O
O O O O X O X X
X X O X X O O O
O X O O O X X X
O O X X X X O X
X O X X X O X O
O O O X O X O X
X O X X O X O X`;

export default {
    setBoard(board = defaultBoard) {
        console.log (board);
        let arr = this.parseBoard(board);
        let calc = this.calcBoard(arr);
        this.traceBoard(calc);
    },

    parseBoard(board) {
        let lines = board.split('\n');
        let arr = [];
        lines.map( (item, index) => {
            arr[index] = item.split(' ');
        });
        return arr;
    },

    calcBoard(arr) {
        let count = 0;
        arr.map( (line, row) => {
            line.map( (item, col) => {
                if (item == bomb) {
                    return;
                }
                if (arr[row-1]) {
                    count += (arr[row-1][col-1] && arr[row-1][col-1] == bomb) ? 1 : 0;
                    count += (arr[row-1][col]   && arr[row-1][col]   == bomb) ? 1 : 0;
                    count += (arr[row-1][col+1] && arr[row-1][col+1] == bomb) ? 1 : 0;    
                }
                if (arr[row+1]) {
                    count += (arr[row+1][col-1] && arr[row+1][col-1] == bomb) ? 1 : 0;
                    count += (arr[row+1][col]   && arr[row+1][col]   == bomb) ? 1 : 0;
                    count += (arr[row+1][col+1] && arr[row+1][col+1] == bomb) ? 1 : 0;    
                }
                
                count += (arr[row][col-1] && arr[row][col-1] == bomb) ? 1 : 0;
                count += (arr[row][col+1] && arr[row][col+1] == bomb) ? 1 : 0;

                arr[row][col] = count;
                count = 0;
            } );
        });
        return arr;
    },

    traceBoard(arr) {
        let board = "";
        arr.map( line => {
            board += line.join(' ') + '\n';
        });
        console.log (board);
    }
}
