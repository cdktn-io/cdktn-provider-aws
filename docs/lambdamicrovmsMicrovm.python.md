# `lambdamicrovmsMicrovm` Submodule <a name="`lambdamicrovmsMicrovm` Submodule" id="@cdktn/provider-aws.lambdamicrovmsMicrovm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdamicrovmsMicrovm <a name="LambdamicrovmsMicrovm" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm aws_lambdamicrovms_microvm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovm(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  image_arn: str,
  egress_network_connectors: typing.List[str] = None,
  execution_role_arn: str = None,
  idle_policy: IResolvable | typing.List[LambdamicrovmsMicrovmIdlePolicy] = None,
  image_version: str = None,
  ingress_network_connectors: typing.List[str] = None,
  logging: IResolvable | typing.List[LambdamicrovmsMicrovmLogging] = None,
  maximum_duration_in_seconds: typing.Union[int, float] = None,
  region: str = None,
  run_hook_payload: str = None,
  timeouts: LambdamicrovmsMicrovmTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.imageArn">image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.egressNetworkConnectors">egress_network_connectors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.idlePolicy">idle_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>]</code> | idle_policy block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.imageVersion">image_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.ingressNetworkConnectors">ingress_network_connectors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.logging">logging</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>]</code> | logging block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.maximumDurationInSeconds">maximum_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.runHookPayload">run_hook_payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `image_arn`<sup>Required</sup> <a name="image_arn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.imageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}.

---

##### `egress_network_connectors`<sup>Optional</sup> <a name="egress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.egressNetworkConnectors"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}.

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}.

---

##### `idle_policy`<sup>Optional</sup> <a name="idle_policy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.idlePolicy"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>]

idle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#idle_policy LambdamicrovmsMicrovm#idle_policy}

---

##### `image_version`<sup>Optional</sup> <a name="image_version" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.imageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}.

---

##### `ingress_network_connectors`<sup>Optional</sup> <a name="ingress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.ingressNetworkConnectors"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.logging"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>]

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#logging LambdamicrovmsMicrovm#logging}

---

##### `maximum_duration_in_seconds`<sup>Optional</sup> <a name="maximum_duration_in_seconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.maximumDurationInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#region LambdamicrovmsMicrovm#region}

---

##### `run_hook_payload`<sup>Optional</sup> <a name="run_hook_payload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.runHookPayload"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#timeouts LambdamicrovmsMicrovm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy">put_idle_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetEgressNetworkConnectors">reset_egress_network_connectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIdlePolicy">reset_idle_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetImageVersion">reset_image_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIngressNetworkConnectors">reset_ingress_network_connectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetMaximumDurationInSeconds">reset_maximum_duration_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRunHookPayload">reset_run_hook_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_idle_policy` <a name="put_idle_policy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy"></a>

