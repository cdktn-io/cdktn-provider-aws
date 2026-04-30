# `dataAwsSecurityhubSecurityControls` Submodule <a name="`dataAwsSecurityhubSecurityControls` Submodule" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecurityhubSecurityControls <a name="DataAwsSecurityhubSecurityControls" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/securityhub_security_controls aws_securityhub_security_controls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_security_controls

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  region: str = None,
  standards_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.standardsArn">standards_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/securityhub_security_controls#standards_arn DataAwsSecurityhubSecurityControls#standards_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/securityhub_security_controls#region DataAwsSecurityhubSecurityControls#region}

---

##### `standards_arn`<sup>Optional</sup> <a name="standards_arn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.standardsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/securityhub_security_controls#standards_arn DataAwsSecurityhubSecurityControls#standards_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetStandardsArn">reset_standards_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_standards_arn` <a name="reset_standards_arn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetStandardsArn"></a>

```python
def reset_standards_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsSecurityhubSecurityControls resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_security_controls

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_security_controls

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_security_controls

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_security_controls

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsSecurityhubSecurityControls resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSecurityhubSecurityControls to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSecurityhubSecurityControls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/securityhub_security_controls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSecurityhubSecurityControls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.securityControlDefinitions">security_control_definitions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList">DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArnInput">standards_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArn">standards_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `security_control_definitions`<sup>Required</sup> <a name="security_control_definitions" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.securityControlDefinitions"></a>

```python
security_control_definitions: DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList">DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `standards_arn_input`<sup>Optional</sup> <a name="standards_arn_input" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArnInput"></a>

```python
standards_arn_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `standards_arn`<sup>Required</sup> <a name="standards_arn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArn"></a>

```python
standards_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecurityhubSecurityControlsConfig <a name="DataAwsSecurityhubSecurityControlsConfig" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_security_controls

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  region: str = None,
  standards_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.standardsArn">standards_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/securityhub_security_controls#standards_arn DataAwsSecurityhubSecurityControls#standards_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/securityhub_security_controls#region DataAwsSecurityhubSecurityControls#region}

---

##### `standards_arn`<sup>Optional</sup> <a name="standards_arn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.standardsArn"></a>

```python
standards_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/securityhub_security_controls#standards_arn DataAwsSecurityhubSecurityControls#standards_arn}.

---

### DataAwsSecurityhubSecurityControlsSecurityControlDefinitions <a name="DataAwsSecurityhubSecurityControlsSecurityControlDefinitions" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_security_controls

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList <a name="DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_security_controls

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference <a name="DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_securityhub_security_controls

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.currentRegionAvailability">current_region_availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.customizableProperties">customizable_properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.remediationUrl">remediation_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.securityControlId">security_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.severityRating">severity_rating</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions">DataAwsSecurityhubSecurityControlsSecurityControlDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_region_availability`<sup>Required</sup> <a name="current_region_availability" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.currentRegionAvailability"></a>

```python
current_region_availability: str
```

- *Type:* str

---

##### `customizable_properties`<sup>Required</sup> <a name="customizable_properties" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.customizableProperties"></a>

```python
customizable_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `remediation_url`<sup>Required</sup> <a name="remediation_url" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.remediationUrl"></a>

```python
remediation_url: str
```

- *Type:* str

---

##### `security_control_id`<sup>Required</sup> <a name="security_control_id" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.securityControlId"></a>

```python
security_control_id: str
```

- *Type:* str

---

##### `severity_rating`<sup>Required</sup> <a name="severity_rating" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.severityRating"></a>

```python
severity_rating: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSecurityhubSecurityControlsSecurityControlDefinitions
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions">DataAwsSecurityhubSecurityControlsSecurityControlDefinitions</a>

---



