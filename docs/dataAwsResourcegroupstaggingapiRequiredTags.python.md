# `dataAwsResourcegroupstaggingapiRequiredTags` Submodule <a name="`dataAwsResourcegroupstaggingapiRequiredTags` Submodule" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResourcegroupstaggingapiRequiredTags <a name="DataAwsResourcegroupstaggingapiRequiredTags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/resourcegroupstaggingapi_required_tags aws_resourcegroupstaggingapi_required_tags}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resourcegroupstaggingapi_required_tags

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/resourcegroupstaggingapi_required_tags#region DataAwsResourcegroupstaggingapiRequiredTags#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsResourcegroupstaggingapiRequiredTags resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_resourcegroupstaggingapi_required_tags

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_resourcegroupstaggingapi_required_tags

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_resourcegroupstaggingapi_required_tags

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_resourcegroupstaggingapi_required_tags

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsResourcegroupstaggingapiRequiredTags resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsResourcegroupstaggingapiRequiredTags to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsResourcegroupstaggingapiRequiredTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/resourcegroupstaggingapi_required_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsResourcegroupstaggingapiRequiredTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.requiredTags">required_tags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `required_tags`<sup>Required</sup> <a name="required_tags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.requiredTags"></a>

```python
required_tags: DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResourcegroupstaggingapiRequiredTagsConfig <a name="DataAwsResourcegroupstaggingapiRequiredTagsConfig" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resourcegroupstaggingapi_required_tags

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/resourcegroupstaggingapi_required_tags#region DataAwsResourcegroupstaggingapiRequiredTags#region}

---

### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resourcegroupstaggingapi_required_tags

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resourcegroupstaggingapi_required_tags

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_resourcegroupstaggingapi_required_tags

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.cloudFormationResourceTypes">cloud_formation_resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.reportingTagKeys">reporting_tag_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_formation_resource_types`<sup>Required</sup> <a name="cloud_formation_resource_types" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.cloudFormationResourceTypes"></a>

```python
cloud_formation_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reporting_tag_keys`<sup>Required</sup> <a name="reporting_tag_keys" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.reportingTagKeys"></a>

```python
reporting_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags</a>

---



