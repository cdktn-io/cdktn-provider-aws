# `arczonalshiftZonalAutoshiftConfiguration` Submodule <a name="`arczonalshiftZonalAutoshiftConfiguration` Submodule" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArczonalshiftZonalAutoshiftConfiguration <a name="ArczonalshiftZonalAutoshiftConfiguration" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration aws_arczonalshift_zonal_autoshift_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_arn: str,
  zonal_autoshift_status: str,
  allowed_windows: typing.List[str] = None,
  blocked_dates: typing.List[str] = None,
  blocked_windows: typing.List[str] = None,
  blocking_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms] = None,
  outcome_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.resourceArn">resource_arn</a></code> | <code>str</code> | The ARN of the managed resource to configure zonal autoshift for (e.g., an Application Load Balancer). Changing this creates a new resource. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.zonalAutoshiftStatus">zonal_autoshift_status</a></code> | <code>str</code> | The status of zonal autoshift. Valid values: `ENABLED`, `DISABLED`. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.allowedWindows">allowed_windows</a></code> | <code>typing.List[str]</code> | List of time windows during which practice runs are allowed, in the format `Day:HH:MM-Day:HH:MM` (e.g., `Mon:09:00-Mon:17:00`). Cannot be used together with `blocked_windows`. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.blockedDates">blocked_dates</a></code> | <code>typing.List[str]</code> | List of dates when practice runs should not be started, in the format `YYYY-MM-DD`. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.blockedWindows">blocked_windows</a></code> | <code>typing.List[str]</code> | List of time windows during which practice runs should not be started, in the format `Day:HH:MM-Day:HH:MM` (e.g., `Mon:00:00-Mon:08:00`). Cannot be used together with `allowed_windows`. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.blockingAlarms">blocking_alarms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms</a>]</code> | blocking_alarms block. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.outcomeAlarms">outcome_alarms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms</a>]</code> | outcome_alarms block. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.resourceArn"></a>

- *Type:* str

The ARN of the managed resource to configure zonal autoshift for (e.g., an Application Load Balancer). Changing this creates a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_arn ArczonalshiftZonalAutoshiftConfiguration#resource_arn}

---

##### `zonal_autoshift_status`<sup>Required</sup> <a name="zonal_autoshift_status" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.zonalAutoshiftStatus"></a>

- *Type:* str

The status of zonal autoshift. Valid values: `ENABLED`, `DISABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}

---

##### `allowed_windows`<sup>Optional</sup> <a name="allowed_windows" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.allowedWindows"></a>

- *Type:* typing.List[str]

List of time windows during which practice runs are allowed, in the format `Day:HH:MM-Day:HH:MM` (e.g., `Mon:09:00-Mon:17:00`). Cannot be used together with `blocked_windows`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#allowed_windows ArczonalshiftZonalAutoshiftConfiguration#allowed_windows}

---

##### `blocked_dates`<sup>Optional</sup> <a name="blocked_dates" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.blockedDates"></a>

- *Type:* typing.List[str]

List of dates when practice runs should not be started, in the format `YYYY-MM-DD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates ArczonalshiftZonalAutoshiftConfiguration#blocked_dates}

---

##### `blocked_windows`<sup>Optional</sup> <a name="blocked_windows" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.blockedWindows"></a>

- *Type:* typing.List[str]

List of time windows during which practice runs should not be started, in the format `Day:HH:MM-Day:HH:MM` (e.g., `Mon:00:00-Mon:08:00`). Cannot be used together with `allowed_windows`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows ArczonalshiftZonalAutoshiftConfiguration#blocked_windows}

---

##### `blocking_alarms`<sup>Optional</sup> <a name="blocking_alarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.blockingAlarms"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms</a>]

blocking_alarms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms ArczonalshiftZonalAutoshiftConfiguration#blocking_alarms}

---

##### `outcome_alarms`<sup>Optional</sup> <a name="outcome_alarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.outcomeAlarms"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms</a>]

outcome_alarms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms ArczonalshiftZonalAutoshiftConfiguration#outcome_alarms}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#region ArczonalshiftZonalAutoshiftConfiguration#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putBlockingAlarms">put_blocking_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putOutcomeAlarms">put_outcome_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetAllowedWindows">reset_allowed_windows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetBlockedDates">reset_blocked_dates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetBlockedWindows">reset_blocked_windows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetBlockingAlarms">reset_blocking_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetOutcomeAlarms">reset_outcome_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_blocking_alarms` <a name="put_blocking_alarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putBlockingAlarms"></a>

```python
def put_blocking_alarms(
  value: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putBlockingAlarms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms</a>]

---

##### `put_outcome_alarms` <a name="put_outcome_alarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putOutcomeAlarms"></a>

```python
def put_outcome_alarms(
  value: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.putOutcomeAlarms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms</a>]

---

##### `reset_allowed_windows` <a name="reset_allowed_windows" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetAllowedWindows"></a>

