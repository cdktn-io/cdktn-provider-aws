# `sesIdentityNotificationTopic` Submodule <a name="`sesIdentityNotificationTopic` Submodule" id="@cdktn/provider-aws.sesIdentityNotificationTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesIdentityNotificationTopic <a name="SesIdentityNotificationTopic" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic aws_ses_identity_notification_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer"></a>

```java
import io.cdktn.providers.aws.ses_identity_notification_topic.SesIdentityNotificationTopic;

SesIdentityNotificationTopic.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identity(java.lang.String)
    .notificationType(java.lang.String)
//  .id(java.lang.String)
//  .includeOriginalHeaders(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .topicArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.identity">identity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#identity SesIdentityNotificationTopic#identity}. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.notificationType">notificationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#notification_type SesIdentityNotificationTopic#notification_type}. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#id SesIdentityNotificationTopic#id}. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.includeOriginalHeaders">includeOriginalHeaders</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#include_original_headers SesIdentityNotificationTopic#include_original_headers}. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#topic_arn SesIdentityNotificationTopic#topic_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.identity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#identity SesIdentityNotificationTopic#identity}.

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.notificationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#notification_type SesIdentityNotificationTopic#notification_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#id SesIdentityNotificationTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeOriginalHeaders`<sup>Optional</sup> <a name="includeOriginalHeaders" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.includeOriginalHeaders"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#include_original_headers SesIdentityNotificationTopic#include_original_headers}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#region SesIdentityNotificationTopic#region}

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.topicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#topic_arn SesIdentityNotificationTopic#topic_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetIncludeOriginalHeaders">resetIncludeOriginalHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeOriginalHeaders` <a name="resetIncludeOriginalHeaders" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetIncludeOriginalHeaders"></a>

```java
public void resetIncludeOriginalHeaders()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetTopicArn"></a>

```java
public void resetTopicArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesIdentityNotificationTopic resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isConstruct"></a>

```java
import io.cdktn.providers.aws.ses_identity_notification_topic.SesIdentityNotificationTopic;

SesIdentityNotificationTopic.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ses_identity_notification_topic.SesIdentityNotificationTopic;

SesIdentityNotificationTopic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ses_identity_notification_topic.SesIdentityNotificationTopic;

SesIdentityNotificationTopic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ses_identity_notification_topic.SesIdentityNotificationTopic;

SesIdentityNotificationTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SesIdentityNotificationTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SesIdentityNotificationTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SesIdentityNotificationTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SesIdentityNotificationTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SesIdentityNotificationTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identityInput">identityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeadersInput">includeOriginalHeadersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationTypeInput">notificationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeaders">includeOriginalHeaders</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationType">notificationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identityInput"></a>

```java
public java.lang.String getIdentityInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeOriginalHeadersInput`<sup>Optional</sup> <a name="includeOriginalHeadersInput" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeadersInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeOriginalHeadersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationTypeInput"></a>

```java
public java.lang.String getNotificationTypeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `includeOriginalHeaders`<sup>Required</sup> <a name="includeOriginalHeaders" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeaders"></a>

```java
public java.lang.Boolean|IResolvable getIncludeOriginalHeaders();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationType"></a>

```java
public java.lang.String getNotificationType();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SesIdentityNotificationTopicConfig <a name="SesIdentityNotificationTopicConfig" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ses_identity_notification_topic.SesIdentityNotificationTopicConfig;

SesIdentityNotificationTopicConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identity(java.lang.String)
    .notificationType(java.lang.String)
//  .id(java.lang.String)
//  .includeOriginalHeaders(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.identity">identity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#identity SesIdentityNotificationTopic#identity}. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.notificationType">notificationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#notification_type SesIdentityNotificationTopic#notification_type}. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#id SesIdentityNotificationTopic#id}. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.includeOriginalHeaders">includeOriginalHeaders</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#include_original_headers SesIdentityNotificationTopic#include_original_headers}. |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#topic_arn SesIdentityNotificationTopic#topic_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#identity SesIdentityNotificationTopic#identity}.

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.notificationType"></a>

```java
public java.lang.String getNotificationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#notification_type SesIdentityNotificationTopic#notification_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#id SesIdentityNotificationTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeOriginalHeaders`<sup>Optional</sup> <a name="includeOriginalHeaders" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.includeOriginalHeaders"></a>

```java
public java.lang.Boolean|IResolvable getIncludeOriginalHeaders();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#include_original_headers SesIdentityNotificationTopic#include_original_headers}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#region SesIdentityNotificationTopic#region}

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktn/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_identity_notification_topic#topic_arn SesIdentityNotificationTopic#topic_arn}.

---