```python
def put_idle_policy(
  value: IResolvable | typing.List[LambdamicrovmsMicrovmIdlePolicy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>]

---

##### `put_logging` <a name="put_logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging"></a>

```python
def put_logging(
  value: IResolvable | typing.List[LambdamicrovmsMicrovmLogging]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#create LambdamicrovmsMicrovm#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#delete LambdamicrovmsMicrovm#delete}

---

##### `reset_egress_network_connectors` <a name="reset_egress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetEgressNetworkConnectors"></a>

```python
def reset_egress_network_connectors() -> None
```

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_idle_policy` <a name="reset_idle_policy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIdlePolicy"></a>

```python
def reset_idle_policy() -> None
```

##### `reset_image_version` <a name="reset_image_version" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetImageVersion"></a>

```python
def reset_image_version() -> None
```

##### `reset_ingress_network_connectors` <a name="reset_ingress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIngressNetworkConnectors"></a>

```python
def reset_ingress_network_connectors() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_maximum_duration_in_seconds` <a name="reset_maximum_duration_in_seconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetMaximumDurationInSeconds"></a>

```python
def reset_maximum_duration_in_seconds() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_run_hook_payload` <a name="reset_run_hook_payload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRunHookPayload"></a>

```python
def reset_run_hook_payload() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdamicrovmsMicrovm resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdamicrovmsMicrovm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdamicrovmsMicrovm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdamicrovmsMicrovm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdamicrovmsMicrovm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicy">idle_policy</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList">LambdamicrovmsMicrovmIdlePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList">LambdamicrovmsMicrovmLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.microvmId">microvm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.startedAt">started_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference">LambdamicrovmsMicrovmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectorsInput">egress_network_connectors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicyInput">idle_policy_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArnInput">image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersionInput">image_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectorsInput">ingress_network_connectors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.loggingInput">logging_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSecondsInput">maximum_duration_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayloadInput">run_hook_payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectors">egress_network_connectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArn">image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersion">image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectors">ingress_network_connectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSeconds">maximum_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayload">run_hook_payload</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `idle_policy`<sup>Required</sup> <a name="idle_policy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicy"></a>

```python
idle_policy: LambdamicrovmsMicrovmIdlePolicyList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList">LambdamicrovmsMicrovmIdlePolicyList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.logging"></a>

```python
logging: LambdamicrovmsMicrovmLoggingList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList">LambdamicrovmsMicrovmLoggingList</a>

---

##### `microvm_id`<sup>Required</sup> <a name="microvm_id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.microvmId"></a>

```python
microvm_id: str
```

- *Type:* str

---

##### `started_at`<sup>Required</sup> <a name="started_at" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.startedAt"></a>

```python
started_at: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeouts"></a>

```python
timeouts: LambdamicrovmsMicrovmTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference">LambdamicrovmsMicrovmTimeoutsOutputReference</a>

---

##### `egress_network_connectors_input`<sup>Optional</sup> <a name="egress_network_connectors_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectorsInput"></a>

```python
egress_network_connectors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `idle_policy_input`<sup>Optional</sup> <a name="idle_policy_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicyInput"></a>

```python
idle_policy_input: IResolvable | typing.List[LambdamicrovmsMicrovmIdlePolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>]

---

##### `image_arn_input`<sup>Optional</sup> <a name="image_arn_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArnInput"></a>

```python
image_arn_input: str
```

- *Type:* str

---

##### `image_version_input`<sup>Optional</sup> <a name="image_version_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersionInput"></a>

```python
image_version_input: str
```

- *Type:* str

---

##### `ingress_network_connectors_input`<sup>Optional</sup> <a name="ingress_network_connectors_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectorsInput"></a>

```python
ingress_network_connectors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.loggingInput"></a>

```python
logging_input: IResolvable | typing.List[LambdamicrovmsMicrovmLogging]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>]

---

##### `maximum_duration_in_seconds_input`<sup>Optional</sup> <a name="maximum_duration_in_seconds_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSecondsInput"></a>

```python
maximum_duration_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `run_hook_payload_input`<sup>Optional</sup> <a name="run_hook_payload_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayloadInput"></a>

```python
run_hook_payload_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | LambdamicrovmsMicrovmTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---

##### `egress_network_connectors`<sup>Required</sup> <a name="egress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectors"></a>

```python
egress_network_connectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `image_arn`<sup>Required</sup> <a name="image_arn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArn"></a>

```python
image_arn: str
```

- *Type:* str

---

##### `image_version`<sup>Required</sup> <a name="image_version" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersion"></a>

```python
image_version: str
```

- *Type:* str

---

##### `ingress_network_connectors`<sup>Required</sup> <a name="ingress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectors"></a>

```python
ingress_network_connectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_duration_in_seconds`<sup>Required</sup> <a name="maximum_duration_in_seconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSeconds"></a>

```python
maximum_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `run_hook_payload`<sup>Required</sup> <a name="run_hook_payload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayload"></a>

```python
run_hook_payload: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdamicrovmsMicrovmConfig <a name="LambdamicrovmsMicrovmConfig" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  image_arn: str,
  egress_network_connectors: typing.List[str] = None,
  execution_role_arn: str = None,
  idle_policy: IResolvable | typing.List[LambdamicrovmsMicrovmIdlePolicy] = None,
  image_version: str = None,
  ingress_network_connectors: typing.List[str] = None,
  logging: IResolvable | typing.List[LambdamicrovmsMicrovmLogging] = None,
  maximum_duration_in_seconds: typing.Union[int, float] = None,
  region: str = None,
  run_hook_payload: str = None,
  timeouts: LambdamicrovmsMicrovmTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageArn">image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.egressNetworkConnectors">egress_network_connectors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.idlePolicy">idle_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>]</code> | idle_policy block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageVersion">image_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.ingressNetworkConnectors">ingress_network_connectors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.logging">logging</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>]</code> | logging block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.maximumDurationInSeconds">maximum_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.runHookPayload">run_hook_payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `image_arn`<sup>Required</sup> <a name="image_arn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageArn"></a>

```python
image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}.

---

##### `egress_network_connectors`<sup>Optional</sup> <a name="egress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.egressNetworkConnectors"></a>

```python
egress_network_connectors: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}.

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}.

---

##### `idle_policy`<sup>Optional</sup> <a name="idle_policy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.idlePolicy"></a>

```python
idle_policy: IResolvable | typing.List[LambdamicrovmsMicrovmIdlePolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>]

