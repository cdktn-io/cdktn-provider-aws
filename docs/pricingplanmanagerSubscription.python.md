# `pricingplanmanagerSubscription` Submodule <a name="`pricingplanmanagerSubscription` Submodule" id="@cdktn/provider-aws.pricingplanmanagerSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PricingplanmanagerSubscription <a name="PricingplanmanagerSubscription" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription aws_pricingplanmanager_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer"></a>

```python
from cdktn_provider_aws import pricingplanmanager_subscription

pricingplanmanagerSubscription.PricingplanmanagerSubscription(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  plan_family: str,
  plan_tier: str,
  resource_arns: typing.List[str],
  approval_mode: str = None,
  timeouts: PricingplanmanagerSubscriptionTimeouts = None,
  usage_level: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.planFamily">plan_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.planTier">plan_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.approvalMode">approval_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.usageLevel">usage_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `plan_family`<sup>Required</sup> <a name="plan_family" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.planFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}.

---

##### `plan_tier`<sup>Required</sup> <a name="plan_tier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.planTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}.

---

##### `resource_arns`<sup>Required</sup> <a name="resource_arns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.resourceArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}.

---

##### `approval_mode`<sup>Optional</sup> <a name="approval_mode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.approvalMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#timeouts PricingplanmanagerSubscription#timeouts}

---

##### `usage_level`<sup>Optional</sup> <a name="usage_level" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.usageLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetApprovalMode">reset_approval_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetUsageLevel">reset_usage_level</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#create PricingplanmanagerSubscription#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#delete PricingplanmanagerSubscription#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#update PricingplanmanagerSubscription#update}

---

##### `reset_approval_mode` <a name="reset_approval_mode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetApprovalMode"></a>

```python
def reset_approval_mode() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_usage_level` <a name="reset_usage_level" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetUsageLevel"></a>

```python
def reset_usage_level() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PricingplanmanagerSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct"></a>

```python
from cdktn_provider_aws import pricingplanmanager_subscription

pricingplanmanagerSubscription.PricingplanmanagerSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement"></a>

```python
from cdktn_provider_aws import pricingplanmanager_subscription

pricingplanmanagerSubscription.PricingplanmanagerSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource"></a>

```python
from cdktn_provider_aws import pricingplanmanager_subscription

pricingplanmanagerSubscription.PricingplanmanagerSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport"></a>

```python
from cdktn_provider_aws import pricingplanmanager_subscription

pricingplanmanagerSubscription.PricingplanmanagerSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PricingplanmanagerSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PricingplanmanagerSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PricingplanmanagerSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PricingplanmanagerSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.scheduledChange">scheduled_change</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList">PricingplanmanagerSubscriptionScheduledChangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference">PricingplanmanagerSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalModeInput">approval_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamilyInput">plan_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTierInput">plan_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArnsInput">resource_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevelInput">usage_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalMode">approval_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamily">plan_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTier">plan_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevel">usage_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `scheduled_change`<sup>Required</sup> <a name="scheduled_change" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.scheduledChange"></a>

```python
scheduled_change: PricingplanmanagerSubscriptionScheduledChangeList
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList">PricingplanmanagerSubscriptionScheduledChangeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeouts"></a>

```python
timeouts: PricingplanmanagerSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference">PricingplanmanagerSubscriptionTimeoutsOutputReference</a>

---

##### `approval_mode_input`<sup>Optional</sup> <a name="approval_mode_input" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalModeInput"></a>

```python
approval_mode_input: str
```

- *Type:* str

---

##### `plan_family_input`<sup>Optional</sup> <a name="plan_family_input" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamilyInput"></a>

```python
plan_family_input: str
```

- *Type:* str

---

##### `plan_tier_input`<sup>Optional</sup> <a name="plan_tier_input" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTierInput"></a>

```python
plan_tier_input: str
```

- *Type:* str

---

##### `resource_arns_input`<sup>Optional</sup> <a name="resource_arns_input" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArnsInput"></a>

