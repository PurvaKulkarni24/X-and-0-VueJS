new Vue({
    el: '#app',
    data: {
        cells: Array(9).fill(''),
        currentPlayer: 'X',
        winner: null
    },
    methods: {
        makeMove(index) {
            if (this.cells[index] === '' && !this.winner) {
                this.$set(this.cells, index, this.currentPlayer);
                this.checkWinner();
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            }
        },
        checkWinner() {
            const winningCombinations = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6] // Diagonals
            ];

            for (const [a, b, c] of winningCombinations) {
                if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
                    this.winner = this.cells[a];
                    return;
                }
            }

            if (!this.cells.includes('')) {
                this.winner = 'Draw';
            }
        },
        resetBoard() {
            this.cells = Array(9).fill('');
            this.currentPlayer = 'X';
            this.winner = null;
        }
    }
});
