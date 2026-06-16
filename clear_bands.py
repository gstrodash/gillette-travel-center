import sys
from PIL import Image

img_path = 'public/media__1781585186857.png'
img = Image.open(img_path).convert("RGBA")
w, h = img.size
data = img.load()

# Clear top 8 rows and bottom 8 rows
for y in range(h):
    if y < 8 or y > h - 8:
        for x in range(w):
            data[x, y] = (255, 255, 255, 0)

img.save(img_path, "PNG")
