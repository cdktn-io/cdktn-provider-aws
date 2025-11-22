# `bedrockagentcoreAgentRuntime` Submodule <a name="`bedrockagentcoreAgentRuntime` Submodule" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreAgentRuntime <a name="BedrockagentcoreAgentRuntime" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime aws_bedrockagentcore_agent_runtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_runtime_name: str,
  role_arn: str,
  agent_runtime_artifact: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifact] = None,
  authorizer_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAuthorizerConfiguration] = None,
  description: str = None,
  environment_variables: typing.Mapping[str] = None,
  lifecycle_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeLifecycleConfiguration] = None,
  network_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeNetworkConfiguration] = None,
  protocol_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeProtocolConfiguration] = None,
  region: str = None,
  request_header_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeRequestHeaderConfiguration] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentcoreAgentRuntimeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.agentRuntimeName">agent_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_name BedrockagentcoreAgentRuntime#agent_runtime_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#role_arn BedrockagentcoreAgentRuntime#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.agentRuntimeArtifact">agent_runtime_artifact</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>]</code> | agent_runtime_artifact block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.authorizerConfiguration">authorizer_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>]</code> | authorizer_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#description BedrockagentcoreAgentRuntime#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#environment_variables BedrockagentcoreAgentRuntime#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.lifecycleConfiguration">lifecycle_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#lifecycle_configuration BedrockagentcoreAgentRuntime#lifecycle_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>]</code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.protocolConfiguration">protocol_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>]</code> | protocol_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.requestHeaderConfiguration">request_header_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>]</code> | request_header_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `agent_runtime_name`<sup>Required</sup> <a name="agent_runtime_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.agentRuntimeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_name BedrockagentcoreAgentRuntime#agent_runtime_name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#role_arn BedrockagentcoreAgentRuntime#role_arn}.

---

##### `agent_runtime_artifact`<sup>Optional</sup> <a name="agent_runtime_artifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.agentRuntimeArtifact"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>]

agent_runtime_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_artifact BedrockagentcoreAgentRuntime#agent_runtime_artifact}

---

##### `authorizer_configuration`<sup>Optional</sup> <a name="authorizer_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.authorizerConfiguration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>]

authorizer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#authorizer_configuration BedrockagentcoreAgentRuntime#authorizer_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#description BedrockagentcoreAgentRuntime#description}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#environment_variables BedrockagentcoreAgentRuntime#environment_variables}.

---

##### `lifecycle_configuration`<sup>Optional</sup> <a name="lifecycle_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.lifecycleConfiguration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#lifecycle_configuration BedrockagentcoreAgentRuntime#lifecycle_configuration}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.networkConfiguration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#network_configuration BedrockagentcoreAgentRuntime#network_configuration}

---

##### `protocol_configuration`<sup>Optional</sup> <a name="protocol_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.protocolConfiguration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>]

protocol_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#protocol_configuration BedrockagentcoreAgentRuntime#protocol_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#region BedrockagentcoreAgentRuntime#region}

---

##### `request_header_configuration`<sup>Optional</sup> <a name="request_header_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.requestHeaderConfiguration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>]

request_header_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#request_header_configuration BedrockagentcoreAgentRuntime#request_header_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#timeouts BedrockagentcoreAgentRuntime#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAgentRuntimeArtifact">put_agent_runtime_artifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAuthorizerConfiguration">put_authorizer_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putLifecycleConfiguration">put_lifecycle_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putProtocolConfiguration">put_protocol_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putRequestHeaderConfiguration">put_request_header_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetAgentRuntimeArtifact">reset_agent_runtime_artifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetAuthorizerConfiguration">reset_authorizer_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetLifecycleConfiguration">reset_lifecycle_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetProtocolConfiguration">reset_protocol_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetRequestHeaderConfiguration">reset_request_header_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_agent_runtime_artifact` <a name="put_agent_runtime_artifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAgentRuntimeArtifact"></a>

