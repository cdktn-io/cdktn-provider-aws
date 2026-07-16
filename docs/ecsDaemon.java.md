# `ecsDaemon` Submodule <a name="`ecsDaemon` Submodule" id="@cdktn/provider-aws.ecsDaemon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsDaemon <a name="EcsDaemon" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon aws_ecs_daemon}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemon;

EcsDaemon.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capacityProviderArns(java.util.List<java.lang.String>)
    .daemonTaskDefinitionArn(java.lang.String)
    .name(java.lang.String)
//  .clusterArn(java.lang.String)
//  .deploymentConfiguration(IResolvable|java.util.List<EcsDaemonDeploymentConfiguration>)
//  .enableEcsManagedTags(java.lang.Boolean|IResolvable)
//  .enableExecuteCommand(java.lang.Boolean|IResolvable)
//  .propagateTags(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EcsDaemonTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.capacityProviderArns">capacityProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#capacity_provider_arns EcsDaemon#capacity_provider_arns}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.daemonTaskDefinitionArn">daemonTaskDefinitionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#daemon_task_definition_arn EcsDaemon#daemon_task_definition_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#name EcsDaemon#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#cluster_arn EcsDaemon#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.deploymentConfiguration">deploymentConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>></code> | deployment_configuration block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#enable_ecs_managed_tags EcsDaemon#enable_ecs_managed_tags}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#enable_execute_command EcsDaemon#enable_execute_command}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#propagate_tags EcsDaemon#propagate_tags}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts">EcsDaemonTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityProviderArns`<sup>Required</sup> <a name="capacityProviderArns" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.capacityProviderArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#capacity_provider_arns EcsDaemon#capacity_provider_arns}.

---

##### `daemonTaskDefinitionArn`<sup>Required</sup> <a name="daemonTaskDefinitionArn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.daemonTaskDefinitionArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#daemon_task_definition_arn EcsDaemon#daemon_task_definition_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#name EcsDaemon#name}.

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.clusterArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#cluster_arn EcsDaemon#cluster_arn}.

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.deploymentConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>>

deployment_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#deployment_configuration EcsDaemon#deployment_configuration}

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.enableEcsManagedTags"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#enable_ecs_managed_tags EcsDaemon#enable_ecs_managed_tags}.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.enableExecuteCommand"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#enable_execute_command EcsDaemon#enable_execute_command}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.propagateTags"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#propagate_tags EcsDaemon#propagate_tags}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#region EcsDaemon#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts">EcsDaemonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#timeouts EcsDaemon#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.putDeploymentConfiguration">putDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetClusterArn">resetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetDeploymentConfiguration">resetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetEnableEcsManagedTags">resetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetEnableExecuteCommand">resetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentConfiguration` <a name="putDeploymentConfiguration" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.putDeploymentConfiguration"></a>

