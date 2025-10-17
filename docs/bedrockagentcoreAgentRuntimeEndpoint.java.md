# `bedrockagentcoreAgentRuntimeEndpoint` Submodule <a name="`bedrockagentcoreAgentRuntimeEndpoint` Submodule" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreAgentRuntimeEndpoint <a name="BedrockagentcoreAgentRuntimeEndpoint" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint aws_bedrockagentcore_agent_runtime_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime_endpoint.BedrockagentcoreAgentRuntimeEndpoint;

BedrockagentcoreAgentRuntimeEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentRuntimeId(java.lang.String)
    .name(java.lang.String)
//  .agentRuntimeVersion(java.lang.String)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockagentcoreAgentRuntimeEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.agentRuntimeId">agentRuntimeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_id BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#name BedrockagentcoreAgentRuntimeEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.agentRuntimeVersion">agentRuntimeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_version BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#description BedrockagentcoreAgentRuntimeEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#tags BedrockagentcoreAgentRuntimeEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentRuntimeId`<sup>Required</sup> <a name="agentRuntimeId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.agentRuntimeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_id BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#name BedrockagentcoreAgentRuntimeEndpoint#name}.

---

##### `agentRuntimeVersion`<sup>Optional</sup> <a name="agentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.agentRuntimeVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_version BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#description BedrockagentcoreAgentRuntimeEndpoint#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#region BedrockagentcoreAgentRuntimeEndpoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#tags BedrockagentcoreAgentRuntimeEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#timeouts BedrockagentcoreAgentRuntimeEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetAgentRuntimeVersion">resetAgentRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts"></a>

```java
public void putTimeouts(BedrockagentcoreAgentRuntimeEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

---

##### `resetAgentRuntimeVersion` <a name="resetAgentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetAgentRuntimeVersion"></a>

```java
public void resetAgentRuntimeVersion()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreAgentRuntimeEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime_endpoint.BedrockagentcoreAgentRuntimeEndpoint;

BedrockagentcoreAgentRuntimeEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime_endpoint.BedrockagentcoreAgentRuntimeEndpoint;

BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime_endpoint.BedrockagentcoreAgentRuntimeEndpoint;

BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime_endpoint.BedrockagentcoreAgentRuntimeEndpoint;

BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BedrockagentcoreAgentRuntimeEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreAgentRuntimeEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreAgentRuntimeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreAgentRuntimeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeArn">agentRuntimeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeEndpointArn">agentRuntimeEndpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference">BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeIdInput">agentRuntimeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersionInput">agentRuntimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeId">agentRuntimeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersion">agentRuntimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentRuntimeArn`<sup>Required</sup> <a name="agentRuntimeArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeArn"></a>

```java
public java.lang.String getAgentRuntimeArn();
```

- *Type:* java.lang.String

---

##### `agentRuntimeEndpointArn`<sup>Required</sup> <a name="agentRuntimeEndpointArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeEndpointArn"></a>

```java
public java.lang.String getAgentRuntimeEndpointArn();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeouts"></a>

```java
public BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference">BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference</a>

---

##### `agentRuntimeIdInput`<sup>Optional</sup> <a name="agentRuntimeIdInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeIdInput"></a>

```java
public java.lang.String getAgentRuntimeIdInput();
```

- *Type:* java.lang.String

---

##### `agentRuntimeVersionInput`<sup>Optional</sup> <a name="agentRuntimeVersionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersionInput"></a>

```java
public java.lang.String getAgentRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeEndpointTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

---

##### `agentRuntimeId`<sup>Required</sup> <a name="agentRuntimeId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeId"></a>

```java
public java.lang.String getAgentRuntimeId();
```

- *Type:* java.lang.String

---

##### `agentRuntimeVersion`<sup>Required</sup> <a name="agentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersion"></a>

```java
public java.lang.String getAgentRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreAgentRuntimeEndpointConfig <a name="BedrockagentcoreAgentRuntimeEndpointConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime_endpoint.BedrockagentcoreAgentRuntimeEndpointConfig;

BedrockagentcoreAgentRuntimeEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentRuntimeId(java.lang.String)
    .name(java.lang.String)
//  .agentRuntimeVersion(java.lang.String)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockagentcoreAgentRuntimeEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeId">agentRuntimeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_id BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#name BedrockagentcoreAgentRuntimeEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeVersion">agentRuntimeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_version BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#description BedrockagentcoreAgentRuntimeEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#tags BedrockagentcoreAgentRuntimeEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentRuntimeId`<sup>Required</sup> <a name="agentRuntimeId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeId"></a>

```java
public java.lang.String getAgentRuntimeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_id BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#name BedrockagentcoreAgentRuntimeEndpoint#name}.

---

##### `agentRuntimeVersion`<sup>Optional</sup> <a name="agentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeVersion"></a>

```java
public java.lang.String getAgentRuntimeVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_version BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#description BedrockagentcoreAgentRuntimeEndpoint#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#region BedrockagentcoreAgentRuntimeEndpoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#tags BedrockagentcoreAgentRuntimeEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.timeouts"></a>

```java
public BedrockagentcoreAgentRuntimeEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#timeouts BedrockagentcoreAgentRuntimeEndpoint#timeouts}

---

### BedrockagentcoreAgentRuntimeEndpointTimeouts <a name="BedrockagentcoreAgentRuntimeEndpointTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime_endpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts;

BedrockagentcoreAgentRuntimeEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#create BedrockagentcoreAgentRuntimeEndpoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#delete BedrockagentcoreAgentRuntimeEndpoint#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#update BedrockagentcoreAgentRuntimeEndpoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference <a name="BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_agent_runtime_endpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference;

new BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreAgentRuntimeEndpointTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

---