```python
def put_agent_runtime_artifact(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifact]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAgentRuntimeArtifact.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>]

---

##### `put_authorizer_configuration` <a name="put_authorizer_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAuthorizerConfiguration"></a>

```python
def put_authorizer_configuration(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAuthorizerConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>]

---

##### `put_lifecycle_configuration` <a name="put_lifecycle_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putLifecycleConfiguration"></a>

```python
def put_lifecycle_configuration(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeLifecycleConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putLifecycleConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>]

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeNetworkConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putNetworkConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>]

---

##### `put_protocol_configuration` <a name="put_protocol_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putProtocolConfiguration"></a>

```python
def put_protocol_configuration(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeProtocolConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putProtocolConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>]

---

##### `put_request_header_configuration` <a name="put_request_header_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putRequestHeaderConfiguration"></a>

```python
def put_request_header_configuration(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeRequestHeaderConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putRequestHeaderConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#create BedrockagentcoreAgentRuntime#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#delete BedrockagentcoreAgentRuntime#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#update BedrockagentcoreAgentRuntime#update}

---

##### `reset_agent_runtime_artifact` <a name="reset_agent_runtime_artifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetAgentRuntimeArtifact"></a>

```python
def reset_agent_runtime_artifact() -> None
```

##### `reset_authorizer_configuration` <a name="reset_authorizer_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetAuthorizerConfiguration"></a>

```python
def reset_authorizer_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_lifecycle_configuration` <a name="reset_lifecycle_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetLifecycleConfiguration"></a>

```python
def reset_lifecycle_configuration() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_protocol_configuration` <a name="reset_protocol_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetProtocolConfiguration"></a>

```python
def reset_protocol_configuration() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_request_header_configuration` <a name="reset_request_header_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetRequestHeaderConfiguration"></a>

```python
def reset_request_header_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockagentcoreAgentRuntime resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockagentcoreAgentRuntime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreAgentRuntime to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreAgentRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreAgentRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArn">agent_runtime_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArtifact">agent_runtime_artifact</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeId">agent_runtime_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeVersion">agent_runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.authorizerConfiguration">authorizer_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList">BedrockagentcoreAgentRuntimeAuthorizerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycleConfiguration">lifecycle_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList">BedrockagentcoreAgentRuntimeLifecycleConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList">BedrockagentcoreAgentRuntimeNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.protocolConfiguration">protocol_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList">BedrockagentcoreAgentRuntimeProtocolConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.requestHeaderConfiguration">request_header_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList">BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference">BedrockagentcoreAgentRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.workloadIdentityDetails">workload_identity_details</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList">BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArtifactInput">agent_runtime_artifact_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeNameInput">agent_runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.authorizerConfigurationInput">authorizer_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycleConfigurationInput">lifecycle_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.networkConfigurationInput">network_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.protocolConfigurationInput">protocol_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.requestHeaderConfigurationInput">request_header_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeName">agent_runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `agent_runtime_arn`<sup>Required</sup> <a name="agent_runtime_arn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArn"></a>

```python
agent_runtime_arn: str
```

- *Type:* str

---

##### `agent_runtime_artifact`<sup>Required</sup> <a name="agent_runtime_artifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArtifact"></a>

```python
agent_runtime_artifact: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList</a>

---

##### `agent_runtime_id`<sup>Required</sup> <a name="agent_runtime_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeId"></a>

```python
agent_runtime_id: str
```

- *Type:* str

---

##### `agent_runtime_version`<sup>Required</sup> <a name="agent_runtime_version" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeVersion"></a>

```python
agent_runtime_version: str
```

- *Type:* str

---

##### `authorizer_configuration`<sup>Required</sup> <a name="authorizer_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.authorizerConfiguration"></a>

```python
authorizer_configuration: BedrockagentcoreAgentRuntimeAuthorizerConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList">BedrockagentcoreAgentRuntimeAuthorizerConfigurationList</a>

