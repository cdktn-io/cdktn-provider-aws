# `dmsEventSubscription` Submodule <a name="`dmsEventSubscription` Submodule" id="@cdktn/provider-aws.dmsEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEventSubscription <a name="DmsEventSubscription" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription aws_dms_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_event_subscription.DmsEventSubscription;

DmsEventSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventCategories(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .snsTopicArn(java.lang.String)
    .sourceType(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .sourceIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsEventSubscriptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.eventCategories">eventCategories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#event_categories DmsEventSubscription#event_categories}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#name DmsEventSubscription#name}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#sns_topic_arn DmsEventSubscription#sns_topic_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#source_type DmsEventSubscription#source_type}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#enabled DmsEventSubscription#enabled}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#id DmsEventSubscription#id}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.sourceIds">sourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#source_ids DmsEventSubscription#source_ids}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#tags DmsEventSubscription#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#tags_all DmsEventSubscription#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts">DmsEventSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.eventCategories"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#event_categories DmsEventSubscription#event_categories}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#name DmsEventSubscription#name}.

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.snsTopicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#sns_topic_arn DmsEventSubscription#sns_topic_arn}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.sourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#source_type DmsEventSubscription#source_type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#enabled DmsEventSubscription#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#id DmsEventSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#region DmsEventSubscription#region}

---

##### `sourceIds`<sup>Optional</sup> <a name="sourceIds" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.sourceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#source_ids DmsEventSubscription#source_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#tags DmsEventSubscription#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#tags_all DmsEventSubscription#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts">DmsEventSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#timeouts DmsEventSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetSourceIds">resetSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.putTimeouts"></a>

```java
public void putTimeouts(DmsEventSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts">DmsEventSubscriptionTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSourceIds` <a name="resetSourceIds" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetSourceIds"></a>

```java
public void resetSourceIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.isConstruct"></a>

```java
import io.cdktn.providers.aws.dms_event_subscription.DmsEventSubscription;

DmsEventSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.dms_event_subscription.DmsEventSubscription;

DmsEventSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.dms_event_subscription.DmsEventSubscription;

DmsEventSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.dms_event_subscription.DmsEventSubscription;

DmsEventSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsEventSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DmsEventSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsEventSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DmsEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference">DmsEventSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.eventCategoriesInput">eventCategoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.sourceIdsInput">sourceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts">DmsEventSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.eventCategories">eventCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.sourceIds">sourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.timeouts"></a>

```java
public DmsEventSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference">DmsEventSubscriptionTimeoutsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventCategoriesInput`<sup>Optional</sup> <a name="eventCategoriesInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.eventCategoriesInput"></a>

```java
public java.util.List<java.lang.String> getEventCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `sourceIdsInput`<sup>Optional</sup> <a name="sourceIdsInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.sourceIdsInput"></a>

```java
public java.util.List<java.lang.String> getSourceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.timeoutsInput"></a>

```java
public IResolvable|DmsEventSubscriptionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts">DmsEventSubscriptionTimeouts</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.eventCategories"></a>

```java
public java.util.List<java.lang.String> getEventCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `sourceIds`<sup>Required</sup> <a name="sourceIds" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.sourceIds"></a>

```java
public java.util.List<java.lang.String> getSourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEventSubscriptionConfig <a name="DmsEventSubscriptionConfig" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_event_subscription.DmsEventSubscriptionConfig;

DmsEventSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventCategories(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .snsTopicArn(java.lang.String)
    .sourceType(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .sourceIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsEventSubscriptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.eventCategories">eventCategories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#event_categories DmsEventSubscription#event_categories}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#name DmsEventSubscription#name}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#sns_topic_arn DmsEventSubscription#sns_topic_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#source_type DmsEventSubscription#source_type}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#enabled DmsEventSubscription#enabled}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#id DmsEventSubscription#id}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceIds">sourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#source_ids DmsEventSubscription#source_ids}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#tags DmsEventSubscription#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#tags_all DmsEventSubscription#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts">DmsEventSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.eventCategories"></a>

```java
public java.util.List<java.lang.String> getEventCategories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#event_categories DmsEventSubscription#event_categories}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#name DmsEventSubscription#name}.

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#sns_topic_arn DmsEventSubscription#sns_topic_arn}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#source_type DmsEventSubscription#source_type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#enabled DmsEventSubscription#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#id DmsEventSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#region DmsEventSubscription#region}

---

##### `sourceIds`<sup>Optional</sup> <a name="sourceIds" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceIds"></a>

```java
public java.util.List<java.lang.String> getSourceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#source_ids DmsEventSubscription#source_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#tags DmsEventSubscription#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#tags_all DmsEventSubscription#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionConfig.property.timeouts"></a>

```java
public DmsEventSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts">DmsEventSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#timeouts DmsEventSubscription#timeouts}

---

### DmsEventSubscriptionTimeouts <a name="DmsEventSubscriptionTimeouts" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_event_subscription.DmsEventSubscriptionTimeouts;

DmsEventSubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#create DmsEventSubscription#create}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#delete DmsEventSubscription#delete}. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#update DmsEventSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#create DmsEventSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#delete DmsEventSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/dms_event_subscription#update DmsEventSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEventSubscriptionTimeoutsOutputReference <a name="DmsEventSubscriptionTimeoutsOutputReference" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_event_subscription.DmsEventSubscriptionTimeoutsOutputReference;

new DmsEventSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts">DmsEventSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsEventSubscriptionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsEventSubscription.DmsEventSubscriptionTimeouts">DmsEventSubscriptionTimeouts</a>

---