```java
public void putDeploymentConfiguration(IResolvable|java.util.List<EcsDaemonDeploymentConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.putDeploymentConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.putTimeouts"></a>

```java
public void putTimeouts(EcsDaemonTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts">EcsDaemonTimeouts</a>

---

##### `resetClusterArn` <a name="resetClusterArn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetClusterArn"></a>

```java
public void resetClusterArn()
```

##### `resetDeploymentConfiguration` <a name="resetDeploymentConfiguration" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetDeploymentConfiguration"></a>

```java
public void resetDeploymentConfiguration()
```

##### `resetEnableEcsManagedTags` <a name="resetEnableEcsManagedTags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetEnableEcsManagedTags"></a>

```java
public void resetEnableEcsManagedTags()
```

##### `resetEnableExecuteCommand` <a name="resetEnableExecuteCommand" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetEnableExecuteCommand"></a>

```java
public void resetEnableExecuteCommand()
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetPropagateTags"></a>

```java
public void resetPropagateTags()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcsDaemon resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.isConstruct"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemon;

EcsDaemon.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemon;

EcsDaemon.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemon;

EcsDaemon.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemon;

EcsDaemon.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EcsDaemon.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EcsDaemon resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EcsDaemon to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EcsDaemon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EcsDaemon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.deploymentArn">deploymentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList">EcsDaemonDeploymentConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference">EcsDaemonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.capacityProviderArnsInput">capacityProviderArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArnInput">daemonTaskDefinitionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.deploymentConfigurationInput">deploymentConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.enableEcsManagedTagsInput">enableEcsManagedTagsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.enableExecuteCommandInput">enableExecuteCommandInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.propagateTagsInput">propagateTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts">EcsDaemonTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.capacityProviderArns">capacityProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArn">daemonTaskDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `deploymentArn`<sup>Required</sup> <a name="deploymentArn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.deploymentArn"></a>

```java
public java.lang.String getDeploymentArn();
```

- *Type:* java.lang.String

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.deploymentConfiguration"></a>

```java
public EcsDaemonDeploymentConfigurationList getDeploymentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList">EcsDaemonDeploymentConfigurationList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.timeouts"></a>

```java
public EcsDaemonTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference">EcsDaemonTimeoutsOutputReference</a>

---

##### `capacityProviderArnsInput`<sup>Optional</sup> <a name="capacityProviderArnsInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.capacityProviderArnsInput"></a>

```java
public java.util.List<java.lang.String> getCapacityProviderArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `daemonTaskDefinitionArnInput`<sup>Optional</sup> <a name="daemonTaskDefinitionArnInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArnInput"></a>

```java
public java.lang.String getDaemonTaskDefinitionArnInput();
```

- *Type:* java.lang.String

---

##### `deploymentConfigurationInput`<sup>Optional</sup> <a name="deploymentConfigurationInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.deploymentConfigurationInput"></a>

```java
public IResolvable|java.util.List<EcsDaemonDeploymentConfiguration> getDeploymentConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>>

---

##### `enableEcsManagedTagsInput`<sup>Optional</sup> <a name="enableEcsManagedTagsInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.enableEcsManagedTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableEcsManagedTagsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableExecuteCommandInput`<sup>Optional</sup> <a name="enableExecuteCommandInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.enableExecuteCommandInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableExecuteCommandInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.propagateTagsInput"></a>

```java
public java.lang.String getPropagateTagsInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.timeoutsInput"></a>

```java
public IResolvable|EcsDaemonTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts">EcsDaemonTimeouts</a>

---

##### `capacityProviderArns`<sup>Required</sup> <a name="capacityProviderArns" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.capacityProviderArns"></a>

```java
public java.util.List<java.lang.String> getCapacityProviderArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `daemonTaskDefinitionArn`<sup>Required</sup> <a name="daemonTaskDefinitionArn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArn"></a>

```java
public java.lang.String getDaemonTaskDefinitionArn();
```

- *Type:* java.lang.String

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.enableEcsManagedTags"></a>

```java
public java.lang.Boolean|IResolvable getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.enableExecuteCommand"></a>

```java
public java.lang.Boolean|IResolvable getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ecsDaemon.EcsDaemon.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcsDaemonConfig <a name="EcsDaemonConfig" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemonConfig;

EcsDaemonConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capacityProviderArns(java.util.List<java.lang.String>)
    .daemonTaskDefinitionArn(java.lang.String)
    .name(java.lang.String)
//  .clusterArn(java.lang.String)
//  .deploymentConfiguration(IResolvable|java.util.List<EcsDaemonDeploymentConfiguration>)
//  .enableEcsManagedTags(java.lang.Boolean|IResolvable)
//  .enableExecuteCommand(java.lang.Boolean|IResolvable)
//  .propagateTags(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EcsDaemonTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.capacityProviderArns">capacityProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#capacity_provider_arns EcsDaemon#capacity_provider_arns}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.daemonTaskDefinitionArn">daemonTaskDefinitionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#daemon_task_definition_arn EcsDaemon#daemon_task_definition_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#name EcsDaemon#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#cluster_arn EcsDaemon#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>></code> | deployment_configuration block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#enable_ecs_managed_tags EcsDaemon#enable_ecs_managed_tags}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#enable_execute_command EcsDaemon#enable_execute_command}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#propagate_tags EcsDaemon#propagate_tags}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts">EcsDaemonTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityProviderArns`<sup>Required</sup> <a name="capacityProviderArns" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.capacityProviderArns"></a>

```java
public java.util.List<java.lang.String> getCapacityProviderArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#capacity_provider_arns EcsDaemon#capacity_provider_arns}.

---

##### `daemonTaskDefinitionArn`<sup>Required</sup> <a name="daemonTaskDefinitionArn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.daemonTaskDefinitionArn"></a>

```java
public java.lang.String getDaemonTaskDefinitionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#daemon_task_definition_arn EcsDaemon#daemon_task_definition_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#name EcsDaemon#name}.

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#cluster_arn EcsDaemon#cluster_arn}.

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.deploymentConfiguration"></a>

```java
public IResolvable|java.util.List<EcsDaemonDeploymentConfiguration> getDeploymentConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>>

deployment_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#deployment_configuration EcsDaemon#deployment_configuration}

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.enableEcsManagedTags"></a>

```java
public java.lang.Boolean|IResolvable getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#enable_ecs_managed_tags EcsDaemon#enable_ecs_managed_tags}.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.enableExecuteCommand"></a>

```java
public java.lang.Boolean|IResolvable getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#enable_execute_command EcsDaemon#enable_execute_command}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#propagate_tags EcsDaemon#propagate_tags}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#region EcsDaemon#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonConfig.property.timeouts"></a>

```java
public EcsDaemonTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts">EcsDaemonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#timeouts EcsDaemon#timeouts}

---

### EcsDaemonDeploymentConfiguration <a name="EcsDaemonDeploymentConfiguration" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemonDeploymentConfiguration;

EcsDaemonDeploymentConfiguration.builder()
//  .alarms(IResolvable|java.util.List<EcsDaemonDeploymentConfigurationAlarms>)
//  .bakeTimeInMinutes(java.lang.Number)
//  .drainPercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration.property.alarms">alarms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>></code> | alarms block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration.property.bakeTimeInMinutes">bakeTimeInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#bake_time_in_minutes EcsDaemon#bake_time_in_minutes}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration.property.drainPercent">drainPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#drain_percent EcsDaemon#drain_percent}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration.property.alarms"></a>

```java
public IResolvable|java.util.List<EcsDaemonDeploymentConfigurationAlarms> getAlarms();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>>

alarms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#alarms EcsDaemon#alarms}

---

##### `bakeTimeInMinutes`<sup>Optional</sup> <a name="bakeTimeInMinutes" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration.property.bakeTimeInMinutes"></a>

```java
public java.lang.Number getBakeTimeInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#bake_time_in_minutes EcsDaemon#bake_time_in_minutes}.

---

##### `drainPercent`<sup>Optional</sup> <a name="drainPercent" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration.property.drainPercent"></a>

```java
public java.lang.Number getDrainPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#drain_percent EcsDaemon#drain_percent}.

---

### EcsDaemonDeploymentConfigurationAlarms <a name="EcsDaemonDeploymentConfigurationAlarms" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.Initializer"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemonDeploymentConfigurationAlarms;

EcsDaemonDeploymentConfigurationAlarms.builder()
//  .alarmNames(java.util.List<java.lang.String>)
//  .enable(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.alarmNames">alarmNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#alarm_names EcsDaemon#alarm_names}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#enable EcsDaemon#enable}. |

---

##### `alarmNames`<sup>Optional</sup> <a name="alarmNames" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.alarmNames"></a>

```java
public java.util.List<java.lang.String> getAlarmNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#alarm_names EcsDaemon#alarm_names}.

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#enable EcsDaemon#enable}.

---

### EcsDaemonTimeouts <a name="EcsDaemonTimeouts" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemonTimeouts;

EcsDaemonTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#create EcsDaemon#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#delete EcsDaemon#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ecs_daemon#update EcsDaemon#update}

---

## Classes <a name="Classes" id="Classes"></a>

### EcsDaemonDeploymentConfigurationAlarmsList <a name="EcsDaemonDeploymentConfigurationAlarmsList" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.Initializer"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemonDeploymentConfigurationAlarmsList;

new EcsDaemonDeploymentConfigurationAlarmsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.get"></a>

```java
public EcsDaemonDeploymentConfigurationAlarmsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsDaemonDeploymentConfigurationAlarms> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>>

---


### EcsDaemonDeploymentConfigurationAlarmsOutputReference <a name="EcsDaemonDeploymentConfigurationAlarmsOutputReference" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference;

new EcsDaemonDeploymentConfigurationAlarmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetAlarmNames">resetAlarmNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarmNames` <a name="resetAlarmNames" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetAlarmNames"></a>

```java
public void resetAlarmNames()
```

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetEnable"></a>

```java
public void resetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNamesInput">alarmNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNames">alarmNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmNamesInput`<sup>Optional</sup> <a name="alarmNamesInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNamesInput"></a>

```java
public java.util.List<java.lang.String> getAlarmNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enableInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNames"></a>

```java
public java.util.List<java.lang.String> getAlarmNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsDaemonDeploymentConfigurationAlarms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

---


### EcsDaemonDeploymentConfigurationList <a name="EcsDaemonDeploymentConfigurationList" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemonDeploymentConfigurationList;

new EcsDaemonDeploymentConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.get"></a>

```java
public EcsDaemonDeploymentConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsDaemonDeploymentConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>>

---


### EcsDaemonDeploymentConfigurationOutputReference <a name="EcsDaemonDeploymentConfigurationOutputReference" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemonDeploymentConfigurationOutputReference;

new EcsDaemonDeploymentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms">putAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetBakeTimeInMinutes">resetBakeTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetDrainPercent">resetDrainPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlarms` <a name="putAlarms" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms"></a>

```java
public void putAlarms(IResolvable|java.util.List<EcsDaemonDeploymentConfigurationAlarms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>>

---

##### `resetAlarms` <a name="resetAlarms" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetBakeTimeInMinutes` <a name="resetBakeTimeInMinutes" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetBakeTimeInMinutes"></a>

```java
public void resetBakeTimeInMinutes()
```

##### `resetDrainPercent` <a name="resetDrainPercent" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetDrainPercent"></a>

```java
public void resetDrainPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList">EcsDaemonDeploymentConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutesInput">bakeTimeInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercentInput">drainPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutes">bakeTimeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercent">drainPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarms"></a>

```java
public EcsDaemonDeploymentConfigurationAlarmsList getAlarms();
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsList">EcsDaemonDeploymentConfigurationAlarmsList</a>

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarmsInput"></a>

```java
public IResolvable|java.util.List<EcsDaemonDeploymentConfigurationAlarms> getAlarmsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>>

---

##### `bakeTimeInMinutesInput`<sup>Optional</sup> <a name="bakeTimeInMinutesInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutesInput"></a>

```java
public java.lang.Number getBakeTimeInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `drainPercentInput`<sup>Optional</sup> <a name="drainPercentInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercentInput"></a>

```java
public java.lang.Number getDrainPercentInput();
```

- *Type:* java.lang.Number

---

##### `bakeTimeInMinutes`<sup>Required</sup> <a name="bakeTimeInMinutes" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutes"></a>

```java
public java.lang.Number getBakeTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `drainPercent`<sup>Required</sup> <a name="drainPercent" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercent"></a>

```java
public java.lang.Number getDrainPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsDaemonDeploymentConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

---


### EcsDaemonTimeoutsOutputReference <a name="EcsDaemonTimeoutsOutputReference" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ecs_daemon.EcsDaemonTimeoutsOutputReference;

new EcsDaemonTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts">EcsDaemonTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsDaemonTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ecsDaemon.EcsDaemonTimeouts">EcsDaemonTimeouts</a>

---



