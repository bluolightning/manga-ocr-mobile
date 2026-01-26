# Training Details (v1)

This page provides an overview of the training process and performance benchmarks for the v1 model.

## Training Process

The model was developed using a two-stage training approach:

### 1. Pretraining
The model was pretrained on approximately **1 million synthetic images** generated with cleaned and filtered text:
- **60% Anime**: Specialized corpus (non-public)
- **20% Webnovel**: Japanese webnovel text
- **20% CC100**: CC100 Japanese dataset

### 2. Fine-Tuning
The model was fine-tuned on the [Manga109s](http://www.manga109.org/en/) dataset using a random 90% split for training.

## Model Conversion

The model was trained in **PyTorch** and converted to **TFLite** with [AI Edge Torch](https://github.com/google-ai-edge/ai-edge-torch), enabling high-performance inference on mobile and edge devices.

## Benchmarks

The following results were achieved on a random 10% split of the Manga109s dataset:

- **Character Error Rate (CER)**: ~7.4%
- **Exact-Match Accuracy**: ~73%

### Comparison
The v1 model's performance is comparable to or exceeds `PaddleOCR-VL-For-Manga` (*somehow, unless there's something I missed*), which typically achieves:
- **CER**: ~10%
- **Exact-Match Accuracy**: ~70%

::: warning Known Issues
The model currently has some difficulty accurately recognizing:
- English letters
- Various punctuation marks
:::
