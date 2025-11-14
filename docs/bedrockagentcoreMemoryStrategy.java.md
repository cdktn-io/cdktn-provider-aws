# `bedrockagentcoreMemoryStrategy` Submodule <a name="`bedrockagentcoreMemoryStrategy` Submodule" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreMemoryStrategy <a name="BedrockagentcoreMemoryStrategy" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy aws_bedrockagentcore_memory_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategy;

BedrockagentcoreMemoryStrategy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .memoryId(java.lang.String)
    .name(java.lang.String)
    .namespaces(java.util.List<java.lang.String>)
    .type(java.lang.String)
//  .configuration(IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfiguration>)
//  .description(java.lang.String)
//  .memoryExecutionRoleArn(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(BedrockagentcoreMemoryStrategyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.memoryId">memoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#memory_id BedrockagentcoreMemoryStrategy#memory_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#name BedrockagentcoreMemoryStrategy#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#namespaces BedrockagentcoreMemoryStrategy#namespaces}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#description BedrockagentcoreMemoryStrategy#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.memoryExecutionRoleArn">memoryExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#memory_execution_role_arn BedrockagentcoreMemoryStrategy#memory_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `memoryId`<sup>Required</sup> <a name="memoryId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.memoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#memory_id BedrockagentcoreMemoryStrategy#memory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#name BedrockagentcoreMemoryStrategy#name}.

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.namespaces"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#namespaces BedrockagentcoreMemoryStrategy#namespaces}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.configuration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#configuration BedrockagentcoreMemoryStrategy#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#description BedrockagentcoreMemoryStrategy#description}.

---

##### `memoryExecutionRoleArn`<sup>Optional</sup> <a name="memoryExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.memoryExecutionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#memory_execution_role_arn BedrockagentcoreMemoryStrategy#memory_execution_role_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#region BedrockagentcoreMemoryStrategy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#timeouts BedrockagentcoreMemoryStrategy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetMemoryExecutionRoleArn">resetMemoryExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putConfiguration"></a>

