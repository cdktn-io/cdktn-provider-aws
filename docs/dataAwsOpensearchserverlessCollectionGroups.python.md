# `dataAwsOpensearchserverlessCollectionGroups` Submodule <a name="`dataAwsOpensearchserverlessCollectionGroups` Submodule" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOpensearchserverlessCollectionGroups <a name="DataAwsOpensearchserverlessCollectionGroups" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/opensearchserverless_collection_groups aws_opensearchserverless_collection_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups(
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
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/opensearchserverless_collection_groups#region DataAwsOpensearchserverlessCollectionGroups#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroups resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsOpensearchserverlessCollectionGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsOpensearchserverlessCollectionGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/opensearchserverless_collection_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOpensearchserverlessCollectionGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.collectionGroupSummaries">collection_group_summaries</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `collection_group_summaries`<sup>Required</sup> <a name="collection_group_summaries" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.collectionGroupSummaries"></a>

```python
collection_group_summaries: DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries()
```


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits()
```


### DataAwsOpensearchserverlessCollectionGroupsConfig <a name="DataAwsOpensearchserverlessCollectionGroupsConfig" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig(
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
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/opensearchserverless_collection_groups#region DataAwsOpensearchserverlessCollectionGroups#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu">max_indexing_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxSearchCapacityInOcu">max_search_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minIndexingCapacityInOcu">min_indexing_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minSearchCapacityInOcu">min_search_capacity_in_ocu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_indexing_capacity_in_ocu`<sup>Required</sup> <a name="max_indexing_capacity_in_ocu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu"></a>

```python
max_indexing_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_search_capacity_in_ocu`<sup>Required</sup> <a name="max_search_capacity_in_ocu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxSearchCapacityInOcu"></a>

```python
max_search_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_indexing_capacity_in_ocu`<sup>Required</sup> <a name="min_indexing_capacity_in_ocu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minIndexingCapacityInOcu"></a>

```python
min_indexing_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_search_capacity_in_ocu`<sup>Required</sup> <a name="min_search_capacity_in_ocu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minSearchCapacityInOcu"></a>

```python
min_search_capacity_in_ocu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits</a>

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_opensearchserverless_collection_groups

dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.capacityLimits">capacity_limits</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.numberOfCollections">number_of_collections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.standbyReplicas">standby_replicas</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_limits`<sup>Required</sup> <a name="capacity_limits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.capacityLimits"></a>

```python
capacity_limits: DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList</a>

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number_of_collections`<sup>Required</sup> <a name="number_of_collections" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.numberOfCollections"></a>

```python
number_of_collections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `standby_replicas`<sup>Required</sup> <a name="standby_replicas" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.standbyReplicas"></a>

```python
standby_replicas: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries</a>

---



