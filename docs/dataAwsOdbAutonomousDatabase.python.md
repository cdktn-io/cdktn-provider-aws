# `dataAwsOdbAutonomousDatabase` Submodule <a name="`dataAwsOdbAutonomousDatabase` Submodule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbAutonomousDatabase <a name="DataAwsOdbAutonomousDatabase" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/odb_autonomous_database aws_odb_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Unique identifier of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* str

Unique identifier of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/odb_autonomous_database#id DataAwsOdbAutonomousDatabase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/odb_autonomous_database#region DataAwsOdbAutonomousDatabase#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsOdbAutonomousDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsOdbAutonomousDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsOdbAutonomousDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsOdbAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/odb_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOdbAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">actual_used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.adminPasswordSource">admin_password_source</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allocatedStorageSizeInTbs">allocated_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allowlistedIps">allowlisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autonomousMaintenanceScheduleType">autonomous_maintenance_schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availableUpgradeVersions">available_upgrade_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.byolComputeCountLimit">byol_compute_count_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.customerContactsToSendToOci">customer_contacts_to_send_to_oci</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInGbs">data_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbToolsDetails">db_tools_details</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList">DataAwsOdbAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.encryptionKeyProvider">encryption_key_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingForStorageEnabled">is_auto_scaling_for_storage_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isBackupRetentionLocked">is_backup_retention_locked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isLocalDataGuardEnabled">is_local_data_guard_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isMtlsConnectionRequired">is_mtls_connection_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">local_adg_auto_failover_max_data_loss_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.longTermBackupSchedule">long_term_backup_schedule</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList">DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkArn">odb_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.percentProgress">percent_progress</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.permissionLevel">permission_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpoint">private_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.refreshableMode">refreshable_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolSummary">resource_pool_summary</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList">DataAwsOdbAutonomousDatabaseResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.scheduledOperations">scheduled_operations</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList">DataAwsOdbAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.serviceConsoleUrl">service_console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sqlWebDeveloperUrl">sql_web_developer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIps">standby_allowlisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIpsSource">standby_allowlisted_ips_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `actual_used_data_storage_size_in_tbs`<sup>Required</sup> <a name="actual_used_data_storage_size_in_tbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```python
actual_used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_password_source`<sup>Required</sup> <a name="admin_password_source" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.adminPasswordSource"></a>

```python
admin_password_source: DataAwsOdbAutonomousDatabaseAdminPasswordSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceList</a>

---

##### `allocated_storage_size_in_tbs`<sup>Required</sup> <a name="allocated_storage_size_in_tbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```python
allocated_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowlisted_ips`<sup>Required</sup> <a name="allowlisted_ips" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allowlistedIps"></a>

```python
allowlisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `autonomous_maintenance_schedule_type`<sup>Required</sup> <a name="autonomous_maintenance_schedule_type" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```python
autonomous_maintenance_schedule_type: str
```

- *Type:* str

---

##### `auto_refresh_frequency_in_seconds`<sup>Required</sup> <a name="auto_refresh_frequency_in_seconds" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```python
auto_refresh_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_refresh_point_lag_in_seconds`<sup>Required</sup> <a name="auto_refresh_point_lag_in_seconds" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```python
auto_refresh_point_lag_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `available_upgrade_versions`<sup>Required</sup> <a name="available_upgrade_versions" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availableUpgradeVersions"></a>

```python
available_upgrade_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `byol_compute_count_limit`<sup>Required</sup> <a name="byol_compute_count_limit" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.byolComputeCountLimit"></a>

```python
byol_compute_count_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `customer_contacts_to_send_to_oci`<sup>Required</sup> <a name="customer_contacts_to_send_to_oci" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.customerContactsToSendToOci"></a>

```python
customer_contacts_to_send_to_oci: DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList</a>

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `data_storage_size_in_gbs`<sup>Required</sup> <a name="data_storage_size_in_gbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```python
data_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_tools_details`<sup>Required</sup> <a name="db_tools_details" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbToolsDetails"></a>

```python
db_tools_details: DataAwsOdbAutonomousDatabaseDbToolsDetailsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList">DataAwsOdbAutonomousDatabaseDbToolsDetailsList</a>

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `encryption_key_provider`<sup>Required</sup> <a name="encryption_key_provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.encryptionKeyProvider"></a>

