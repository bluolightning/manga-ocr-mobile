# Decoder Specifications

This page details the inputs and outputs for the decoder's `init` and `step` functions.

## Init Function

**Signature**: `init`

### Inputs

| Name | Tensor Name | Type | Key Info |
| :--- | :--- | :--- | :--- |
| `args_0` | `init_args_0:0` | `float32` | Shape: `[1, 196, 256]`<br>ID: `0` |
| `args_1` | `init_args_1:0` | `int64` | Shape: `[1, 1]`<br>ID: `1` |

### Outputs

| Name | Tensor Name | Type | Key Info |
| :--- | :--- | :--- | :--- |
| `output_0` | `StatefulPartitionedCall:0` | `float32` | Shape: `[1, 9415]`<br>ID: `711` |
| `output_1` | `StatefulPartitionedCall:1` | `float32` | Shape: `[4, 1, 4, 1, 64]`<br>ID: `713` |
| `output_2` | `StatefulPartitionedCall:2` | `float32` | Shape: `[4, 1, 4, 1, 64]`<br>ID: `715` |
| `output_3` | `StatefulPartitionedCall:3` | `float32` | Shape: `[4, 1, 4, 196, 64]`<br>ID: `307` |
| `output_4` | `StatefulPartitionedCall:4` | `float32` | Shape: `[4, 1, 4, 196, 64]`<br>ID: `309` |

## Step Function

**Signature**: `step`

### Inputs

| Name | Tensor Name | Type | Key Info |
| :--- | :--- | :--- | :--- |
| `args_0` | `step_args_0:0` | `float32` | Shape: `[1, 196, 256]`<br>ID: `3` |
| `args_1` | `step_args_1:0` | `int64` | Shape: `[1, 1]`<br>ID: `6` |
| `args_2` | `step_args_2:0` | `int64` | Shape: `[1, 1]`<br>ID: `1` |
| `args_3` | `step_args_3:0` | `float32` | Shape: `[4, 1, 4, 256, 64]`<br>ID: `2` |
| `args_4` | `step_args_4:0` | `float32` | Shape: `[4, 1, 4, 256, 64]`<br>ID: `5` |
| `args_5` | `step_args_5:0` | `float32` | Shape: `[4, 1, 4, 196, 64]`<br>ID: `0` |
| `args_6` | `step_args_6:0` | `float32` | Shape: `[4, 1, 4, 196, 64]`<br>ID: `4` |

### Outputs

| Name | Tensor Name | Type | Key Info |
| :--- | :--- | :--- | :--- |
| `output_0` | `StatefulPartitionedCall_1:0` | `float32` | Shape: `[1, 9415]`<br>ID: `679` |
| `output_1` | `StatefulPartitionedCall_1:1` | `float32` | Shape: `[4, 1, 4, 1, 64]`<br>ID: `681` |
| `output_2` | `StatefulPartitionedCall_1:2` | `float32` | Shape: `[4, 1, 4, 1, 64]`<br>ID: `683` |
