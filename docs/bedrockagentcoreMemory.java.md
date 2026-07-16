# `bedrockagentcoreMemory` Submodule <a name="`bedrockagentcoreMemory` Submodule" id="@cdktn/provider-aws.bedrockagentcoreMemory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreMemory <a name="BedrockagentcoreMemory" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory aws_bedrockagentcore_memory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemory;

BedrockagentcoreMemory.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventExpiryDuration(java.lang.Number)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .indexedKey(IResolvable|java.util.List<BedrockagentcoreMemoryIndexedKey>)
//  .memoryExecutionRoleArn(java.lang.String)
//  .region(java.lang.String)
//  .streamDeliveryResources(IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResources>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockagentcoreMemoryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.eventExpiryDuration">eventExpiryDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#event_expiry_duration BedrockagentcoreMemory#event_expiry_duration}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#encryption_key_arn BedrockagentcoreMemory#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.indexedKey">indexedKey</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>></code> | indexed_key block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.memoryExecutionRoleArn">memoryExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#memory_execution_role_arn BedrockagentcoreMemory#memory_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.streamDeliveryResources">streamDeliveryResources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>></code> | stream_delivery_resources block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#tags BedrockagentcoreMemory#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventExpiryDuration`<sup>Required</sup> <a name="eventExpiryDuration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.eventExpiryDuration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#event_expiry_duration BedrockagentcoreMemory#event_expiry_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}.

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#encryption_key_arn BedrockagentcoreMemory#encryption_key_arn}.

---

##### `indexedKey`<sup>Optional</sup> <a name="indexedKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.indexedKey"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>>

indexed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#indexed_key BedrockagentcoreMemory#indexed_key}

---

##### `memoryExecutionRoleArn`<sup>Optional</sup> <a name="memoryExecutionRoleArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.memoryExecutionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#memory_execution_role_arn BedrockagentcoreMemory#memory_execution_role_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#region BedrockagentcoreMemory#region}

---

##### `streamDeliveryResources`<sup>Optional</sup> <a name="streamDeliveryResources" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.streamDeliveryResources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>>

stream_delivery_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#stream_delivery_resources BedrockagentcoreMemory#stream_delivery_resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#tags BedrockagentcoreMemory#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#timeouts BedrockagentcoreMemory#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putIndexedKey">putIndexedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putStreamDeliveryResources">putStreamDeliveryResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetEncryptionKeyArn">resetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetIndexedKey">resetIndexedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetMemoryExecutionRoleArn">resetMemoryExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetStreamDeliveryResources">resetStreamDeliveryResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIndexedKey` <a name="putIndexedKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putIndexedKey"></a>

