# `ec2TransitGatewayMeteringPolicy` Submodule <a name="`ec2TransitGatewayMeteringPolicy` Submodule" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMeteringPolicy <a name="Ec2TransitGatewayMeteringPolicy" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy aws_ec2_transit_gateway_metering_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer"></a>

```python
from cdktn_provider_aws import ec2_transit_gateway_metering_policy

ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  transit_gateway_id: str,
  middlebox_attachment_ids: typing.List[str] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: Ec2TransitGatewayMeteringPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#transit_gateway_id Ec2TransitGatewayMeteringPolicy#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.middleboxAttachmentIds">middlebox_attachment_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#middlebox_attachment_ids Ec2TransitGatewayMeteringPolicy#middlebox_attachment_ids}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#tags Ec2TransitGatewayMeteringPolicy#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#transit_gateway_id Ec2TransitGatewayMeteringPolicy#transit_gateway_id}.

---

##### `middlebox_attachment_ids`<sup>Optional</sup> <a name="middlebox_attachment_ids" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.middleboxAttachmentIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#middlebox_attachment_ids Ec2TransitGatewayMeteringPolicy#middlebox_attachment_ids}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#region Ec2TransitGatewayMeteringPolicy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#tags Ec2TransitGatewayMeteringPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#timeouts Ec2TransitGatewayMeteringPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetMiddleboxAttachmentIds">reset_middlebox_attachment_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#create Ec2TransitGatewayMeteringPolicy#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#delete Ec2TransitGatewayMeteringPolicy#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#update Ec2TransitGatewayMeteringPolicy#update}

---

##### `reset_middlebox_attachment_ids` <a name="reset_middlebox_attachment_ids" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetMiddleboxAttachmentIds"></a>

```python
def reset_middlebox_attachment_ids() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isConstruct"></a>

```python
from cdktn_provider_aws import ec2_transit_gateway_metering_policy

ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformElement"></a>

```python
from cdktn_provider_aws import ec2_transit_gateway_metering_policy

ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformResource"></a>

```python
from cdktn_provider_aws import ec2_transit_gateway_metering_policy

ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_aws import ec2_transit_gateway_metering_policy

ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2TransitGatewayMeteringPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2TransitGatewayMeteringPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMeteringPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference">Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayMeteringPolicyId">transit_gateway_metering_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.middleboxAttachmentIdsInput">middlebox_attachment_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.middleboxAttachmentIds">middlebox_attachment_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.timeouts"></a>

```python
timeouts: Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference">Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference</a>

---

##### `transit_gateway_metering_policy_id`<sup>Required</sup> <a name="transit_gateway_metering_policy_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayMeteringPolicyId"></a>

```python
transit_gateway_metering_policy_id: str
```

- *Type:* str

---

##### `middlebox_attachment_ids_input`<sup>Optional</sup> <a name="middlebox_attachment_ids_input" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.middleboxAttachmentIdsInput"></a>

```python
middlebox_attachment_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | Ec2TransitGatewayMeteringPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a>

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `middlebox_attachment_ids`<sup>Required</sup> <a name="middlebox_attachment_ids" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.middleboxAttachmentIds"></a>

```python
middlebox_attachment_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMeteringPolicyConfig <a name="Ec2TransitGatewayMeteringPolicyConfig" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.Initializer"></a>

```python
from cdktn_provider_aws import ec2_transit_gateway_metering_policy

ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  transit_gateway_id: str,
  middlebox_attachment_ids: typing.List[str] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: Ec2TransitGatewayMeteringPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#transit_gateway_id Ec2TransitGatewayMeteringPolicy#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.middleboxAttachmentIds">middlebox_attachment_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#middlebox_attachment_ids Ec2TransitGatewayMeteringPolicy#middlebox_attachment_ids}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#tags Ec2TransitGatewayMeteringPolicy#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#transit_gateway_id Ec2TransitGatewayMeteringPolicy#transit_gateway_id}.

---

##### `middlebox_attachment_ids`<sup>Optional</sup> <a name="middlebox_attachment_ids" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.middleboxAttachmentIds"></a>

```python
middlebox_attachment_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#middlebox_attachment_ids Ec2TransitGatewayMeteringPolicy#middlebox_attachment_ids}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#region Ec2TransitGatewayMeteringPolicy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#tags Ec2TransitGatewayMeteringPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyConfig.property.timeouts"></a>

```python
timeouts: Ec2TransitGatewayMeteringPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#timeouts Ec2TransitGatewayMeteringPolicy#timeouts}

---

### Ec2TransitGatewayMeteringPolicyTimeouts <a name="Ec2TransitGatewayMeteringPolicyTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import ec2_transit_gateway_metering_policy

ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#create Ec2TransitGatewayMeteringPolicy#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#delete Ec2TransitGatewayMeteringPolicy#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/ec2_transit_gateway_metering_policy#update Ec2TransitGatewayMeteringPolicy#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference <a name="Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import ec2_transit_gateway_metering_policy

ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2TransitGatewayMeteringPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicy.Ec2TransitGatewayMeteringPolicyTimeouts">Ec2TransitGatewayMeteringPolicyTimeouts</a>

---



