# `mskChannel` Submodule <a name="`mskChannel` Submodule" id="@cdktn/provider-aws.mskChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskChannel <a name="MskChannel" id="@cdktn/provider-aws.mskChannel.MskChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel aws_msk_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannel;

MskChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelName(java.lang.String)
    .clusterArn(java.lang.String)
//  .encryptionConfiguration(IResolvable|java.util.List<MskChannelEncryptionConfiguration>)
//  .icebergDestination(IResolvable|java.util.List<MskChannelIcebergDestination>)
//  .loggingInfo(IResolvable|java.util.List<MskChannelLoggingInfo>)
//  .region(java.lang.String)
//  .s3Destination(IResolvable|java.util.List<MskChannelS3Destination>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MskChannelTimeouts)
//  .topicConfiguration(IResolvable|java.util.List<MskChannelTopicConfiguration>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.encryptionConfiguration">encryptionConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>></code> | encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.icebergDestination">icebergDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>></code> | iceberg_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.loggingInfo">loggingInfo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>></code> | logging_info block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.s3Destination">s3Destination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>></code> | s3_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.topicConfiguration">topicConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>></code> | topic_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}.

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.clusterArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#encryption_configuration MskChannel#encryption_configuration}

---

##### `icebergDestination`<sup>Optional</sup> <a name="icebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.icebergDestination"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>>

iceberg_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#iceberg_destination MskChannel#iceberg_destination}

---

##### `loggingInfo`<sup>Optional</sup> <a name="loggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.loggingInfo"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>>

logging_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#logging_info MskChannel#logging_info}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#region MskChannel#region}

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.s3Destination"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>>

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3_destination MskChannel#s3_destination}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#timeouts MskChannel#timeouts}

---

##### `topicConfiguration`<sup>Optional</sup> <a name="topicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.topicConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>>

topic_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_configuration MskChannel#topic_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination">putIcebergDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo">putLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination">putS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration">putTopicConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetIcebergDestination">resetIcebergDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetLoggingInfo">resetLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetS3Destination">resetS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTopicConfiguration">resetTopicConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mskChannel.MskChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mskChannel.MskChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.mskChannel.MskChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.mskChannel.MskChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.mskChannel.MskChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.mskChannel.MskChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.mskChannel.MskChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.mskChannel.MskChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.mskChannel.MskChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(IResolvable|java.util.List<MskChannelEncryptionConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>>

---

##### `putIcebergDestination` <a name="putIcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination"></a>

