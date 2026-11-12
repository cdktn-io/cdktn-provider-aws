# `networksecuritymanagerAdminAccount` Submodule <a name="`networksecuritymanagerAdminAccount` Submodule" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerAdminAccount <a name="NetworksecuritymanagerAdminAccount" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account aws_networksecuritymanager_admin_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  priority: typing.Union[int, float],
  admin_scope: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScope] = None,
  region: str = None,
  timeouts: NetworksecuritymanagerAdminAccountTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.adminScope">admin_scope</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>]</code> | admin_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}.

---

##### `admin_scope`<sup>Optional</sup> <a name="admin_scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.adminScope"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>]

admin_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#admin_scope NetworksecuritymanagerAdminAccount#admin_scope}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#region NetworksecuritymanagerAdminAccount#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#timeouts NetworksecuritymanagerAdminAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope">put_admin_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetAdminScope">reset_admin_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_admin_scope` <a name="put_admin_scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope"></a>

```python
def put_admin_scope(
  value: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScope]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#create NetworksecuritymanagerAdminAccount#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#delete NetworksecuritymanagerAdminAccount#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#update NetworksecuritymanagerAdminAccount#update}

---

##### `reset_admin_scope` <a name="reset_admin_scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetAdminScope"></a>

```python
def reset_admin_scope() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerAdminAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworksecuritymanagerAdminAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworksecuritymanagerAdminAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworksecuritymanagerAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScope">admin_scope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList">NetworksecuritymanagerAdminAccountAdminScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference">NetworksecuritymanagerAdminAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScopeInput">admin_scope_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `admin_scope`<sup>Required</sup> <a name="admin_scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScope"></a>

```python
admin_scope: NetworksecuritymanagerAdminAccountAdminScopeList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList">NetworksecuritymanagerAdminAccountAdminScopeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeouts"></a>

```python
timeouts: NetworksecuritymanagerAdminAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference">NetworksecuritymanagerAdminAccountTimeoutsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `admin_scope_input`<sup>Optional</sup> <a name="admin_scope_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScopeInput"></a>

```python
admin_scope_input: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScope]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworksecuritymanagerAdminAccountTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerAdminAccountAdminScope <a name="NetworksecuritymanagerAdminAccountAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope(
  firewall_type_scope: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope] = None,
  scope_filter: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilter] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.firewallTypeScope">firewall_type_scope</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>]</code> | firewall_type_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.scopeFilter">scope_filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>]</code> | scope_filter block. |

---

##### `firewall_type_scope`<sup>Optional</sup> <a name="firewall_type_scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.firewallTypeScope"></a>

```python
firewall_type_scope: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>]

firewall_type_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_type_scope NetworksecuritymanagerAdminAccount#firewall_type_scope}

---

##### `scope_filter`<sup>Optional</sup> <a name="scope_filter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.scopeFilter"></a>

```python
scope_filter: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>]

scope_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#scope_filter NetworksecuritymanagerAdminAccount#scope_filter}

---

### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope(
  all_firewall_types_enabled: bool | IResolvable = None,
  firewall_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.allFirewallTypesEnabled">all_firewall_types_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#all_firewall_types_enabled NetworksecuritymanagerAdminAccount#all_firewall_types_enabled}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.firewallTypes">firewall_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_types NetworksecuritymanagerAdminAccount#firewall_types}. |

---

##### `all_firewall_types_enabled`<sup>Optional</sup> <a name="all_firewall_types_enabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.allFirewallTypesEnabled"></a>

```python
all_firewall_types_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#all_firewall_types_enabled NetworksecuritymanagerAdminAccount#all_firewall_types_enabled}.

---

##### `firewall_types`<sup>Optional</sup> <a name="firewall_types" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.firewallTypes"></a>

```python
firewall_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_types NetworksecuritymanagerAdminAccount#firewall_types}.

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilter <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter(
  exclude_only: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly] = None,
  include_all: bool | IResolvable = None,
  include_only: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.excludeOnly">exclude_only</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>]</code> | exclude_only block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeAll">include_all</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_all NetworksecuritymanagerAdminAccount#include_all}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeOnly">include_only</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>]</code> | include_only block. |

---

##### `exclude_only`<sup>Optional</sup> <a name="exclude_only" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.excludeOnly"></a>

```python
exclude_only: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>]