```python
encryption_key_provider: str
```

- *Type:* str

---

##### `is_auto_scaling_enabled`<sup>Required</sup> <a name="is_auto_scaling_enabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="is_auto_scaling_for_storage_enabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```python
is_auto_scaling_for_storage_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_backup_retention_locked`<sup>Required</sup> <a name="is_backup_retention_locked" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isBackupRetentionLocked"></a>

```python
is_backup_retention_locked: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_local_data_guard_enabled`<sup>Required</sup> <a name="is_local_data_guard_enabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```python
is_local_data_guard_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_mtls_connection_required`<sup>Required</sup> <a name="is_mtls_connection_required" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```python
is_mtls_connection_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_refreshable_clone`<sup>Required</sup> <a name="is_refreshable_clone" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isRefreshableClone"></a>

```python
is_refreshable_clone: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `local_adg_auto_failover_max_data_loss_limit`<sup>Required</sup> <a name="local_adg_auto_failover_max_data_loss_limit" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```python
local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_term_backup_schedule`<sup>Required</sup> <a name="long_term_backup_schedule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.longTermBackupSchedule"></a>

```python
long_term_backup_schedule: DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList">DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `odb_network_arn`<sup>Required</sup> <a name="odb_network_arn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkArn"></a>

```python
odb_network_arn: str
```

- *Type:* str

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `percent_progress`<sup>Required</sup> <a name="percent_progress" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.percentProgress"></a>

```python
percent_progress: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permission_level`<sup>Required</sup> <a name="permission_level" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.permissionLevel"></a>

```python
permission_level: str
```

- *Type:* str

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpoint"></a>

```python
private_endpoint: str
```

- *Type:* str

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `private_endpoint_label`<sup>Required</sup> <a name="private_endpoint_label" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointLabel"></a>

```python
private_endpoint_label: str
```

- *Type:* str

---

##### `refreshable_mode`<sup>Required</sup> <a name="refreshable_mode" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.refreshableMode"></a>

```python
refreshable_mode: str
```

- *Type:* str

---

##### `resource_pool_leader_id`<sup>Required</sup> <a name="resource_pool_leader_id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolLeaderId"></a>

```python
resource_pool_leader_id: str
```

- *Type:* str

---

##### `resource_pool_summary`<sup>Required</sup> <a name="resource_pool_summary" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolSummary"></a>

```python
resource_pool_summary: DataAwsOdbAutonomousDatabaseResourcePoolSummaryList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList">DataAwsOdbAutonomousDatabaseResourcePoolSummaryList</a>

---

##### `scheduled_operations`<sup>Required</sup> <a name="scheduled_operations" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.scheduledOperations"></a>

```python
scheduled_operations: DataAwsOdbAutonomousDatabaseScheduledOperationsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList">DataAwsOdbAutonomousDatabaseScheduledOperationsList</a>

---

##### `service_console_url`<sup>Required</sup> <a name="service_console_url" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.serviceConsoleUrl"></a>

```python
service_console_url: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `sql_web_developer_url`<sup>Required</sup> <a name="sql_web_developer_url" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```python
sql_web_developer_url: str
```

- *Type:* str

---

##### `standby_allowlisted_ips`<sup>Required</sup> <a name="standby_allowlisted_ips" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIps"></a>

```python
standby_allowlisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `standby_allowlisted_ips_source`<sup>Required</sup> <a name="standby_allowlisted_ips_source" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIpsSource"></a>

```python
standby_allowlisted_ips_source: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `time_of_auto_refresh_start`<sup>Required</sup> <a name="time_of_auto_refresh_start" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```python
time_of_auto_refresh_start: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbAutonomousDatabaseAdminPasswordSource <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource()
```


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret()
```


### DataAwsOdbAutonomousDatabaseConfig <a name="DataAwsOdbAutonomousDatabaseConfig" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.id">id</a></code> | <code>str</code> | Unique identifier of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Unique identifier of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/odb_autonomous_database#id DataAwsOdbAutonomousDatabase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/odb_autonomous_database#region DataAwsOdbAutonomousDatabase#region}

---

### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci()
```