---

##### `lifecycle_configuration`<sup>Required</sup> <a name="lifecycle_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycleConfiguration"></a>

```python
lifecycle_configuration: BedrockagentcoreAgentRuntimeLifecycleConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList">BedrockagentcoreAgentRuntimeLifecycleConfigurationList</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.networkConfiguration"></a>

```python
network_configuration: BedrockagentcoreAgentRuntimeNetworkConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList">BedrockagentcoreAgentRuntimeNetworkConfigurationList</a>

---

##### `protocol_configuration`<sup>Required</sup> <a name="protocol_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.protocolConfiguration"></a>

```python
protocol_configuration: BedrockagentcoreAgentRuntimeProtocolConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList">BedrockagentcoreAgentRuntimeProtocolConfigurationList</a>

---

##### `request_header_configuration`<sup>Required</sup> <a name="request_header_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.requestHeaderConfiguration"></a>

```python
request_header_configuration: BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList">BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.timeouts"></a>

```python
timeouts: BedrockagentcoreAgentRuntimeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference">BedrockagentcoreAgentRuntimeTimeoutsOutputReference</a>

---

##### `workload_identity_details`<sup>Required</sup> <a name="workload_identity_details" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.workloadIdentityDetails"></a>

```python
workload_identity_details: BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList">BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList</a>

---

##### `agent_runtime_artifact_input`<sup>Optional</sup> <a name="agent_runtime_artifact_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArtifactInput"></a>

```python
agent_runtime_artifact_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifact]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>]

---

##### `agent_runtime_name_input`<sup>Optional</sup> <a name="agent_runtime_name_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeNameInput"></a>

```python
agent_runtime_name_input: str
```

- *Type:* str

---

##### `authorizer_configuration_input`<sup>Optional</sup> <a name="authorizer_configuration_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.authorizerConfigurationInput"></a>

```python
authorizer_configuration_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAuthorizerConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lifecycle_configuration_input`<sup>Optional</sup> <a name="lifecycle_configuration_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycleConfigurationInput"></a>

```python
lifecycle_configuration_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeLifecycleConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>]

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.networkConfigurationInput"></a>

```python
network_configuration_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeNetworkConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>]

---

##### `protocol_configuration_input`<sup>Optional</sup> <a name="protocol_configuration_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.protocolConfigurationInput"></a>

```python
protocol_configuration_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeProtocolConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `request_header_configuration_input`<sup>Optional</sup> <a name="request_header_configuration_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.requestHeaderConfigurationInput"></a>

```python
request_header_configuration_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeRequestHeaderConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BedrockagentcoreAgentRuntimeTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a>

---

##### `agent_runtime_name`<sup>Required</sup> <a name="agent_runtime_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeName"></a>

```python
agent_runtime_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreAgentRuntimeAgentRuntimeArtifact <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact(
  code_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration] = None,
  container_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact.property.codeConfiguration">code_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration</a>]</code> | code_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact.property.containerConfiguration">container_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>]</code> | container_configuration block. |

---

##### `code_configuration`<sup>Optional</sup> <a name="code_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact.property.codeConfiguration"></a>

```python
code_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration</a>]

code_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#code_configuration BedrockagentcoreAgentRuntime#code_configuration}

---

##### `container_configuration`<sup>Optional</sup> <a name="container_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact.property.containerConfiguration"></a>

```python
container_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>]

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#container_configuration BedrockagentcoreAgentRuntime#container_configuration}

---

### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration(
  entry_point: typing.List[str],
  runtime: str,
  code: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration.property.entryPoint">entry_point</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#entry_point BedrockagentcoreAgentRuntime#entry_point}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration.property.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#runtime BedrockagentcoreAgentRuntime#runtime}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration.property.code">code</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>]</code> | code block. |

---