```python
resource_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | PricingplanmanagerSubscriptionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---

##### `usage_level_input`<sup>Optional</sup> <a name="usage_level_input" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevelInput"></a>

```python
usage_level_input: str
```

- *Type:* str

---

##### `approval_mode`<sup>Required</sup> <a name="approval_mode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalMode"></a>

```python
approval_mode: str
```

- *Type:* str

---

##### `plan_family`<sup>Required</sup> <a name="plan_family" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamily"></a>

```python
plan_family: str
```

- *Type:* str

---

##### `plan_tier`<sup>Required</sup> <a name="plan_tier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTier"></a>

```python
plan_tier: str
```

- *Type:* str

---

##### `resource_arns`<sup>Required</sup> <a name="resource_arns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `usage_level`<sup>Required</sup> <a name="usage_level" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevel"></a>

```python
usage_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PricingplanmanagerSubscriptionConfig <a name="PricingplanmanagerSubscriptionConfig" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.Initializer"></a>

```python
from cdktn_provider_aws import pricingplanmanager_subscription

pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  plan_family: str,
  plan_tier: str,
  resource_arns: typing.List[str],
  approval_mode: str = None,
  timeouts: PricingplanmanagerSubscriptionTimeouts = None,
  usage_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planFamily">plan_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planTier">plan_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.resourceArns">resource_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.approvalMode">approval_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.usageLevel">usage_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `plan_family`<sup>Required</sup> <a name="plan_family" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planFamily"></a>

```python
plan_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}.

---

##### `plan_tier`<sup>Required</sup> <a name="plan_tier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planTier"></a>

```python
plan_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}.

---

##### `resource_arns`<sup>Required</sup> <a name="resource_arns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.resourceArns"></a>

```python
resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}.

---

##### `approval_mode`<sup>Optional</sup> <a name="approval_mode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.approvalMode"></a>

```python
approval_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.timeouts"></a>

```python
timeouts: PricingplanmanagerSubscriptionTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#timeouts PricingplanmanagerSubscription#timeouts}

---

##### `usage_level`<sup>Optional</sup> <a name="usage_level" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.usageLevel"></a>

```python
usage_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}.

---

### PricingplanmanagerSubscriptionScheduledChange <a name="PricingplanmanagerSubscriptionScheduledChange" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange.Initializer"></a>

```python
from cdktn_provider_aws import pricingplanmanager_subscription

pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange()
```


### PricingplanmanagerSubscriptionTimeouts <a name="PricingplanmanagerSubscriptionTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import pricingplanmanager_subscription

pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#create PricingplanmanagerSubscription#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#delete PricingplanmanagerSubscription#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#update PricingplanmanagerSubscription#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PricingplanmanagerSubscriptionScheduledChangeList <a name="PricingplanmanagerSubscriptionScheduledChangeList" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer"></a>

```python
from cdktn_provider_aws import pricingplanmanager_subscription

pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PricingplanmanagerSubscriptionScheduledChangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### PricingplanmanagerSubscriptionScheduledChangeOutputReference <a name="PricingplanmanagerSubscriptionScheduledChangeOutputReference" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import pricingplanmanager_subscription

pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.changeType">change_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.effectiveDate">effective_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.planTier">plan_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.usageLevel">usage_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange">PricingplanmanagerSubscriptionScheduledChange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_type`<sup>Required</sup> <a name="change_type" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.changeType"></a>

```python
change_type: str
```

- *Type:* str

---

##### `effective_date`<sup>Required</sup> <a name="effective_date" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.effectiveDate"></a>

```python
effective_date: str
```

- *Type:* str

---

##### `plan_tier`<sup>Required</sup> <a name="plan_tier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.planTier"></a>

```python
plan_tier: str
```

- *Type:* str

---

##### `usage_level`<sup>Required</sup> <a name="usage_level" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.usageLevel"></a>

```python
usage_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.internalValue"></a>

```python
internal_value: PricingplanmanagerSubscriptionScheduledChange
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange">PricingplanmanagerSubscriptionScheduledChange</a>

---


### PricingplanmanagerSubscriptionTimeoutsOutputReference <a name="PricingplanmanagerSubscriptionTimeoutsOutputReference" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import pricingplanmanager_subscription

pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PricingplanmanagerSubscriptionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---



