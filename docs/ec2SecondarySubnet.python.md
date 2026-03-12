# `ec2SecondarySubnet` Submodule <a name="`ec2SecondarySubnet` Submodule" id="@cdktn/provider-aws.ec2SecondarySubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecondarySubnet <a name="Ec2SecondarySubnet" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet aws_ec2_secondary_subnet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer"></a>

```python
from cdktn_provider_aws import ec2_secondary_subnet

ec2SecondarySubnet.Ec2SecondarySubnet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ipv4_cidr_block: str,
  secondary_network_id: str,
  availability_zone: str = None,
  availability_zone_id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: Ec2SecondarySubnetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.ipv4CidrBlock">ipv4_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#ipv4_cidr_block Ec2SecondarySubnet#ipv4_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.secondaryNetworkId">secondary_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#secondary_network_id Ec2SecondarySubnet#secondary_network_id}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#availability_zone Ec2SecondarySubnet#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#availability_zone_id Ec2SecondarySubnet#availability_zone_id}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#tags Ec2SecondarySubnet#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ipv4_cidr_block`<sup>Required</sup> <a name="ipv4_cidr_block" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.ipv4CidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#ipv4_cidr_block Ec2SecondarySubnet#ipv4_cidr_block}.

---

##### `secondary_network_id`<sup>Required</sup> <a name="secondary_network_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.secondaryNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#secondary_network_id Ec2SecondarySubnet#secondary_network_id}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#availability_zone Ec2SecondarySubnet#availability_zone}.

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.availabilityZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#availability_zone_id Ec2SecondarySubnet#availability_zone_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#region Ec2SecondarySubnet#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#tags Ec2SecondarySubnet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#timeouts Ec2SecondarySubnet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetAvailabilityZoneId">reset_availability_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#create Ec2SecondarySubnet#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#delete Ec2SecondarySubnet#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#update Ec2SecondarySubnet#update}

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_id` <a name="reset_availability_zone_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetAvailabilityZoneId"></a>

```python
def reset_availability_zone_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2SecondarySubnet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isConstruct"></a>

```python
from cdktn_provider_aws import ec2_secondary_subnet

ec2SecondarySubnet.Ec2SecondarySubnet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformElement"></a>

```python
from cdktn_provider_aws import ec2_secondary_subnet

ec2SecondarySubnet.Ec2SecondarySubnet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformResource"></a>

```python
from cdktn_provider_aws import ec2_secondary_subnet

ec2SecondarySubnet.Ec2SecondarySubnet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport"></a>

```python
from cdktn_provider_aws import ec2_secondary_subnet

ec2SecondarySubnet.Ec2SecondarySubnet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2SecondarySubnet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2SecondarySubnet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2SecondarySubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecondarySubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlockAssociations">ipv4_cidr_block_associations</a></code> | <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList">Ec2SecondarySubnetIpv4CidrBlockAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkType">secondary_network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondarySubnetId">secondary_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference">Ec2SecondarySubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlockInput">ipv4_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkIdInput">secondary_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlock">ipv4_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkId">secondary_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv4_cidr_block_associations`<sup>Required</sup> <a name="ipv4_cidr_block_associations" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlockAssociations"></a>

```python
ipv4_cidr_block_associations: Ec2SecondarySubnetIpv4CidrBlockAssociationsList
```

- *Type:* <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList">Ec2SecondarySubnetIpv4CidrBlockAssociationsList</a>

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `secondary_network_type`<sup>Required</sup> <a name="secondary_network_type" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkType"></a>

```python
secondary_network_type: str
```

- *Type:* str

---

##### `secondary_subnet_id`<sup>Required</sup> <a name="secondary_subnet_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondarySubnetId"></a>

```python
secondary_subnet_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.timeouts"></a>

```python
timeouts: Ec2SecondarySubnetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference">Ec2SecondarySubnetTimeoutsOutputReference</a>

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `ipv4_cidr_block_input`<sup>Optional</sup> <a name="ipv4_cidr_block_input" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlockInput"></a>

```python
ipv4_cidr_block_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secondary_network_id_input`<sup>Optional</sup> <a name="secondary_network_id_input" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkIdInput"></a>

```python
secondary_network_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | Ec2SecondarySubnetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a>

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `ipv4_cidr_block`<sup>Required</sup> <a name="ipv4_cidr_block" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.ipv4CidrBlock"></a>

```python
ipv4_cidr_block: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secondary_network_id`<sup>Required</sup> <a name="secondary_network_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.secondaryNetworkId"></a>

```python
secondary_network_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecondarySubnetConfig <a name="Ec2SecondarySubnetConfig" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.Initializer"></a>

```python
from cdktn_provider_aws import ec2_secondary_subnet

ec2SecondarySubnet.Ec2SecondarySubnetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ipv4_cidr_block: str,
  secondary_network_id: str,
  availability_zone: str = None,
  availability_zone_id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: Ec2SecondarySubnetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.ipv4CidrBlock">ipv4_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#ipv4_cidr_block Ec2SecondarySubnet#ipv4_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.secondaryNetworkId">secondary_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#secondary_network_id Ec2SecondarySubnet#secondary_network_id}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#availability_zone Ec2SecondarySubnet#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#availability_zone_id Ec2SecondarySubnet#availability_zone_id}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#tags Ec2SecondarySubnet#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ipv4_cidr_block`<sup>Required</sup> <a name="ipv4_cidr_block" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.ipv4CidrBlock"></a>

```python
ipv4_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#ipv4_cidr_block Ec2SecondarySubnet#ipv4_cidr_block}.

---

##### `secondary_network_id`<sup>Required</sup> <a name="secondary_network_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.secondaryNetworkId"></a>

```python
secondary_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#secondary_network_id Ec2SecondarySubnet#secondary_network_id}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#availability_zone Ec2SecondarySubnet#availability_zone}.

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#availability_zone_id Ec2SecondarySubnet#availability_zone_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#region Ec2SecondarySubnet#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#tags Ec2SecondarySubnet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetConfig.property.timeouts"></a>

```python
timeouts: Ec2SecondarySubnetTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#timeouts Ec2SecondarySubnet#timeouts}

---

### Ec2SecondarySubnetIpv4CidrBlockAssociations <a name="Ec2SecondarySubnetIpv4CidrBlockAssociations" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociations.Initializer"></a>

```python
from cdktn_provider_aws import ec2_secondary_subnet

ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociations()
```


### Ec2SecondarySubnetTimeouts <a name="Ec2SecondarySubnetTimeouts" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import ec2_secondary_subnet

ec2SecondarySubnet.Ec2SecondarySubnetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#create Ec2SecondarySubnet#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#delete Ec2SecondarySubnet#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/ec2_secondary_subnet#update Ec2SecondarySubnet#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2SecondarySubnetIpv4CidrBlockAssociationsList <a name="Ec2SecondarySubnetIpv4CidrBlockAssociationsList" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer"></a>

```python
from cdktn_provider_aws import ec2_secondary_subnet

ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference <a name="Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ec2_secondary_subnet

ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociations">Ec2SecondarySubnetIpv4CidrBlockAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: Ec2SecondarySubnetIpv4CidrBlockAssociations
```

- *Type:* <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetIpv4CidrBlockAssociations">Ec2SecondarySubnetIpv4CidrBlockAssociations</a>

---


### Ec2SecondarySubnetTimeoutsOutputReference <a name="Ec2SecondarySubnetTimeoutsOutputReference" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ec2_secondary_subnet

ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2SecondarySubnetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2SecondarySubnet.Ec2SecondarySubnetTimeouts">Ec2SecondarySubnetTimeouts</a>

---



