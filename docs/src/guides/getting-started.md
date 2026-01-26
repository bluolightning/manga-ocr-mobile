# Getting Started

Welcome to the official technical documentation for Manga OCR Mobile.

## Usage

### Image Preprocessing

Before inference, images must be preprocessed to match the model's input expectations:

1. **Canvas Setup**: Create a **224x224** canvas filled with white background.
2. **Scaling**: Scale the input image to fit within the 224x224 box while preserving its aspect ratio.
3. **Centering**: Center the scaled image on the canvas.
4. **Normalization**:
    - Convert pixel values to floats in the range **[0, 1]** (divide by 255).
    - Arrange data in **NCHW** format (Channels, Height, Width) with **RGB** channel order.
        - Conversion to grayscale and back to RGB may be needed for optimal performance on colored pages.
    - The final input tensor shape is `[1, 3, 224, 224]`.

### Benchmarks

Performance metrics for the FP16 model (INT8 dynamic is about 1.5x faster):

- **Galaxy S24 (CPU)**
  - Encoder: 15-25ms
  - Decoder: 3-6ms per token
- **Galaxy A6 (2018)**
  - Encoder: 150-250ms
  - Decoder: 35-45ms per token
