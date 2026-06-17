
    import Vision
    import Foundation
    import CoreImage

    let url = URL(fileURLWithPath: "/Users/stro/projects/gillette-travel-center/public/partner_logo_1.png")
    guard let ciImage = CIImage(contentsOf: url) else {
        print("Failed to load image")
        exit(1)
    }

    let request = VNRecognizeTextRequest { request, error in
        guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
        let recognizedStrings = observations.compactMap { observation in
            return observation.topCandidates(1).first?.string
        }
        print(recognizedStrings.joined(separator: " "))
    }
    request.recognitionLevel = .accurate

    let handler = VNImageRequestHandler(ciImage: ciImage, options: [:])
    try? handler.perform([request])
    