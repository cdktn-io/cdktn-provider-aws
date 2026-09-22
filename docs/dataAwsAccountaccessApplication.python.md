# `dataAwsAccountaccessApplication` Submodule <a name="`dataAwsAccountaccessApplication` Submodule" id="@cdktn/provider-aws.dataAwsAccountaccessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAccountaccessApplication <a name="DataAwsAccountaccessApplication" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application aws_accountaccess_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arn: str = None,
  identity_center_instance_arn: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#arn DataAwsAccountaccessApplication#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#identity_center_instance_arn DataAwsAccountaccessApplication#identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#arn DataAwsAccountaccessApplication#arn}.

---

##### `identity_center_instance_arn`<sup>Optional</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.identityCenterInstanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#identity_center_instance_arn DataAwsAccountaccessApplication#identity_center_instance_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#region DataAwsAccountaccessApplication#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetIdentityCenterInstanceArn">reset_identity_center_instance_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_identity_center_instance_arn` <a name="reset_identity_center_instance_arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetIdentityCenterInstanceArn"></a>

```python
def reset_identity_center_instance_arn() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsAccountaccessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isConstruct"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformElement"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformDataSource"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsAccountaccessApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsAccountaccessApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsAccountaccessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAccountaccessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identitySource">identity_source</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList">DataAwsAccountaccessApplicationIdentitySourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArnInput">identity_center_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `identity_source`<sup>Required</sup> <a name="identity_source" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identitySource"></a>

```python
identity_source: DataAwsAccountaccessApplicationIdentitySourceList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList">DataAwsAccountaccessApplicationIdentitySourceList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `identity_center_instance_arn_input`<sup>Optional</sup> <a name="identity_center_instance_arn_input" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArnInput"></a>

```python
identity_center_instance_arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `identity_center_instance_arn`<sup>Required</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAccountaccessApplicationConfig <a name="DataAwsAccountaccessApplicationConfig" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  arn: str = None,
  identity_center_instance_arn: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#arn DataAwsAccountaccessApplication#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#identity_center_instance_arn DataAwsAccountaccessApplication#identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#arn DataAwsAccountaccessApplication#arn}.

---

##### `identity_center_instance_arn`<sup>Optional</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#identity_center_instance_arn DataAwsAccountaccessApplication#identity_center_instance_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#region DataAwsAccountaccessApplication#region}

---

### DataAwsAccountaccessApplicationIdentitySource <a name="DataAwsAccountaccessApplicationIdentitySource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource()
```


### DataAwsAccountaccessApplicationIdentitySourceIdentityCenter <a name="DataAwsAccountaccessApplicationIdentitySourceIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList <a name="DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference <a name="DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter">DataAwsAccountaccessApplicationIdentitySourceIdentityCenter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAccountaccessApplicationIdentitySourceIdentityCenter
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter">DataAwsAccountaccessApplicationIdentitySourceIdentityCenter</a>

---


### DataAwsAccountaccessApplicationIdentitySourceList <a name="DataAwsAccountaccessApplicationIdentitySourceList" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAccountaccessApplicationIdentitySourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAccountaccessApplicationIdentitySourceOutputReference <a name="DataAwsAccountaccessApplicationIdentitySourceOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import data_aws_accountaccess_application

dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.identityCenter">identity_center</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList">DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource">DataAwsAccountaccessApplicationIdentitySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_center`<sup>Required</sup> <a name="identity_center" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.identityCenter"></a>

```python
identity_center: DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList">DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAccountaccessApplicationIdentitySource
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource">DataAwsAccountaccessApplicationIdentitySource</a>

---