### DataAwsOdbAutonomousDatabaseDbToolsDetails <a name="DataAwsOdbAutonomousDatabaseDbToolsDetails" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails()
```


### DataAwsOdbAutonomousDatabaseLongTermBackupSchedule <a name="DataAwsOdbAutonomousDatabaseLongTermBackupSchedule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule()
```


### DataAwsOdbAutonomousDatabaseResourcePoolSummary <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummary" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary()
```


### DataAwsOdbAutonomousDatabaseScheduledOperations <a name="DataAwsOdbAutonomousDatabaseScheduledOperations" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType">external_id_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_type`<sup>Required</sup> <a name="external_id_type" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType"></a>

```python
external_id_type: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceList <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret">customer_managed_aws_secret</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource">DataAwsOdbAutonomousDatabaseAdminPasswordSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_aws_secret`<sup>Required</sup> <a name="customer_managed_aws_secret" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret"></a>

```python
customer_managed_aws_secret: DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbAutonomousDatabaseAdminPasswordSource
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource">DataAwsOdbAutonomousDatabaseAdminPasswordSource</a>

---


### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci</a>

---


### DataAwsOdbAutonomousDatabaseDbToolsDetailsList <a name="DataAwsOdbAutonomousDatabaseDbToolsDetailsList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference <a name="DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">max_idle_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails">DataAwsOdbAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_idle_time_in_minutes`<sup>Required</sup> <a name="max_idle_time_in_minutes" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```python
max_idle_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbAutonomousDatabaseDbToolsDetails
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails">DataAwsOdbAutonomousDatabaseDbToolsDetails</a>

---


### DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList <a name="DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">is_disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">repeat_cadence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">time_of_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule">DataAwsOdbAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```python
is_disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `repeat_cadence`<sup>Required</sup> <a name="repeat_cadence" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```python
repeat_cadence: str
```

- *Type:* str

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_backup`<sup>Required</sup> <a name="time_of_backup" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```python
time_of_backup: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbAutonomousDatabaseLongTermBackupSchedule
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule">DataAwsOdbAutonomousDatabaseLongTermBackupSchedule</a>

---


### DataAwsOdbAutonomousDatabaseResourcePoolSummaryList <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummaryList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity">available_compute_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs">available_storage_capacity_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">is_disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs">pool_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity">total_compute_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary">DataAwsOdbAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_compute_capacity`<sup>Required</sup> <a name="available_compute_capacity" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity"></a>

```python
available_compute_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_storage_capacity_in_tbs`<sup>Required</sup> <a name="available_storage_capacity_in_tbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs"></a>

```python
available_storage_capacity_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```python
is_disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `pool_size`<sup>Required</sup> <a name="pool_size" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pool_storage_size_in_tbs`<sup>Required</sup> <a name="pool_storage_size_in_tbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs"></a>

```python
pool_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_compute_capacity`<sup>Required</sup> <a name="total_compute_capacity" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity"></a>

```python
total_compute_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbAutonomousDatabaseResourcePoolSummary
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary">DataAwsOdbAutonomousDatabaseResourcePoolSummary</a>

---


### DataAwsOdbAutonomousDatabaseScheduledOperationsList <a name="DataAwsOdbAutonomousDatabaseScheduledOperationsList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference <a name="DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_odb_autonomous_database

dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">scheduled_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">scheduled_stop_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations">DataAwsOdbAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `scheduled_start_time`<sup>Required</sup> <a name="scheduled_start_time" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```python
scheduled_start_time: str
```

- *Type:* str

---

##### `scheduled_stop_time`<sup>Required</sup> <a name="scheduled_stop_time" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```python
scheduled_stop_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOdbAutonomousDatabaseScheduledOperations
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations">DataAwsOdbAutonomousDatabaseScheduledOperations</a>

---



