# `dataAwsS3ControlMultiRegionAccessPoints` Submodule <a name="`dataAwsS3ControlMultiRegionAccessPoints` Submodule" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3ControlMultiRegionAccessPoints <a name="DataAwsS3ControlMultiRegionAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points aws_s3control_multi_region_access_points}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#region DataAwsS3ControlMultiRegionAccessPoints#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsS3ControlMultiRegionAccessPoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsS3ControlMultiRegionAccessPoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsS3ControlMultiRegionAccessPoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsS3ControlMultiRegionAccessPoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsS3ControlMultiRegionAccessPoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accessPoints">access_points</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_points`<sup>Required</sup> <a name="access_points" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accessPoints"></a>

```python
access_points: DataAwsS3ControlMultiRegionAccessPointsAccessPointsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ControlMultiRegionAccessPointsAccessPoints <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints()
```


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock()
```


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions()
```


### DataAwsS3ControlMultiRegionAccessPointsConfig <a name="DataAwsS3ControlMultiRegionAccessPointsConfig" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#region DataAwsS3ControlMultiRegionAccessPoints#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3ControlMultiRegionAccessPointsAccessPointsList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.publicAccessBlock">public_access_block</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.regions">regions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints">DataAwsS3ControlMultiRegionAccessPointsAccessPoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_access_block`<sup>Required</sup> <a name="public_access_block" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.publicAccessBlock"></a>

```python
public_access_block: DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.regions"></a>

```python
regions: DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsS3ControlMultiRegionAccessPointsAccessPoints
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints">DataAwsS3ControlMultiRegionAccessPointsAccessPoints</a>

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicAcls">block_public_acls</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicPolicy">block_public_policy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_public_acls`<sup>Required</sup> <a name="block_public_acls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```python
block_public_acls: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `block_public_policy`<sup>Required</sup> <a name="block_public_policy" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```python
block_public_policy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ignore_public_acls`<sup>Required</sup> <a name="ignore_public_acls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```python
ignore_public_acls: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `restrict_public_buckets`<sup>Required</sup> <a name="restrict_public_buckets" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock</a>

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_s3_control_multi_region_access_points

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_account_id`<sup>Required</sup> <a name="bucket_account_id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucketAccountId"></a>

```python
bucket_account_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions</a>

---



