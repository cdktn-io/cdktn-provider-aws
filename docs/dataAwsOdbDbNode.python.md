# `dataAwsOdbDbNode` Submodule <a name="`dataAwsOdbDbNode` Submodule" id="@cdktf/provider-aws.dataAwsOdbDbNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbDbNode <a name="DataAwsOdbDbNode" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node aws_odb_db_node}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_node

dataAwsOdbDbNode.DataAwsOdbDbNode(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_vm_cluster_id: str,
  id: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node#cloud_vm_cluster_id DataAwsOdbDbNode#cloud_vm_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node#id DataAwsOdbDbNode#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.cloudVmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node#cloud_vm_cluster_id DataAwsOdbDbNode#cloud_vm_cluster_id}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node#id DataAwsOdbDbNode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node#region DataAwsOdbDbNode#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsOdbDbNode resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_node

dataAwsOdbDbNode.DataAwsOdbDbNode.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_node

dataAwsOdbDbNode.DataAwsOdbDbNode.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_node

dataAwsOdbDbNode.DataAwsOdbDbNode.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_node

dataAwsOdbDbNode.DataAwsOdbDbNode.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsOdbDbNode resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsOdbDbNode to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsOdbDbNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbDbNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.additionalDetails">additional_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.backupIpId">backup_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.backupVnic2Id">backup_vnic2_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.backupVnicId">backup_vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.dbServerId">db_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.dbStorageSizeInGbs">db_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.floatingIpAddress">floating_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.hostIpId">host_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.maintenanceType">maintenance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.softwareStorageSizeInGbs">software_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.timeMaintenanceWindowEnd">time_maintenance_window_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.timeMaintenanceWindowStart">time_maintenance_window_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.totalCpuCoreCount">total_cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.vnic2Id">vnic2_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.cloudVmClusterIdInput">cloud_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.additionalDetails"></a>

```python
additional_details: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `backup_ip_id`<sup>Required</sup> <a name="backup_ip_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.backupIpId"></a>

```python
backup_ip_id: str
```

- *Type:* str

---

##### `backup_vnic2_id`<sup>Required</sup> <a name="backup_vnic2_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.backupVnic2Id"></a>

```python
backup_vnic2_id: str
```

- *Type:* str

---

##### `backup_vnic_id`<sup>Required</sup> <a name="backup_vnic_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.backupVnicId"></a>

```python
backup_vnic_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `db_server_id`<sup>Required</sup> <a name="db_server_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.dbServerId"></a>

```python
db_server_id: str
```

- *Type:* str

---

##### `db_storage_size_in_gbs`<sup>Required</sup> <a name="db_storage_size_in_gbs" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.dbStorageSizeInGbs"></a>

```python
db_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `floating_ip_address`<sup>Required</sup> <a name="floating_ip_address" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.floatingIpAddress"></a>

```python
floating_ip_address: str
```

- *Type:* str

---

##### `host_ip_id`<sup>Required</sup> <a name="host_ip_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.hostIpId"></a>

```python
host_ip_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `maintenance_type`<sup>Required</sup> <a name="maintenance_type" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.maintenanceType"></a>

```python
maintenance_type: str
```

- *Type:* str

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `software_storage_size_in_gbs`<sup>Required</sup> <a name="software_storage_size_in_gbs" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.softwareStorageSizeInGbs"></a>

```python
software_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `time_maintenance_window_end`<sup>Required</sup> <a name="time_maintenance_window_end" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.timeMaintenanceWindowEnd"></a>

```python
time_maintenance_window_end: str
```

- *Type:* str

---

##### `time_maintenance_window_start`<sup>Required</sup> <a name="time_maintenance_window_start" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.timeMaintenanceWindowStart"></a>

```python
time_maintenance_window_start: str
```

- *Type:* str

---

##### `total_cpu_core_count`<sup>Required</sup> <a name="total_cpu_core_count" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.totalCpuCoreCount"></a>

```python
total_cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vnic2_id`<sup>Required</sup> <a name="vnic2_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.vnic2Id"></a>

```python
vnic2_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `cloud_vm_cluster_id_input`<sup>Optional</sup> <a name="cloud_vm_cluster_id_input" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.cloudVmClusterIdInput"></a>

```python
cloud_vm_cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNode.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbDbNodeConfig <a name="DataAwsOdbDbNodeConfig" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_node

dataAwsOdbDbNode.DataAwsOdbDbNodeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_vm_cluster_id: str,
  id: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node#cloud_vm_cluster_id DataAwsOdbDbNode#cloud_vm_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node#id DataAwsOdbDbNode#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node#cloud_vm_cluster_id DataAwsOdbDbNode#cloud_vm_cluster_id}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node#id DataAwsOdbDbNode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbNode.DataAwsOdbDbNodeConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_node#region DataAwsOdbDbNode#region}

---



