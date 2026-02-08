# `dataAwsRdsGlobalCluster` Submodule <a name="`dataAwsRdsGlobalCluster` Submodule" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsGlobalCluster <a name="DataAwsRdsGlobalCluster" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/rds_global_cluster aws_rds_global_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_global_cluster

dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identifier: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/rds_global_cluster#identifier DataAwsRdsGlobalCluster#identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/rds_global_cluster#identifier DataAwsRdsGlobalCluster#identifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/rds_global_cluster#region DataAwsRdsGlobalCluster#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsRdsGlobalCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_rds_global_cluster

dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_rds_global_cluster

dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_rds_global_cluster

dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_rds_global_cluster

dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsRdsGlobalCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsRdsGlobalCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsRdsGlobalCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/rds_global_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRdsGlobalCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.deletionProtection">deletion_protection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engineLifecycleSupport">engine_lifecycle_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.members">members</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList">DataAwsRdsGlobalClusterMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.storageEncrypted">storage_encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_lifecycle_support`<sup>Required</sup> <a name="engine_lifecycle_support" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engineLifecycleSupport"></a>

```python
engine_lifecycle_support: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.members"></a>

```python
members: DataAwsRdsGlobalClusterMembersList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList">DataAwsRdsGlobalClusterMembersList</a>

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `storage_encrypted`<sup>Required</sup> <a name="storage_encrypted" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.storageEncrypted"></a>

```python
storage_encrypted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsGlobalClusterConfig <a name="DataAwsRdsGlobalClusterConfig" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_global_cluster

dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identifier: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/rds_global_cluster#identifier DataAwsRdsGlobalCluster#identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/rds_global_cluster#identifier DataAwsRdsGlobalCluster#identifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/rds_global_cluster#region DataAwsRdsGlobalCluster#region}

---

### DataAwsRdsGlobalClusterMembers <a name="DataAwsRdsGlobalClusterMembers" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembers.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_global_cluster

dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRdsGlobalClusterMembersList <a name="DataAwsRdsGlobalClusterMembersList" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_global_cluster

dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRdsGlobalClusterMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsRdsGlobalClusterMembersOutputReference <a name="DataAwsRdsGlobalClusterMembersOutputReference" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_rds_global_cluster

dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.dbClusterArn">db_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.isWriter">is_writer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembers">DataAwsRdsGlobalClusterMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_cluster_arn`<sup>Required</sup> <a name="db_cluster_arn" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.dbClusterArn"></a>

```python
db_cluster_arn: str
```

- *Type:* str

---

##### `is_writer`<sup>Required</sup> <a name="is_writer" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.isWriter"></a>

```python
is_writer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRdsGlobalClusterMembers
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembers">DataAwsRdsGlobalClusterMembers</a>

---