```python
def reset_allowed_windows() -> None
```

##### `reset_blocked_dates` <a name="reset_blocked_dates" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetBlockedDates"></a>

```python
def reset_blocked_dates() -> None
```

##### `reset_blocked_windows` <a name="reset_blocked_windows" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetBlockedWindows"></a>

```python
def reset_blocked_windows() -> None
```

##### `reset_blocking_alarms` <a name="reset_blocking_alarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetBlockingAlarms"></a>

```python
def reset_blocking_alarms() -> None
```

##### `reset_outcome_alarms` <a name="reset_outcome_alarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetOutcomeAlarms"></a>

```python
def reset_outcome_alarms() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ArczonalshiftZonalAutoshiftConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ArczonalshiftZonalAutoshiftConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ArczonalshiftZonalAutoshiftConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockingAlarms">blocking_alarms</a></code> | <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.outcomeAlarms">outcome_alarms</a></code> | <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.allowedWindowsInput">allowed_windows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockedDatesInput">blocked_dates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockedWindowsInput">blocked_windows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockingAlarmsInput">blocking_alarms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.outcomeAlarmsInput">outcome_alarms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatusInput">zonal_autoshift_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.allowedWindows">allowed_windows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockedDates">blocked_dates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockedWindows">blocked_windows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatus">zonal_autoshift_status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `blocking_alarms`<sup>Required</sup> <a name="blocking_alarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockingAlarms"></a>

```python
blocking_alarms: ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList
```

- *Type:* <a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList</a>

---

##### `outcome_alarms`<sup>Required</sup> <a name="outcome_alarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.outcomeAlarms"></a>

```python
outcome_alarms: ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList
```

- *Type:* <a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList</a>

---

##### `allowed_windows_input`<sup>Optional</sup> <a name="allowed_windows_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.allowedWindowsInput"></a>

```python
allowed_windows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_dates_input`<sup>Optional</sup> <a name="blocked_dates_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockedDatesInput"></a>

```python
blocked_dates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_windows_input`<sup>Optional</sup> <a name="blocked_windows_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockedWindowsInput"></a>

```python
blocked_windows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocking_alarms_input`<sup>Optional</sup> <a name="blocking_alarms_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockingAlarmsInput"></a>

```python
blocking_alarms_input: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms</a>]

---

##### `outcome_alarms_input`<sup>Optional</sup> <a name="outcome_alarms_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.outcomeAlarmsInput"></a>

```python
outcome_alarms_input: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `zonal_autoshift_status_input`<sup>Optional</sup> <a name="zonal_autoshift_status_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatusInput"></a>

```python
zonal_autoshift_status_input: str
```

- *Type:* str

---

##### `allowed_windows`<sup>Required</sup> <a name="allowed_windows" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.allowedWindows"></a>

```python
allowed_windows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_dates`<sup>Required</sup> <a name="blocked_dates" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockedDates"></a>

```python
blocked_dates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_windows`<sup>Required</sup> <a name="blocked_windows" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.blockedWindows"></a>

```python
blocked_windows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `zonal_autoshift_status`<sup>Required</sup> <a name="zonal_autoshift_status" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatus"></a>

```python
zonal_autoshift_status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms <a name="ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms.Initializer"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms(
  alarm_identifier: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms.property.alarmIdentifier">alarm_identifier</a></code> | <code>str</code> | ARN of the CloudWatch alarm. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms.property.type">type</a></code> | <code>str</code> | Type of control condition. Valid value: `CLOUDWATCH`. |

---

##### `alarm_identifier`<sup>Required</sup> <a name="alarm_identifier" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms.property.alarmIdentifier"></a>

```python
alarm_identifier: str
```

- *Type:* str

ARN of the CloudWatch alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms.property.type"></a>

```python
type: str
```

- *Type:* str

Type of control condition. Valid value: `CLOUDWATCH`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}

---

### ArczonalshiftZonalAutoshiftConfigurationConfig <a name="ArczonalshiftZonalAutoshiftConfigurationConfig" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_arn: str,
  zonal_autoshift_status: str,
  allowed_windows: typing.List[str] = None,
  blocked_dates: typing.List[str] = None,
  blocked_windows: typing.List[str] = None,
  blocking_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms] = None,
  outcome_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.resourceArn">resource_arn</a></code> | <code>str</code> | The ARN of the managed resource to configure zonal autoshift for (e.g., an Application Load Balancer). Changing this creates a new resource. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.zonalAutoshiftStatus">zonal_autoshift_status</a></code> | <code>str</code> | The status of zonal autoshift. Valid values: `ENABLED`, `DISABLED`. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.allowedWindows">allowed_windows</a></code> | <code>typing.List[str]</code> | List of time windows during which practice runs are allowed, in the format `Day:HH:MM-Day:HH:MM` (e.g., `Mon:09:00-Mon:17:00`). Cannot be used together with `blocked_windows`. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.blockedDates">blocked_dates</a></code> | <code>typing.List[str]</code> | List of dates when practice runs should not be started, in the format `YYYY-MM-DD`. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.blockedWindows">blocked_windows</a></code> | <code>typing.List[str]</code> | List of time windows during which practice runs should not be started, in the format `Day:HH:MM-Day:HH:MM` (e.g., `Mon:00:00-Mon:08:00`). Cannot be used together with `allowed_windows`. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.blockingAlarms">blocking_alarms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms</a>]</code> | blocking_alarms block. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.outcomeAlarms">outcome_alarms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms</a>]</code> | outcome_alarms block. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

The ARN of the managed resource to configure zonal autoshift for (e.g., an Application Load Balancer). Changing this creates a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_arn ArczonalshiftZonalAutoshiftConfiguration#resource_arn}

---

##### `zonal_autoshift_status`<sup>Required</sup> <a name="zonal_autoshift_status" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.zonalAutoshiftStatus"></a>

```python
zonal_autoshift_status: str
```

- *Type:* str

The status of zonal autoshift. Valid values: `ENABLED`, `DISABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}

