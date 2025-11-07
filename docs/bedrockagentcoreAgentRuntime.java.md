# `bedrockagentcoreAgentRuntime` Submodule <a name="`bedrockagentcoreAgentRuntime` Submodule" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreAgentRuntime <a name="BedrockagentcoreAgentRuntime" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime aws_bedrockagentcore_agent_runtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntime;

BedrockagentcoreAgentRuntime.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentRuntimeName(java.lang.String)
    .roleArn(java.lang.String)
//  .agentRuntimeArtifact(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAgentRuntimeArtifact>)
//  .authorizerConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAuthorizerConfiguration>)
//  .description(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .lifecycleConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeLifecycleConfiguration>)
//  .networkConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeNetworkConfiguration>)
//  .protocolConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeProtocolConfiguration>)
//  .region(java.lang.String)
//  .requestHeaderConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeRequestHeaderConfiguration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockagentcoreAgentRuntimeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.agentRuntimeName">agentRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_name BedrockagentcoreAgentRuntime#agent_runtime_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#role_arn BedrockagentcoreAgentRuntime#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.agentRuntimeArtifact">agentRuntimeArtifact</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>></code> | agent_runtime_artifact block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.authorizerConfiguration">authorizerConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>></code> | authorizer_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#description BedrockagentcoreAgentRuntime#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#environment_variables BedrockagentcoreAgentRuntime#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#lifecycle_configuration BedrockagentcoreAgentRuntime#lifecycle_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.protocolConfiguration">protocolConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>></code> | protocol_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.requestHeaderConfiguration">requestHeaderConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>></code> | request_header_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentRuntimeName`<sup>Required</sup> <a name="agentRuntimeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.agentRuntimeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_name BedrockagentcoreAgentRuntime#agent_runtime_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#role_arn BedrockagentcoreAgentRuntime#role_arn}.

---

##### `agentRuntimeArtifact`<sup>Optional</sup> <a name="agentRuntimeArtifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.agentRuntimeArtifact"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>>

agent_runtime_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_artifact BedrockagentcoreAgentRuntime#agent_runtime_artifact}

---

##### `authorizerConfiguration`<sup>Optional</sup> <a name="authorizerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.authorizerConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>>

authorizer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#authorizer_configuration BedrockagentcoreAgentRuntime#authorizer_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#description BedrockagentcoreAgentRuntime#description}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.environmentVariables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#environment_variables BedrockagentcoreAgentRuntime#environment_variables}.

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.lifecycleConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#lifecycle_configuration BedrockagentcoreAgentRuntime#lifecycle_configuration}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.networkConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#network_configuration BedrockagentcoreAgentRuntime#network_configuration}

---

##### `protocolConfiguration`<sup>Optional</sup> <a name="protocolConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.protocolConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>>

protocol_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#protocol_configuration BedrockagentcoreAgentRuntime#protocol_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#region BedrockagentcoreAgentRuntime#region}

---

##### `requestHeaderConfiguration`<sup>Optional</sup> <a name="requestHeaderConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.requestHeaderConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>>

request_header_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#request_header_configuration BedrockagentcoreAgentRuntime#request_header_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#timeouts BedrockagentcoreAgentRuntime#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAgentRuntimeArtifact">putAgentRuntimeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAuthorizerConfiguration">putAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putLifecycleConfiguration">putLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putProtocolConfiguration">putProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putRequestHeaderConfiguration">putRequestHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetAgentRuntimeArtifact">resetAgentRuntimeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetAuthorizerConfiguration">resetAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetLifecycleConfiguration">resetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetProtocolConfiguration">resetProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetRequestHeaderConfiguration">resetRequestHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAgentRuntimeArtifact` <a name="putAgentRuntimeArtifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAgentRuntimeArtifact"></a>

