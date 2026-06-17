import subprocess
import json
import os

def read_text_with_vision(image_path):
    script = f'''
    import Vision
    import Foundation
    import CoreImage

    let url = URL(fileURLWithPath: "{image_path}")
    guard let ciImage = CIImage(contentsOf: url) else {{
        print("Failed to load image")
        exit(1)
    }}

    let request = VNRecognizeTextRequest {{ request, error in
        guard let observations = request.results as? [VNRecognizedTextObservation] else {{ return }}
        let recognizedStrings = observations.compactMap {{ observation in
            return observation.topCandidates(1).first?.string
        }}
        print(recognizedStrings.joined(separator: " "))
    }}
    request.recognitionLevel = .accurate

    let handler = VNImageRequestHandler(ciImage: ciImage, options: [:])
    try? handler.perform([request])
    '''
    with open('temp.swift', 'w') as f:
        f.write(script)
    
    result = subprocess.run(['swift', 'temp.swift'], capture_output=True, text=True)
    os.remove('temp.swift')
    return result.stdout.strip()

print("Logo 1 text:", read_text_with_vision("/Users/stro/projects/gillette-travel-center/public/partner_logo_1.png"))
print("Logo 3 text:", read_text_with_vision("/Users/stro/projects/gillette-travel-center/public/partner_logo_3.png"))