```java
public void putConfiguration(IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putTimeouts"></a>

```java
public void putTimeouts(BedrockagentcoreMemoryStrategyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMemoryExecutionRoleArn` <a name="resetMemoryExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetMemoryExecutionRoleArn"></a>

```java
public void resetMemoryExecutionRoleArn()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreMemoryStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategy;

BedrockagentcoreMemoryStrategy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategy;

BedrockagentcoreMemoryStrategy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategy;

BedrockagentcoreMemoryStrategy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategy;

BedrockagentcoreMemoryStrategy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreMemoryStrategy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BedrockagentcoreMemoryStrategy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreMemoryStrategy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreMemoryStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreMemoryStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList">BedrockagentcoreMemoryStrategyConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryStrategyId">memoryStrategyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference">BedrockagentcoreMemoryStrategyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.configurationInput">configurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryExecutionRoleArnInput">memoryExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryIdInput">memoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.namespacesInput">namespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryExecutionRoleArn">memoryExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryId">memoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.configuration"></a>

```java
public BedrockagentcoreMemoryStrategyConfigurationList getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList">BedrockagentcoreMemoryStrategyConfigurationList</a>

---

##### `memoryStrategyId`<sup>Required</sup> <a name="memoryStrategyId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryStrategyId"></a>

```java
public java.lang.String getMemoryStrategyId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.timeouts"></a>

```java
public BedrockagentcoreMemoryStrategyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference">BedrockagentcoreMemoryStrategyTimeoutsOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.configurationInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfiguration> getConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `memoryExecutionRoleArnInput`<sup>Optional</sup> <a name="memoryExecutionRoleArnInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryExecutionRoleArnInput"></a>

```java
public java.lang.String getMemoryExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `memoryIdInput`<sup>Optional</sup> <a name="memoryIdInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryIdInput"></a>

```java
public java.lang.String getMemoryIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.namespacesInput"></a>

```java
public java.util.List<java.lang.String> getNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.timeoutsInput"></a>

```java
public IResolvable|BedrockagentcoreMemoryStrategyTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `memoryExecutionRoleArn`<sup>Required</sup> <a name="memoryExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryExecutionRoleArn"></a>

```java
public java.lang.String getMemoryExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `memoryId`<sup>Required</sup> <a name="memoryId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.memoryId"></a>

```java
public java.lang.String getMemoryId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreMemoryStrategyConfig <a name="BedrockagentcoreMemoryStrategyConfig" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyConfig;

BedrockagentcoreMemoryStrategyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .memoryId(java.lang.String)
    .name(java.lang.String)
    .namespaces(java.util.List<java.lang.String>)
    .type(java.lang.String)
//  .configuration(IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfiguration>)
//  .description(java.lang.String)
//  .memoryExecutionRoleArn(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(BedrockagentcoreMemoryStrategyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.memoryId">memoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#memory_id BedrockagentcoreMemoryStrategy#memory_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#name BedrockagentcoreMemoryStrategy#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#namespaces BedrockagentcoreMemoryStrategy#namespaces}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#description BedrockagentcoreMemoryStrategy#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.memoryExecutionRoleArn">memoryExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#memory_execution_role_arn BedrockagentcoreMemoryStrategy#memory_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `memoryId`<sup>Required</sup> <a name="memoryId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.memoryId"></a>

```java
public java.lang.String getMemoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#memory_id BedrockagentcoreMemoryStrategy#memory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#name BedrockagentcoreMemoryStrategy#name}.

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#namespaces BedrockagentcoreMemoryStrategy#namespaces}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.configuration"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfiguration> getConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#configuration BedrockagentcoreMemoryStrategy#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#description BedrockagentcoreMemoryStrategy#description}.

---

##### `memoryExecutionRoleArn`<sup>Optional</sup> <a name="memoryExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.memoryExecutionRoleArn"></a>

```java
public java.lang.String getMemoryExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#memory_execution_role_arn BedrockagentcoreMemoryStrategy#memory_execution_role_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#region BedrockagentcoreMemoryStrategy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfig.property.timeouts"></a>

```java
public BedrockagentcoreMemoryStrategyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#timeouts BedrockagentcoreMemoryStrategy#timeouts}

---

### BedrockagentcoreMemoryStrategyConfiguration <a name="BedrockagentcoreMemoryStrategyConfiguration" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyConfiguration;

BedrockagentcoreMemoryStrategyConfiguration.builder()
    .type(java.lang.String)
//  .consolidation(IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfigurationConsolidation>)
//  .extraction(IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfigurationExtraction>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.consolidation">consolidation</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>></code> | consolidation block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.extraction">extraction</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>></code> | extraction block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}.

---

##### `consolidation`<sup>Optional</sup> <a name="consolidation" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.consolidation"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfigurationConsolidation> getConsolidation();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>>

consolidation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#consolidation BedrockagentcoreMemoryStrategy#consolidation}

---

##### `extraction`<sup>Optional</sup> <a name="extraction" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration.property.extraction"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfigurationExtraction> getExtraction();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>>

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#extraction BedrockagentcoreMemoryStrategy#extraction}

---

### BedrockagentcoreMemoryStrategyConfigurationConsolidation <a name="BedrockagentcoreMemoryStrategyConfigurationConsolidation" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation;

BedrockagentcoreMemoryStrategyConfigurationConsolidation.builder()
    .appendToPrompt(java.lang.String)
    .modelId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation.property.appendToPrompt">appendToPrompt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation.property.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}. |

---

##### `appendToPrompt`<sup>Required</sup> <a name="appendToPrompt" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation.property.appendToPrompt"></a>

```java
public java.lang.String getAppendToPrompt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}.

---

### BedrockagentcoreMemoryStrategyConfigurationExtraction <a name="BedrockagentcoreMemoryStrategyConfigurationExtraction" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyConfigurationExtraction;

BedrockagentcoreMemoryStrategyConfigurationExtraction.builder()
    .appendToPrompt(java.lang.String)
    .modelId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction.property.appendToPrompt">appendToPrompt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction.property.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}. |

---

##### `appendToPrompt`<sup>Required</sup> <a name="appendToPrompt" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction.property.appendToPrompt"></a>

```java
public java.lang.String getAppendToPrompt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}.

---

### BedrockagentcoreMemoryStrategyTimeouts <a name="BedrockagentcoreMemoryStrategyTimeouts" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyTimeouts;

BedrockagentcoreMemoryStrategyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#create BedrockagentcoreMemoryStrategy#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#delete BedrockagentcoreMemoryStrategy#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_memory_strategy#update BedrockagentcoreMemoryStrategy#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreMemoryStrategyConfigurationConsolidationList <a name="BedrockagentcoreMemoryStrategyConfigurationConsolidationList" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList;

new BedrockagentcoreMemoryStrategyConfigurationConsolidationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.get"></a>