```java
public void putIcebergDestination(IResolvable|java.util.List<MskChannelIcebergDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>>

---

##### `putLoggingInfo` <a name="putLoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo"></a>

```java
public void putLoggingInfo(IResolvable|java.util.List<MskChannelLoggingInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>>

---

##### `putS3Destination` <a name="putS3Destination" id="@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination"></a>

```java
public void putS3Destination(IResolvable|java.util.List<MskChannelS3Destination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts"></a>

```java
public void putTimeouts(MskChannelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

---

##### `putTopicConfiguration` <a name="putTopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration"></a>

```java
public void putTopicConfiguration(IResolvable|java.util.List<MskChannelTopicConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetIcebergDestination` <a name="resetIcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannel.resetIcebergDestination"></a>

```java
public void resetIcebergDestination()
```

##### `resetLoggingInfo` <a name="resetLoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannel.resetLoggingInfo"></a>

```java
public void resetLoggingInfo()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.mskChannel.MskChannel.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetS3Destination` <a name="resetS3Destination" id="@cdktn/provider-aws.mskChannel.MskChannel.resetS3Destination"></a>

```java
public void resetS3Destination()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTopicConfiguration` <a name="resetTopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTopicConfiguration"></a>

```java
public void resetTopicConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.mskChannel.MskChannel.isConstruct"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannel;

MskChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskChannel.MskChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannel;

MskChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannel;

MskChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannel;

MskChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MskChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MskChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MskChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MskChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList">MskChannelEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestination">icebergDestination</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList">MskChannelIcebergDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfo">loggingInfo</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList">MskChannelLoggingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList">MskChannelS3DestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference">MskChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfiguration">topicConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList">MskChannelTopicConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestinationInput">icebergDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfoInput">loggingInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.s3DestinationInput">s3DestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfigurationInput">topicConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mskChannel.MskChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.mskChannel.MskChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.mskChannel.MskChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mskChannel.MskChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mskChannel.MskChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mskChannel.MskChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mskChannel.MskChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mskChannel.MskChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-aws.mskChannel.MskChannel.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfiguration"></a>

```java
public MskChannelEncryptionConfigurationList getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList">MskChannelEncryptionConfigurationList</a>

---

##### `icebergDestination`<sup>Required</sup> <a name="icebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestination"></a>

```java
public MskChannelIcebergDestinationList getIcebergDestination();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList">MskChannelIcebergDestinationList</a>

---

##### `loggingInfo`<sup>Required</sup> <a name="loggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfo"></a>

```java
public MskChannelLoggingInfoList getLoggingInfo();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList">MskChannelLoggingInfoList</a>

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktn/provider-aws.mskChannel.MskChannel.property.s3Destination"></a>

```java
public MskChannelS3DestinationList getS3Destination();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList">MskChannelS3DestinationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.property.timeouts"></a>

```java
public MskChannelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference">MskChannelTimeoutsOutputReference</a>

---

##### `topicConfiguration`<sup>Required</sup> <a name="topicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfiguration"></a>

```java
public MskChannelTopicConfigurationList getTopicConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList">MskChannelTopicConfigurationList</a>

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfigurationInput"></a>

```java
public IResolvable|java.util.List<MskChannelEncryptionConfiguration> getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>>

---

##### `icebergDestinationInput`<sup>Optional</sup> <a name="icebergDestinationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestinationInput"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestination> getIcebergDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>>

---

##### `loggingInfoInput`<sup>Optional</sup> <a name="loggingInfoInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfoInput"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfo> getLoggingInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `s3DestinationInput`<sup>Optional</sup> <a name="s3DestinationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.s3DestinationInput"></a>

```java
public IResolvable|java.util.List<MskChannelS3Destination> getS3DestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.timeoutsInput"></a>

```java
public IResolvable|MskChannelTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

---

##### `topicConfigurationInput`<sup>Optional</sup> <a name="topicConfigurationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfigurationInput"></a>

```java
public IResolvable|java.util.List<MskChannelTopicConfiguration> getTopicConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-aws.mskChannel.MskChannel.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mskChannel.MskChannel.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MskChannelConfig <a name="MskChannelConfig" id="@cdktn/provider-aws.mskChannel.MskChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelConfig;

MskChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelName(java.lang.String)
    .clusterArn(java.lang.String)
//  .encryptionConfiguration(IResolvable|java.util.List<MskChannelEncryptionConfiguration>)
//  .icebergDestination(IResolvable|java.util.List<MskChannelIcebergDestination>)
//  .loggingInfo(IResolvable|java.util.List<MskChannelLoggingInfo>)
//  .region(java.lang.String)
//  .s3Destination(IResolvable|java.util.List<MskChannelS3Destination>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MskChannelTimeouts)
//  .topicConfiguration(IResolvable|java.util.List<MskChannelTopicConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>></code> | encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.icebergDestination">icebergDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>></code> | iceberg_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.loggingInfo">loggingInfo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>></code> | logging_info block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.s3Destination">s3Destination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>></code> | s3_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.topicConfiguration">topicConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>></code> | topic_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}.

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.encryptionConfiguration"></a>

```java
public IResolvable|java.util.List<MskChannelEncryptionConfiguration> getEncryptionConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#encryption_configuration MskChannel#encryption_configuration}

---

##### `icebergDestination`<sup>Optional</sup> <a name="icebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.icebergDestination"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestination> getIcebergDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>>

iceberg_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#iceberg_destination MskChannel#iceberg_destination}

---

##### `loggingInfo`<sup>Optional</sup> <a name="loggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.loggingInfo"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfo> getLoggingInfo();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>>

logging_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#logging_info MskChannel#logging_info}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#region MskChannel#region}

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.s3Destination"></a>

```java
public IResolvable|java.util.List<MskChannelS3Destination> getS3Destination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>>

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3_destination MskChannel#s3_destination}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.timeouts"></a>

```java
public MskChannelTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#timeouts MskChannel#timeouts}

---

##### `topicConfiguration`<sup>Optional</sup> <a name="topicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.topicConfiguration"></a>

```java
public IResolvable|java.util.List<MskChannelTopicConfiguration> getTopicConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>>

topic_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_configuration MskChannel#topic_configuration}

---

### MskChannelEncryptionConfiguration <a name="MskChannelEncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelEncryptionConfiguration;

MskChannelEncryptionConfiguration.builder()
    .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}. |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}.

---

### MskChannelIcebergDestination <a name="MskChannelIcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestination;

MskChannelIcebergDestination.builder()
    .appendOnly(java.lang.Boolean|IResolvable)
    .serviceExecutionRoleArn(java.lang.String)
//  .catalog(IResolvable|java.util.List<MskChannelIcebergDestinationCatalog>)
//  .compressionType(java.lang.String)
//  .dataFreshnessInSeconds(java.lang.Number)
//  .deadLetterQueueS3(IResolvable|java.util.List<MskChannelIcebergDestinationDeadLetterQueueS3>)
//  .destinationTable(IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTable>)
//  .schemaEvolution(IResolvable|java.util.List<MskChannelIcebergDestinationSchemaEvolution>)
//  .tableCreation(IResolvable|java.util.List<MskChannelIcebergDestinationTableCreation>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.appendOnly">appendOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#append_only MskChannel#append_only}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.catalog">catalog</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>></code> | catalog block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.deadLetterQueueS3">deadLetterQueueS3</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>></code> | dead_letter_queue_s3 block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.destinationTable">destinationTable</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>></code> | destination_table block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.schemaEvolution">schemaEvolution</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>></code> | schema_evolution block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.tableCreation">tableCreation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>></code> | table_creation block. |

---

##### `appendOnly`<sup>Required</sup> <a name="appendOnly" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.appendOnly"></a>

```java
public java.lang.Boolean|IResolvable getAppendOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#append_only MskChannel#append_only}.

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.catalog"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationCatalog> getCatalog();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog MskChannel#catalog}

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}.

---

##### `dataFreshnessInSeconds`<sup>Optional</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.dataFreshnessInSeconds"></a>

```java
public java.lang.Number getDataFreshnessInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}.

---

##### `deadLetterQueueS3`<sup>Optional</sup> <a name="deadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.deadLetterQueueS3"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDeadLetterQueueS3> getDeadLetterQueueS3();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>>

dead_letter_queue_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `destinationTable`<sup>Optional</sup> <a name="destinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.destinationTable"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTable> getDestinationTable();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table MskChannel#destination_table}

---

##### `schemaEvolution`<sup>Optional</sup> <a name="schemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.schemaEvolution"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationSchemaEvolution> getSchemaEvolution();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>>

schema_evolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#schema_evolution MskChannel#schema_evolution}

---

##### `tableCreation`<sup>Optional</sup> <a name="tableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.tableCreation"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationTableCreation> getTableCreation();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>>

table_creation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#table_creation MskChannel#table_creation}

---

### MskChannelIcebergDestinationCatalog <a name="MskChannelIcebergDestinationCatalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationCatalog;

MskChannelIcebergDestinationCatalog.builder()
//  .catalogArn(java.lang.String)
//  .warehouseLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.catalogArn">catalogArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.warehouseLocation">warehouseLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}. |

---

##### `catalogArn`<sup>Optional</sup> <a name="catalogArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.catalogArn"></a>

```java
public java.lang.String getCatalogArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}.

---

##### `warehouseLocation`<sup>Optional</sup> <a name="warehouseLocation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.warehouseLocation"></a>

```java
public java.lang.String getWarehouseLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}.

---

### MskChannelIcebergDestinationDeadLetterQueueS3 <a name="MskChannelIcebergDestinationDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDeadLetterQueueS3;

MskChannelIcebergDestinationDeadLetterQueueS3.builder()
    .bucketArn(java.lang.String)
//  .errorOutputPrefix(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="errorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```java
public java.lang.String getErrorOutputPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

