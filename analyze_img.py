import sys
from PIL import Image

img_path = 'public/media__1781585186857.png'
img = Image.open(img_path).convert("RGBA")
w, h = img.size

print("Image Size:", w, "x", h)

# Check top middle, bottom middle, left middle, right middle
print("Top Middle:", img.getpixel((w//2, 0)))
print("Bottom Middle:", img.getpixel((w//2, h-1)))
print("Left Middle:", img.getpixel((0, h//2)))
print("Right Middle:", img.getpixel((w-1, h//2)))

# Check the first few rows for non-transparent pixels
found_top = False
for y in range(h):
    if img.getpixel((w//2, y))[3] > 0:
        print(f"First non-transparent at top: row {y}, color {img.getpixel((w//2, y))}")
        break

for y in range(h-1, -1, -1):
    if img.getpixel((w//2, y))[3] > 0:
        print(f"First non-transparent at bottom: row {y}, color {img.getpixel((w//2, y))}")
        break