```java
public BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfigurationConsolidation> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>>

---


### BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference <a name="BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference;

new BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.appendToPromptInput">appendToPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.appendToPrompt">appendToPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appendToPromptInput`<sup>Optional</sup> <a name="appendToPromptInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.appendToPromptInput"></a>

```java
public java.lang.String getAppendToPromptInput();
```

- *Type:* java.lang.String

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `appendToPrompt`<sup>Required</sup> <a name="appendToPrompt" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.appendToPrompt"></a>

```java
public java.lang.String getAppendToPrompt();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreMemoryStrategyConfigurationConsolidation getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>

---


### BedrockagentcoreMemoryStrategyConfigurationExtractionList <a name="BedrockagentcoreMemoryStrategyConfigurationExtractionList" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList;

new BedrockagentcoreMemoryStrategyConfigurationExtractionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.get"></a>

```java
public BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfigurationExtraction> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>>

---


### BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference <a name="BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference;

new BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.appendToPromptInput">appendToPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.appendToPrompt">appendToPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appendToPromptInput`<sup>Optional</sup> <a name="appendToPromptInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.appendToPromptInput"></a>

```java
public java.lang.String getAppendToPromptInput();
```

- *Type:* java.lang.String

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `appendToPrompt`<sup>Required</sup> <a name="appendToPrompt" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.appendToPrompt"></a>

```java
public java.lang.String getAppendToPrompt();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreMemoryStrategyConfigurationExtraction getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>

---


### BedrockagentcoreMemoryStrategyConfigurationList <a name="BedrockagentcoreMemoryStrategyConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyConfigurationList;

new BedrockagentcoreMemoryStrategyConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.get"></a>

```java
public BedrockagentcoreMemoryStrategyConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfiguration> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>>

---


### BedrockagentcoreMemoryStrategyConfigurationOutputReference <a name="BedrockagentcoreMemoryStrategyConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference;

new BedrockagentcoreMemoryStrategyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putConsolidation">putConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putExtraction">putExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resetConsolidation">resetConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resetExtraction">resetExtraction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsolidation` <a name="putConsolidation" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putConsolidation"></a>

```java
public void putConsolidation(IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfigurationConsolidation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putConsolidation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>>

---

##### `putExtraction` <a name="putExtraction" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putExtraction"></a>

```java
public void putExtraction(IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfigurationExtraction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.putExtraction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>>

---

##### `resetConsolidation` <a name="resetConsolidation" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resetConsolidation"></a>

```java
public void resetConsolidation()
```

##### `resetExtraction` <a name="resetExtraction" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.resetExtraction"></a>

```java
public void resetExtraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.consolidation">consolidation</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList">BedrockagentcoreMemoryStrategyConfigurationConsolidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.extraction">extraction</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList">BedrockagentcoreMemoryStrategyConfigurationExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.consolidationInput">consolidationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.extractionInput">extractionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consolidation`<sup>Required</sup> <a name="consolidation" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.consolidation"></a>

```java
public BedrockagentcoreMemoryStrategyConfigurationConsolidationList getConsolidation();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidationList">BedrockagentcoreMemoryStrategyConfigurationConsolidationList</a>

---

##### `extraction`<sup>Required</sup> <a name="extraction" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.extraction"></a>

```java
public BedrockagentcoreMemoryStrategyConfigurationExtractionList getExtraction();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtractionList">BedrockagentcoreMemoryStrategyConfigurationExtractionList</a>

---

##### `consolidationInput`<sup>Optional</sup> <a name="consolidationInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.consolidationInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfigurationConsolidation> getConsolidationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationConsolidation">BedrockagentcoreMemoryStrategyConfigurationConsolidation</a>>

---

##### `extractionInput`<sup>Optional</sup> <a name="extractionInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.extractionInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStrategyConfigurationExtraction> getExtractionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationExtraction">BedrockagentcoreMemoryStrategyConfigurationExtraction</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreMemoryStrategyConfiguration getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyConfiguration">BedrockagentcoreMemoryStrategyConfiguration</a>

---


### BedrockagentcoreMemoryStrategyTimeoutsOutputReference <a name="BedrockagentcoreMemoryStrategyTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagentcore_memory_strategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference;

new BedrockagentcoreMemoryStrategyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreMemoryStrategyTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreMemoryStrategy.BedrockagentcoreMemoryStrategyTimeouts">BedrockagentcoreMemoryStrategyTimeouts</a>

---



