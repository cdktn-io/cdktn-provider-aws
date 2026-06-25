# `dataAwsGlueCatalog` Submodule <a name="`dataAwsGlueCatalog` Submodule" id="@cdktn/provider-aws.dataAwsGlueCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlueCatalog <a name="DataAwsGlueCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/glue_catalog aws_glue_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalog(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/glue_catalog#name DataAwsGlueCatalog#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/glue_catalog#name DataAwsGlueCatalog#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/glue_catalog#region DataAwsGlueCatalog#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsGlueCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalog.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsGlueCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsGlueCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsGlueCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/glue_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsGlueCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.allowFullTableExternalDataAccess">allow_full_table_external_data_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogProperties">catalog_properties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList">DataAwsGlueCatalogCatalogPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createDatabaseDefaultPermissions">create_database_default_permissions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTableDefaultPermissions">create_table_default_permissions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList">DataAwsGlueCatalogCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.federatedCatalog">federated_catalog</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList">DataAwsGlueCatalogFederatedCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.parameters">parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.targetRedshiftCatalog">target_redshift_catalog</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList">DataAwsGlueCatalogTargetRedshiftCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allow_full_table_external_data_access`<sup>Required</sup> <a name="allow_full_table_external_data_access" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.allowFullTableExternalDataAccess"></a>

```python
allow_full_table_external_data_access: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `catalog_properties`<sup>Required</sup> <a name="catalog_properties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogProperties"></a>

```python
catalog_properties: DataAwsGlueCatalogCatalogPropertiesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList">DataAwsGlueCatalogCatalogPropertiesList</a>

---

##### `create_database_default_permissions`<sup>Required</sup> <a name="create_database_default_permissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createDatabaseDefaultPermissions"></a>

```python
create_database_default_permissions: DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList</a>

---

##### `create_table_default_permissions`<sup>Required</sup> <a name="create_table_default_permissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTableDefaultPermissions"></a>

```python
create_table_default_permissions: DataAwsGlueCatalogCreateTableDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList">DataAwsGlueCatalogCreateTableDefaultPermissionsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `federated_catalog`<sup>Required</sup> <a name="federated_catalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.federatedCatalog"></a>

```python
federated_catalog: DataAwsGlueCatalogFederatedCatalogList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList">DataAwsGlueCatalogFederatedCatalogList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.parameters"></a>

```python
parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `target_redshift_catalog`<sup>Required</sup> <a name="target_redshift_catalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.targetRedshiftCatalog"></a>

```python
target_redshift_catalog: DataAwsGlueCatalogTargetRedshiftCatalogList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList">DataAwsGlueCatalogTargetRedshiftCatalogList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlueCatalogCatalogProperties <a name="DataAwsGlueCatalogCatalogProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties()
```


### DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties <a name="DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties()
```


### DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties <a name="DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties()
```


### DataAwsGlueCatalogConfig <a name="DataAwsGlueCatalogConfig" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/glue_catalog#name DataAwsGlueCatalog#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/glue_catalog#name DataAwsGlueCatalog#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/glue_catalog#region DataAwsGlueCatalog#region}

---

### DataAwsGlueCatalogCreateDatabaseDefaultPermissions <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions()
```


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal()
```


### DataAwsGlueCatalogCreateTableDefaultPermissions <a name="DataAwsGlueCatalogCreateTableDefaultPermissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions()
```


### DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal()
```


### DataAwsGlueCatalogFederatedCatalog <a name="DataAwsGlueCatalogFederatedCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog()
```


### DataAwsGlueCatalogTargetRedshiftCatalog <a name="DataAwsGlueCatalogTargetRedshiftCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList <a name="DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference <a name="DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType">catalog_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess">data_lake_access</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole">data_transfer_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName">managed_workgroup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus">managed_workgroup_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName">redshift_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_type`<sup>Required</sup> <a name="catalog_type" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType"></a>

