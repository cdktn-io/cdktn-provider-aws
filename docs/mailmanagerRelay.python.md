# `mailmanagerRelay` Submodule <a name="`mailmanagerRelay` Submodule" id="@cdktn/provider-aws.mailmanagerRelay"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MailmanagerRelay <a name="MailmanagerRelay" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay aws_mailmanager_relay}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelay(
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
  server_name: str,
  server_port: typing.Union[int, float],
  authentication: IResolvable | typing.List[MailmanagerRelayAuthentication] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#name MailmanagerRelay#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#server_name MailmanagerRelay#server_name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#server_port MailmanagerRelay#server_port}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.authentication">authentication</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>]</code> | authentication block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#tags MailmanagerRelay#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#name MailmanagerRelay#name}.

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#server_name MailmanagerRelay#server_name}.

---

##### `server_port`<sup>Required</sup> <a name="server_port" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.serverPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#server_port MailmanagerRelay#server_port}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.authentication"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#authentication MailmanagerRelay#authentication}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#region MailmanagerRelay#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#tags MailmanagerRelay#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication` <a name="put_authentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.putAuthentication"></a>

```python
def put_authentication(
  value: IResolvable | typing.List[MailmanagerRelayAuthentication]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.putAuthentication.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>]

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MailmanagerRelay resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isConstruct"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelay.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformElement"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelay.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformResource"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelay.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelay.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MailmanagerRelay resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MailmanagerRelay to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MailmanagerRelay that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MailmanagerRelay to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList">MailmanagerRelayAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.lastModifiedTimestamp">last_modified_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.authenticationInput">authentication_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverPortInput">server_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.authentication"></a>

```python
authentication: MailmanagerRelayAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList">MailmanagerRelayAuthenticationList</a>

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_timestamp`<sup>Required</sup> <a name="last_modified_timestamp" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.lastModifiedTimestamp"></a>

```python
last_modified_timestamp: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.authenticationInput"></a>

```python
authentication_input: IResolvable | typing.List[MailmanagerRelayAuthentication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `server_port_input`<sup>Optional</sup> <a name="server_port_input" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverPortInput"></a>

```python
server_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `server_port`<sup>Required</sup> <a name="server_port" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverPort"></a>

```python
server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MailmanagerRelayAuthentication <a name="MailmanagerRelayAuthentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelayAuthentication(
  no_authentication: IResolvable | typing.List[MailmanagerRelayAuthenticationNoAuthentication] = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication.property.noAuthentication">no_authentication</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>]</code> | no_authentication block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#secret_arn MailmanagerRelay#secret_arn}. |

---

##### `no_authentication`<sup>Optional</sup> <a name="no_authentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication.property.noAuthentication"></a>

```python
no_authentication: IResolvable | typing.List[MailmanagerRelayAuthenticationNoAuthentication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>]

no_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#no_authentication MailmanagerRelay#no_authentication}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#secret_arn MailmanagerRelay#secret_arn}.

---

### MailmanagerRelayAuthenticationNoAuthentication <a name="MailmanagerRelayAuthenticationNoAuthentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication()
```


### MailmanagerRelayConfig <a name="MailmanagerRelayConfig" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  server_name: str,
  server_port: typing.Union[int, float],
  authentication: IResolvable | typing.List[MailmanagerRelayAuthentication] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#name MailmanagerRelay#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#server_name MailmanagerRelay#server_name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#server_port MailmanagerRelay#server_port}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.authentication">authentication</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>]</code> | authentication block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#tags MailmanagerRelay#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#name MailmanagerRelay#name}.

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#server_name MailmanagerRelay#server_name}.

---

##### `server_port`<sup>Required</sup> <a name="server_port" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.serverPort"></a>

```python
server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#server_port MailmanagerRelay#server_port}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.authentication"></a>

```python
authentication: IResolvable | typing.List[MailmanagerRelayAuthentication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#authentication MailmanagerRelay#authentication}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#region MailmanagerRelay#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#tags MailmanagerRelay#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### MailmanagerRelayAuthenticationList <a name="MailmanagerRelayAuthenticationList" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelayAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MailmanagerRelayAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MailmanagerRelayAuthentication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>]

---


### MailmanagerRelayAuthenticationNoAuthenticationList <a name="MailmanagerRelayAuthenticationNoAuthenticationList" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MailmanagerRelayAuthenticationNoAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MailmanagerRelayAuthenticationNoAuthentication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>]

---


### MailmanagerRelayAuthenticationNoAuthenticationOutputReference <a name="MailmanagerRelayAuthenticationNoAuthenticationOutputReference" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MailmanagerRelayAuthenticationNoAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>

---


### MailmanagerRelayAuthenticationOutputReference <a name="MailmanagerRelayAuthenticationOutputReference" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_relay

mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.putNoAuthentication">put_no_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resetNoAuthentication">reset_no_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_no_authentication` <a name="put_no_authentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.putNoAuthentication"></a>

```python
def put_no_authentication(
  value: IResolvable | typing.List[MailmanagerRelayAuthenticationNoAuthentication]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.putNoAuthentication.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>]

---

##### `reset_no_authentication` <a name="reset_no_authentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resetNoAuthentication"></a>

```python
def reset_no_authentication() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.noAuthentication">no_authentication</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList">MailmanagerRelayAuthenticationNoAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.noAuthenticationInput">no_authentication_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `no_authentication`<sup>Required</sup> <a name="no_authentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.noAuthentication"></a>

```python
no_authentication: MailmanagerRelayAuthenticationNoAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList">MailmanagerRelayAuthenticationNoAuthenticationList</a>

---

##### `no_authentication_input`<sup>Optional</sup> <a name="no_authentication_input" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.noAuthenticationInput"></a>

```python
no_authentication_input: IResolvable | typing.List[MailmanagerRelayAuthenticationNoAuthentication]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>]

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MailmanagerRelayAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>

---