```java
public void putAgentRuntimeArtifact(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAgentRuntimeArtifact> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAgentRuntimeArtifact.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>>

---

##### `putAuthorizerConfiguration` <a name="putAuthorizerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAuthorizerConfiguration"></a>

```java
public void putAuthorizerConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAuthorizerConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>>

---

##### `putLifecycleConfiguration` <a name="putLifecycleConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putLifecycleConfiguration"></a>

```java
public void putLifecycleConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeLifecycleConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putLifecycleConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeNetworkConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putNetworkConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>>

---

##### `putProtocolConfiguration` <a name="putProtocolConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putProtocolConfiguration"></a>

```java
public void putProtocolConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeProtocolConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putProtocolConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>>

---

##### `putRequestHeaderConfiguration` <a name="putRequestHeaderConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putRequestHeaderConfiguration"></a>

```java
public void putRequestHeaderConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeRequestHeaderConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putRequestHeaderConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putTimeouts"></a>

```java
public void putTimeouts(BedrockagentcoreAgentRuntimeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a>

---

##### `resetAgentRuntimeArtifact` <a name="resetAgentRuntimeArtifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetAgentRuntimeArtifact"></a>

```java
public void resetAgentRuntimeArtifact()
```

##### `resetAuthorizerConfiguration` <a name="resetAuthorizerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetAuthorizerConfiguration"></a>

```java
public void resetAuthorizerConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetLifecycleConfiguration` <a name="resetLifecycleConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetLifecycleConfiguration"></a>

```java
public void resetLifecycleConfiguration()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetProtocolConfiguration` <a name="resetProtocolConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetProtocolConfiguration"></a>

```java
public void resetProtocolConfiguration()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRequestHeaderConfiguration` <a name="resetRequestHeaderConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetRequestHeaderConfiguration"></a>

```java
public void resetRequestHeaderConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreAgentRuntime resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntime;

BedrockagentcoreAgentRuntime.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntime;

BedrockagentcoreAgentRuntime.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntime;

BedrockagentcoreAgentRuntime.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntime;

BedrockagentcoreAgentRuntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreAgentRuntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BedrockagentcoreAgentRuntime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreAgentRuntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreAgentRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreAgentRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArn">agentRuntimeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArtifact">agentRuntimeArtifact</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeId">agentRuntimeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeVersion">agentRuntimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList">BedrockagentcoreAgentRuntimeAuthorizerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList">BedrockagentcoreAgentRuntimeLifecycleConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList">BedrockagentcoreAgentRuntimeNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.protocolConfiguration">protocolConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList">BedrockagentcoreAgentRuntimeProtocolConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.requestHeaderConfiguration">requestHeaderConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList">BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference">BedrockagentcoreAgentRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.workloadIdentityDetails">workloadIdentityDetails</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList">BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArtifactInput">agentRuntimeArtifactInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeNameInput">agentRuntimeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.authorizerConfigurationInput">authorizerConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycleConfigurationInput">lifecycleConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.protocolConfigurationInput">protocolConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.requestHeaderConfigurationInput">requestHeaderConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeName">agentRuntimeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentRuntimeArn`<sup>Required</sup> <a name="agentRuntimeArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArn"></a>

```java
public java.lang.String getAgentRuntimeArn();
```

- *Type:* java.lang.String

---

##### `agentRuntimeArtifact`<sup>Required</sup> <a name="agentRuntimeArtifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArtifact"></a>

```java
public BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList getAgentRuntimeArtifact();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList</a>

---

##### `agentRuntimeId`<sup>Required</sup> <a name="agentRuntimeId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeId"></a>

```java
public java.lang.String getAgentRuntimeId();
```

- *Type:* java.lang.String

---

##### `agentRuntimeVersion`<sup>Required</sup> <a name="agentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeVersion"></a>

```java
public java.lang.String getAgentRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `authorizerConfiguration`<sup>Required</sup> <a name="authorizerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.authorizerConfiguration"></a>

```java
public BedrockagentcoreAgentRuntimeAuthorizerConfigurationList getAuthorizerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList">BedrockagentcoreAgentRuntimeAuthorizerConfigurationList</a>

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycleConfiguration"></a>

```java
public BedrockagentcoreAgentRuntimeLifecycleConfigurationList getLifecycleConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList">BedrockagentcoreAgentRuntimeLifecycleConfigurationList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.networkConfiguration"></a>

```java
public BedrockagentcoreAgentRuntimeNetworkConfigurationList getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList">BedrockagentcoreAgentRuntimeNetworkConfigurationList</a>

---

##### `protocolConfiguration`<sup>Required</sup> <a name="protocolConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.protocolConfiguration"></a>

```java
public BedrockagentcoreAgentRuntimeProtocolConfigurationList getProtocolConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList">BedrockagentcoreAgentRuntimeProtocolConfigurationList</a>

---

##### `requestHeaderConfiguration`<sup>Required</sup> <a name="requestHeaderConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.requestHeaderConfiguration"></a>

```java
public BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList getRequestHeaderConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList">BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.timeouts"></a>

```java
public BedrockagentcoreAgentRuntimeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference">BedrockagentcoreAgentRuntimeTimeoutsOutputReference</a>

---

##### `workloadIdentityDetails`<sup>Required</sup> <a name="workloadIdentityDetails" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.workloadIdentityDetails"></a>

```java
public BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList getWorkloadIdentityDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList">BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList</a>

---

##### `agentRuntimeArtifactInput`<sup>Optional</sup> <a name="agentRuntimeArtifactInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeArtifactInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAgentRuntimeArtifact> getAgentRuntimeArtifactInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>>

---

##### `agentRuntimeNameInput`<sup>Optional</sup> <a name="agentRuntimeNameInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeNameInput"></a>

```java
public java.lang.String getAgentRuntimeNameInput();
```

- *Type:* java.lang.String

---

##### `authorizerConfigurationInput`<sup>Optional</sup> <a name="authorizerConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.authorizerConfigurationInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAuthorizerConfiguration> getAuthorizerConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lifecycleConfigurationInput`<sup>Optional</sup> <a name="lifecycleConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.lifecycleConfigurationInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeLifecycleConfiguration> getLifecycleConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>>

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.networkConfigurationInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeNetworkConfiguration> getNetworkConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>>

---

##### `protocolConfigurationInput`<sup>Optional</sup> <a name="protocolConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.protocolConfigurationInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeProtocolConfiguration> getProtocolConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `requestHeaderConfigurationInput`<sup>Optional</sup> <a name="requestHeaderConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.requestHeaderConfigurationInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeRequestHeaderConfiguration> getRequestHeaderConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.timeoutsInput"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a>

---

##### `agentRuntimeName`<sup>Required</sup> <a name="agentRuntimeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.agentRuntimeName"></a>

```java
public java.lang.String getAgentRuntimeName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntime.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreAgentRuntimeAgentRuntimeArtifact <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact;

BedrockagentcoreAgentRuntimeAgentRuntimeArtifact.builder()
//  .containerConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact.property.containerConfiguration">containerConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>></code> | container_configuration block. |

---

##### `containerConfiguration`<sup>Optional</sup> <a name="containerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact.property.containerConfiguration"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration> getContainerConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#container_configuration BedrockagentcoreAgentRuntime#container_configuration}

---

### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration;

BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration.builder()
    .containerUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration.property.containerUri">containerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#container_uri BedrockagentcoreAgentRuntime#container_uri}. |

---

##### `containerUri`<sup>Required</sup> <a name="containerUri" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration.property.containerUri"></a>

```java
public java.lang.String getContainerUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#container_uri BedrockagentcoreAgentRuntime#container_uri}.

---

### BedrockagentcoreAgentRuntimeAuthorizerConfiguration <a name="BedrockagentcoreAgentRuntimeAuthorizerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration;

BedrockagentcoreAgentRuntimeAuthorizerConfiguration.builder()
//  .customJwtAuthorizer(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>></code> | custom_jwt_authorizer block. |

---

##### `customJwtAuthorizer`<sup>Optional</sup> <a name="customJwtAuthorizer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer> getCustomJwtAuthorizer();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>>

custom_jwt_authorizer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#custom_jwt_authorizer BedrockagentcoreAgentRuntime#custom_jwt_authorizer}

---

### BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer;

BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.builder()
    .discoveryUrl(java.lang.String)
//  .allowedAudience(java.util.List<java.lang.String>)
//  .allowedClients(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#discovery_url BedrockagentcoreAgentRuntime#discovery_url}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">allowedAudience</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#allowed_audience BedrockagentcoreAgentRuntime#allowed_audience}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">allowedClients</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#allowed_clients BedrockagentcoreAgentRuntime#allowed_clients}. |

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#discovery_url BedrockagentcoreAgentRuntime#discovery_url}.

---

##### `allowedAudience`<sup>Optional</sup> <a name="allowedAudience" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```java
public java.util.List<java.lang.String> getAllowedAudience();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#allowed_audience BedrockagentcoreAgentRuntime#allowed_audience}.

---

##### `allowedClients`<sup>Optional</sup> <a name="allowedClients" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```java
public java.util.List<java.lang.String> getAllowedClients();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#allowed_clients BedrockagentcoreAgentRuntime#allowed_clients}.

---

### BedrockagentcoreAgentRuntimeConfig <a name="BedrockagentcoreAgentRuntimeConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeConfig;

BedrockagentcoreAgentRuntimeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentRuntimeName(java.lang.String)
    .roleArn(java.lang.String)
//  .agentRuntimeArtifact(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAgentRuntimeArtifact>)
//  .authorizerConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAuthorizerConfiguration>)
//  .description(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .lifecycleConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeLifecycleConfiguration>)
//  .networkConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeNetworkConfiguration>)
//  .protocolConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeProtocolConfiguration>)
//  .region(java.lang.String)
//  .requestHeaderConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeRequestHeaderConfiguration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockagentcoreAgentRuntimeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.agentRuntimeName">agentRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_name BedrockagentcoreAgentRuntime#agent_runtime_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#role_arn BedrockagentcoreAgentRuntime#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.agentRuntimeArtifact">agentRuntimeArtifact</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>></code> | agent_runtime_artifact block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>></code> | authorizer_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#description BedrockagentcoreAgentRuntime#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#environment_variables BedrockagentcoreAgentRuntime#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#lifecycle_configuration BedrockagentcoreAgentRuntime#lifecycle_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.networkConfiguration">networkConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.protocolConfiguration">protocolConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>></code> | protocol_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.requestHeaderConfiguration">requestHeaderConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>></code> | request_header_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentRuntimeName`<sup>Required</sup> <a name="agentRuntimeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.agentRuntimeName"></a>

```java
public java.lang.String getAgentRuntimeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_name BedrockagentcoreAgentRuntime#agent_runtime_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#role_arn BedrockagentcoreAgentRuntime#role_arn}.

---

##### `agentRuntimeArtifact`<sup>Optional</sup> <a name="agentRuntimeArtifact" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.agentRuntimeArtifact"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAgentRuntimeArtifact> getAgentRuntimeArtifact();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>>

agent_runtime_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#agent_runtime_artifact BedrockagentcoreAgentRuntime#agent_runtime_artifact}

---

##### `authorizerConfiguration`<sup>Optional</sup> <a name="authorizerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.authorizerConfiguration"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAuthorizerConfiguration> getAuthorizerConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>>

authorizer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#authorizer_configuration BedrockagentcoreAgentRuntime#authorizer_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#description BedrockagentcoreAgentRuntime#description}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#environment_variables BedrockagentcoreAgentRuntime#environment_variables}.

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.lifecycleConfiguration"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeLifecycleConfiguration> getLifecycleConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#lifecycle_configuration BedrockagentcoreAgentRuntime#lifecycle_configuration}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.networkConfiguration"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeNetworkConfiguration> getNetworkConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#network_configuration BedrockagentcoreAgentRuntime#network_configuration}

---

##### `protocolConfiguration`<sup>Optional</sup> <a name="protocolConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.protocolConfiguration"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeProtocolConfiguration> getProtocolConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>>

protocol_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#protocol_configuration BedrockagentcoreAgentRuntime#protocol_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#region BedrockagentcoreAgentRuntime#region}

---

##### `requestHeaderConfiguration`<sup>Optional</sup> <a name="requestHeaderConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.requestHeaderConfiguration"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeRequestHeaderConfiguration> getRequestHeaderConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>>

request_header_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#request_header_configuration BedrockagentcoreAgentRuntime#request_header_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#tags BedrockagentcoreAgentRuntime#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeConfig.property.timeouts"></a>

```java
public BedrockagentcoreAgentRuntimeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#timeouts BedrockagentcoreAgentRuntime#timeouts}

---

### BedrockagentcoreAgentRuntimeLifecycleConfiguration <a name="BedrockagentcoreAgentRuntimeLifecycleConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeLifecycleConfiguration;

BedrockagentcoreAgentRuntimeLifecycleConfiguration.builder()
//  .idleRuntimeSessionTimeout(java.lang.Number)
//  .maxLifetime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration.property.idleRuntimeSessionTimeout">idleRuntimeSessionTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#idle_runtime_session_timeout BedrockagentcoreAgentRuntime#idle_runtime_session_timeout}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration.property.maxLifetime">maxLifetime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#max_lifetime BedrockagentcoreAgentRuntime#max_lifetime}. |

---

##### `idleRuntimeSessionTimeout`<sup>Optional</sup> <a name="idleRuntimeSessionTimeout" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration.property.idleRuntimeSessionTimeout"></a>

```java
public java.lang.Number getIdleRuntimeSessionTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#idle_runtime_session_timeout BedrockagentcoreAgentRuntime#idle_runtime_session_timeout}.

---

##### `maxLifetime`<sup>Optional</sup> <a name="maxLifetime" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration.property.maxLifetime"></a>

```java
public java.lang.Number getMaxLifetime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#max_lifetime BedrockagentcoreAgentRuntime#max_lifetime}.

---

### BedrockagentcoreAgentRuntimeNetworkConfiguration <a name="BedrockagentcoreAgentRuntimeNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeNetworkConfiguration;

BedrockagentcoreAgentRuntimeNetworkConfiguration.builder()
    .networkMode(java.lang.String)
//  .networkModeConfig(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration.property.networkMode">networkMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#network_mode BedrockagentcoreAgentRuntime#network_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration.property.networkModeConfig">networkModeConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>></code> | network_mode_config block. |

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration.property.networkMode"></a>

```java
public java.lang.String getNetworkMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#network_mode BedrockagentcoreAgentRuntime#network_mode}.

---

##### `networkModeConfig`<sup>Optional</sup> <a name="networkModeConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration.property.networkModeConfig"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig> getNetworkModeConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>>

network_mode_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#network_mode_config BedrockagentcoreAgentRuntime#network_mode_config}

---

### BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig <a name="BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig;

BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig.builder()
    .securityGroups(java.util.List<java.lang.String>)
    .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#security_groups BedrockagentcoreAgentRuntime#security_groups}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#subnets BedrockagentcoreAgentRuntime#subnets}. |

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#security_groups BedrockagentcoreAgentRuntime#security_groups}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#subnets BedrockagentcoreAgentRuntime#subnets}.

---

### BedrockagentcoreAgentRuntimeProtocolConfiguration <a name="BedrockagentcoreAgentRuntimeProtocolConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeProtocolConfiguration;

BedrockagentcoreAgentRuntimeProtocolConfiguration.builder()
//  .serverProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration.property.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#server_protocol BedrockagentcoreAgentRuntime#server_protocol}. |

---

##### `serverProtocol`<sup>Optional</sup> <a name="serverProtocol" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration.property.serverProtocol"></a>

```java
public java.lang.String getServerProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#server_protocol BedrockagentcoreAgentRuntime#server_protocol}.

---

### BedrockagentcoreAgentRuntimeRequestHeaderConfiguration <a name="BedrockagentcoreAgentRuntimeRequestHeaderConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration;

BedrockagentcoreAgentRuntimeRequestHeaderConfiguration.builder()
//  .requestHeaderAllowlist(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration.property.requestHeaderAllowlist">requestHeaderAllowlist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#request_header_allowlist BedrockagentcoreAgentRuntime#request_header_allowlist}. |

---

##### `requestHeaderAllowlist`<sup>Optional</sup> <a name="requestHeaderAllowlist" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration.property.requestHeaderAllowlist"></a>

```java
public java.util.List<java.lang.String> getRequestHeaderAllowlist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#request_header_allowlist BedrockagentcoreAgentRuntime#request_header_allowlist}.

---

### BedrockagentcoreAgentRuntimeTimeouts <a name="BedrockagentcoreAgentRuntimeTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeTimeouts;

BedrockagentcoreAgentRuntimeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#create BedrockagentcoreAgentRuntime#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#delete BedrockagentcoreAgentRuntime#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_agent_runtime#update BedrockagentcoreAgentRuntime#update}

---

### BedrockagentcoreAgentRuntimeWorkloadIdentityDetails <a name="BedrockagentcoreAgentRuntimeWorkloadIdentityDetails" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetails;

BedrockagentcoreAgentRuntimeWorkloadIdentityDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList;

new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.get"></a>

```java
public BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>>

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference;

new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUriInput">containerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUri">containerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerUriInput`<sup>Optional</sup> <a name="containerUriInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUriInput"></a>

```java
public java.lang.String getContainerUriInput();
```

- *Type:* java.lang.String

---

##### `containerUri`<sup>Required</sup> <a name="containerUri" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.containerUri"></a>

```java
public java.lang.String getContainerUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList;

new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.get"></a>

```java
public BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAgentRuntimeArtifact> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>>

---


### BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference <a name="BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference;

new BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration">putContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resetContainerConfiguration">resetContainerConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerConfiguration` <a name="putContainerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration"></a>

```java
public void putContainerConfiguration(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>>

---

##### `resetContainerConfiguration` <a name="resetContainerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.resetContainerConfiguration"></a>

```java
public void resetContainerConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.containerConfigurationInput">containerConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerConfiguration`<sup>Required</sup> <a name="containerConfiguration" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.containerConfiguration"></a>

```java
public BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList getContainerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfigurationList</a>

---

##### `containerConfigurationInput`<sup>Optional</sup> <a name="containerConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.containerConfigurationInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration> getContainerConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration">BedrockagentcoreAgentRuntimeAgentRuntimeArtifactContainerConfiguration</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifactOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeAgentRuntimeArtifact getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAgentRuntimeArtifact">BedrockagentcoreAgentRuntimeAgentRuntimeArtifact</a>

---


### BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList <a name="BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList;

new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.get"></a>

```java
public BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>>

---


### BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference;

new BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">resetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">resetAllowedClients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAudience` <a name="resetAllowedAudience" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```java
public void resetAllowedAudience()
```

##### `resetAllowedClients` <a name="resetAllowedClients" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```java
public void resetAllowedClients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">allowedAudienceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">allowedAudience</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">allowedClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAudienceInput`<sup>Optional</sup> <a name="allowedAudienceInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAudienceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedClientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```java
public java.lang.String getDiscoveryUrlInput();
```

- *Type:* java.lang.String

---

##### `allowedAudience`<sup>Required</sup> <a name="allowedAudience" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```java
public java.util.List<java.lang.String> getAllowedAudience();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```java
public java.util.List<java.lang.String> getAllowedClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcoreAgentRuntimeAuthorizerConfigurationList <a name="BedrockagentcoreAgentRuntimeAuthorizerConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList;

new BedrockagentcoreAgentRuntimeAuthorizerConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.get"></a>

```java
public BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAuthorizerConfiguration> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>>

---


### BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference;

new BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">putCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">resetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomJwtAuthorizer` <a name="putCustomJwtAuthorizer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```java
public void putCustomJwtAuthorizer(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>>

---

##### `resetCustomJwtAuthorizer` <a name="resetCustomJwtAuthorizer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```java
public void resetCustomJwtAuthorizer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">customJwtAuthorizerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customJwtAuthorizer`<sup>Required</sup> <a name="customJwtAuthorizer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```java
public BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList getCustomJwtAuthorizer();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizerList</a>

---

##### `customJwtAuthorizerInput`<sup>Optional</sup> <a name="customJwtAuthorizerInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer> getCustomJwtAuthorizerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreAgentRuntimeAuthorizerConfigurationCustomJwtAuthorizer</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeAuthorizerConfiguration getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeAuthorizerConfiguration">BedrockagentcoreAgentRuntimeAuthorizerConfiguration</a>

---


### BedrockagentcoreAgentRuntimeLifecycleConfigurationList <a name="BedrockagentcoreAgentRuntimeLifecycleConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList;

new BedrockagentcoreAgentRuntimeLifecycleConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.get"></a>

```java
public BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeLifecycleConfiguration> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>>

---


### BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference;

new BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout">resetIdleRuntimeSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resetMaxLifetime">resetMaxLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleRuntimeSessionTimeout` <a name="resetIdleRuntimeSessionTimeout" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resetIdleRuntimeSessionTimeout"></a>

```java
public void resetIdleRuntimeSessionTimeout()
```

##### `resetMaxLifetime` <a name="resetMaxLifetime" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.resetMaxLifetime"></a>

```java
public void resetMaxLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput">idleRuntimeSessionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.maxLifetimeInput">maxLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout">idleRuntimeSessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.maxLifetime">maxLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleRuntimeSessionTimeoutInput`<sup>Optional</sup> <a name="idleRuntimeSessionTimeoutInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeoutInput"></a>

```java
public java.lang.Number getIdleRuntimeSessionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `maxLifetimeInput`<sup>Optional</sup> <a name="maxLifetimeInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.maxLifetimeInput"></a>

```java
public java.lang.Number getMaxLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `idleRuntimeSessionTimeout`<sup>Required</sup> <a name="idleRuntimeSessionTimeout" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout"></a>

```java
public java.lang.Number getIdleRuntimeSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `maxLifetime`<sup>Required</sup> <a name="maxLifetime" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.maxLifetime"></a>

```java
public java.lang.Number getMaxLifetime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeLifecycleConfiguration getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeLifecycleConfiguration">BedrockagentcoreAgentRuntimeLifecycleConfiguration</a>

---


### BedrockagentcoreAgentRuntimeNetworkConfigurationList <a name="BedrockagentcoreAgentRuntimeNetworkConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeNetworkConfigurationList;

new BedrockagentcoreAgentRuntimeNetworkConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.get"></a>

```java
public BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeNetworkConfiguration> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>>

---


### BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList <a name="BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList;

new BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.get"></a>

```java
public BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>>

---


### BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference <a name="BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference;

new BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>

---


### BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference;

new BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig">putNetworkModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.resetNetworkModeConfig">resetNetworkModeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkModeConfig` <a name="putNetworkModeConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig"></a>

```java
public void putNetworkModeConfig(IResolvable|java.util.List<BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.putNetworkModeConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>>

---

##### `resetNetworkModeConfig` <a name="resetNetworkModeConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.resetNetworkModeConfig"></a>

```java
public void resetNetworkModeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeConfig">networkModeConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeConfigInput">networkModeConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeInput">networkModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkMode">networkMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkModeConfig`<sup>Required</sup> <a name="networkModeConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeConfig"></a>

```java
public BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList getNetworkModeConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfigList</a>

---

##### `networkModeConfigInput`<sup>Optional</sup> <a name="networkModeConfigInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeConfigInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig> getNetworkModeConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig">BedrockagentcoreAgentRuntimeNetworkConfigurationNetworkModeConfig</a>>

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkModeInput"></a>

```java
public java.lang.String getNetworkModeInput();
```

- *Type:* java.lang.String

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.networkMode"></a>

```java
public java.lang.String getNetworkMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeNetworkConfiguration getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeNetworkConfiguration">BedrockagentcoreAgentRuntimeNetworkConfiguration</a>

---


### BedrockagentcoreAgentRuntimeProtocolConfigurationList <a name="BedrockagentcoreAgentRuntimeProtocolConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeProtocolConfigurationList;

new BedrockagentcoreAgentRuntimeProtocolConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.get"></a>

```java
public BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeProtocolConfiguration> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>>

---


### BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference;

new BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.resetServerProtocol">resetServerProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerProtocol` <a name="resetServerProtocol" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.resetServerProtocol"></a>

```java
public void resetServerProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.serverProtocolInput">serverProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverProtocolInput`<sup>Optional</sup> <a name="serverProtocolInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.serverProtocolInput"></a>

```java
public java.lang.String getServerProtocolInput();
```

- *Type:* java.lang.String

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.serverProtocol"></a>

```java
public java.lang.String getServerProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeProtocolConfiguration getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeProtocolConfiguration">BedrockagentcoreAgentRuntimeProtocolConfiguration</a>

---


### BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList <a name="BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList;

new BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.get"></a>

```java
public BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreAgentRuntimeRequestHeaderConfiguration> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>>

---


### BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference <a name="BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference;

new BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.resetRequestHeaderAllowlist">resetRequestHeaderAllowlist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequestHeaderAllowlist` <a name="resetRequestHeaderAllowlist" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.resetRequestHeaderAllowlist"></a>

```java
public void resetRequestHeaderAllowlist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlistInput">requestHeaderAllowlistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlist">requestHeaderAllowlist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestHeaderAllowlistInput`<sup>Optional</sup> <a name="requestHeaderAllowlistInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlistInput"></a>

```java
public java.util.List<java.lang.String> getRequestHeaderAllowlistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestHeaderAllowlist`<sup>Required</sup> <a name="requestHeaderAllowlist" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.requestHeaderAllowlist"></a>

```java
public java.util.List<java.lang.String> getRequestHeaderAllowlist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeRequestHeaderConfiguration getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeRequestHeaderConfiguration">BedrockagentcoreAgentRuntimeRequestHeaderConfiguration</a>

---


### BedrockagentcoreAgentRuntimeTimeoutsOutputReference <a name="BedrockagentcoreAgentRuntimeTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference;

new BedrockagentcoreAgentRuntimeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeTimeouts">BedrockagentcoreAgentRuntimeTimeouts</a>

---


### BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList <a name="BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList;

new BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.get"></a>

```java
public BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference <a name="BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference;

new BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn">workloadIdentityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetails">BedrockagentcoreAgentRuntimeWorkloadIdentityDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workloadIdentityArn`<sup>Required</sup> <a name="workloadIdentityArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn"></a>

```java
public java.lang.String getWorkloadIdentityArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetailsOutputReference.property.internalValue"></a>

```java
public BedrockagentcoreAgentRuntimeWorkloadIdentityDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntime.BedrockagentcoreAgentRuntimeWorkloadIdentityDetails">BedrockagentcoreAgentRuntimeWorkloadIdentityDetails</a>

---