```python
catalog_type: str
```

- *Type:* str

---

##### `data_lake_access`<sup>Required</sup> <a name="data_lake_access" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess"></a>

```python
data_lake_access: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `data_transfer_role`<sup>Required</sup> <a name="data_transfer_role" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole"></a>

```python
data_transfer_role: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `managed_workgroup_name`<sup>Required</sup> <a name="managed_workgroup_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName"></a>

```python
managed_workgroup_name: str
```

- *Type:* str

---

##### `managed_workgroup_status`<sup>Required</sup> <a name="managed_workgroup_status" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus"></a>

```python
managed_workgroup_status: str
```

- *Type:* str

---

##### `redshift_database_name`<sup>Required</sup> <a name="redshift_database_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName"></a>

```python
redshift_database_name: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

---


### DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList <a name="DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference <a name="DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compaction">compaction</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletion">orphan_file_deletion</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retention">retention</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compaction`<sup>Required</sup> <a name="compaction" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compaction"></a>

```python
compaction: StringMap
```

- *Type:* cdktn.StringMap

---

##### `orphan_file_deletion`<sup>Required</sup> <a name="orphan_file_deletion" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletion"></a>

```python
orphan_file_deletion: StringMap
```

- *Type:* cdktn.StringMap

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retention"></a>

```python
retention: StringMap
```

- *Type:* cdktn.StringMap

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>

---


### DataAwsGlueCatalogCatalogPropertiesList <a name="DataAwsGlueCatalogCatalogPropertiesList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueCatalogCatalogPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlueCatalogCatalogPropertiesOutputReference <a name="DataAwsGlueCatalogCatalogPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.customProperties">custom_properties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties">data_lake_access_properties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationProperties">iceberg_optimization_properties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties">DataAwsGlueCatalogCatalogProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_properties`<sup>Required</sup> <a name="custom_properties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.customProperties"></a>

```python
custom_properties: StringMap
```

- *Type:* cdktn.StringMap

---

##### `data_lake_access_properties`<sup>Required</sup> <a name="data_lake_access_properties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties"></a>

```python
data_lake_access_properties: DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList</a>

---

##### `iceberg_optimization_properties`<sup>Required</sup> <a name="iceberg_optimization_properties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationProperties"></a>

```python
iceberg_optimization_properties: DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlueCatalogCatalogProperties
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties">DataAwsGlueCatalogCatalogProperties</a>

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions">DataAwsGlueCatalogCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```python
principal: DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlueCatalogCreateDatabaseDefaultPermissions
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions">DataAwsGlueCatalogCreateDatabaseDefaultPermissions</a>

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsList <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions">DataAwsGlueCatalogCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```python
principal: DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlueCatalogCreateTableDefaultPermissions
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions">DataAwsGlueCatalogCreateTableDefaultPermissions</a>

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal</a>

---


### DataAwsGlueCatalogFederatedCatalogList <a name="DataAwsGlueCatalogFederatedCatalogList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueCatalogFederatedCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlueCatalogFederatedCatalogOutputReference <a name="DataAwsGlueCatalogFederatedCatalogOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog">DataAwsGlueCatalogFederatedCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlueCatalogFederatedCatalog
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog">DataAwsGlueCatalogFederatedCatalog</a>

---


### DataAwsGlueCatalogTargetRedshiftCatalogList <a name="DataAwsGlueCatalogTargetRedshiftCatalogList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueCatalogTargetRedshiftCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlueCatalogTargetRedshiftCatalogOutputReference <a name="DataAwsGlueCatalogTargetRedshiftCatalogOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_glue_catalog

dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn">catalog_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog">DataAwsGlueCatalogTargetRedshiftCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_arn`<sup>Required</sup> <a name="catalog_arn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn"></a>

```python
catalog_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlueCatalogTargetRedshiftCatalog
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog">DataAwsGlueCatalogTargetRedshiftCatalog</a>

---