##### `entry_point`<sup>Required</sup> <a name="entry_point" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration.property.entryPoint"></a>

```python
entry_point: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#entry_point BedrockagentcoreAgentRuntime#entry_point}.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#runtime BedrockagentcoreAgentRuntime#runtime}.

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration.property.code"></a>

```python
code: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>]

code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#code BedrockagentcoreAgentRuntime#code}

---

### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode(
  s3: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode.property.s3">s3</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>]</code> | s3 block. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode.property.s3"></a>

```python
s3: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#s3 BedrockagentcoreAgentRuntime#s3}

---

### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3(
  bucket: str,
  prefix: str,
  version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#bucket BedrockagentcoreAgentRuntime#bucket}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#prefix BedrockagentcoreAgentRuntime#prefix}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#version_id BedrockagentcoreAgentRuntime#version_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#bucket BedrockagentcoreAgentRuntime#bucket}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#prefix BedrockagentcoreAgentRuntime#prefix}.

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#version_id BedrockagentcoreAgentRuntime#version_id}.

---

### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration(
  container_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration.property.containerUri">container_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#container_uri BedrockagentcoreAgentRuntime#container_uri}. |

---

##### `container_uri`<sup>Required</sup> <a name="container_uri" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration.property.containerUri"></a>

```python
container_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#container_uri BedrockagentcoreAgentRuntime#container_uri}.

---

### BedrockagentcoreAgentRuntimeAuthorizerConfiguration <a name="BedrockagentcoreAgentRuntimeAuthorizerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration(
  custom_jwt_authorizer: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration.property.customJwtAuthorizer">custom_jwt_authorizer</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>]</code> | custom_jwt_authorizer block. |

---

##### `custom_jwt_authorizer`<sup>Optional</sup> <a name="custom_jwt_authorizer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```python
custom_jwt_authorizer: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>]

custom_jwt_authorizer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#custom_jwt_authorizer BedrockagentcoreAgentRuntime#custom_jwt_authorizer}

---

### BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer(
  discovery_url: str,
  allowed_audience: typing.List[str] = None,
  allowed_clients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#discovery_url BedrockagentcoreAgentRuntime#discovery_url}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">allowed_audience</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#allowed_audience BedrockagentcoreAgentRuntime#allowed_audience}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">allowed_clients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#allowed_clients BedrockagentcoreAgentRuntime#allowed_clients}. |

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#discovery_url BedrockagentcoreAgentRuntime#discovery_url}.

---

##### `allowed_audience`<sup>Optional</sup> <a name="allowed_audience" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```python
allowed_audience: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#allowed_audience BedrockagentcoreAgentRuntime#allowed_audience}.

---

##### `allowed_clients`<sup>Optional</sup> <a name="allowed_clients" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```python
allowed_clients: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#allowed_clients BedrockagentcoreAgentRuntime#allowed_clients}.

---

### BedrockagentcoreAgentRuntimeConfig <a name="BedrockagentcoreAgentRuntimeConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_runtime_name: str,
  role_arn: str,
  agent_runtime_artifact: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifact] = None,
  authorizer_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAuthorizerConfiguration] = None,
  description: str = None,
  environment_variables: typing.Mapping[str] = None,
  lifecycle_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeLifecycleConfiguration] = None,
  network_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeNetworkConfiguration] = None,
  protocol_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeProtocolConfiguration] = None,
  region: str = None,
  request_header_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeRequestHeaderConfiguration] = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentcoreAgentRuntimeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.agentRuntimeName">agent_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_name BedrockagentcoreAgentRuntime#agent_runtime_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#role_arn BedrockagentcoreAgentRuntime#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.agentRuntimeArtifact">agent_runtime_artifact</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>]</code> | agent_runtime_artifact block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.authorizerConfiguration">authorizer_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>]</code> | authorizer_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#description BedrockagentcoreAgentRuntime#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#environment_variables BedrockagentcoreAgentRuntime#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.lifecycleConfiguration">lifecycle_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#lifecycle_configuration BedrockagentcoreAgentRuntime#lifecycle_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.networkConfiguration">network_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>]</code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.protocolConfiguration">protocol_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>]</code> | protocol_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.requestHeaderConfiguration">request_header_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>]</code> | request_header_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `agent_runtime_name`<sup>Required</sup> <a name="agent_runtime_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.agentRuntimeName"></a>

