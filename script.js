// script.js
document.getElementById('patternForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const patternType = document.getElementById('patternType').value;
    const nValue = parseInt(document.getElementById('nValue').value);
    const patternOutput = document.getElementById('patternOutput');

    patternOutput.textContent = generatePattern(patternType, nValue);
});

function generatePattern(type, n) {
    let pattern = '';
    switch(type) {
        case 'star':
            pattern = generateStarPattern(n);
            break;
        case 'number':
            pattern = generateNumberPattern(n);
            break;
        case 'triangle':
            pattern = generateTrianglePattern(n);
            break;
        case 'square':
            pattern = generateSquarePattern(n);
            break;
        case 'diamond':
            pattern = generateDiamondPattern(n);
            break;
        case 'pyramid':
            pattern = generatePyramidPattern(n);
            break;
            case 'zigzag':
                pattern = generateZigzagPattern(n);
                break;
            case 'spiral':
                pattern = generateSpiralPattern(n);
                break;
            case 'hourglass':
                pattern = generateHourglassPattern(n);
                break;
            case 'checkerboard':
                pattern = generateCheckerboardPattern(n);
                break;
            case 'cross':
                pattern = generateCrossPattern(n);
                break;
    }
    return pattern;
}

function generateStarPattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
        pattern += '* '.repeat(i) + '\n';
    }
    return pattern;
}

function generateNumberPattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += j + ' ';
        }
        pattern += '\n';
    }
    return pattern;
}

function generateTrianglePattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
        pattern += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    return pattern;
}

function generateSquarePattern(n) {
    let pattern = '';
    for (let i = 0; i < n; i++) {
        pattern += '* '.repeat(n) + '\n';
    }
    return pattern;
}

function generateDiamondPattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
        pattern += ' '.repeat(n - i) + '* '.repeat(i) + '\n';
    }
    for (let i = n - 1; i >= 1; i--) {
        pattern += ' '.repeat(n - i) + '* '.repeat(i) + '\n';
    }
    return pattern;
}

function generatePyramidPattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
        pattern += ' '.repeat(n - i) + '* '.repeat(i) + '\n';
    }
    return pattern;
}
function generateZigzagPattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            pattern += '* '.repeat(n) + '\n';
        } else {
            pattern += ' '.repeat(2 * (n - 1)) + '*\n';
        }
    }
    return pattern;
}

function generateSpiralPattern(n) {
    let pattern = Array.from({ length: n }, () => Array(n).fill(' '));
    let x = 0, y = 0, dx = 0, dy = 1;
    for (let i = 0; i < n * n; i++) {
        pattern[x][y] = '*';
        if (pattern[(x + dx + n) % n][(y + dy + n) % n] === '*') {
            [dx, dy] = [dy, -dx];
        }
        x += dx;
        y += dy;
    }
    return pattern.map(row => row.join(' ')).join('\n');
}

function generateHourglassPattern(n) {
    let pattern = '';
    for (let i = 0; i < n; i++) {
        pattern += ' '.repeat(i) + '* '.repeat(n - i) + '\n';
    }
    for (let i = n - 2; i >= 0; i--) {
        pattern += ' '.repeat(i) + '* '.repeat(n - i) + '\n';
    }
    return pattern;
}

function generateCheckerboardPattern(n) {
    let pattern = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            pattern += (i + j) % 2 === 0 ? '* ' : '  ';
        }
        pattern += '\n';
    }
    return pattern;
}

function generateCrossPattern(n) {
    let pattern = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            pattern += (i === j || i + j === n - 1) ? '* ' : '  ';
        }
        pattern += '\n';
    }
    return pattern;
}