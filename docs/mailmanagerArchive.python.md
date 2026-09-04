# `mailmanagerArchive` Submodule <a name="`mailmanagerArchive` Submodule" id="@cdktn/provider-aws.mailmanagerArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MailmanagerArchive <a name="MailmanagerArchive" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive aws_mailmanager_archive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchive(
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
  kms_key_arn: str = None,
  region: str = None,
  retention: IResolvable | typing.List[MailmanagerArchiveRetention] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#name MailmanagerArchive#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#kms_key_arn MailmanagerArchive#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.retention">retention</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>]</code> | retention block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#tags MailmanagerArchive#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#name MailmanagerArchive#name}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#kms_key_arn MailmanagerArchive#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#region MailmanagerArchive#region}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.retention"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>]

retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#retention MailmanagerArchive#retention}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#tags MailmanagerArchive#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.putRetention">put_retention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetRetention">reset_retention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_retention` <a name="put_retention" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.putRetention"></a>

```python
def put_retention(
  value: IResolvable | typing.List[MailmanagerArchiveRetention]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.putRetention.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>]

---

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_retention` <a name="reset_retention" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetRetention"></a>

```python
def reset_retention() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MailmanagerArchive resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isConstruct"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchive.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformElement"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformResource"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchive.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchive.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MailmanagerArchive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MailmanagerArchive to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MailmanagerArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MailmanagerArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.archiveState">archive_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retention">retention</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList">MailmanagerArchiveRetentionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retentionActual">retention_actual</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList">MailmanagerArchiveRetentionActualList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retentionInput">retention_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `archive_state`<sup>Required</sup> <a name="archive_state" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.archiveState"></a>

```python
archive_state: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: str
```

- *Type:* str

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retention"></a>

```python
retention: MailmanagerArchiveRetentionList
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList">MailmanagerArchiveRetentionList</a>

---

##### `retention_actual`<sup>Required</sup> <a name="retention_actual" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retentionActual"></a>

```python
retention_actual: MailmanagerArchiveRetentionActualList
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList">MailmanagerArchiveRetentionActualList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `retention_input`<sup>Optional</sup> <a name="retention_input" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retentionInput"></a>

```python
retention_input: IResolvable | typing.List[MailmanagerArchiveRetention]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MailmanagerArchiveConfig <a name="MailmanagerArchiveConfig" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchiveConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  kms_key_arn: str = None,
  region: str = None,
  retention: IResolvable | typing.List[MailmanagerArchiveRetention] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#name MailmanagerArchive#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#kms_key_arn MailmanagerArchive#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.retention">retention</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>]</code> | retention block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#tags MailmanagerArchive#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#name MailmanagerArchive#name}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#kms_key_arn MailmanagerArchive#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#region MailmanagerArchive#region}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.retention"></a>

```python
retention: IResolvable | typing.List[MailmanagerArchiveRetention]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>]

retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#retention MailmanagerArchive#retention}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#tags MailmanagerArchive#tags}.

---

### MailmanagerArchiveRetention <a name="MailmanagerArchiveRetention" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchiveRetention(
  retention_period: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention.property.retentionPeriod">retention_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#retention_period MailmanagerArchive#retention_period}. |

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#retention_period MailmanagerArchive#retention_period}.

---

### MailmanagerArchiveRetentionActual <a name="MailmanagerArchiveRetentionActual" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActual"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActual.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchiveRetentionActual()
```


## Classes <a name="Classes" id="Classes"></a>

### MailmanagerArchiveRetentionActualList <a name="MailmanagerArchiveRetentionActualList" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchiveRetentionActualList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MailmanagerArchiveRetentionActualOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MailmanagerArchiveRetentionActualOutputReference <a name="MailmanagerArchiveRetentionActualOutputReference" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.retentionPeriod">retention_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActual">MailmanagerArchiveRetentionActual</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.internalValue"></a>

```python
internal_value: MailmanagerArchiveRetentionActual
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActual">MailmanagerArchiveRetentionActual</a>

---


### MailmanagerArchiveRetentionList <a name="MailmanagerArchiveRetentionList" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchiveRetentionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MailmanagerArchiveRetentionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MailmanagerArchiveRetention]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>]

---


### MailmanagerArchiveRetentionOutputReference <a name="MailmanagerArchiveRetentionOutputReference" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import mailmanager_archive

mailmanagerArchive.MailmanagerArchiveRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.retentionPeriodInput">retention_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.retentionPeriod">retention_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.retentionPeriodInput"></a>

```python
retention_period_input: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MailmanagerArchiveRetention
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>

---