### MskChannelIcebergDestinationDestinationTable <a name="MskChannelIcebergDestinationDestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDestinationTable;

MskChannelIcebergDestinationDestinationTable.builder()
//  .destinationDatabaseName(java.lang.String)
//  .destinationTableName(java.lang.String)
//  .partitionSpec(IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTablePartitionSpec>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationDatabaseName">destinationDatabaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationTableName">destinationTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.partitionSpec">partitionSpec</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>></code> | partition_spec block. |

---

##### `destinationDatabaseName`<sup>Optional</sup> <a name="destinationDatabaseName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationDatabaseName"></a>

```java
public java.lang.String getDestinationDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}.

---

##### `destinationTableName`<sup>Optional</sup> <a name="destinationTableName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationTableName"></a>

```java
public java.lang.String getDestinationTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}.

---

##### `partitionSpec`<sup>Optional</sup> <a name="partitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.partitionSpec"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTablePartitionSpec> getPartitionSpec();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>>

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_spec MskChannel#partition_spec}

---

### MskChannelIcebergDestinationDestinationTablePartitionSpec <a name="MskChannelIcebergDestinationDestinationTablePartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDestinationTablePartitionSpec;

MskChannelIcebergDestinationDestinationTablePartitionSpec.builder()
    .partitionStrategy(java.lang.String)
//  .source(IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTablePartitionSpecSource>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.partitionStrategy">partitionStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.source">source</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>></code> | source block. |

---

##### `partitionStrategy`<sup>Required</sup> <a name="partitionStrategy" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.partitionStrategy"></a>

```java
public java.lang.String getPartitionStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.source"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTablePartitionSpecSource> getSource();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source MskChannel#source}

---

### MskChannelIcebergDestinationDestinationTablePartitionSpecSource <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource;

MskChannelIcebergDestinationDestinationTablePartitionSpecSource.builder()
//  .sourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source_name MskChannel#source_name}. |

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source_name MskChannel#source_name}.

---

### MskChannelIcebergDestinationSchemaEvolution <a name="MskChannelIcebergDestinationSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationSchemaEvolution;

MskChannelIcebergDestinationSchemaEvolution.builder()
//  .enableSchemaEvolution(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.property.enableSchemaEvolution">enableSchemaEvolution</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}. |

---

##### `enableSchemaEvolution`<sup>Optional</sup> <a name="enableSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.property.enableSchemaEvolution"></a>

```java
public java.lang.Boolean|IResolvable getEnableSchemaEvolution();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}.

---

### MskChannelIcebergDestinationTableCreation <a name="MskChannelIcebergDestinationTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationTableCreation;

MskChannelIcebergDestinationTableCreation.builder()
//  .enableTableCreation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.property.enableTableCreation">enableTableCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}. |

---

##### `enableTableCreation`<sup>Optional</sup> <a name="enableTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.property.enableTableCreation"></a>

```java
public java.lang.Boolean|IResolvable getEnableTableCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}.

---

### MskChannelLoggingInfo <a name="MskChannelLoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfo;

MskChannelLoggingInfo.builder()
//  .cloudwatchLogs(IResolvable|java.util.List<MskChannelLoggingInfoCloudwatchLogs>)
//  .firehose(IResolvable|java.util.List<MskChannelLoggingInfoFirehose>)
//  .s3(IResolvable|java.util.List<MskChannelLoggingInfoS3>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>></code> | cloudwatch_logs block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.firehose">firehose</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>></code> | firehose block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.s3">s3</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>></code> | s3 block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfoCloudwatchLogs> getCloudwatchLogs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cloudwatch_logs MskChannel#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.firehose"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfoFirehose> getFirehose();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>>

firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#firehose MskChannel#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.s3"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfoS3> getS3();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3 MskChannel#s3}

---

### MskChannelLoggingInfoCloudwatchLogs <a name="MskChannelLoggingInfoCloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfoCloudwatchLogs;

MskChannelLoggingInfoCloudwatchLogs.builder()
    .enabled(java.lang.Boolean|IResolvable)
//  .logGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#log_group MskChannel#log_group}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#log_group MskChannel#log_group}.

---

### MskChannelLoggingInfoFirehose <a name="MskChannelLoggingInfoFirehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfoFirehose;

MskChannelLoggingInfoFirehose.builder()
    .enabled(java.lang.Boolean|IResolvable)
//  .deliveryStream(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}.

---

### MskChannelLoggingInfoS3 <a name="MskChannelLoggingInfoS3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfoS3;

MskChannelLoggingInfoS3.builder()
    .enabled(java.lang.Boolean|IResolvable)
//  .bucket(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket MskChannel#bucket}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#prefix MskChannel#prefix}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket MskChannel#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#prefix MskChannel#prefix}.

---

### MskChannelS3Destination <a name="MskChannelS3Destination" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelS3Destination;

MskChannelS3Destination.builder()
    .serviceExecutionRoleArn(java.lang.String)
//  .dataFreshnessInSeconds(java.lang.Number)
//  .deadLetterQueueS3(IResolvable|java.util.List<MskChannelS3DestinationDeadLetterQueueS3>)
//  .storage(IResolvable|java.util.List<MskChannelS3DestinationStorage>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.deadLetterQueueS3">deadLetterQueueS3</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>></code> | dead_letter_queue_s3 block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.storage">storage</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>></code> | storage block. |

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}.

---

##### `dataFreshnessInSeconds`<sup>Optional</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.dataFreshnessInSeconds"></a>

```java
public java.lang.Number getDataFreshnessInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}.

---

##### `deadLetterQueueS3`<sup>Optional</sup> <a name="deadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.deadLetterQueueS3"></a>

```java
public IResolvable|java.util.List<MskChannelS3DestinationDeadLetterQueueS3> getDeadLetterQueueS3();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>>

dead_letter_queue_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.storage"></a>

```java
public IResolvable|java.util.List<MskChannelS3DestinationStorage> getStorage();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage MskChannel#storage}

---

### MskChannelS3DestinationDeadLetterQueueS3 <a name="MskChannelS3DestinationDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelS3DestinationDeadLetterQueueS3;

MskChannelS3DestinationDeadLetterQueueS3.builder()
    .bucketArn(java.lang.String)
