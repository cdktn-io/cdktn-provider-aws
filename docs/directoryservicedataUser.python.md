# `directoryservicedataUser` Submodule <a name="`directoryservicedataUser` Submodule" id="@cdktn/provider-aws.directoryservicedataUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryservicedataUser <a name="DirectoryservicedataUser" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user aws_directoryservicedata_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer"></a>

```python
from cdktn_provider_aws import directoryservicedata_user

directoryservicedataUser.DirectoryservicedataUser(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  directory_id: str,
  sam_account_name: str,
  email_address: str = None,
  given_name: str = None,
  region: str = None,
  surname: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#directory_id DirectoryservicedataUser#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.samAccountName">sam_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#sam_account_name DirectoryservicedataUser#sam_account_name}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#email_address DirectoryservicedataUser#email_address}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.givenName">given_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#given_name DirectoryservicedataUser#given_name}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.surname">surname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#surname DirectoryservicedataUser#surname}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#directory_id DirectoryservicedataUser#directory_id}.

---

##### `sam_account_name`<sup>Required</sup> <a name="sam_account_name" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.samAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#sam_account_name DirectoryservicedataUser#sam_account_name}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.emailAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#email_address DirectoryservicedataUser#email_address}.

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.givenName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#given_name DirectoryservicedataUser#given_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#region DirectoryservicedataUser#region}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.Initializer.parameter.surname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#surname DirectoryservicedataUser#surname}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetGivenName">reset_given_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetSurname">reset_surname</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_email_address` <a name="reset_email_address" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetGivenName"></a>

```python
def reset_given_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_surname` <a name="reset_surname" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.resetSurname"></a>

```python
def reset_surname() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DirectoryservicedataUser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isConstruct"></a>

```python
from cdktn_provider_aws import directoryservicedata_user

directoryservicedataUser.DirectoryservicedataUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformElement"></a>

```python
from cdktn_provider_aws import directoryservicedata_user

directoryservicedataUser.DirectoryservicedataUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformResource"></a>

```python
from cdktn_provider_aws import directoryservicedata_user

directoryservicedataUser.DirectoryservicedataUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport"></a>

```python
from cdktn_provider_aws import directoryservicedata_user

directoryservicedataUser.DirectoryservicedataUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DirectoryservicedataUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DirectoryservicedataUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DirectoryservicedataUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryservicedataUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.distinguishedName">distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.realm">realm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.sid">sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.userPrincipalName">user_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountNameInput">sam_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surnameInput">surname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountName">sam_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surname">surname</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `distinguished_name`<sup>Required</sup> <a name="distinguished_name" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.distinguishedName"></a>

```python
distinguished_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.realm"></a>

```python
realm: str
```

- *Type:* str

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.sid"></a>

```python
sid: str
```

- *Type:* str

---

##### `user_principal_name`<sup>Required</sup> <a name="user_principal_name" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.userPrincipalName"></a>

```python
user_principal_name: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sam_account_name_input`<sup>Optional</sup> <a name="sam_account_name_input" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountNameInput"></a>

```python
sam_account_name_input: str
```

- *Type:* str

---

##### `surname_input`<sup>Optional</sup> <a name="surname_input" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surnameInput"></a>

```python
surname_input: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `sam_account_name`<sup>Required</sup> <a name="sam_account_name" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.samAccountName"></a>

```python
sam_account_name: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryservicedataUserConfig <a name="DirectoryservicedataUserConfig" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.Initializer"></a>

```python
from cdktn_provider_aws import directoryservicedata_user

directoryservicedataUser.DirectoryservicedataUserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  directory_id: str,
  sam_account_name: str,
  email_address: str = None,
  given_name: str = None,
  region: str = None,
  surname: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#directory_id DirectoryservicedataUser#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.samAccountName">sam_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#sam_account_name DirectoryservicedataUser#sam_account_name}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#email_address DirectoryservicedataUser#email_address}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.givenName">given_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#given_name DirectoryservicedataUser#given_name}. |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.surname">surname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#surname DirectoryservicedataUser#surname}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#directory_id DirectoryservicedataUser#directory_id}.

---

##### `sam_account_name`<sup>Required</sup> <a name="sam_account_name" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.samAccountName"></a>

```python
sam_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#sam_account_name DirectoryservicedataUser#sam_account_name}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#email_address DirectoryservicedataUser#email_address}.

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#given_name DirectoryservicedataUser#given_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#region DirectoryservicedataUser#region}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktn/provider-aws.directoryservicedataUser.DirectoryservicedataUserConfig.property.surname"></a>

```python
surname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/directoryservicedata_user#surname DirectoryservicedataUser#surname}.

---



