# `pinpointEmailChannel` Submodule <a name="`pinpointEmailChannel` Submodule" id="@cdktn/provider-aws.pinpointEmailChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointEmailChannel <a name="PinpointEmailChannel" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel aws_pinpoint_email_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpoint_email_channel.PinpointEmailChannel;

PinpointEmailChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .fromAddress(java.lang.String)
    .identity(java.lang.String)
//  .configurationSet(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .orchestrationSendingRoleArn(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.fromAddress">fromAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.identity">identity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#identity PinpointEmailChannel#identity}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.configurationSet">configurationSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#id PinpointEmailChannel#id}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.orchestrationSendingRoleArn">orchestrationSendingRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#orchestration_sending_role_arn PinpointEmailChannel#orchestration_sending_role_arn}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}.

---

##### `fromAddress`<sup>Required</sup> <a name="fromAddress" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.fromAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.identity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#identity PinpointEmailChannel#identity}.

---

##### `configurationSet`<sup>Optional</sup> <a name="configurationSet" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.configurationSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#id PinpointEmailChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orchestrationSendingRoleArn`<sup>Optional</sup> <a name="orchestrationSendingRoleArn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.orchestrationSendingRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#orchestration_sending_role_arn PinpointEmailChannel#orchestration_sending_role_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#region PinpointEmailChannel#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetConfigurationSet">resetConfigurationSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetOrchestrationSendingRoleArn">resetOrchestrationSendingRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConfigurationSet` <a name="resetConfigurationSet" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetConfigurationSet"></a>

```java
public void resetConfigurationSet()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetId"></a>

```java
public void resetId()
```

##### `resetOrchestrationSendingRoleArn` <a name="resetOrchestrationSendingRoleArn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetOrchestrationSendingRoleArn"></a>

```java
public void resetOrchestrationSendingRoleArn()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetRoleArn"></a>

```java
public void resetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PinpointEmailChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isConstruct"></a>

```java
import io.cdktn.providers.aws.pinpoint_email_channel.PinpointEmailChannel;

PinpointEmailChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.pinpoint_email_channel.PinpointEmailChannel;

PinpointEmailChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.pinpoint_email_channel.PinpointEmailChannel;

PinpointEmailChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.pinpoint_email_channel.PinpointEmailChannel;

PinpointEmailChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PinpointEmailChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PinpointEmailChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PinpointEmailChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PinpointEmailChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PinpointEmailChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.messagesPerSecond">messagesPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSetInput">configurationSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddressInput">fromAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identityInput">identityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.orchestrationSendingRoleArnInput">orchestrationSendingRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSet">configurationSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddress">fromAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.orchestrationSendingRoleArn">orchestrationSendingRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `messagesPerSecond`<sup>Required</sup> <a name="messagesPerSecond" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.messagesPerSecond"></a>

```java
public java.lang.Number getMessagesPerSecond();
```

- *Type:* java.lang.Number

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `configurationSetInput`<sup>Optional</sup> <a name="configurationSetInput" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSetInput"></a>

```java
public java.lang.String getConfigurationSetInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fromAddressInput`<sup>Optional</sup> <a name="fromAddressInput" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddressInput"></a>

```java
public java.lang.String getFromAddressInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identityInput"></a>

```java
public java.lang.String getIdentityInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `orchestrationSendingRoleArnInput`<sup>Optional</sup> <a name="orchestrationSendingRoleArnInput" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.orchestrationSendingRoleArnInput"></a>

```java
public java.lang.String getOrchestrationSendingRoleArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `configurationSet`<sup>Required</sup> <a name="configurationSet" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSet"></a>

```java
public java.lang.String getConfigurationSet();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fromAddress`<sup>Required</sup> <a name="fromAddress" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddress"></a>

```java
public java.lang.String getFromAddress();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `orchestrationSendingRoleArn`<sup>Required</sup> <a name="orchestrationSendingRoleArn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.orchestrationSendingRoleArn"></a>

```java
public java.lang.String getOrchestrationSendingRoleArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointEmailChannelConfig <a name="PinpointEmailChannelConfig" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpoint_email_channel.PinpointEmailChannelConfig;

PinpointEmailChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .fromAddress(java.lang.String)
    .identity(java.lang.String)
//  .configurationSet(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .orchestrationSendingRoleArn(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.fromAddress">fromAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.identity">identity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#identity PinpointEmailChannel#identity}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.configurationSet">configurationSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#id PinpointEmailChannel#id}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.orchestrationSendingRoleArn">orchestrationSendingRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#orchestration_sending_role_arn PinpointEmailChannel#orchestration_sending_role_arn}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}.

---

##### `fromAddress`<sup>Required</sup> <a name="fromAddress" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.fromAddress"></a>

```java
public java.lang.String getFromAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#identity PinpointEmailChannel#identity}.

---

##### `configurationSet`<sup>Optional</sup> <a name="configurationSet" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.configurationSet"></a>

```java
public java.lang.String getConfigurationSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#id PinpointEmailChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orchestrationSendingRoleArn`<sup>Optional</sup> <a name="orchestrationSendingRoleArn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.orchestrationSendingRoleArn"></a>

```java
public java.lang.String getOrchestrationSendingRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#orchestration_sending_role_arn PinpointEmailChannel#orchestration_sending_role_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#region PinpointEmailChannel#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}.

---