//  .errorOutputPrefix(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `errorOutputPrefix`<sup>Optional</sup> <a name="errorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```java
public java.lang.String getErrorOutputPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

### MskChannelS3DestinationStorage <a name="MskChannelS3DestinationStorage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelS3DestinationStorage;

MskChannelS3DestinationStorage.builder()
    .bucketArn(java.lang.String)
    .compressionType(java.lang.String)
    .storageClass(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .outputKeyTemplate(java.lang.String)
//  .outputPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputKeyTemplate">outputKeyTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputPrefix">outputPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}. |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}.

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

##### `outputKeyTemplate`<sup>Optional</sup> <a name="outputKeyTemplate" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputKeyTemplate"></a>

```java
public java.lang.String getOutputKeyTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}.

---

##### `outputPrefix`<sup>Optional</sup> <a name="outputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputPrefix"></a>

```java
public java.lang.String getOutputPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}.

---

### MskChannelTimeouts <a name="MskChannelTimeouts" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelTimeouts;

MskChannelTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#create MskChannel#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delete MskChannel#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#update MskChannel#update}

---

### MskChannelTopicConfiguration <a name="MskChannelTopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelTopicConfiguration;

MskChannelTopicConfiguration.builder()
    .topicArn(java.lang.String)
//  .recordConverter(IResolvable|java.util.List<MskChannelTopicConfigurationRecordConverter>)
//  .recordSchema(IResolvable|java.util.List<MskChannelTopicConfigurationRecordSchema>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordConverter">recordConverter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>></code> | record_converter block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordSchema">recordSchema</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>></code> | record_schema block. |

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}.

---

##### `recordConverter`<sup>Optional</sup> <a name="recordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordConverter"></a>

```java
public IResolvable|java.util.List<MskChannelTopicConfigurationRecordConverter> getRecordConverter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>>

record_converter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#record_converter MskChannel#record_converter}

---

##### `recordSchema`<sup>Optional</sup> <a name="recordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordSchema"></a>

```java
public IResolvable|java.util.List<MskChannelTopicConfigurationRecordSchema> getRecordSchema();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>>

record_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#record_schema MskChannel#record_schema}

---

### MskChannelTopicConfigurationRecordConverter <a name="MskChannelTopicConfigurationRecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelTopicConfigurationRecordConverter;

MskChannelTopicConfigurationRecordConverter.builder()
    .valueConverter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.property.valueConverter">valueConverter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}. |

---

##### `valueConverter`<sup>Required</sup> <a name="valueConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.property.valueConverter"></a>

```java
public java.lang.String getValueConverter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}.

---

### MskChannelTopicConfigurationRecordSchema <a name="MskChannelTopicConfigurationRecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelTopicConfigurationRecordSchema;

MskChannelTopicConfigurationRecordSchema.builder()
    .gsrArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.property.gsrArn">gsrArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}. |

---

##### `gsrArn`<sup>Required</sup> <a name="gsrArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.property.gsrArn"></a>

```java
public java.lang.String getGsrArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskChannelEncryptionConfigurationList <a name="MskChannelEncryptionConfigurationList" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelEncryptionConfigurationList;

new MskChannelEncryptionConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get"></a>

```java
public MskChannelEncryptionConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelEncryptionConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>>

---


### MskChannelEncryptionConfigurationOutputReference <a name="MskChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelEncryptionConfigurationOutputReference;

new MskChannelEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

---


### MskChannelIcebergDestinationCatalogList <a name="MskChannelIcebergDestinationCatalogList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationCatalogList;

new MskChannelIcebergDestinationCatalogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get"></a>

```java
public MskChannelIcebergDestinationCatalogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationCatalog> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>>

---


### MskChannelIcebergDestinationCatalogOutputReference <a name="MskChannelIcebergDestinationCatalogOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationCatalogOutputReference;

new MskChannelIcebergDestinationCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetCatalogArn">resetCatalogArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetWarehouseLocation">resetWarehouseLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogArn` <a name="resetCatalogArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetCatalogArn"></a>

```java
public void resetCatalogArn()
```

##### `resetWarehouseLocation` <a name="resetWarehouseLocation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetWarehouseLocation"></a>

```java
public void resetWarehouseLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArnInput">catalogArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocationInput">warehouseLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArn">catalogArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocation">warehouseLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogArnInput`<sup>Optional</sup> <a name="catalogArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArnInput"></a>

```java
public java.lang.String getCatalogArnInput();
```

- *Type:* java.lang.String

---

##### `warehouseLocationInput`<sup>Optional</sup> <a name="warehouseLocationInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocationInput"></a>

```java
public java.lang.String getWarehouseLocationInput();
```

- *Type:* java.lang.String

---

##### `catalogArn`<sup>Required</sup> <a name="catalogArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArn"></a>

```java
public java.lang.String getCatalogArn();
```

- *Type:* java.lang.String

---

##### `warehouseLocation`<sup>Required</sup> <a name="warehouseLocation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocation"></a>

```java
public java.lang.String getWarehouseLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelIcebergDestinationCatalog getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>

---


### MskChannelIcebergDestinationDeadLetterQueueS3List <a name="MskChannelIcebergDestinationDeadLetterQueueS3List" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDeadLetterQueueS3List;

