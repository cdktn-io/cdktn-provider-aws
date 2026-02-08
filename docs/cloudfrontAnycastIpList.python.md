# `cloudfrontAnycastIpList` Submodule <a name="`cloudfrontAnycastIpList` Submodule" id="@cdktn/provider-aws.cloudfrontAnycastIpList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontAnycastIpList <a name="CloudfrontAnycastIpList" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list aws_cloudfront_anycast_ip_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_anycast_ip_list

cloudfrontAnycastIpList.CloudfrontAnycastIpList(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ip_count: typing.Union[int, float],
  name: str,
  tags: typing.Mapping[str] = None,
  timeouts: CloudfrontAnycastIpListTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.ipCount">ip_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#ip_count CloudfrontAnycastIpList#ip_count}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#name CloudfrontAnycastIpList#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#tags CloudfrontAnycastIpList#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `ip_count`<sup>Required</sup> <a name="ip_count" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.ipCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#ip_count CloudfrontAnycastIpList#ip_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#name CloudfrontAnycastIpList#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#tags CloudfrontAnycastIpList#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#timeouts CloudfrontAnycastIpList#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#create CloudfrontAnycastIpList#create}

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudfrontAnycastIpList resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isConstruct"></a>

```python
from cdktn_provider_aws import cloudfront_anycast_ip_list

cloudfrontAnycastIpList.CloudfrontAnycastIpList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformElement"></a>

```python
from cdktn_provider_aws import cloudfront_anycast_ip_list

cloudfrontAnycastIpList.CloudfrontAnycastIpList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformResource"></a>

```python
from cdktn_provider_aws import cloudfront_anycast_ip_list

cloudfrontAnycastIpList.CloudfrontAnycastIpList.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport"></a>

```python
from cdktn_provider_aws import cloudfront_anycast_ip_list

cloudfrontAnycastIpList.CloudfrontAnycastIpList.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudfrontAnycastIpList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudfrontAnycastIpList to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudfrontAnycastIpList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontAnycastIpList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.anycastIps">anycast_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference">CloudfrontAnycastIpListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.ipCountInput">ip_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.ipCount">ip_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `anycast_ips`<sup>Required</sup> <a name="anycast_ips" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.anycastIps"></a>

```python
anycast_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.timeouts"></a>

```python
timeouts: CloudfrontAnycastIpListTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference">CloudfrontAnycastIpListTimeoutsOutputReference</a>

---

##### `ip_count_input`<sup>Optional</sup> <a name="ip_count_input" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.ipCountInput"></a>

```python
ip_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CloudfrontAnycastIpListTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a>

---

##### `ip_count`<sup>Required</sup> <a name="ip_count" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.ipCount"></a>

```python
ip_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontAnycastIpListConfig <a name="CloudfrontAnycastIpListConfig" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_anycast_ip_list

cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ip_count: typing.Union[int, float],
  name: str,
  tags: typing.Mapping[str] = None,
  timeouts: CloudfrontAnycastIpListTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.ipCount">ip_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#ip_count CloudfrontAnycastIpList#ip_count}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#name CloudfrontAnycastIpList#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#tags CloudfrontAnycastIpList#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `ip_count`<sup>Required</sup> <a name="ip_count" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.ipCount"></a>

```python
ip_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#ip_count CloudfrontAnycastIpList#ip_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#name CloudfrontAnycastIpList#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#tags CloudfrontAnycastIpList#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.timeouts"></a>

```python
timeouts: CloudfrontAnycastIpListTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#timeouts CloudfrontAnycastIpList#timeouts}

---

### CloudfrontAnycastIpListTimeouts <a name="CloudfrontAnycastIpListTimeouts" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_anycast_ip_list

cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#create CloudfrontAnycastIpList#create}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontAnycastIpListTimeoutsOutputReference <a name="CloudfrontAnycastIpListTimeoutsOutputReference" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_anycast_ip_list

cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontAnycastIpListTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a>

---