exclude_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#exclude_only NetworksecuritymanagerAdminAccount#exclude_only}

---

##### `include_all`<sup>Optional</sup> <a name="include_all" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeAll"></a>

```python
include_all: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_all NetworksecuritymanagerAdminAccount#include_all}.

---

##### `include_only`<sup>Optional</sup> <a name="include_only" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeOnly"></a>

```python
include_only: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>]

include_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_only NetworksecuritymanagerAdminAccount#include_only}

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly(
  accounts: typing.List[str] = None,
  organizational_units: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.organizationalUnits">organizational_units</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}. |

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}.

---

##### `organizational_units`<sup>Optional</sup> <a name="organizational_units" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.organizationalUnits"></a>

```python
organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}.

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly(
  accounts: typing.List[str] = None,
  organizational_units: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.organizationalUnits">organizational_units</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}. |

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}.

---

##### `organizational_units`<sup>Optional</sup> <a name="organizational_units" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.organizationalUnits"></a>

```python
organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}.

---

### NetworksecuritymanagerAdminAccountConfig <a name="NetworksecuritymanagerAdminAccountConfig" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  priority: typing.Union[int, float],
  admin_scope: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScope] = None,
  region: str = None,
  timeouts: NetworksecuritymanagerAdminAccountTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.adminScope">admin_scope</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>]</code> | admin_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}.

---

##### `admin_scope`<sup>Optional</sup> <a name="admin_scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.adminScope"></a>

```python
admin_scope: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScope]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>]

admin_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#admin_scope NetworksecuritymanagerAdminAccount#admin_scope}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#region NetworksecuritymanagerAdminAccount#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.timeouts"></a>

```python
timeouts: NetworksecuritymanagerAdminAccountTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#timeouts NetworksecuritymanagerAdminAccount#timeouts}

---

### NetworksecuritymanagerAdminAccountTimeouts <a name="NetworksecuritymanagerAdminAccountTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#create NetworksecuritymanagerAdminAccount#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#delete NetworksecuritymanagerAdminAccount#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#update NetworksecuritymanagerAdminAccount#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>]

---


### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetAllFirewallTypesEnabled">reset_all_firewall_types_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetFirewallTypes">reset_firewall_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all_firewall_types_enabled` <a name="reset_all_firewall_types_enabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetAllFirewallTypesEnabled"></a>

```python
def reset_all_firewall_types_enabled() -> None
```

##### `reset_firewall_types` <a name="reset_firewall_types" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetFirewallTypes"></a>

```python
def reset_firewall_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabledInput">all_firewall_types_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypesInput">firewall_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabled">all_firewall_types_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypes">firewall_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_firewall_types_enabled_input`<sup>Optional</sup> <a name="all_firewall_types_enabled_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabledInput"></a>

```python
all_firewall_types_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `firewall_types_input`<sup>Optional</sup> <a name="firewall_types_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypesInput"></a>

```python
firewall_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_firewall_types_enabled`<sup>Required</sup> <a name="all_firewall_types_enabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabled"></a>

```python
all_firewall_types_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `firewall_types`<sup>Required</sup> <a name="firewall_types" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypes"></a>

```python
firewall_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeList <a name="NetworksecuritymanagerAdminAccountAdminScopeList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerAdminAccountAdminScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScope]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>]

---


### NetworksecuritymanagerAdminAccountAdminScopeOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope">put_firewall_type_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter">put_scope_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetFirewallTypeScope">reset_firewall_type_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetScopeFilter">reset_scope_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_firewall_type_scope` <a name="put_firewall_type_scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope"></a>

```python
def put_firewall_type_scope(
  value: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>]

---

##### `put_scope_filter` <a name="put_scope_filter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter"></a>

```python
def put_scope_filter(
  value: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>]

---

##### `reset_firewall_type_scope` <a name="reset_firewall_type_scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetFirewallTypeScope"></a>

```python
def reset_firewall_type_scope() -> None
```