new MskChannelIcebergDestinationDeadLetterQueueS3List(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get"></a>

```java
public MskChannelIcebergDestinationDeadLetterQueueS3OutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDeadLetterQueueS3> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>>

---


### MskChannelIcebergDestinationDeadLetterQueueS3OutputReference <a name="MskChannelIcebergDestinationDeadLetterQueueS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference;

new MskChannelIcebergDestinationDeadLetterQueueS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">resetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorOutputPrefix` <a name="resetErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```java
public void resetErrorOutputPrefix()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">errorOutputPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `errorOutputPrefixInput`<sup>Optional</sup> <a name="errorOutputPrefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```java
public java.lang.String getErrorOutputPrefixInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `errorOutputPrefix`<sup>Required</sup> <a name="errorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```java
public java.lang.String getErrorOutputPrefix();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelIcebergDestinationDeadLetterQueueS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>

---


### MskChannelIcebergDestinationDestinationTableList <a name="MskChannelIcebergDestinationDestinationTableList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDestinationTableList;

new MskChannelIcebergDestinationDestinationTableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get"></a>

```java
public MskChannelIcebergDestinationDestinationTableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTable> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>>

---


### MskChannelIcebergDestinationDestinationTableOutputReference <a name="MskChannelIcebergDestinationDestinationTableOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDestinationTableOutputReference;

new MskChannelIcebergDestinationDestinationTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec">putPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationDatabaseName">resetDestinationDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationTableName">resetDestinationTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetPartitionSpec">resetPartitionSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionSpec` <a name="putPartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec"></a>

```java
public void putPartitionSpec(IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTablePartitionSpec> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>>

---

##### `resetDestinationDatabaseName` <a name="resetDestinationDatabaseName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationDatabaseName"></a>

```java
public void resetDestinationDatabaseName()
```

##### `resetDestinationTableName` <a name="resetDestinationTableName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationTableName"></a>

```java
public void resetDestinationTableName()
```

##### `resetPartitionSpec` <a name="resetPartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetPartitionSpec"></a>

```java
public void resetPartitionSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList">MskChannelIcebergDestinationDestinationTablePartitionSpecList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseNameInput">destinationDatabaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableNameInput">destinationTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpecInput">partitionSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseName">destinationDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableName">destinationTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitionSpec`<sup>Required</sup> <a name="partitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpec"></a>

```java
public MskChannelIcebergDestinationDestinationTablePartitionSpecList getPartitionSpec();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList">MskChannelIcebergDestinationDestinationTablePartitionSpecList</a>

---

##### `destinationDatabaseNameInput`<sup>Optional</sup> <a name="destinationDatabaseNameInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseNameInput"></a>

```java
public java.lang.String getDestinationDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `destinationTableNameInput`<sup>Optional</sup> <a name="destinationTableNameInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableNameInput"></a>

```java
public java.lang.String getDestinationTableNameInput();
```

- *Type:* java.lang.String

---

##### `partitionSpecInput`<sup>Optional</sup> <a name="partitionSpecInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpecInput"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTablePartitionSpec> getPartitionSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>>

---

##### `destinationDatabaseName`<sup>Required</sup> <a name="destinationDatabaseName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseName"></a>

```java
public java.lang.String getDestinationDatabaseName();
```

- *Type:* java.lang.String

---

##### `destinationTableName`<sup>Required</sup> <a name="destinationTableName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableName"></a>

```java
public java.lang.String getDestinationTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelIcebergDestinationDestinationTable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecList <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDestinationTablePartitionSpecList;

new MskChannelIcebergDestinationDestinationTablePartitionSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get"></a>

```java
public MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTablePartitionSpec> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>>

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference;

new MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource"></a>

```java
public void putSource(IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTablePartitionSpecSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>>

---

##### `resetSource` <a name="resetSource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList">MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategyInput">partitionStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.sourceInput">sourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategy">partitionStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.source"></a>

```java
public MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList getSource();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList">MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList</a>

---

##### `partitionStrategyInput`<sup>Optional</sup> <a name="partitionStrategyInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategyInput"></a>

```java
public java.lang.String getPartitionStrategyInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.sourceInput"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTablePartitionSpecSource> getSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>>

---

##### `partitionStrategy`<sup>Required</sup> <a name="partitionStrategy" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategy"></a>

```java
public java.lang.String getPartitionStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList;

new MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get"></a>

```java
public MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTablePartitionSpecSource> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>>

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference;

new MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resetSourceName">resetSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceName` <a name="resetSourceName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resetSourceName"></a>

```java
public void resetSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceNameInput"></a>

```java
public java.lang.String getSourceNameInput();
```

- *Type:* java.lang.String

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpecSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>

---


### MskChannelIcebergDestinationList <a name="MskChannelIcebergDestinationList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationList;

new MskChannelIcebergDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get"></a>

```java
public MskChannelIcebergDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>>

---


### MskChannelIcebergDestinationOutputReference <a name="MskChannelIcebergDestinationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationOutputReference;

new MskChannelIcebergDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog">putCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3">putDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable">putDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution">putSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation">putTableCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDataFreshnessInSeconds">resetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDeadLetterQueueS3">resetDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDestinationTable">resetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetSchemaEvolution">resetSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetTableCreation">resetTableCreation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalog` <a name="putCatalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog"></a>

```java
public void putCatalog(IResolvable|java.util.List<MskChannelIcebergDestinationCatalog> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>>

---

##### `putDeadLetterQueueS3` <a name="putDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3"></a>

```java
public void putDeadLetterQueueS3(IResolvable|java.util.List<MskChannelIcebergDestinationDeadLetterQueueS3> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>>

---

##### `putDestinationTable` <a name="putDestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable"></a>

```java
public void putDestinationTable(IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>>

---

##### `putSchemaEvolution` <a name="putSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution"></a>

```java
public void putSchemaEvolution(IResolvable|java.util.List<MskChannelIcebergDestinationSchemaEvolution> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>>

---

##### `putTableCreation` <a name="putTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation"></a>

```java
public void putTableCreation(IResolvable|java.util.List<MskChannelIcebergDestinationTableCreation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCompressionType"></a>

```java
public void resetCompressionType()
```

##### `resetDataFreshnessInSeconds` <a name="resetDataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDataFreshnessInSeconds"></a>

```java
public void resetDataFreshnessInSeconds()
```

##### `resetDeadLetterQueueS3` <a name="resetDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDeadLetterQueueS3"></a>

```java
public void resetDeadLetterQueueS3()
```

##### `resetDestinationTable` <a name="resetDestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDestinationTable"></a>

```java
public void resetDestinationTable()
```

##### `resetSchemaEvolution` <a name="resetSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetSchemaEvolution"></a>

```java
public void resetSchemaEvolution()
```

##### `resetTableCreation` <a name="resetTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetTableCreation"></a>

```java
public void resetTableCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList">MskChannelIcebergDestinationCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3">deadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List">MskChannelIcebergDestinationDeadLetterQueueS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTable">destinationTable</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList">MskChannelIcebergDestinationDestinationTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolution">schemaEvolution</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList">MskChannelIcebergDestinationSchemaEvolutionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreation">tableCreation</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList">MskChannelIcebergDestinationTableCreationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnlyInput">appendOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalogInput">catalogInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSecondsInput">dataFreshnessInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3Input">deadLetterQueueS3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTableInput">destinationTableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolutionInput">schemaEvolutionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreationInput">tableCreationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnly">appendOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalog"></a>

```java
public MskChannelIcebergDestinationCatalogList getCatalog();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList">MskChannelIcebergDestinationCatalogList</a>

---

##### `deadLetterQueueS3`<sup>Required</sup> <a name="deadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3"></a>

```java
public MskChannelIcebergDestinationDeadLetterQueueS3List getDeadLetterQueueS3();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List">MskChannelIcebergDestinationDeadLetterQueueS3List</a>

---

##### `destinationTable`<sup>Required</sup> <a name="destinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTable"></a>

```java
public MskChannelIcebergDestinationDestinationTableList getDestinationTable();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList">MskChannelIcebergDestinationDestinationTableList</a>

---

##### `schemaEvolution`<sup>Required</sup> <a name="schemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolution"></a>

```java
public MskChannelIcebergDestinationSchemaEvolutionList getSchemaEvolution();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList">MskChannelIcebergDestinationSchemaEvolutionList</a>

---

##### `tableCreation`<sup>Required</sup> <a name="tableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreation"></a>

```java
public MskChannelIcebergDestinationTableCreationList getTableCreation();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList">MskChannelIcebergDestinationTableCreationList</a>

---

##### `appendOnlyInput`<sup>Optional</sup> <a name="appendOnlyInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getAppendOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalogInput"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationCatalog> getCatalogInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>>

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionTypeInput"></a>

```java
public java.lang.String getCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `dataFreshnessInSecondsInput`<sup>Optional</sup> <a name="dataFreshnessInSecondsInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSecondsInput"></a>

```java
public java.lang.Number getDataFreshnessInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `deadLetterQueueS3Input`<sup>Optional</sup> <a name="deadLetterQueueS3Input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3Input"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDeadLetterQueueS3> getDeadLetterQueueS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>>

---

##### `destinationTableInput`<sup>Optional</sup> <a name="destinationTableInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTableInput"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationDestinationTable> getDestinationTableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>>

---

##### `schemaEvolutionInput`<sup>Optional</sup> <a name="schemaEvolutionInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolutionInput"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationSchemaEvolution> getSchemaEvolutionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>>

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArnInput"></a>

```java
public java.lang.String getServiceExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tableCreationInput`<sup>Optional</sup> <a name="tableCreationInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreationInput"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationTableCreation> getTableCreationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>>

---

##### `appendOnly`<sup>Required</sup> <a name="appendOnly" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnly"></a>

```java
public java.lang.Boolean|IResolvable getAppendOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `dataFreshnessInSeconds`<sup>Required</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSeconds"></a>

```java
public java.lang.Number getDataFreshnessInSeconds();
```

- *Type:* java.lang.Number

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelIcebergDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>

---


### MskChannelIcebergDestinationSchemaEvolutionList <a name="MskChannelIcebergDestinationSchemaEvolutionList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationSchemaEvolutionList;

new MskChannelIcebergDestinationSchemaEvolutionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get"></a>

```java
public MskChannelIcebergDestinationSchemaEvolutionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationSchemaEvolution> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>>

---


### MskChannelIcebergDestinationSchemaEvolutionOutputReference <a name="MskChannelIcebergDestinationSchemaEvolutionOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationSchemaEvolutionOutputReference;

new MskChannelIcebergDestinationSchemaEvolutionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resetEnableSchemaEvolution">resetEnableSchemaEvolution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableSchemaEvolution` <a name="resetEnableSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resetEnableSchemaEvolution"></a>

```java
public void resetEnableSchemaEvolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput">enableSchemaEvolutionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolution">enableSchemaEvolution</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableSchemaEvolutionInput`<sup>Optional</sup> <a name="enableSchemaEvolutionInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSchemaEvolutionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSchemaEvolution`<sup>Required</sup> <a name="enableSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolution"></a>

```java
public java.lang.Boolean|IResolvable getEnableSchemaEvolution();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelIcebergDestinationSchemaEvolution getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>

---


### MskChannelIcebergDestinationTableCreationList <a name="MskChannelIcebergDestinationTableCreationList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationTableCreationList;

new MskChannelIcebergDestinationTableCreationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get"></a>

```java
public MskChannelIcebergDestinationTableCreationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelIcebergDestinationTableCreation> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>>

---


### MskChannelIcebergDestinationTableCreationOutputReference <a name="MskChannelIcebergDestinationTableCreationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelIcebergDestinationTableCreationOutputReference;

new MskChannelIcebergDestinationTableCreationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resetEnableTableCreation">resetEnableTableCreation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableTableCreation` <a name="resetEnableTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resetEnableTableCreation"></a>

```java
public void resetEnableTableCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreationInput">enableTableCreationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreation">enableTableCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableTableCreationInput`<sup>Optional</sup> <a name="enableTableCreationInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableTableCreationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableTableCreation`<sup>Required</sup> <a name="enableTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreation"></a>

```java
public java.lang.Boolean|IResolvable getEnableTableCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelIcebergDestinationTableCreation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>

---


### MskChannelLoggingInfoCloudwatchLogsList <a name="MskChannelLoggingInfoCloudwatchLogsList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfoCloudwatchLogsList;

new MskChannelLoggingInfoCloudwatchLogsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get"></a>

```java
public MskChannelLoggingInfoCloudwatchLogsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfoCloudwatchLogs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>>

---


### MskChannelLoggingInfoCloudwatchLogsOutputReference <a name="MskChannelLoggingInfoCloudwatchLogsOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfoCloudwatchLogsOutputReference;

new MskChannelLoggingInfoCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelLoggingInfoCloudwatchLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

---


### MskChannelLoggingInfoFirehoseList <a name="MskChannelLoggingInfoFirehoseList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfoFirehoseList;

new MskChannelLoggingInfoFirehoseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get"></a>

```java
public MskChannelLoggingInfoFirehoseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfoFirehose> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>>

---


### MskChannelLoggingInfoFirehoseOutputReference <a name="MskChannelLoggingInfoFirehoseOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfoFirehoseOutputReference;

new MskChannelLoggingInfoFirehoseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream"></a>

```java
public void resetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput"></a>

```java
public java.lang.String getDeliveryStreamInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelLoggingInfoFirehose getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

---


### MskChannelLoggingInfoList <a name="MskChannelLoggingInfoList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfoList;

new MskChannelLoggingInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get"></a>

```java
public MskChannelLoggingInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfo> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>>

---


### MskChannelLoggingInfoOutputReference <a name="MskChannelLoggingInfoOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfoOutputReference;

new MskChannelLoggingInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs"></a>

```java
public void putCloudwatchLogs(IResolvable|java.util.List<MskChannelLoggingInfoCloudwatchLogs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>>

---

##### `putFirehose` <a name="putFirehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose"></a>

```java
public void putFirehose(IResolvable|java.util.List<MskChannelLoggingInfoFirehose> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>>

---

##### `putS3` <a name="putS3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3"></a>

```java
public void putS3(IResolvable|java.util.List<MskChannelLoggingInfoS3> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs"></a>

```java
public void resetCloudwatchLogs()
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose"></a>

```java
public void resetFirehose()
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList">MskChannelLoggingInfoCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList">MskChannelLoggingInfoFirehoseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List">MskChannelLoggingInfoS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput">firehoseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs"></a>

```java
public MskChannelLoggingInfoCloudwatchLogsList getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList">MskChannelLoggingInfoCloudwatchLogsList</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose"></a>

```java
public MskChannelLoggingInfoFirehoseList getFirehose();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList">MskChannelLoggingInfoFirehoseList</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3"></a>

```java
public MskChannelLoggingInfoS3List getS3();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List">MskChannelLoggingInfoS3List</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfoCloudwatchLogs> getCloudwatchLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfoFirehose> getFirehoseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfoS3> getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelLoggingInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

---


### MskChannelLoggingInfoS3List <a name="MskChannelLoggingInfoS3List" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfoS3List;

new MskChannelLoggingInfoS3List(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get"></a>

```java
public MskChannelLoggingInfoS3OutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelLoggingInfoS3> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>>

---


### MskChannelLoggingInfoS3OutputReference <a name="MskChannelLoggingInfoS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelLoggingInfoS3OutputReference;

new MskChannelLoggingInfoS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelLoggingInfoS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

---


### MskChannelS3DestinationDeadLetterQueueS3List <a name="MskChannelS3DestinationDeadLetterQueueS3List" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelS3DestinationDeadLetterQueueS3List;

new MskChannelS3DestinationDeadLetterQueueS3List(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get"></a>

```java
public MskChannelS3DestinationDeadLetterQueueS3OutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelS3DestinationDeadLetterQueueS3> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>>

---


### MskChannelS3DestinationDeadLetterQueueS3OutputReference <a name="MskChannelS3DestinationDeadLetterQueueS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelS3DestinationDeadLetterQueueS3OutputReference;

new MskChannelS3DestinationDeadLetterQueueS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">resetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorOutputPrefix` <a name="resetErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```java
public void resetErrorOutputPrefix()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">errorOutputPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">errorOutputPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `errorOutputPrefixInput`<sup>Optional</sup> <a name="errorOutputPrefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```java
public java.lang.String getErrorOutputPrefixInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `errorOutputPrefix`<sup>Required</sup> <a name="errorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```java
public java.lang.String getErrorOutputPrefix();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelS3DestinationDeadLetterQueueS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>

---


### MskChannelS3DestinationList <a name="MskChannelS3DestinationList" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelS3DestinationList;

new MskChannelS3DestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get"></a>

```java
public MskChannelS3DestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelS3Destination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>>

---


### MskChannelS3DestinationOutputReference <a name="MskChannelS3DestinationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelS3DestinationOutputReference;

new MskChannelS3DestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3">putDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDataFreshnessInSeconds">resetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDeadLetterQueueS3">resetDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetStorage">resetStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeadLetterQueueS3` <a name="putDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3"></a>

```java
public void putDeadLetterQueueS3(IResolvable|java.util.List<MskChannelS3DestinationDeadLetterQueueS3> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage"></a>

```java
public void putStorage(IResolvable|java.util.List<MskChannelS3DestinationStorage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>>

---

##### `resetDataFreshnessInSeconds` <a name="resetDataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDataFreshnessInSeconds"></a>

```java
public void resetDataFreshnessInSeconds()
```

##### `resetDeadLetterQueueS3` <a name="resetDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDeadLetterQueueS3"></a>

```java
public void resetDeadLetterQueueS3()
```

##### `resetStorage` <a name="resetStorage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetStorage"></a>

```java
public void resetStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3">deadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List">MskChannelS3DestinationDeadLetterQueueS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList">MskChannelS3DestinationStorageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSecondsInput">dataFreshnessInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3Input">deadLetterQueueS3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storageInput">storageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSeconds">dataFreshnessInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deadLetterQueueS3`<sup>Required</sup> <a name="deadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3"></a>

```java
public MskChannelS3DestinationDeadLetterQueueS3List getDeadLetterQueueS3();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List">MskChannelS3DestinationDeadLetterQueueS3List</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storage"></a>

```java
public MskChannelS3DestinationStorageList getStorage();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList">MskChannelS3DestinationStorageList</a>

---

##### `dataFreshnessInSecondsInput`<sup>Optional</sup> <a name="dataFreshnessInSecondsInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSecondsInput"></a>

```java
public java.lang.Number getDataFreshnessInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `deadLetterQueueS3Input`<sup>Optional</sup> <a name="deadLetterQueueS3Input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3Input"></a>

```java
public IResolvable|java.util.List<MskChannelS3DestinationDeadLetterQueueS3> getDeadLetterQueueS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>>

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArnInput"></a>

```java
public java.lang.String getServiceExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storageInput"></a>

```java
public IResolvable|java.util.List<MskChannelS3DestinationStorage> getStorageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>>

---

##### `dataFreshnessInSeconds`<sup>Required</sup> <a name="dataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSeconds"></a>

```java
public java.lang.Number getDataFreshnessInSeconds();
```

- *Type:* java.lang.Number

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelS3Destination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>

---


### MskChannelS3DestinationStorageList <a name="MskChannelS3DestinationStorageList" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelS3DestinationStorageList;

new MskChannelS3DestinationStorageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get"></a>

```java
public MskChannelS3DestinationStorageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelS3DestinationStorage> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>>

---


### MskChannelS3DestinationStorageOutputReference <a name="MskChannelS3DestinationStorageOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelS3DestinationStorageOutputReference;

new MskChannelS3DestinationStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputKeyTemplate">resetOutputKeyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputPrefix">resetOutputPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetOutputKeyTemplate` <a name="resetOutputKeyTemplate" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputKeyTemplate"></a>

```java
public void resetOutputKeyTemplate()
```

##### `resetOutputPrefix` <a name="resetOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputPrefix"></a>

```java
public void resetOutputPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplateInput">outputKeyTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefixInput">outputPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplate">outputKeyTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefix">outputPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionTypeInput"></a>

```java
public java.lang.String getCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `outputKeyTemplateInput`<sup>Optional</sup> <a name="outputKeyTemplateInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplateInput"></a>

```java
public java.lang.String getOutputKeyTemplateInput();
```

- *Type:* java.lang.String

---

##### `outputPrefixInput`<sup>Optional</sup> <a name="outputPrefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefixInput"></a>

```java
public java.lang.String getOutputPrefixInput();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `outputKeyTemplate`<sup>Required</sup> <a name="outputKeyTemplate" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplate"></a>

```java
public java.lang.String getOutputKeyTemplate();
```

- *Type:* java.lang.String

---

##### `outputPrefix`<sup>Required</sup> <a name="outputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefix"></a>

```java
public java.lang.String getOutputPrefix();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelS3DestinationStorage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>

---


### MskChannelTimeoutsOutputReference <a name="MskChannelTimeoutsOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelTimeoutsOutputReference;

new MskChannelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

---


### MskChannelTopicConfigurationList <a name="MskChannelTopicConfigurationList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelTopicConfigurationList;

new MskChannelTopicConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get"></a>

```java
public MskChannelTopicConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelTopicConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>>

---


### MskChannelTopicConfigurationOutputReference <a name="MskChannelTopicConfigurationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelTopicConfigurationOutputReference;

new MskChannelTopicConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter">putRecordConverter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema">putRecordSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordConverter">resetRecordConverter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordSchema">resetRecordSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecordConverter` <a name="putRecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter"></a>

```java
public void putRecordConverter(IResolvable|java.util.List<MskChannelTopicConfigurationRecordConverter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>>

---

##### `putRecordSchema` <a name="putRecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema"></a>

```java
public void putRecordSchema(IResolvable|java.util.List<MskChannelTopicConfigurationRecordSchema> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>>

---

##### `resetRecordConverter` <a name="resetRecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordConverter"></a>

```java
public void resetRecordConverter()
```

##### `resetRecordSchema` <a name="resetRecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordSchema"></a>

```java
public void resetRecordSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverter">recordConverter</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList">MskChannelTopicConfigurationRecordConverterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchema">recordSchema</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList">MskChannelTopicConfigurationRecordSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverterInput">recordConverterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchemaInput">recordSchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recordConverter`<sup>Required</sup> <a name="recordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverter"></a>

```java
public MskChannelTopicConfigurationRecordConverterList getRecordConverter();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList">MskChannelTopicConfigurationRecordConverterList</a>

---

##### `recordSchema`<sup>Required</sup> <a name="recordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchema"></a>

```java
public MskChannelTopicConfigurationRecordSchemaList getRecordSchema();
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList">MskChannelTopicConfigurationRecordSchemaList</a>

---

##### `recordConverterInput`<sup>Optional</sup> <a name="recordConverterInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverterInput"></a>

```java
public IResolvable|java.util.List<MskChannelTopicConfigurationRecordConverter> getRecordConverterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>>

---

##### `recordSchemaInput`<sup>Optional</sup> <a name="recordSchemaInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchemaInput"></a>

```java
public IResolvable|java.util.List<MskChannelTopicConfigurationRecordSchema> getRecordSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>>

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelTopicConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>

---


### MskChannelTopicConfigurationRecordConverterList <a name="MskChannelTopicConfigurationRecordConverterList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelTopicConfigurationRecordConverterList;

new MskChannelTopicConfigurationRecordConverterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get"></a>

```java
public MskChannelTopicConfigurationRecordConverterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelTopicConfigurationRecordConverter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>>

---


### MskChannelTopicConfigurationRecordConverterOutputReference <a name="MskChannelTopicConfigurationRecordConverterOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelTopicConfigurationRecordConverterOutputReference;

new MskChannelTopicConfigurationRecordConverterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverterInput">valueConverterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverter">valueConverter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueConverterInput`<sup>Optional</sup> <a name="valueConverterInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverterInput"></a>

```java
public java.lang.String getValueConverterInput();
```

- *Type:* java.lang.String

---

##### `valueConverter`<sup>Required</sup> <a name="valueConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverter"></a>

```java
public java.lang.String getValueConverter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelTopicConfigurationRecordConverter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>

---


### MskChannelTopicConfigurationRecordSchemaList <a name="MskChannelTopicConfigurationRecordSchemaList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelTopicConfigurationRecordSchemaList;

new MskChannelTopicConfigurationRecordSchemaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get"></a>

```java
public MskChannelTopicConfigurationRecordSchemaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MskChannelTopicConfigurationRecordSchema> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>>

---


### MskChannelTopicConfigurationRecordSchemaOutputReference <a name="MskChannelTopicConfigurationRecordSchemaOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.msk_channel.MskChannelTopicConfigurationRecordSchemaOutputReference;

new MskChannelTopicConfigurationRecordSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArnInput">gsrArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArn">gsrArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gsrArnInput`<sup>Optional</sup> <a name="gsrArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArnInput"></a>

```java
public java.lang.String getGsrArnInput();
```

- *Type:* java.lang.String

---

##### `gsrArn`<sup>Required</sup> <a name="gsrArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArn"></a>

```java
public java.lang.String getGsrArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|MskChannelTopicConfigurationRecordSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>

---



