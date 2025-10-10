# `dataAwsOdbDbServer` Submodule <a name="`dataAwsOdbDbServer` Submodule" id="@cdktf/provider-aws.dataAwsOdbDbServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbDbServer <a name="DataAwsOdbDbServer" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_server aws_odb_db_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_server

dataAwsOdbDbServer.DataAwsOdbDbServer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_exadata_infrastructure_id: str,
  id: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | The identifier of the database server to retrieve information about. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The identifier of the the database server. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* str

The identifier of the database server to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_server#cloud_exadata_infrastructure_id DataAwsOdbDbServer#cloud_exadata_infrastructure_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.id"></a>

- *Type:* str

The identifier of the the database server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_server#id DataAwsOdbDbServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_server#region DataAwsOdbDbServer#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsOdbDbServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_server

dataAwsOdbDbServer.DataAwsOdbDbServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_server

dataAwsOdbDbServer.DataAwsOdbDbServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_server

dataAwsOdbDbServer.DataAwsOdbDbServer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_server

dataAwsOdbDbServer.DataAwsOdbDbServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsOdbDbServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsOdbDbServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsOdbDbServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbDbServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVirtualMachineIds">autonomous_virtual_machine_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVmClusterIds">autonomous_vm_cluster_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbServerPatchingDetails">db_server_patching_details</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList">DataAwsOdbDbServerDbServerPatchingDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxCpuCount">max_cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxDbNodeStorageInGbs">max_db_node_storage_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxMemoryInGbs">max_memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.vmClusterIds">vm_cluster_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureIdInput">cloud_exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_virtual_machine_ids`<sup>Required</sup> <a name="autonomous_virtual_machine_ids" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVirtualMachineIds"></a>

```python
autonomous_virtual_machine_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autonomous_vm_cluster_ids`<sup>Required</sup> <a name="autonomous_vm_cluster_ids" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVmClusterIds"></a>

```python
autonomous_vm_cluster_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_patching_details`<sup>Required</sup> <a name="db_server_patching_details" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbServerPatchingDetails"></a>

```python
db_server_patching_details: DataAwsOdbDbServerDbServerPatchingDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList">DataAwsOdbDbServerDbServerPatchingDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `max_cpu_count`<sup>Required</sup> <a name="max_cpu_count" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxCpuCount"></a>

```python
max_cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_db_node_storage_in_gbs`<sup>Required</sup> <a name="max_db_node_storage_in_gbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxDbNodeStorageInGbs"></a>

```python
max_db_node_storage_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_in_gbs`<sup>Required</sup> <a name="max_memory_in_gbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxMemoryInGbs"></a>

```python
max_memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `vm_cluster_ids`<sup>Required</sup> <a name="vm_cluster_ids" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.vmClusterIds"></a>

```python
vm_cluster_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloud_exadata_infrastructure_id_input`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id_input" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureIdInput"></a>

```python
cloud_exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbDbServerConfig <a name="DataAwsOdbDbServerConfig" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_server

dataAwsOdbDbServer.DataAwsOdbDbServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_exadata_infrastructure_id: str,
  id: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | The identifier of the database server to retrieve information about. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.id">id</a></code> | <code>str</code> | The identifier of the the database server. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

The identifier of the database server to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_server#cloud_exadata_infrastructure_id DataAwsOdbDbServer#cloud_exadata_infrastructure_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The identifier of the the database server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_server#id DataAwsOdbDbServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_server#region DataAwsOdbDbServer#region}

---

### DataAwsOdbDbServerDbServerPatchingDetails <a name="DataAwsOdbDbServerDbServerPatchingDetails" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_server

dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbDbServerDbServerPatchingDetailsList <a name="DataAwsOdbDbServerDbServerPatchingDetailsList" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_server

dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbDbServerDbServerPatchingDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbDbServerDbServerPatchingDetailsOutputReference <a name="DataAwsOdbDbServerDbServerPatchingDetailsOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_odb_db_server

dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration">estimated_patch_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.patchingStatus">patching_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingEnded">time_patching_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingStarted">time_patching_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails">DataAwsOdbDbServerDbServerPatchingDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_patch_duration`<sup>Required</sup> <a name="estimated_patch_duration" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration"></a>

```python
estimated_patch_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patching_status`<sup>Required</sup> <a name="patching_status" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.patchingStatus"></a>

```python
patching_status: str
```

- *Type:* str

---

##### `time_patching_ended`<sup>Required</sup> <a name="time_patching_ended" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingEnded"></a>

```python
time_patching_ended: str
```

- *Type:* str

---

##### `time_patching_started`<sup>Required</sup> <a name="time_patching_started" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingStarted"></a>

```python
time_patching_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbDbServerDbServerPatchingDetails
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails">DataAwsOdbDbServerDbServerPatchingDetails</a>

---