```python
agent_runtime_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_name BedrockagentcoreAgentRuntime#agent_runtime_name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#role_arn BedrockagentcoreAgentRuntime#role_arn}.

---

##### `agent_runtime_artifact`<sup>Optional</sup> <a name="agent_runtime_artifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.agentRuntimeArtifact"></a>

```python
agent_runtime_artifact: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifact]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>]

agent_runtime_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_artifact BedrockagentcoreAgentRuntime#agent_runtime_artifact}

---

##### `authorizer_configuration`<sup>Optional</sup> <a name="authorizer_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.authorizerConfiguration"></a>

```python
authorizer_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAuthorizerConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>]

authorizer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#authorizer_configuration BedrockagentcoreAgentRuntime#authorizer_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#description BedrockagentcoreAgentRuntime#description}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#environment_variables BedrockagentcoreAgentRuntime#environment_variables}.

---

##### `lifecycle_configuration`<sup>Optional</sup> <a name="lifecycle_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.lifecycleConfiguration"></a>

```python
lifecycle_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeLifecycleConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#lifecycle_configuration BedrockagentcoreAgentRuntime#lifecycle_configuration}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.networkConfiguration"></a>

```python
network_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeNetworkConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#network_configuration BedrockagentcoreAgentRuntime#network_configuration}

---

##### `protocol_configuration`<sup>Optional</sup> <a name="protocol_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.protocolConfiguration"></a>

```python
protocol_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeProtocolConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>]

protocol_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#protocol_configuration BedrockagentcoreAgentRuntime#protocol_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#region BedrockagentcoreAgentRuntime#region}

---

##### `request_header_configuration`<sup>Optional</sup> <a name="request_header_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.requestHeaderConfiguration"></a>

```python
request_header_configuration: IResolvable | typing.List[BedrockagentcoreAgentRuntimeRequestHeaderConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>]

request_header_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#request_header_configuration BedrockagentcoreAgentRuntime#request_header_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.timeouts"></a>

```python
timeouts: BedrockagentcoreAgentRuntimeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#timeouts BedrockagentcoreAgentRuntime#timeouts}

---

### BedrockagentcoreAgentRuntimeLifecycleConfiguration <a name="BedrockagentcoreAgentRuntimeLifecycleConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration(
  idle_runtime_session_timeout: typing.Union[int, float] = None,
  max_lifetime: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration.property.idleRuntimeSessionTimeout">idle_runtime_session_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#idle_runtime_session_timeout BedrockagentcoreAgentRuntime#idle_runtime_session_timeout}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration.property.maxLifetime">max_lifetime</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#max_lifetime BedrockagentcoreAgentRuntime#max_lifetime}. |

---

##### `idle_runtime_session_timeout`<sup>Optional</sup> <a name="idle_runtime_session_timeout" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration.property.idleRuntimeSessionTimeout"></a>

```python
idle_runtime_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#idle_runtime_session_timeout BedrockagentcoreAgentRuntime#idle_runtime_session_timeout}.

---

##### `max_lifetime`<sup>Optional</sup> <a name="max_lifetime" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration.property.maxLifetime"></a>

```python
max_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#max_lifetime BedrockagentcoreAgentRuntime#max_lifetime}.

---