```java
public void putIndexedKey(IResolvable|java.util.List<BedrockagentcoreMemoryIndexedKey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putIndexedKey.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>>

---

##### `putStreamDeliveryResources` <a name="putStreamDeliveryResources" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putStreamDeliveryResources"></a>

```java
public void putStreamDeliveryResources(IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putStreamDeliveryResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putTimeouts"></a>

```java
public void putTimeouts(BedrockagentcoreMemoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionKeyArn` <a name="resetEncryptionKeyArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetEncryptionKeyArn"></a>

```java
public void resetEncryptionKeyArn()
```

##### `resetIndexedKey` <a name="resetIndexedKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetIndexedKey"></a>

```java
public void resetIndexedKey()
```

##### `resetMemoryExecutionRoleArn` <a name="resetMemoryExecutionRoleArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetMemoryExecutionRoleArn"></a>

```java
public void resetMemoryExecutionRoleArn()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStreamDeliveryResources` <a name="resetStreamDeliveryResources" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetStreamDeliveryResources"></a>

```java
public void resetStreamDeliveryResources()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreMemory resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isConstruct"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemory;

BedrockagentcoreMemory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemory;

BedrockagentcoreMemory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemory;

BedrockagentcoreMemory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemory;

BedrockagentcoreMemory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreMemory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcoreMemory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreMemory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreMemory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreMemory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.indexedKey">indexedKey</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList">BedrockagentcoreMemoryIndexedKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.streamDeliveryResources">streamDeliveryResources</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList">BedrockagentcoreMemoryStreamDeliveryResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference">BedrockagentcoreMemoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArnInput">encryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDurationInput">eventExpiryDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.indexedKeyInput">indexedKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArnInput">memoryExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.streamDeliveryResourcesInput">streamDeliveryResourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDuration">eventExpiryDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArn">memoryExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexedKey`<sup>Required</sup> <a name="indexedKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.indexedKey"></a>

```java
public BedrockagentcoreMemoryIndexedKeyList getIndexedKey();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList">BedrockagentcoreMemoryIndexedKeyList</a>

---

##### `streamDeliveryResources`<sup>Required</sup> <a name="streamDeliveryResources" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.streamDeliveryResources"></a>

```java
public BedrockagentcoreMemoryStreamDeliveryResourcesList getStreamDeliveryResources();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList">BedrockagentcoreMemoryStreamDeliveryResourcesList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeouts"></a>

```java
public BedrockagentcoreMemoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference">BedrockagentcoreMemoryTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArnInput`<sup>Optional</sup> <a name="encryptionKeyArnInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArnInput"></a>

```java
public java.lang.String getEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `eventExpiryDurationInput`<sup>Optional</sup> <a name="eventExpiryDurationInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDurationInput"></a>

```java
public java.lang.Number getEventExpiryDurationInput();
```

- *Type:* java.lang.Number

---

##### `indexedKeyInput`<sup>Optional</sup> <a name="indexedKeyInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.indexedKeyInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryIndexedKey> getIndexedKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>>

---

##### `memoryExecutionRoleArnInput`<sup>Optional</sup> <a name="memoryExecutionRoleArnInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArnInput"></a>

```java
public java.lang.String getMemoryExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `streamDeliveryResourcesInput`<sup>Optional</sup> <a name="streamDeliveryResourcesInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.streamDeliveryResourcesInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResources> getStreamDeliveryResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.timeoutsInput"></a>

```java
public IResolvable|BedrockagentcoreMemoryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `eventExpiryDuration`<sup>Required</sup> <a name="eventExpiryDuration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.eventExpiryDuration"></a>

```java
public java.lang.Number getEventExpiryDuration();
```

- *Type:* java.lang.Number

---

##### `memoryExecutionRoleArn`<sup>Required</sup> <a name="memoryExecutionRoleArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.memoryExecutionRoleArn"></a>

```java
public java.lang.String getMemoryExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreMemoryConfig <a name="BedrockagentcoreMemoryConfig" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryConfig;

BedrockagentcoreMemoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventExpiryDuration(java.lang.Number)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .indexedKey(IResolvable|java.util.List<BedrockagentcoreMemoryIndexedKey>)
//  .memoryExecutionRoleArn(java.lang.String)
//  .region(java.lang.String)
//  .streamDeliveryResources(IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResources>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockagentcoreMemoryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.eventExpiryDuration">eventExpiryDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#event_expiry_duration BedrockagentcoreMemory#event_expiry_duration}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#encryption_key_arn BedrockagentcoreMemory#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.indexedKey">indexedKey</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>></code> | indexed_key block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.memoryExecutionRoleArn">memoryExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#memory_execution_role_arn BedrockagentcoreMemory#memory_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.streamDeliveryResources">streamDeliveryResources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>></code> | stream_delivery_resources block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#tags BedrockagentcoreMemory#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventExpiryDuration`<sup>Required</sup> <a name="eventExpiryDuration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.eventExpiryDuration"></a>

```java
public java.lang.Number getEventExpiryDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#event_expiry_duration BedrockagentcoreMemory#event_expiry_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}.

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#encryption_key_arn BedrockagentcoreMemory#encryption_key_arn}.

---

##### `indexedKey`<sup>Optional</sup> <a name="indexedKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.indexedKey"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryIndexedKey> getIndexedKey();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>>

indexed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#indexed_key BedrockagentcoreMemory#indexed_key}

---

##### `memoryExecutionRoleArn`<sup>Optional</sup> <a name="memoryExecutionRoleArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.memoryExecutionRoleArn"></a>

```java
public java.lang.String getMemoryExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#memory_execution_role_arn BedrockagentcoreMemory#memory_execution_role_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#region BedrockagentcoreMemory#region}

---

##### `streamDeliveryResources`<sup>Optional</sup> <a name="streamDeliveryResources" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.streamDeliveryResources"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResources> getStreamDeliveryResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>>

stream_delivery_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#stream_delivery_resources BedrockagentcoreMemory#stream_delivery_resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#tags BedrockagentcoreMemory#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryConfig.property.timeouts"></a>

```java
public BedrockagentcoreMemoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#timeouts BedrockagentcoreMemory#timeouts}

---

### BedrockagentcoreMemoryIndexedKey <a name="BedrockagentcoreMemoryIndexedKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryIndexedKey;

BedrockagentcoreMemoryIndexedKey.builder()
    .key(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}.

---

### BedrockagentcoreMemoryStreamDeliveryResources <a name="BedrockagentcoreMemoryStreamDeliveryResources" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResources;

BedrockagentcoreMemoryStreamDeliveryResources.builder()
//  .resource(IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResource>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources.property.resource">resource</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>></code> | resource block. |

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources.property.resource"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResource> getResource();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#resource BedrockagentcoreMemory#resource}

---

### BedrockagentcoreMemoryStreamDeliveryResourcesResource <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResourcesResource;

BedrockagentcoreMemoryStreamDeliveryResourcesResource.builder()
//  .kinesis(IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource.property.kinesis">kinesis</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>></code> | kinesis block. |

---

##### `kinesis`<sup>Optional</sup> <a name="kinesis" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource.property.kinesis"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis> getKinesis();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>>

kinesis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#kinesis BedrockagentcoreMemory#kinesis}

---

### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis;

BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis.builder()
    .dataStreamArn(java.lang.String)
//  .contentConfiguration(IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis.property.dataStreamArn">dataStreamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#data_stream_arn BedrockagentcoreMemory#data_stream_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis.property.contentConfiguration">contentConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>></code> | content_configuration block. |

---

##### `dataStreamArn`<sup>Required</sup> <a name="dataStreamArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis.property.dataStreamArn"></a>

```java
public java.lang.String getDataStreamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#data_stream_arn BedrockagentcoreMemory#data_stream_arn}.

---

##### `contentConfiguration`<sup>Optional</sup> <a name="contentConfiguration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis.property.contentConfiguration"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration> getContentConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>>

content_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#content_configuration BedrockagentcoreMemory#content_configuration}

---

### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration;

BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration.builder()
    .type(java.lang.String)
//  .level(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration.property.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#level BedrockagentcoreMemory#level}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#level BedrockagentcoreMemory#level}.

---

### BedrockagentcoreMemoryTimeouts <a name="BedrockagentcoreMemoryTimeouts" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryTimeouts;

BedrockagentcoreMemoryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#create BedrockagentcoreMemory#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#delete BedrockagentcoreMemory#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreMemoryIndexedKeyList <a name="BedrockagentcoreMemoryIndexedKeyList" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryIndexedKeyList;

new BedrockagentcoreMemoryIndexedKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.get"></a>

```java
public BedrockagentcoreMemoryIndexedKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryIndexedKey> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>>

---


### BedrockagentcoreMemoryIndexedKeyOutputReference <a name="BedrockagentcoreMemoryIndexedKeyOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryIndexedKeyOutputReference;

new BedrockagentcoreMemoryIndexedKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreMemoryIndexedKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryIndexedKey">BedrockagentcoreMemoryIndexedKey</a>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesList <a name="BedrockagentcoreMemoryStreamDeliveryResourcesList" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResourcesList;

new BedrockagentcoreMemoryStreamDeliveryResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.get"></a>

```java
public BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference <a name="BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference;

new BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.putResource">putResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResource` <a name="putResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.putResource"></a>

```java
public void putResource(IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.putResource.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>>

---

##### `resetResource` <a name="resetResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.resourceInput">resourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.resource"></a>

```java
public BedrockagentcoreMemoryStreamDeliveryResourcesResourceList getResource();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceList</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.resourceInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResource> getResourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResources">BedrockagentcoreMemoryStreamDeliveryResources</a>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.get"></a>

```java
public BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.resetLevel">resetLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.resetLevel"></a>

```java
public void resetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.get"></a>

```java
public BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.putContentConfiguration">putContentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.resetContentConfiguration">resetContentConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContentConfiguration` <a name="putContentConfiguration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.putContentConfiguration"></a>

```java
public void putContentConfiguration(IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.putContentConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>>

---

##### `resetContentConfiguration` <a name="resetContentConfiguration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.resetContentConfiguration"></a>

```java
public void resetContentConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.contentConfiguration">contentConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.contentConfigurationInput">contentConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.dataStreamArnInput">dataStreamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.dataStreamArn">dataStreamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentConfiguration`<sup>Required</sup> <a name="contentConfiguration" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.contentConfiguration"></a>

```java
public BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList getContentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList</a>

---

##### `contentConfigurationInput`<sup>Optional</sup> <a name="contentConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.contentConfigurationInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration> getContentConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration</a>>

---

##### `dataStreamArnInput`<sup>Optional</sup> <a name="dataStreamArnInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.dataStreamArnInput"></a>

```java
public java.lang.String getDataStreamArnInput();
```

- *Type:* java.lang.String

---

##### `dataStreamArn`<sup>Required</sup> <a name="dataStreamArn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.dataStreamArn"></a>

```java
public java.lang.String getDataStreamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceList <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceList" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.get"></a>

```java
public BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResource> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>>

---


### BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference <a name="BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference;

new BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.putKinesis">putKinesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.resetKinesis">resetKinesis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesis` <a name="putKinesis" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.putKinesis"></a>

```java
public void putKinesis(IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.putKinesis.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>>

---

##### `resetKinesis` <a name="resetKinesis" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.resetKinesis"></a>

```java
public void resetKinesis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.kinesis">kinesis</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.kinesisInput">kinesisInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kinesis`<sup>Required</sup> <a name="kinesis" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.kinesis"></a>

```java
public BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList getKinesis();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList</a>

---

##### `kinesisInput`<sup>Optional</sup> <a name="kinesisInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.kinesisInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis> getKinesisInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis">BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreMemoryStreamDeliveryResourcesResource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryStreamDeliveryResourcesResource">BedrockagentcoreMemoryStreamDeliveryResourcesResource</a>

---


### BedrockagentcoreMemoryTimeoutsOutputReference <a name="BedrockagentcoreMemoryTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrockagentcore_memory.BedrockagentcoreMemoryTimeoutsOutputReference;

new BedrockagentcoreMemoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreMemoryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentcoreMemory.BedrockagentcoreMemoryTimeouts">BedrockagentcoreMemoryTimeouts</a>

---



