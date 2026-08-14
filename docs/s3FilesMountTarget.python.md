# `s3FilesMountTarget` Submodule <a name="`s3FilesMountTarget` Submodule" id="@cdktn/provider-aws.s3FilesMountTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesMountTarget <a name="S3FilesMountTarget" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target aws_s3files_mount_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_mount_target

s3FilesMountTarget.S3FilesMountTarget(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_system_id: str,
  subnet_id: str,
  ip_address_type: str = None,
  ipv4_address: str = None,
  ipv6_address: str = None,
  region: str = None,
  security_groups: typing.List[str] = None,
  timeouts: S3FilesMountTargetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Subnet ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | IP address type. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.ipv4Address">ipv4_address</a></code> | <code>str</code> | IPv4 address. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.ipv6Address">ipv6_address</a></code> | <code>str</code> | IPv6 address. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Security group IDs. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts">S3FilesMountTargetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.fileSystemId"></a>

- *Type:* str

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#file_system_id S3FilesMountTarget#file_system_id}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.subnetId"></a>

- *Type:* str

Subnet ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#subnet_id S3FilesMountTarget#subnet_id}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.ipAddressType"></a>

- *Type:* str

IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#ip_address_type S3FilesMountTarget#ip_address_type}

---

##### `ipv4_address`<sup>Optional</sup> <a name="ipv4_address" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.ipv4Address"></a>

- *Type:* str

IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#ipv4_address S3FilesMountTarget#ipv4_address}

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.ipv6Address"></a>

- *Type:* str

IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#ipv6_address S3FilesMountTarget#ipv6_address}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#region S3FilesMountTarget#region}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#security_groups S3FilesMountTarget#security_groups}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts">S3FilesMountTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#timeouts S3FilesMountTarget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetIpv4Address">reset_ipv4_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#create S3FilesMountTarget#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#delete S3FilesMountTarget#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#update S3FilesMountTarget#update}

---

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_ipv4_address` <a name="reset_ipv4_address" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetIpv4Address"></a>

```python
def reset_ipv4_address() -> None
```

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3FilesMountTarget resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.isConstruct"></a>

```python
from cdktn_provider_aws import s3_files_mount_target

s3FilesMountTarget.S3FilesMountTarget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.isTerraformElement"></a>

```python
from cdktn_provider_aws import s3_files_mount_target

s3FilesMountTarget.S3FilesMountTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.isTerraformResource"></a>

```python
from cdktn_provider_aws import s3_files_mount_target

s3FilesMountTarget.S3FilesMountTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.generateConfigForImport"></a>

```python
from cdktn_provider_aws import s3_files_mount_target

s3FilesMountTarget.S3FilesMountTarget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3FilesMountTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3FilesMountTarget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3FilesMountTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesMountTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference">S3FilesMountTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipv4AddressInput">ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts">S3FilesMountTargetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.timeouts"></a>

```python
timeouts: S3FilesMountTargetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference">S3FilesMountTargetTimeoutsOutputReference</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `ipv4_address_input`<sup>Optional</sup> <a name="ipv4_address_input" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipv4AddressInput"></a>

```python
ipv4_address_input: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | S3FilesMountTargetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts">S3FilesMountTargetTimeouts</a>

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesMountTargetConfig <a name="S3FilesMountTargetConfig" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_mount_target

s3FilesMountTarget.S3FilesMountTargetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  file_system_id: str,
  subnet_id: str,
  ip_address_type: str = None,
  ipv4_address: str = None,
  ipv6_address: str = None,
  region: str = None,
  security_groups: typing.List[str] = None,
  timeouts: S3FilesMountTargetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Subnet ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | IP address type. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | IPv4 address. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | IPv6 address. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Security group IDs. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts">S3FilesMountTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#file_system_id S3FilesMountTarget#file_system_id}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Subnet ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#subnet_id S3FilesMountTarget#subnet_id}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#ip_address_type S3FilesMountTarget#ip_address_type}

---

##### `ipv4_address`<sup>Optional</sup> <a name="ipv4_address" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#ipv4_address S3FilesMountTarget#ipv4_address}

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#ipv6_address S3FilesMountTarget#ipv6_address}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#region S3FilesMountTarget#region}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#security_groups S3FilesMountTarget#security_groups}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetConfig.property.timeouts"></a>

```python
timeouts: S3FilesMountTargetTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts">S3FilesMountTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#timeouts S3FilesMountTarget#timeouts}

---

### S3FilesMountTargetTimeouts <a name="S3FilesMountTargetTimeouts" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_mount_target

s3FilesMountTarget.S3FilesMountTargetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#create S3FilesMountTarget#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#delete S3FilesMountTarget#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3files_mount_target#update S3FilesMountTarget#update}

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesMountTargetTimeoutsOutputReference <a name="S3FilesMountTargetTimeoutsOutputReference" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import s3_files_mount_target

s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts">S3FilesMountTargetTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3FilesMountTargetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesMountTarget.S3FilesMountTargetTimeouts">S3FilesMountTargetTimeouts</a>

---



