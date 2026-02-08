# `dataAwsS3BucketObjectLockConfiguration` Submodule <a name="`dataAwsS3BucketObjectLockConfiguration` Submodule" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3BucketObjectLockConfiguration <a name="DataAwsS3BucketObjectLockConfiguration" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration aws_s3_bucket_object_lock_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  expected_bucket_owner: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration#bucket DataAwsS3BucketObjectLockConfiguration#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration#expected_bucket_owner DataAwsS3BucketObjectLockConfiguration#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration#bucket DataAwsS3BucketObjectLockConfiguration#bucket}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration#expected_bucket_owner DataAwsS3BucketObjectLockConfiguration#expected_bucket_owner}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration#region DataAwsS3BucketObjectLockConfiguration#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsS3BucketObjectLockConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsS3BucketObjectLockConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsS3BucketObjectLockConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsS3BucketObjectLockConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsS3BucketObjectLockConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.objectLockEnabled">object_lock_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList">DataAwsS3BucketObjectLockConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `object_lock_enabled`<sup>Required</sup> <a name="object_lock_enabled" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.objectLockEnabled"></a>

```python
object_lock_enabled: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.rule"></a>

```python
rule: DataAwsS3BucketObjectLockConfigurationRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList">DataAwsS3BucketObjectLockConfigurationRuleList</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3BucketObjectLockConfigurationConfig <a name="DataAwsS3BucketObjectLockConfigurationConfig" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  expected_bucket_owner: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration#bucket DataAwsS3BucketObjectLockConfiguration#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration#expected_bucket_owner DataAwsS3BucketObjectLockConfiguration#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration#bucket DataAwsS3BucketObjectLockConfiguration#bucket}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration#expected_bucket_owner DataAwsS3BucketObjectLockConfiguration#expected_bucket_owner}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_object_lock_configuration#region DataAwsS3BucketObjectLockConfiguration#region}

---

### DataAwsS3BucketObjectLockConfigurationRule <a name="DataAwsS3BucketObjectLockConfigurationRule" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule()
```


### DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention <a name="DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList <a name="DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference <a name="DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years">years</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `years`<sup>Required</sup> <a name="years" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years"></a>

```python
years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention</a>

---


### DataAwsS3BucketObjectLockConfigurationRuleList <a name="DataAwsS3BucketObjectLockConfigurationRuleList" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsS3BucketObjectLockConfigurationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsS3BucketObjectLockConfigurationRuleOutputReference <a name="DataAwsS3BucketObjectLockConfigurationRuleOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_bucket_object_lock_configuration

dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention">default_retention</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule">DataAwsS3BucketObjectLockConfigurationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_retention`<sup>Required</sup> <a name="default_retention" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention"></a>

```python
default_retention: DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsS3BucketObjectLockConfigurationRule
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule">DataAwsS3BucketObjectLockConfigurationRule</a>

---



