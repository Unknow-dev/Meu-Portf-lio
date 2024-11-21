// Definir variáveis
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Função para ajustar o tamanho do canvas conforme a janela
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Chamar a função de redimensionamento assim que a página carregar
resizeCanvas();

// Adicionar um ouvinte de evento para redimensionamento da janela
window.addEventListener('resize', resizeCanvas);

// Caracteres para a animação
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+';
const characterArray = characters.split('');

// Tamanho da fonte e quantidade de colunas
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array para armazenar as posições das "gotas"
const drops = Array(columns).fill(0); // Inicializa todas as gotas na posição 0

// Função para desenhar o efeito
function draw() {
    // Preencher o fundo com transparência para criar o efeito de desvanecimento
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Cor preta com transparência
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Definir estilo da fonte (verde, como no Matrix)
    ctx.fillStyle = '#0F0'; // Cor verde
    ctx.font = fontSize + 'px monospace';

    // Desenhar as gotas de código
    for (let i = 0; i < drops.length; i++) {
        const text = characterArray[Math.floor(Math.random() * characterArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reiniciar a posição das gotas quando saem da tela
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Atualizar a posição da gota
        drops[i]++;
    }
}

// Chamar a função de desenho a cada 35 milissegundos
setInterval(draw, 35);