##### `reset_scope_filter` <a name="reset_scope_filter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetScopeFilter"></a>

```python
def reset_scope_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScope">firewall_type_scope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilter">scope_filter</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScopeInput">firewall_type_scope_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilterInput">scope_filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firewall_type_scope`<sup>Required</sup> <a name="firewall_type_scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScope"></a>

```python
firewall_type_scope: NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList</a>

---

##### `scope_filter`<sup>Required</sup> <a name="scope_filter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilter"></a>

```python
scope_filter: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList</a>

---

##### `firewall_type_scope_input`<sup>Optional</sup> <a name="firewall_type_scope_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScopeInput"></a>

```python
firewall_type_scope_input: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>]

---

##### `scope_filter_input`<sup>Optional</sup> <a name="scope_filter_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilterInput"></a>

```python
scope_filter_input: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerAdminAccountAdminScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>]

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetAccounts">reset_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetOrganizationalUnits">reset_organizational_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accounts` <a name="reset_accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetAccounts"></a>

```python
def reset_accounts() -> None
```

##### `reset_organizational_units` <a name="reset_organizational_units" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetOrganizationalUnits"></a>

```python
def reset_organizational_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accountsInput">accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnitsInput">organizational_units_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnits">organizational_units</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accounts_input`<sup>Optional</sup> <a name="accounts_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accountsInput"></a>

```python
accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_units_input`<sup>Optional</sup> <a name="organizational_units_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnitsInput"></a>

```python
organizational_units_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_units`<sup>Required</sup> <a name="organizational_units" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnits"></a>

```python
organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>]

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetAccounts">reset_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetOrganizationalUnits">reset_organizational_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accounts` <a name="reset_accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetAccounts"></a>

```python
def reset_accounts() -> None
```

##### `reset_organizational_units` <a name="reset_organizational_units" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetOrganizationalUnits"></a>

```python
def reset_organizational_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accountsInput">accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnitsInput">organizational_units_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnits">organizational_units</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accounts_input`<sup>Optional</sup> <a name="accounts_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accountsInput"></a>

```python
accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_units_input`<sup>Optional</sup> <a name="organizational_units_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnitsInput"></a>

```python
organizational_units_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_units`<sup>Required</sup> <a name="organizational_units" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnits"></a>

```python
organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>]

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly">put_exclude_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly">put_include_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetExcludeOnly">reset_exclude_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeAll">reset_include_all</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeOnly">reset_include_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclude_only` <a name="put_exclude_only" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly"></a>

```python
def put_exclude_only(
  value: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>]

---

##### `put_include_only` <a name="put_include_only" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly"></a>

```python
def put_include_only(
  value: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>]

---

##### `reset_exclude_only` <a name="reset_exclude_only" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetExcludeOnly"></a>

```python
def reset_exclude_only() -> None
```

##### `reset_include_all` <a name="reset_include_all" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeAll"></a>

```python
def reset_include_all() -> None
```

##### `reset_include_only` <a name="reset_include_only" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeOnly"></a>

```python
def reset_include_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnly">exclude_only</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnly">include_only</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnlyInput">exclude_only_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAllInput">include_all_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnlyInput">include_only_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAll">include_all</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_only`<sup>Required</sup> <a name="exclude_only" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnly"></a>

```python
exclude_only: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList</a>

---

##### `include_only`<sup>Required</sup> <a name="include_only" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnly"></a>

```python
include_only: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList</a>

---

##### `exclude_only_input`<sup>Optional</sup> <a name="exclude_only_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnlyInput"></a>

```python
exclude_only_input: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>]

---

##### `include_all_input`<sup>Optional</sup> <a name="include_all_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAllInput"></a>

```python
include_all_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_only_input`<sup>Optional</sup> <a name="include_only_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnlyInput"></a>

```python
include_only_input: IResolvable | typing.List[NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>]

---

##### `include_all`<sup>Required</sup> <a name="include_all" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAll"></a>

```python
include_all: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>

---


### NetworksecuritymanagerAdminAccountTimeoutsOutputReference <a name="NetworksecuritymanagerAdminAccountTimeoutsOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import networksecuritymanager_admin_account

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerAdminAccountTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---



