# `pinpointsmsvoicev2EventDestination` Submodule <a name="`pinpointsmsvoicev2EventDestination` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2EventDestination <a name="Pinpointsmsvoicev2EventDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination aws_pinpointsmsvoicev2_event_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestination;

Pinpointsmsvoicev2EventDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configurationSetName(java.lang.String)
    .eventDestinationName(java.lang.String)
    .matchingEventTypes(java.util.List<java.lang.String>)
//  .cloudwatchLogsDestination(IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .kinesisFirehoseDestination(IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination>)
//  .region(java.lang.String)
//  .snsDestination(IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationSnsDestination>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | Name of the configuration set this event destination belongs to. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.eventDestinationName">eventDestinationName</a></code> | <code>java.lang.String</code> | Name of the event destination. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.matchingEventTypes">matchingEventTypes</a></code> | <code>java.util.List<java.lang.String></code> | Event types for which the destination receives records. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.cloudwatchLogsDestination">cloudwatchLogsDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>></code> | cloudwatch_logs_destination block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the event destination is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>></code> | kinesis_firehose_destination block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.snsDestination">snsDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>></code> | sns_destination block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.configurationSetName"></a>

- *Type:* java.lang.String

Name of the configuration set this event destination belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#configuration_set_name Pinpointsmsvoicev2EventDestination#configuration_set_name}

---

##### `eventDestinationName`<sup>Required</sup> <a name="eventDestinationName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.eventDestinationName"></a>

- *Type:* java.lang.String

Name of the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#event_destination_name Pinpointsmsvoicev2EventDestination#event_destination_name}

---

##### `matchingEventTypes`<sup>Required</sup> <a name="matchingEventTypes" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.matchingEventTypes"></a>

- *Type:* java.util.List<java.lang.String>

Event types for which the destination receives records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#matching_event_types Pinpointsmsvoicev2EventDestination#matching_event_types}

---

##### `cloudwatchLogsDestination`<sup>Optional</sup> <a name="cloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.cloudwatchLogsDestination"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>>

cloudwatch_logs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#cloudwatch_logs_destination Pinpointsmsvoicev2EventDestination#cloudwatch_logs_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the event destination is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#enabled Pinpointsmsvoicev2EventDestination#enabled}

---

##### `kinesisFirehoseDestination`<sup>Optional</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.kinesisFirehoseDestination"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>>

kinesis_firehose_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#kinesis_firehose_destination Pinpointsmsvoicev2EventDestination#kinesis_firehose_destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#region Pinpointsmsvoicev2EventDestination#region}

---

##### `snsDestination`<sup>Optional</sup> <a name="snsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.snsDestination"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>>

sns_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#sns_destination Pinpointsmsvoicev2EventDestination#sns_destination}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putCloudwatchLogsDestination">putCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putKinesisFirehoseDestination">putKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putSnsDestination">putSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetCloudwatchLogsDestination">resetCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetKinesisFirehoseDestination">resetKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetSnsDestination">resetSnsDestination</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudwatchLogsDestination` <a name="putCloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putCloudwatchLogsDestination"></a>

