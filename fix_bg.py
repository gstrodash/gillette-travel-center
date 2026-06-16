import os
from PIL import Image

files = [f for f in os.listdir('public') if f.endswith('.png')]

for f in files:
    try:
        img = Image.open(f'public/{f}').convert("RGBA")
        pixels = img.load()
        # Check top-left corner pixel
        r, g, b, a = pixels[0, 0]
        # Tan is roughly around R:210, G:180, B:140, but could be anything not transparent and not white
        print(f"{f}: ({r}, {g}, {b}, {a})")
    except Exception as e:
        pass
