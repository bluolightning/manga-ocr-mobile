# Encoder Specifications

This page details the inputs and outputs for the encoder.

### Inputs

| Name | Tensor Name | Type | Key Info |
| :--- | :--- | :--- | :--- |
| `args_0` | `serving_default_args_0:0` | `float32` | Shape: `[1, 3, 224, 224]`<br>ID: `0` |

### Outputs

| Name | Tensor Name | Type | Key Info |
| :--- | :--- | :--- | :--- |
| `output_0` | `StatefulPartitionedCall:0` | `float32` | Shape: `[1, 196, 256]`<br>ID: `589` |