idle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#idle_policy LambdamicrovmsMicrovm#idle_policy}

---

##### `image_version`<sup>Optional</sup> <a name="image_version" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageVersion"></a>

```python
image_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}.

---

##### `ingress_network_connectors`<sup>Optional</sup> <a name="ingress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.ingressNetworkConnectors"></a>

```python
ingress_network_connectors: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.logging"></a>

```python
logging: IResolvable | typing.List[LambdamicrovmsMicrovmLogging]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>]

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#logging LambdamicrovmsMicrovm#logging}

---

##### `maximum_duration_in_seconds`<sup>Optional</sup> <a name="maximum_duration_in_seconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.maximumDurationInSeconds"></a>

```python
maximum_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#region LambdamicrovmsMicrovm#region}

---

##### `run_hook_payload`<sup>Optional</sup> <a name="run_hook_payload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.runHookPayload"></a>

```python
run_hook_payload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.timeouts"></a>

```python
timeouts: LambdamicrovmsMicrovmTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#timeouts LambdamicrovmsMicrovm#timeouts}

---

### LambdamicrovmsMicrovmIdlePolicy <a name="LambdamicrovmsMicrovmIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy(
  auto_resume_enabled: bool | IResolvable,
  max_idle_duration_seconds: typing.Union[int, float],
  suspended_duration_seconds: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.autoResumeEnabled">auto_resume_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#auto_resume_enabled LambdamicrovmsMicrovm#auto_resume_enabled}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.maxIdleDurationSeconds">max_idle_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#max_idle_duration_seconds LambdamicrovmsMicrovm#max_idle_duration_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.suspendedDurationSeconds">suspended_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#suspended_duration_seconds LambdamicrovmsMicrovm#suspended_duration_seconds}. |

---

##### `auto_resume_enabled`<sup>Required</sup> <a name="auto_resume_enabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.autoResumeEnabled"></a>

```python
auto_resume_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#auto_resume_enabled LambdamicrovmsMicrovm#auto_resume_enabled}.

---

##### `max_idle_duration_seconds`<sup>Required</sup> <a name="max_idle_duration_seconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.maxIdleDurationSeconds"></a>

```python
max_idle_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#max_idle_duration_seconds LambdamicrovmsMicrovm#max_idle_duration_seconds}.

---

##### `suspended_duration_seconds`<sup>Required</sup> <a name="suspended_duration_seconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.suspendedDurationSeconds"></a>

```python
suspended_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#suspended_duration_seconds LambdamicrovmsMicrovm#suspended_duration_seconds}.

---

### LambdamicrovmsMicrovmLogging <a name="LambdamicrovmsMicrovmLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging(
  cloudwatch: IResolvable | typing.List[LambdamicrovmsMicrovmLoggingCloudwatch] = None,
  disabled: IResolvable | typing.List[LambdamicrovmsMicrovmLoggingDisabled] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.cloudwatch">cloudwatch</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>]</code> | cloudwatch block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.disabled">disabled</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>]</code> | disabled block. |

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.cloudwatch"></a>

```python
cloudwatch: IResolvable | typing.List[LambdamicrovmsMicrovmLoggingCloudwatch]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>]

cloudwatch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#cloudwatch LambdamicrovmsMicrovm#cloudwatch}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.disabled"></a>

```python
disabled: IResolvable | typing.List[LambdamicrovmsMicrovmLoggingDisabled]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>]

disabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#disabled LambdamicrovmsMicrovm#disabled}

---

### LambdamicrovmsMicrovmLoggingCloudwatch <a name="LambdamicrovmsMicrovmLoggingCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch(
  log_group: str = None,
  log_stream: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logGroup">log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_group LambdamicrovmsMicrovm#log_group}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logStream">log_stream</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_stream LambdamicrovmsMicrovm#log_stream}. |

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_group LambdamicrovmsMicrovm#log_group}.

---

##### `log_stream`<sup>Optional</sup> <a name="log_stream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logStream"></a>

```python
log_stream: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_stream LambdamicrovmsMicrovm#log_stream}.

---

### LambdamicrovmsMicrovmLoggingDisabled <a name="LambdamicrovmsMicrovmLoggingDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled()
```


### LambdamicrovmsMicrovmTimeouts <a name="LambdamicrovmsMicrovmTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#create LambdamicrovmsMicrovm#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#delete LambdamicrovmsMicrovm#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdamicrovmsMicrovmIdlePolicyList <a name="LambdamicrovmsMicrovmIdlePolicyList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdamicrovmsMicrovmIdlePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdamicrovmsMicrovmIdlePolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>]

---


### LambdamicrovmsMicrovmIdlePolicyOutputReference <a name="LambdamicrovmsMicrovmIdlePolicyOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabledInput">auto_resume_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSecondsInput">max_idle_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSecondsInput">suspended_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabled">auto_resume_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSeconds">max_idle_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSeconds">suspended_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resume_enabled_input`<sup>Optional</sup> <a name="auto_resume_enabled_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabledInput"></a>