### BedrockagentcoreAgentRuntimeNetworkConfiguration <a name="BedrockagentcoreAgentRuntimeNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration(
  network_mode: str,
  network_mode_config: IResolvable | typing.List[BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration.property.networkMode">network_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#network_mode BedrockagentcoreAgentRuntime#network_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration.property.networkModeConfig">network_mode_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>]</code> | network_mode_config block. |

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#network_mode BedrockagentcoreAgentRuntime#network_mode}.

---

##### `network_mode_config`<sup>Optional</sup> <a name="network_mode_config" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration.property.networkModeConfig"></a>

```python
network_mode_config: IResolvable | typing.List[BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>]

network_mode_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#network_mode_config BedrockagentcoreAgentRuntime#network_mode_config}

---

### BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig <a name="BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig(
  security_groups: typing.List[str],
  subnets: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#security_groups BedrockagentcoreAgentRuntime#security_groups}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#subnets BedrockagentcoreAgentRuntime#subnets}. |

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#security_groups BedrockagentcoreAgentRuntime#security_groups}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#subnets BedrockagentcoreAgentRuntime#subnets}.

---

### BedrockagentcoreAgentRuntimeProtocolConfiguration <a name="BedrockagentcoreAgentRuntimeProtocolConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration(
  server_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration.property.serverProtocol">server_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#server_protocol BedrockagentcoreAgentRuntime#server_protocol}. |

---

##### `server_protocol`<sup>Optional</sup> <a name="server_protocol" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration.property.serverProtocol"></a>

```python
server_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#server_protocol BedrockagentcoreAgentRuntime#server_protocol}.

---

### BedrockagentcoreAgentRuntimeRequestHeaderConfiguration <a name="BedrockagentcoreAgentRuntimeRequestHeaderConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration(
  request_header_allowlist: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration.property.requestHeaderAllowlist">request_header_allowlist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#request_header_allowlist BedrockagentcoreAgentRuntime#request_header_allowlist}. |

---

##### `request_header_allowlist`<sup>Optional</sup> <a name="request_header_allowlist" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration.property.requestHeaderAllowlist"></a>

```python
request_header_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#request_header_allowlist BedrockagentcoreAgentRuntime#request_header_allowlist}.

---

### BedrockagentcoreAgentRuntimeTimeouts <a name="BedrockagentcoreAgentRuntimeTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#create BedrockagentcoreAgentRuntime#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#delete BedrockagentcoreAgentRuntime#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_agent_runtime#update BedrockagentcoreAgentRuntime#update}

---

### BedrockagentcoreAgentRuntimeWorkloadIdentityDetails <a name="BedrockagentcoreAgentRuntimeWorkloadIdentityDetails" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>]

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.putS3"></a>

```python
def put_s3(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.putS3.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>]

---

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3Input">s3_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3"></a>

```python
s3: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3List.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>]

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetVersionId">reset_version_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version_id` <a name="reset_version_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.resetVersionId"></a>

```python
def reset_version_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3</a>

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration</a>]

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.putCode">put_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetCode">reset_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code` <a name="put_code" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.putCode"></a>

```python
def put_code(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.putCode.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>]

---

##### `reset_code` <a name="reset_code" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.resetCode"></a>

```python
def reset_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.code">code</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.codeInput">code_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPointInput">entry_point_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPoint">entry_point</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.code"></a>

```python
code: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCodeList</a>

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.codeInput"></a>

```python
code_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationCode</a>]

---

##### `entry_point_input`<sup>Optional</sup> <a name="entry_point_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPointInput"></a>

```python
entry_point_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `entry_point`<sup>Required</sup> <a name="entry_point" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.entryPoint"></a>

```python
entry_point: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration</a>

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>]

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUriInput">container_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUri">container_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_uri_input`<sup>Optional</sup> <a name="container_uri_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUriInput"></a>

```python
container_uri_input: str
```

- *Type:* str

---

##### `container_uri`<sup>Required</sup> <a name="container_uri" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUri"></a>

```python
container_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifact]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>]

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.putCodeConfiguration">put_code_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration">put_container_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resetCodeConfiguration">reset_code_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resetContainerConfiguration">reset_container_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_configuration` <a name="put_code_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.putCodeConfiguration"></a>

```python
def put_code_configuration(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration</a>]

