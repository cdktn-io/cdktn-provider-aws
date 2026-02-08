# `dataAwsArcregionswitchPlan` Submodule <a name="`dataAwsArcregionswitchPlan` Submodule" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsArcregionswitchPlan <a name="DataAwsArcregionswitchPlan" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan aws_arcregionswitch_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_arcregionswitch_plan

dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arn: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan#arn DataAwsArcregionswitchPlan#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan#arn DataAwsArcregionswitchPlan#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan#region DataAwsArcregionswitchPlan#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsArcregionswitchPlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_arcregionswitch_plan

dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_arcregionswitch_plan

dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_arcregionswitch_plan

dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_arcregionswitch_plan

dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsArcregionswitchPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsArcregionswitchPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsArcregionswitchPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsArcregionswitchPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.primaryRegion">primary_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryApproach">recovery_approach</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryTimeObjectiveMinutes">recovery_time_objective_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `primary_region`<sup>Required</sup> <a name="primary_region" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.primaryRegion"></a>

```python
primary_region: str
```

- *Type:* str

---

##### `recovery_approach`<sup>Required</sup> <a name="recovery_approach" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryApproach"></a>

```python
recovery_approach: str
```

- *Type:* str

---

##### `recovery_time_objective_minutes`<sup>Required</sup> <a name="recovery_time_objective_minutes" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryTimeObjectiveMinutes"></a>

```python
recovery_time_objective_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsArcregionswitchPlanConfig <a name="DataAwsArcregionswitchPlanConfig" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_arcregionswitch_plan

dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arn: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan#arn DataAwsArcregionswitchPlan#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan#arn DataAwsArcregionswitchPlan#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan#region DataAwsArcregionswitchPlan#region}

---



