# `kinesisAccountSettings` Submodule <a name="`kinesisAccountSettings` Submodule" id="@cdktn/provider-aws.kinesisAccountSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisAccountSettings <a name="KinesisAccountSettings" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_account_settings aws_kinesis_account_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.kinesis_account_settings.KinesisAccountSettings;

KinesisAccountSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .minimumThroughputBillingCommitment(IResolvable|java.util.List<KinesisAccountSettingsMinimumThroughputBillingCommitment>)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.minimumThroughputBillingCommitment">minimumThroughputBillingCommitment</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>></code> | minimum_throughput_billing_commitment block. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `minimumThroughputBillingCommitment`<sup>Optional</sup> <a name="minimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.minimumThroughputBillingCommitment"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>>

minimum_throughput_billing_commitment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_account_settings#minimum_throughput_billing_commitment KinesisAccountSettings#minimum_throughput_billing_commitment}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_account_settings#region KinesisAccountSettings#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment">putMinimumThroughputBillingCommitment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetMinimumThroughputBillingCommitment">resetMinimumThroughputBillingCommitment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMinimumThroughputBillingCommitment` <a name="putMinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment"></a>

```java
public void putMinimumThroughputBillingCommitment(IResolvable|java.util.List<KinesisAccountSettingsMinimumThroughputBillingCommitment> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>>

---

##### `resetMinimumThroughputBillingCommitment` <a name="resetMinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetMinimumThroughputBillingCommitment"></a>

```java
public void resetMinimumThroughputBillingCommitment()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisAccountSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct"></a>

```java
import io.cdktn.providers.aws.kinesis_account_settings.KinesisAccountSettings;

KinesisAccountSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.kinesis_account_settings.KinesisAccountSettings;

KinesisAccountSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.kinesis_account_settings.KinesisAccountSettings;

KinesisAccountSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.kinesis_account_settings.KinesisAccountSettings;

KinesisAccountSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KinesisAccountSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KinesisAccountSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KinesisAccountSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KinesisAccountSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_account_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KinesisAccountSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitment">minimumThroughputBillingCommitment</a></code> | <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList">KinesisAccountSettingsMinimumThroughputBillingCommitmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitmentInput">minimumThroughputBillingCommitmentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minimumThroughputBillingCommitment`<sup>Required</sup> <a name="minimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitment"></a>

```java
public KinesisAccountSettingsMinimumThroughputBillingCommitmentList getMinimumThroughputBillingCommitment();
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList">KinesisAccountSettingsMinimumThroughputBillingCommitmentList</a>

---

##### `minimumThroughputBillingCommitmentInput`<sup>Optional</sup> <a name="minimumThroughputBillingCommitmentInput" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitmentInput"></a>

```java
public IResolvable|java.util.List<KinesisAccountSettingsMinimumThroughputBillingCommitment> getMinimumThroughputBillingCommitmentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisAccountSettingsConfig <a name="KinesisAccountSettingsConfig" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.kinesis_account_settings.KinesisAccountSettingsConfig;

KinesisAccountSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .minimumThroughputBillingCommitment(IResolvable|java.util.List<KinesisAccountSettingsMinimumThroughputBillingCommitment>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.minimumThroughputBillingCommitment">minimumThroughputBillingCommitment</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>></code> | minimum_throughput_billing_commitment block. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `minimumThroughputBillingCommitment`<sup>Optional</sup> <a name="minimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.minimumThroughputBillingCommitment"></a>

```java
public IResolvable|java.util.List<KinesisAccountSettingsMinimumThroughputBillingCommitment> getMinimumThroughputBillingCommitment();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>>

minimum_throughput_billing_commitment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_account_settings#minimum_throughput_billing_commitment KinesisAccountSettings#minimum_throughput_billing_commitment}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_account_settings#region KinesisAccountSettings#region}

---

### KinesisAccountSettingsMinimumThroughputBillingCommitment <a name="KinesisAccountSettingsMinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.Initializer"></a>

```java
import io.cdktn.providers.aws.kinesis_account_settings.KinesisAccountSettingsMinimumThroughputBillingCommitment;

KinesisAccountSettingsMinimumThroughputBillingCommitment.builder()
    .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_account_settings#status KinesisAccountSettings#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_account_settings#status KinesisAccountSettings#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisAccountSettingsMinimumThroughputBillingCommitmentList <a name="KinesisAccountSettingsMinimumThroughputBillingCommitmentList" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer"></a>

```java
import io.cdktn.providers.aws.kinesis_account_settings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList;

new KinesisAccountSettingsMinimumThroughputBillingCommitmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get"></a>

```java
public KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KinesisAccountSettingsMinimumThroughputBillingCommitment> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>>

---


### KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference <a name="KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.kinesis_account_settings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference;

new KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.earliestAllowedEndAt">earliestAllowedEndAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.endedAt">endedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.startedAt">startedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusActual">statusActual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `earliestAllowedEndAt`<sup>Required</sup> <a name="earliestAllowedEndAt" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.earliestAllowedEndAt"></a>

```java
public java.lang.String getEarliestAllowedEndAt();
```

- *Type:* java.lang.String

---

##### `endedAt`<sup>Required</sup> <a name="endedAt" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.endedAt"></a>

```java
public java.lang.String getEndedAt();
```

- *Type:* java.lang.String

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.startedAt"></a>

```java
public java.lang.String getStartedAt();
```

- *Type:* java.lang.String

---

##### `statusActual`<sup>Required</sup> <a name="statusActual" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusActual"></a>

```java
public java.lang.String getStatusActual();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisAccountSettingsMinimumThroughputBillingCommitment getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>

---