---

##### `allowed_windows`<sup>Optional</sup> <a name="allowed_windows" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.allowedWindows"></a>

```python
allowed_windows: typing.List[str]
```

- *Type:* typing.List[str]

List of time windows during which practice runs are allowed, in the format `Day:HH:MM-Day:HH:MM` (e.g., `Mon:09:00-Mon:17:00`). Cannot be used together with `blocked_windows`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#allowed_windows ArczonalshiftZonalAutoshiftConfiguration#allowed_windows}

---

##### `blocked_dates`<sup>Optional</sup> <a name="blocked_dates" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.blockedDates"></a>

```python
blocked_dates: typing.List[str]
```

- *Type:* typing.List[str]

List of dates when practice runs should not be started, in the format `YYYY-MM-DD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates ArczonalshiftZonalAutoshiftConfiguration#blocked_dates}

---

##### `blocked_windows`<sup>Optional</sup> <a name="blocked_windows" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.blockedWindows"></a>

```python
blocked_windows: typing.List[str]
```

- *Type:* typing.List[str]

List of time windows during which practice runs should not be started, in the format `Day:HH:MM-Day:HH:MM` (e.g., `Mon:00:00-Mon:08:00`). Cannot be used together with `allowed_windows`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows ArczonalshiftZonalAutoshiftConfiguration#blocked_windows}

---

##### `blocking_alarms`<sup>Optional</sup> <a name="blocking_alarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.blockingAlarms"></a>

```python
blocking_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms</a>]

blocking_alarms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms ArczonalshiftZonalAutoshiftConfiguration#blocking_alarms}

---

##### `outcome_alarms`<sup>Optional</sup> <a name="outcome_alarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.outcomeAlarms"></a>

```python
outcome_alarms: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms</a>]

outcome_alarms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms ArczonalshiftZonalAutoshiftConfiguration#outcome_alarms}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#region ArczonalshiftZonalAutoshiftConfiguration#region}

---

### ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms <a name="ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms.Initializer"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms(
  alarm_identifier: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms.property.alarmIdentifier">alarm_identifier</a></code> | <code>str</code> | ARN of the CloudWatch alarm. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms.property.type">type</a></code> | <code>str</code> | Type of control condition. Valid value: `CLOUDWATCH`. |

---

##### `alarm_identifier`<sup>Required</sup> <a name="alarm_identifier" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms.property.alarmIdentifier"></a>

```python
alarm_identifier: str
```

- *Type:* str

ARN of the CloudWatch alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms.property.type"></a>

```python
type: str
```

- *Type:* str

Type of control condition. Valid value: `CLOUDWATCH`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}

---

## Classes <a name="Classes" id="Classes"></a>

### ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList <a name="ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.Initializer"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms</a>]

---


### ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference <a name="ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.alarmIdentifierInput">alarm_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.alarmIdentifier">alarm_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_identifier_input`<sup>Optional</sup> <a name="alarm_identifier_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.alarmIdentifierInput"></a>

```python
alarm_identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `alarm_identifier`<sup>Required</sup> <a name="alarm_identifier" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.alarmIdentifier"></a>

```python
alarm_identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms">ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms</a>

---


### ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList <a name="ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.Initializer"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms</a>]

---


### ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference <a name="ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import arczonalshift_zonal_autoshift_configuration

arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifierInput">alarm_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifier">alarm_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_identifier_input`<sup>Optional</sup> <a name="alarm_identifier_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifierInput"></a>

```python
alarm_identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `alarm_identifier`<sup>Required</sup> <a name="alarm_identifier" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifier"></a>

```python
alarm_identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.arczonalshiftZonalAutoshiftConfiguration.ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms">ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms</a>

---