---

##### `put_container_configuration` <a name="put_container_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration"></a>

```python
def put_container_configuration(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>]

---

##### `reset_code_configuration` <a name="reset_code_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resetCodeConfiguration"></a>

```python
def reset_code_configuration() -> None
```

##### `reset_container_configuration` <a name="reset_container_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resetContainerConfiguration"></a>

```python
def reset_container_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.codeConfiguration">code_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.containerConfiguration">container_configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.codeConfigurationInput">code_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.containerConfigurationInput">container_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_configuration`<sup>Required</sup> <a name="code_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.codeConfiguration"></a>

```python
code_configuration: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfigurationList</a>

---

##### `container_configuration`<sup>Required</sup> <a name="container_configuration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.containerConfiguration"></a>

```python
container_configuration: BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList</a>

---

##### `code_configuration_input`<sup>Optional</sup> <a name="code_configuration_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.codeConfigurationInput"></a>

```python
code_configuration_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactCodeConfiguration</a>]

---

##### `container_configuration_input`<sup>Optional</sup> <a name="container_configuration_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.containerConfigurationInput"></a>

```python
container_configuration_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeAgentRuntimeArtifact
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>

---


### BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList <a name="BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>]

---


### BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">reset_allowed_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">reset_allowed_clients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_audience` <a name="reset_allowed_audience" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```python
def reset_allowed_audience() -> None
```

##### `reset_allowed_clients` <a name="reset_allowed_clients" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```python
def reset_allowed_clients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">allowed_audience_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">allowed_clients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">discovery_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">allowed_audience</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">allowed_clients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audience_input`<sup>Optional</sup> <a name="allowed_audience_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```python
allowed_audience_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_clients_input`<sup>Optional</sup> <a name="allowed_clients_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```python
allowed_clients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_url_input`<sup>Optional</sup> <a name="discovery_url_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```python
discovery_url_input: str
```

- *Type:* str

---

##### `allowed_audience`<sup>Required</sup> <a name="allowed_audience" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```python
allowed_audience: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_clients`<sup>Required</sup> <a name="allowed_clients" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```python
allowed_clients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcoreAgentRuntimeAuthorizerConfigurationList <a name="BedrockagentcoreAgentRuntimeAuthorizerConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAuthorizerConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>]

---


### BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">put_custom_jwt_authorizer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">reset_custom_jwt_authorizer</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_jwt_authorizer` <a name="put_custom_jwt_authorizer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```python
def put_custom_jwt_authorizer(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>]

---

##### `reset_custom_jwt_authorizer` <a name="reset_custom_jwt_authorizer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```python
def reset_custom_jwt_authorizer() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">custom_jwt_authorizer</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">custom_jwt_authorizer_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_jwt_authorizer`<sup>Required</sup> <a name="custom_jwt_authorizer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```python
custom_jwt_authorizer: BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList</a>

---

##### `custom_jwt_authorizer_input`<sup>Optional</sup> <a name="custom_jwt_authorizer_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```python
custom_jwt_authorizer_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeAuthorizerConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>

---


### BedrockagentcoreAgentRuntimeLifecycleConfigurationList <a name="BedrockagentcoreAgentRuntimeLifecycleConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeLifecycleConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>]

---


### BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout">reset_idle_runtime_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resetMaxLifetime">reset_max_lifetime</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_runtime_session_timeout` <a name="reset_idle_runtime_session_timeout" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout"></a>

```python
def reset_idle_runtime_session_timeout() -> None
```

##### `reset_max_lifetime` <a name="reset_max_lifetime" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resetMaxLifetime"></a>

