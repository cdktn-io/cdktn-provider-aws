# `dataAwsNetworkmanagerCoreNetwork` Submodule <a name="`dataAwsNetworkmanagerCoreNetwork` Submodule" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkmanagerCoreNetwork <a name="DataAwsNetworkmanagerCoreNetwork" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/networkmanager_core_network aws_networkmanager_core_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  core_network_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.coreNetworkId">core_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/networkmanager_core_network#core_network_id DataAwsNetworkmanagerCoreNetwork#core_network_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.Initializer.parameter.coreNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/networkmanager_core_network#core_network_id DataAwsNetworkmanagerCoreNetwork#core_network_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsNetworkmanagerCoreNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsNetworkmanagerCoreNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsNetworkmanagerCoreNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsNetworkmanagerCoreNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/networkmanager_core_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsNetworkmanagerCoreNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.edges">edges</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList">DataAwsNetworkmanagerCoreNetworkEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.networkFunctionGroups">network_function_groups</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.segments">segments</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList">DataAwsNetworkmanagerCoreNetworkSegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.coreNetworkIdInput">core_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `edges`<sup>Required</sup> <a name="edges" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.edges"></a>

```python
edges: DataAwsNetworkmanagerCoreNetworkEdgesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList">DataAwsNetworkmanagerCoreNetworkEdgesList</a>

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

---

##### `network_function_groups`<sup>Required</sup> <a name="network_function_groups" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.networkFunctionGroups"></a>

```python
network_function_groups: DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList</a>

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.segments"></a>

```python
segments: DataAwsNetworkmanagerCoreNetworkSegmentsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList">DataAwsNetworkmanagerCoreNetworkSegmentsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `core_network_id_input`<sup>Optional</sup> <a name="core_network_id_input" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.coreNetworkIdInput"></a>

```python
core_network_id_input: str
```

- *Type:* str

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkmanagerCoreNetworkConfig <a name="DataAwsNetworkmanagerCoreNetworkConfig" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  core_network_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/networkmanager_core_network#core_network_id DataAwsNetworkmanagerCoreNetwork#core_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkConfig.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/networkmanager_core_network#core_network_id DataAwsNetworkmanagerCoreNetwork#core_network_id}.

---

### DataAwsNetworkmanagerCoreNetworkEdges <a name="DataAwsNetworkmanagerCoreNetworkEdges" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdges.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdges()
```


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups()
```


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments()
```


### DataAwsNetworkmanagerCoreNetworkSegments <a name="DataAwsNetworkmanagerCoreNetworkSegments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegments.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegments()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsNetworkmanagerCoreNetworkEdgesList <a name="DataAwsNetworkmanagerCoreNetworkEdgesList" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsNetworkmanagerCoreNetworkEdgesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsNetworkmanagerCoreNetworkEdgesOutputReference <a name="DataAwsNetworkmanagerCoreNetworkEdgesOutputReference" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation">edge_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks">inside_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdges">DataAwsNetworkmanagerCoreNetworkEdges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation"></a>

```python
edge_location: str
```

- *Type:* str

---

##### `inside_cidr_blocks`<sup>Required</sup> <a name="inside_cidr_blocks" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks"></a>

```python
inside_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsNetworkmanagerCoreNetworkEdges
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkEdges">DataAwsNetworkmanagerCoreNetworkEdges</a>

---


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.edgeLocations">edge_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.segments">segments</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `edge_locations`<sup>Required</sup> <a name="edge_locations" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.edgeLocations"></a>

```python
edge_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.segments"></a>

```python
segments: DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroups</a>

---


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference <a name="DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendTo">send_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendVia">send_via</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `send_to`<sup>Required</sup> <a name="send_to" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendTo"></a>

```python
send_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `send_via`<sup>Required</sup> <a name="send_via" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendVia"></a>

```python
send_via: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments">DataAwsNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments</a>

---


### DataAwsNetworkmanagerCoreNetworkSegmentsList <a name="DataAwsNetworkmanagerCoreNetworkSegmentsList" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference <a name="DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_networkmanager_core_network

dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations">edge_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments">shared_segments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegments">DataAwsNetworkmanagerCoreNetworkSegments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `edge_locations`<sup>Required</sup> <a name="edge_locations" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations"></a>

```python
edge_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `shared_segments`<sup>Required</sup> <a name="shared_segments" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments"></a>

```python
shared_segments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsNetworkmanagerCoreNetworkSegments
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNetworkmanagerCoreNetwork.DataAwsNetworkmanagerCoreNetworkSegments">DataAwsNetworkmanagerCoreNetworkSegments</a>

---



