import sys
from PIL import Image

img_path = 'public/media__1781585186857.png'
img = Image.open(img_path).convert("RGBA")
data = img.getdata()

new_data = []
# (253, 246, 234)
for item in data:
    # If the pixel is very light (e.g. R>230, G>230, B>220), make it white or transparent
    if item[0] > 230 and item[1] > 230 and item[2] > 210:
        new_data.append((255, 255, 255, 0)) # transparent
    else:
        new_data.append(item)

img.putdata(new_data)
img.save(img_path, "PNG")
