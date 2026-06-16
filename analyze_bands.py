import sys
from PIL import Image

img_path = 'public/media__1781585186857.png'
img = Image.open(img_path).convert("RGBA")
w, h = img.size

# Find the bands by looking for rows that are almost entirely solid colored
for y in range(h):
    solid_count = 0
    for x in range(w):
        if img.getpixel((x, y))[3] > 0:
            solid_count += 1
    if solid_count > w * 0.8: # more than 80% of the row is not transparent
        print(f"Row {y} is mostly solid")