```python
def reset_max_lifetime() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput">idle_runtime_session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.maxLifetimeInput">max_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout">idle_runtime_session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.maxLifetime">max_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_runtime_session_timeout_input`<sup>Optional</sup> <a name="idle_runtime_session_timeout_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput"></a>

```python
idle_runtime_session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_lifetime_input`<sup>Optional</sup> <a name="max_lifetime_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.maxLifetimeInput"></a>

```python
max_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_runtime_session_timeout`<sup>Required</sup> <a name="idle_runtime_session_timeout" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout"></a>

```python
idle_runtime_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_lifetime`<sup>Required</sup> <a name="max_lifetime" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.maxLifetime"></a>

```python
max_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeLifecycleConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>

---


### BedrockagentcoreAgentRuntimeNetworkConfigurationList <a name="BedrockagentcoreAgentRuntimeNetworkConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeNetworkConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>]

---


### BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList <a name="BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>]

---


### BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference <a name="BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>

---


### BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig">put_network_mode_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.resetNetworkModeConfig">reset_network_mode_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_mode_config` <a name="put_network_mode_config" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig"></a>

```python
def put_network_mode_config(
  value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>]

---

##### `reset_network_mode_config` <a name="reset_network_mode_config" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.resetNetworkModeConfig"></a>

```python
def reset_network_mode_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeConfig">network_mode_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeConfigInput">network_mode_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeInput">network_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkMode">network_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_mode_config`<sup>Required</sup> <a name="network_mode_config" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeConfig"></a>

```python
network_mode_config: BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList</a>

---

##### `network_mode_config_input`<sup>Optional</sup> <a name="network_mode_config_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeConfigInput"></a>

```python
network_mode_config_input: IResolvable | typing.List[BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>]

---

##### `network_mode_input`<sup>Optional</sup> <a name="network_mode_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeInput"></a>

```python
network_mode_input: str
```

- *Type:* str

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeNetworkConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>

---


### BedrockagentcoreAgentRuntimeProtocolConfigurationList <a name="BedrockagentcoreAgentRuntimeProtocolConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeProtocolConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>]

---


### BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.resetServerProtocol">reset_server_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_server_protocol` <a name="reset_server_protocol" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.resetServerProtocol"></a>

```python
def reset_server_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.serverProtocolInput">server_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.serverProtocol">server_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_protocol_input`<sup>Optional</sup> <a name="server_protocol_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.serverProtocolInput"></a>

```python
server_protocol_input: str
```

- *Type:* str

---

##### `server_protocol`<sup>Required</sup> <a name="server_protocol" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.serverProtocol"></a>

```python
server_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeProtocolConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>

---


### BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList <a name="BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreAgentRuntimeRequestHeaderConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>]

---


### BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.resetRequestHeaderAllowlist">reset_request_header_allowlist</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_request_header_allowlist` <a name="reset_request_header_allowlist" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.resetRequestHeaderAllowlist"></a>

```python
def reset_request_header_allowlist() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlistInput">request_header_allowlist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlist">request_header_allowlist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_header_allowlist_input`<sup>Optional</sup> <a name="request_header_allowlist_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlistInput"></a>

```python
request_header_allowlist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_header_allowlist`<sup>Required</sup> <a name="request_header_allowlist" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlist"></a>

```python
request_header_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeRequestHeaderConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>

---


### BedrockagentcoreAgentRuntimeTimeoutsOutputReference <a name="BedrockagentcoreAgentRuntimeTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreAgentRuntimeTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a>

---


### BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList <a name="BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference <a name="BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_agent_runtime

bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn">workload_identity_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetails">BedrockagentcoreAgentRuntimeWorkloadIdentityDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workload_identity_arn`<sup>Required</sup> <a name="workload_identity_arn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn"></a>

```python
workload_identity_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreAgentRuntimeWorkloadIdentityDetails
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetails">BedrockagentcoreAgentRuntimeWorkloadIdentityDetails</a>

---