```java
public void putCloudwatchLogsDestination(IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putCloudwatchLogsDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>>

---

##### `putKinesisFirehoseDestination` <a name="putKinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putKinesisFirehoseDestination"></a>

```java
public void putKinesisFirehoseDestination(IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putKinesisFirehoseDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>>

---

##### `putSnsDestination` <a name="putSnsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putSnsDestination"></a>

```java
public void putSnsDestination(IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationSnsDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putSnsDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>>

---

##### `resetCloudwatchLogsDestination` <a name="resetCloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetCloudwatchLogsDestination"></a>

```java
public void resetCloudwatchLogsDestination()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetKinesisFirehoseDestination` <a name="resetKinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetKinesisFirehoseDestination"></a>

```java
public void resetKinesisFirehoseDestination()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSnsDestination` <a name="resetSnsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetSnsDestination"></a>

```java
public void resetSnsDestination()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2EventDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isConstruct"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestination;

Pinpointsmsvoicev2EventDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestination;

Pinpointsmsvoicev2EventDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestination;

Pinpointsmsvoicev2EventDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestination;

Pinpointsmsvoicev2EventDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Pinpointsmsvoicev2EventDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2EventDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Pinpointsmsvoicev2EventDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Pinpointsmsvoicev2EventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2EventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestination">cloudwatchLogsDestination</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetArn">configurationSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList">Pinpointsmsvoicev2EventDestinationSnsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestinationInput">cloudwatchLogsDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationNameInput">eventDestinationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestinationInput">kinesisFirehoseDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypesInput">matchingEventTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestinationInput">snsDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationName">eventDestinationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypes">matchingEventTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudwatchLogsDestination`<sup>Required</sup> <a name="cloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestination"></a>

```java
public Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList getCloudwatchLogsDestination();
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList</a>

---

##### `configurationSetArn`<sup>Required</sup> <a name="configurationSetArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetArn"></a>

```java
public java.lang.String getConfigurationSetArn();
```

- *Type:* java.lang.String

---

##### `kinesisFirehoseDestination`<sup>Required</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestination"></a>

```java
public Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList getKinesisFirehoseDestination();
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList</a>

---

##### `snsDestination`<sup>Required</sup> <a name="snsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestination"></a>

```java
public Pinpointsmsvoicev2EventDestinationSnsDestinationList getSnsDestination();
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList">Pinpointsmsvoicev2EventDestinationSnsDestinationList</a>

---

##### `cloudwatchLogsDestinationInput`<sup>Optional</sup> <a name="cloudwatchLogsDestinationInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestinationInput"></a>

```java
public IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination> getCloudwatchLogsDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>>

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetNameInput"></a>

```java
public java.lang.String getConfigurationSetNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventDestinationNameInput`<sup>Optional</sup> <a name="eventDestinationNameInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationNameInput"></a>

```java
public java.lang.String getEventDestinationNameInput();
```

- *Type:* java.lang.String

---

##### `kinesisFirehoseDestinationInput`<sup>Optional</sup> <a name="kinesisFirehoseDestinationInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestinationInput"></a>

```java
public IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination> getKinesisFirehoseDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>>

---

##### `matchingEventTypesInput`<sup>Optional</sup> <a name="matchingEventTypesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypesInput"></a>

```java
public java.util.List<java.lang.String> getMatchingEventTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `snsDestinationInput`<sup>Optional</sup> <a name="snsDestinationInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestinationInput"></a>

```java
public IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationSnsDestination> getSnsDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventDestinationName`<sup>Required</sup> <a name="eventDestinationName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationName"></a>

```java
public java.lang.String getEventDestinationName();
```

- *Type:* java.lang.String

---

##### `matchingEventTypes`<sup>Required</sup> <a name="matchingEventTypes" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypes"></a>

```java
public java.util.List<java.lang.String> getMatchingEventTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination <a name="Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination;

Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.builder()
    .iamRoleArn(java.lang.String)
    .logGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | ARN of the IAM role that End User Messaging SMS assumes to write to the log group. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | ARN of the Amazon CloudWatch log group that receives the events. |

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

ARN of the IAM role that End User Messaging SMS assumes to write to the log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#iam_role_arn Pinpointsmsvoicev2EventDestination#iam_role_arn}

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

ARN of the Amazon CloudWatch log group that receives the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#log_group_arn Pinpointsmsvoicev2EventDestination#log_group_arn}

---

### Pinpointsmsvoicev2EventDestinationConfig <a name="Pinpointsmsvoicev2EventDestinationConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestinationConfig;

Pinpointsmsvoicev2EventDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configurationSetName(java.lang.String)
    .eventDestinationName(java.lang.String)
    .matchingEventTypes(java.util.List<java.lang.String>)
//  .cloudwatchLogsDestination(IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .kinesisFirehoseDestination(IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination>)
//  .region(java.lang.String)
//  .snsDestination(IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationSnsDestination>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | Name of the configuration set this event destination belongs to. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.eventDestinationName">eventDestinationName</a></code> | <code>java.lang.String</code> | Name of the event destination. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.matchingEventTypes">matchingEventTypes</a></code> | <code>java.util.List<java.lang.String></code> | Event types for which the destination receives records. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.cloudwatchLogsDestination">cloudwatchLogsDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>></code> | cloudwatch_logs_destination block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the event destination is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>></code> | kinesis_firehose_destination block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.snsDestination">snsDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>></code> | sns_destination block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

Name of the configuration set this event destination belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#configuration_set_name Pinpointsmsvoicev2EventDestination#configuration_set_name}

---

##### `eventDestinationName`<sup>Required</sup> <a name="eventDestinationName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.eventDestinationName"></a>

```java
public java.lang.String getEventDestinationName();
```

- *Type:* java.lang.String

Name of the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#event_destination_name Pinpointsmsvoicev2EventDestination#event_destination_name}

---

##### `matchingEventTypes`<sup>Required</sup> <a name="matchingEventTypes" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.matchingEventTypes"></a>

```java
public java.util.List<java.lang.String> getMatchingEventTypes();
```

- *Type:* java.util.List<java.lang.String>

Event types for which the destination receives records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#matching_event_types Pinpointsmsvoicev2EventDestination#matching_event_types}

---

##### `cloudwatchLogsDestination`<sup>Optional</sup> <a name="cloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.cloudwatchLogsDestination"></a>

```java
public IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination> getCloudwatchLogsDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>>

cloudwatch_logs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#cloudwatch_logs_destination Pinpointsmsvoicev2EventDestination#cloudwatch_logs_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the event destination is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#enabled Pinpointsmsvoicev2EventDestination#enabled}

---

##### `kinesisFirehoseDestination`<sup>Optional</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.kinesisFirehoseDestination"></a>

```java
public IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination> getKinesisFirehoseDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>>

kinesis_firehose_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#kinesis_firehose_destination Pinpointsmsvoicev2EventDestination#kinesis_firehose_destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#region Pinpointsmsvoicev2EventDestination#region}

---

##### `snsDestination`<sup>Optional</sup> <a name="snsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.snsDestination"></a>

```java
public IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationSnsDestination> getSnsDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>>

sns_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#sns_destination Pinpointsmsvoicev2EventDestination#sns_destination}

---

### Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination <a name="Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination;

Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.builder()
    .deliveryStreamArn(java.lang.String)
    .iamRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>java.lang.String</code> | ARN of the Amazon Data Firehose delivery stream that receives the events. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | ARN of the IAM role that End User Messaging SMS assumes to write to the delivery stream. |

---

##### `deliveryStreamArn`<sup>Required</sup> <a name="deliveryStreamArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```java
public java.lang.String getDeliveryStreamArn();
```

- *Type:* java.lang.String

ARN of the Amazon Data Firehose delivery stream that receives the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#delivery_stream_arn Pinpointsmsvoicev2EventDestination#delivery_stream_arn}

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

ARN of the IAM role that End User Messaging SMS assumes to write to the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#iam_role_arn Pinpointsmsvoicev2EventDestination#iam_role_arn}

---

### Pinpointsmsvoicev2EventDestinationSnsDestination <a name="Pinpointsmsvoicev2EventDestinationSnsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestinationSnsDestination;

Pinpointsmsvoicev2EventDestinationSnsDestination.builder()
    .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | ARN of the Amazon SNS topic that receives the events. |

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

ARN of the Amazon SNS topic that receives the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#topic_arn Pinpointsmsvoicev2EventDestination#topic_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList <a name="Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList;

new Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.get"></a>

```java
public Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>>

---


### Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference <a name="Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference;

new Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArnInput"></a>

```java
public java.lang.String getLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>

---


### Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList <a name="Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList;

new Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.get"></a>

```java
public Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>>

---


### Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference <a name="Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference;

new Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">deliveryStreamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryStreamArnInput`<sup>Optional</sup> <a name="deliveryStreamArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```java
public java.lang.String getDeliveryStreamArnInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `deliveryStreamArn`<sup>Required</sup> <a name="deliveryStreamArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```java
public java.lang.String getDeliveryStreamArn();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>

---


### Pinpointsmsvoicev2EventDestinationSnsDestinationList <a name="Pinpointsmsvoicev2EventDestinationSnsDestinationList" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestinationSnsDestinationList;

new Pinpointsmsvoicev2EventDestinationSnsDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.get"></a>

```java
public Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Pinpointsmsvoicev2EventDestinationSnsDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>>

---


### Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference <a name="Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_event_destination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference;

new Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|Pinpointsmsvoicev2EventDestinationSnsDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>

---



