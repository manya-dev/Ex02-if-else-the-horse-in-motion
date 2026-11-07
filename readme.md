# The Horse in Motion

Este projeto é uma animação interativa baseada na série de cronofotografia de Eadweard Muybridge de 1878, intitulada "The Horse in Motion".

!["Sallie Gardner", owned by Leland Stanford; ridden by G. Domm, running at a 1.40 gait over the Palo Alto track, 19th June, 1878](Eadweard_Muybridge-Sallie_Gardner_1878.jpg)

Utilizando a lógica "if/else", a animação move-se apenas quando o utilizador pressiona o botão esquerdo do rato. Além disso, à medida que o cursor se desloca pelo ecrã, a estética visual altera-se através da lógica condicional: a posição horizontal altera os filtros.

### Etapas

1. Pegar na imagem original "Sallie Gardner", de Leland Stanford, dividir em frames individuais e nomear sequencialmente: `frame_1.png, frame_2.png, …, frame_12.png`
2. Criar um canvas com fundo preto e carregar as imagens da animação.
3. Mostrar os frames 1–11 a 12 FPS enquanto o botão do rato está pressionado. (parte `if`)
4. Mostrar o frame 12 (onde o cavalo está parado) quando o botão não está pressionado. (parte`else`)
5. Usar `if/else` com a posição horizontal do cursor para aplicar contraste, sépia ou preto e branco.
6. Desenhar instruções para explicar como interagir.

### Utilização IA e aprendizagem

Usei Copilot como apoio para desenvolver o projeto passo a passo: pedi explicações sobre a minha ideia inicial, experimentei o código e ajustei-o com base nos resultados. Com isso, aprendi a carregar e apresentar imagens, usar variáveis e funções e aplicar `if/else` para controlar a animação e os filtros.

### Prompts

*"how do i write a code that makes an animation run by clicks of a mouse? one click - one frame. if you stop clicking, the animation stops as well. using if/else"*

*"i have a frame numbered 12, i need it to be the frame that is used when the animation is stopped. how do i put it as a still frame?"*

*"how to make a if/else function that will make filters based on where is the cursor on the screen"*