```python
auto_resume_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_idle_duration_seconds_input`<sup>Optional</sup> <a name="max_idle_duration_seconds_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSecondsInput"></a>

```python
max_idle_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspended_duration_seconds_input`<sup>Optional</sup> <a name="suspended_duration_seconds_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSecondsInput"></a>

```python
suspended_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_resume_enabled`<sup>Required</sup> <a name="auto_resume_enabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabled"></a>

```python
auto_resume_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_idle_duration_seconds`<sup>Required</sup> <a name="max_idle_duration_seconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSeconds"></a>

```python
max_idle_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspended_duration_seconds`<sup>Required</sup> <a name="suspended_duration_seconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSeconds"></a>

```python
suspended_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdamicrovmsMicrovmIdlePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>

---


### LambdamicrovmsMicrovmLoggingCloudwatchList <a name="LambdamicrovmsMicrovmLoggingCloudwatchList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdamicrovmsMicrovmLoggingCloudwatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdamicrovmsMicrovmLoggingCloudwatch]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>]

---


### LambdamicrovmsMicrovmLoggingCloudwatchOutputReference <a name="LambdamicrovmsMicrovmLoggingCloudwatchOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogStream">reset_log_stream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```

##### `reset_log_stream` <a name="reset_log_stream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogStream"></a>

```python
def reset_log_stream() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStreamInput">log_stream_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStream">log_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `log_stream_input`<sup>Optional</sup> <a name="log_stream_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStreamInput"></a>

```python
log_stream_input: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `log_stream`<sup>Required</sup> <a name="log_stream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStream"></a>

```python
log_stream: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdamicrovmsMicrovmLoggingCloudwatch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>

---


### LambdamicrovmsMicrovmLoggingDisabledList <a name="LambdamicrovmsMicrovmLoggingDisabledList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdamicrovmsMicrovmLoggingDisabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdamicrovmsMicrovmLoggingDisabled]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>]

---


### LambdamicrovmsMicrovmLoggingDisabledOutputReference <a name="LambdamicrovmsMicrovmLoggingDisabledOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdamicrovmsMicrovmLoggingDisabled
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>

---


### LambdamicrovmsMicrovmLoggingList <a name="LambdamicrovmsMicrovmLoggingList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdamicrovmsMicrovmLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdamicrovmsMicrovmLogging]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>]

---


### LambdamicrovmsMicrovmLoggingOutputReference <a name="LambdamicrovmsMicrovmLoggingOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch">put_cloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled">put_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetCloudwatch">reset_cloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch` <a name="put_cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch"></a>

```python
def put_cloudwatch(
  value: IResolvable | typing.List[LambdamicrovmsMicrovmLoggingCloudwatch]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>]

---

##### `put_disabled` <a name="put_disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled"></a>

```python
def put_disabled(
  value: IResolvable | typing.List[LambdamicrovmsMicrovmLoggingDisabled]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>]

---

##### `reset_cloudwatch` <a name="reset_cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetCloudwatch"></a>

```python
def reset_cloudwatch() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList">LambdamicrovmsMicrovmLoggingCloudwatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabled">disabled</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList">LambdamicrovmsMicrovmLoggingDisabledList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatchInput">cloudwatch_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabledInput">disabled_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatch"></a>

```python
cloudwatch: LambdamicrovmsMicrovmLoggingCloudwatchList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList">LambdamicrovmsMicrovmLoggingCloudwatchList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabled"></a>

```python
disabled: LambdamicrovmsMicrovmLoggingDisabledList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList">LambdamicrovmsMicrovmLoggingDisabledList</a>

---

##### `cloudwatch_input`<sup>Optional</sup> <a name="cloudwatch_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatchInput"></a>

```python
cloudwatch_input: IResolvable | typing.List[LambdamicrovmsMicrovmLoggingCloudwatch]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>]

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabledInput"></a>

```python
disabled_input: IResolvable | typing.List[LambdamicrovmsMicrovmLoggingDisabled]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdamicrovmsMicrovmLogging
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>

---


### LambdamicrovmsMicrovmTimeoutsOutputReference <a name="LambdamicrovmsMicrovmTimeoutsOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_microvm

lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdamicrovmsMicrovmTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---



