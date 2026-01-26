## Manga OCR Mobile (Preview)

This model is a lightweight OCR model build for speed and optimized for mobile/edge devices.

It achives high-accuracy text recognition while maintaining a footprint much smaller than standard models. Source code will be released in the coming days/weeks.

Check out the [technical docs](https://bluolightning.github.io/manga-ocr-mobile) or the [Hugging Face](https://huggingface.co/bluolightning/manga-ocr-mobile) for more details.

# Acknowledgments

This project was done with the usage of:
- [Manga109-s](http://www.manga109.org/en/download_s.html) dataset
- [CC-100](https://data.statmt.org/cc-100/) dataset - used for synthetic data
- [webnovels](https://huggingface.co/datasets/NilanE/ParallelFiction-Ja_En-100k) dataset - used for synthetic data

The model builds upon [kha-white/manga-ocr](https://github.com/kha-white/manga-ocr), with a significant divergence in deployment focus and synthetic data generation.

```BibTeX
@inproceedings{wang2024repvit,
  title={Repvit: Revisiting mobile cnn from vit perspective},
  author={Wang, Ao and Chen, Hui and Lin, Zijia and Han, Jungong and Ding, Guiguang},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={15909--15920},
  year={2024}
}

@misc{wang2023repvitsam,
      title={RepViT-SAM: Towards Real-Time Segmenting Anything}, 
      author={Ao Wang and Hui Chen and Zijia Lin and Jungong Han and Guiguang Ding},
      year={2023},
      eprint={2312.05760},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
}
```