# `observabilityadminTelemetryEvaluationForOrganization` Submodule <a name="`observabilityadminTelemetryEvaluationForOrganization` Submodule" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminTelemetryEvaluationForOrganization <a name="ObservabilityadminTelemetryEvaluationForOrganization" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization aws_observabilityadmin_telemetry_evaluation_for_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_telemetry_evaluation_for_organization

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  all_regions: bool | IResolvable = None,
  region: str = None,
  regions: typing.List[str] = None,
  timeouts: ObservabilityadminTelemetryEvaluationForOrganizationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.allRegions">all_regions</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#all_regions ObservabilityadminTelemetryEvaluationForOrganization#all_regions}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#regions ObservabilityadminTelemetryEvaluationForOrganization#regions}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `all_regions`<sup>Optional</sup> <a name="all_regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.allRegions"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#all_regions ObservabilityadminTelemetryEvaluationForOrganization#all_regions}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#region ObservabilityadminTelemetryEvaluationForOrganization#region}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.regions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#regions ObservabilityadminTelemetryEvaluationForOrganization#regions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#timeouts ObservabilityadminTelemetryEvaluationForOrganization#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetAllRegions">reset_all_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#create ObservabilityadminTelemetryEvaluationForOrganization#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#delete ObservabilityadminTelemetryEvaluationForOrganization#delete}

---

##### `reset_all_regions` <a name="reset_all_regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetAllRegions"></a>

```python
def reset_all_regions() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ObservabilityadminTelemetryEvaluationForOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct"></a>

```python
from cdktn_provider_aws import observabilityadmin_telemetry_evaluation_for_organization

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement"></a>

```python
from cdktn_provider_aws import observabilityadmin_telemetry_evaluation_for_organization

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource"></a>

```python
from cdktn_provider_aws import observabilityadmin_telemetry_evaluation_for_organization

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport"></a>

```python
from cdktn_provider_aws import observabilityadmin_telemetry_evaluation_for_organization

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ObservabilityadminTelemetryEvaluationForOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObservabilityadminTelemetryEvaluationForOrganization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObservabilityadminTelemetryEvaluationForOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminTelemetryEvaluationForOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.homeRegion">home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference">ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegionsInput">all_regions_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegions">all_regions</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeouts"></a>

```python
timeouts: ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference">ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference</a>

---

##### `all_regions_input`<sup>Optional</sup> <a name="all_regions_input" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegionsInput"></a>

```python
all_regions_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ObservabilityadminTelemetryEvaluationForOrganizationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

---

##### `all_regions`<sup>Required</sup> <a name="all_regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegions"></a>

```python
all_regions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminTelemetryEvaluationForOrganizationConfig <a name="ObservabilityadminTelemetryEvaluationForOrganizationConfig" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_telemetry_evaluation_for_organization

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  all_regions: bool | IResolvable = None,
  region: str = None,
  regions: typing.List[str] = None,
  timeouts: ObservabilityadminTelemetryEvaluationForOrganizationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.allRegions">all_regions</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#all_regions ObservabilityadminTelemetryEvaluationForOrganization#all_regions}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#regions ObservabilityadminTelemetryEvaluationForOrganization#regions}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `all_regions`<sup>Optional</sup> <a name="all_regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.allRegions"></a>

```python
all_regions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#all_regions ObservabilityadminTelemetryEvaluationForOrganization#all_regions}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#region ObservabilityadminTelemetryEvaluationForOrganization#region}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#regions ObservabilityadminTelemetryEvaluationForOrganization#regions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.timeouts"></a>

```python
timeouts: ObservabilityadminTelemetryEvaluationForOrganizationTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#timeouts ObservabilityadminTelemetryEvaluationForOrganization#timeouts}

---

### ObservabilityadminTelemetryEvaluationForOrganizationTimeouts <a name="ObservabilityadminTelemetryEvaluationForOrganizationTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_telemetry_evaluation_for_organization

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#create ObservabilityadminTelemetryEvaluationForOrganization#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#delete ObservabilityadminTelemetryEvaluationForOrganization#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference <a name="ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_telemetry_evaluation_for_organization

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ObservabilityadminTelemetryEvaluationForOrganizationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

---



