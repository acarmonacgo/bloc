# bloc

Editor de texto minimalista y amnésico. Corre localmente en el navegador. Al cerrar la pestaña, todo lo escrito desaparece.

## Requisitos

- Python 3 (viene preinstalado en macOS)

## Uso

### Arranque manual

```bash
cd ~/Desktop/repos
python3 -m http.server 3131
```

Luego abrí `http://localhost:3131` en el navegador.

### Arranque en background

Para correrlo sin mantener la terminal abierta:

```bash
cd ~/Desktop/repos
nohup python3 -m http.server 3131 &> /dev/null &
```

Verificar que está corriendo:
```bash
lsof -i :3131
```

Detenerlo:
```bash
kill $(lsof -ti :3131)
```

## Funcionalidades

- Negrita, cursiva, subrayado, tachado (`Ctrl+B` / `Ctrl+I` / `Ctrl+U`)
- Listas ordenadas y sin orden
- Alineación izquierda, centro, derecha
- Control de tamaño de fuente
- `Tab` inserta espacios en vez de salir del editor
- `Ctrl+V` pega como texto plano; `Ctrl+Shift+V` pega con formato
- Botón "limpiar" para vaciar el editor

## Recursos

Consume menos de 1MB de RAM y 0% CPU en reposo. Apto para dejarlo corriendo 24/7.
