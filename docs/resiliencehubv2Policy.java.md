# `resiliencehubv2Policy` Submodule <a name="`resiliencehubv2Policy` Submodule" id="@cdktn/provider-aws.resiliencehubv2Policy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Policy <a name="Resiliencehubv2Policy" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy aws_resiliencehubv2_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2Policy;

Resiliencehubv2Policy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .availabilitySlo(IResolvable|java.util.List<Resiliencehubv2PolicyAvailabilitySlo>)
//  .dataRecovery(IResolvable|java.util.List<Resiliencehubv2PolicyDataRecovery>)
//  .description(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .multiAz(IResolvable|java.util.List<Resiliencehubv2PolicyMultiAz>)
//  .multiRegion(IResolvable|java.util.List<Resiliencehubv2PolicyMultiRegion>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#name Resiliencehubv2Policy#name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.availabilitySlo">availabilitySlo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>></code> | availability_slo block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.dataRecovery">dataRecovery</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>></code> | data_recovery block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#description Resiliencehubv2Policy#description}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#kms_key_id Resiliencehubv2Policy#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.multiAz">multiAz</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>></code> | multi_az block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.multiRegion">multiRegion</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>></code> | multi_region block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#tags Resiliencehubv2Policy#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#name Resiliencehubv2Policy#name}.

---

##### `availabilitySlo`<sup>Optional</sup> <a name="availabilitySlo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.availabilitySlo"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>>

availability_slo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#availability_slo Resiliencehubv2Policy#availability_slo}

---

##### `dataRecovery`<sup>Optional</sup> <a name="dataRecovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.dataRecovery"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>>

data_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#data_recovery Resiliencehubv2Policy#data_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#description Resiliencehubv2Policy#description}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#kms_key_id Resiliencehubv2Policy#kms_key_id}.

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.multiAz"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>>

multi_az block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#multi_az Resiliencehubv2Policy#multi_az}

---

##### `multiRegion`<sup>Optional</sup> <a name="multiRegion" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.multiRegion"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>>

multi_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#multi_region Resiliencehubv2Policy#multi_region}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#region Resiliencehubv2Policy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#tags Resiliencehubv2Policy#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo">putAvailabilitySlo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery">putDataRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz">putMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion">putMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetAvailabilitySlo">resetAvailabilitySlo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetDataRecovery">resetDataRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiRegion">resetMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAvailabilitySlo` <a name="putAvailabilitySlo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo"></a>

```java
public void putAvailabilitySlo(IResolvable|java.util.List<Resiliencehubv2PolicyAvailabilitySlo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>>

---

##### `putDataRecovery` <a name="putDataRecovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery"></a>

```java
public void putDataRecovery(IResolvable|java.util.List<Resiliencehubv2PolicyDataRecovery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>>

---

##### `putMultiAz` <a name="putMultiAz" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz"></a>

```java
public void putMultiAz(IResolvable|java.util.List<Resiliencehubv2PolicyMultiAz> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>>

---

##### `putMultiRegion` <a name="putMultiRegion" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion"></a>

```java
public void putMultiRegion(IResolvable|java.util.List<Resiliencehubv2PolicyMultiRegion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>>

---

##### `resetAvailabilitySlo` <a name="resetAvailabilitySlo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetAvailabilitySlo"></a>

```java
public void resetAvailabilitySlo()
```

##### `resetDataRecovery` <a name="resetDataRecovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetDataRecovery"></a>

```java
public void resetDataRecovery()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiAz"></a>

```java
public void resetMultiAz()
```

##### `resetMultiRegion` <a name="resetMultiRegion" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiRegion"></a>

```java
public void resetMultiRegion()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2Policy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2Policy;

Resiliencehubv2Policy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2Policy;

Resiliencehubv2Policy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2Policy;

Resiliencehubv2Policy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2Policy;

Resiliencehubv2Policy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Resiliencehubv2Policy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Resiliencehubv2Policy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Resiliencehubv2Policy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Resiliencehubv2Policy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Policy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySlo">availabilitySlo</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList">Resiliencehubv2PolicyAvailabilitySloList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecovery">dataRecovery</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList">Resiliencehubv2PolicyDataRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAz">multiAz</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList">Resiliencehubv2PolicyMultiAzList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegion">multiRegion</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList">Resiliencehubv2PolicyMultiRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySloInput">availabilitySloInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecoveryInput">dataRecoveryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAzInput">multiAzInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegionInput">multiRegionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availabilitySlo`<sup>Required</sup> <a name="availabilitySlo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySlo"></a>

```java
public Resiliencehubv2PolicyAvailabilitySloList getAvailabilitySlo();
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList">Resiliencehubv2PolicyAvailabilitySloList</a>

---

##### `dataRecovery`<sup>Required</sup> <a name="dataRecovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecovery"></a>

```java
public Resiliencehubv2PolicyDataRecoveryList getDataRecovery();
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList">Resiliencehubv2PolicyDataRecoveryList</a>

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAz"></a>

```java
public Resiliencehubv2PolicyMultiAzList getMultiAz();
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList">Resiliencehubv2PolicyMultiAzList</a>

---

##### `multiRegion`<sup>Required</sup> <a name="multiRegion" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegion"></a>

```java
public Resiliencehubv2PolicyMultiRegionList getMultiRegion();
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList">Resiliencehubv2PolicyMultiRegionList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `availabilitySloInput`<sup>Optional</sup> <a name="availabilitySloInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySloInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyAvailabilitySlo> getAvailabilitySloInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>>

---

##### `dataRecoveryInput`<sup>Optional</sup> <a name="dataRecoveryInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecoveryInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyDataRecovery> getDataRecoveryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAzInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyMultiAz> getMultiAzInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>>

---

##### `multiRegionInput`<sup>Optional</sup> <a name="multiRegionInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegionInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyMultiRegion> getMultiRegionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2PolicyAvailabilitySlo <a name="Resiliencehubv2PolicyAvailabilitySlo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyAvailabilitySlo;

Resiliencehubv2PolicyAvailabilitySlo.builder()
    .target(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.property.target">target</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#target Resiliencehubv2Policy#target}. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#target Resiliencehubv2Policy#target}.

---

### Resiliencehubv2PolicyConfig <a name="Resiliencehubv2PolicyConfig" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyConfig;

Resiliencehubv2PolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .availabilitySlo(IResolvable|java.util.List<Resiliencehubv2PolicyAvailabilitySlo>)
//  .dataRecovery(IResolvable|java.util.List<Resiliencehubv2PolicyDataRecovery>)
//  .description(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .multiAz(IResolvable|java.util.List<Resiliencehubv2PolicyMultiAz>)
//  .multiRegion(IResolvable|java.util.List<Resiliencehubv2PolicyMultiRegion>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#name Resiliencehubv2Policy#name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.availabilitySlo">availabilitySlo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>></code> | availability_slo block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dataRecovery">dataRecovery</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>></code> | data_recovery block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#description Resiliencehubv2Policy#description}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#kms_key_id Resiliencehubv2Policy#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiAz">multiAz</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>></code> | multi_az block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiRegion">multiRegion</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>></code> | multi_region block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#tags Resiliencehubv2Policy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#name Resiliencehubv2Policy#name}.

---

##### `availabilitySlo`<sup>Optional</sup> <a name="availabilitySlo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.availabilitySlo"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyAvailabilitySlo> getAvailabilitySlo();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>>

availability_slo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#availability_slo Resiliencehubv2Policy#availability_slo}

---

##### `dataRecovery`<sup>Optional</sup> <a name="dataRecovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dataRecovery"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyDataRecovery> getDataRecovery();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>>

data_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#data_recovery Resiliencehubv2Policy#data_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#description Resiliencehubv2Policy#description}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#kms_key_id Resiliencehubv2Policy#kms_key_id}.

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiAz"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyMultiAz> getMultiAz();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>>

multi_az block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#multi_az Resiliencehubv2Policy#multi_az}

---

##### `multiRegion`<sup>Optional</sup> <a name="multiRegion" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiRegion"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyMultiRegion> getMultiRegion();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>>

multi_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#multi_region Resiliencehubv2Policy#multi_region}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#region Resiliencehubv2Policy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#tags Resiliencehubv2Policy#tags}.

---

### Resiliencehubv2PolicyDataRecovery <a name="Resiliencehubv2PolicyDataRecovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyDataRecovery;

Resiliencehubv2PolicyDataRecovery.builder()
    .timeBetweenBackupsInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.property.timeBetweenBackupsInMinutes">timeBetweenBackupsInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#time_between_backups_in_minutes Resiliencehubv2Policy#time_between_backups_in_minutes}. |

---

##### `timeBetweenBackupsInMinutes`<sup>Required</sup> <a name="timeBetweenBackupsInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.property.timeBetweenBackupsInMinutes"></a>

```java
public java.lang.Number getTimeBetweenBackupsInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#time_between_backups_in_minutes Resiliencehubv2Policy#time_between_backups_in_minutes}.

---

### Resiliencehubv2PolicyMultiAz <a name="Resiliencehubv2PolicyMultiAz" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyMultiAz;

Resiliencehubv2PolicyMultiAz.builder()
    .disasterRecoveryApproach(java.lang.String)
//  .rpoInMinutes(java.lang.Number)
//  .rtoInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rpoInMinutes">rpoInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rtoInMinutes">rtoInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}. |

---

##### `disasterRecoveryApproach`<sup>Required</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.disasterRecoveryApproach"></a>

```java
public java.lang.String getDisasterRecoveryApproach();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}.

---

##### `rpoInMinutes`<sup>Optional</sup> <a name="rpoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rpoInMinutes"></a>

```java
public java.lang.Number getRpoInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}.

---

##### `rtoInMinutes`<sup>Optional</sup> <a name="rtoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rtoInMinutes"></a>

```java
public java.lang.Number getRtoInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}.

---

### Resiliencehubv2PolicyMultiRegion <a name="Resiliencehubv2PolicyMultiRegion" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyMultiRegion;

Resiliencehubv2PolicyMultiRegion.builder()
    .disasterRecoveryApproach(java.lang.String)
//  .rpoInMinutes(java.lang.Number)
//  .rtoInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rpoInMinutes">rpoInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rtoInMinutes">rtoInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}. |

---

##### `disasterRecoveryApproach`<sup>Required</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.disasterRecoveryApproach"></a>

```java
public java.lang.String getDisasterRecoveryApproach();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}.

---

##### `rpoInMinutes`<sup>Optional</sup> <a name="rpoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rpoInMinutes"></a>

```java
public java.lang.Number getRpoInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}.

---

##### `rtoInMinutes`<sup>Optional</sup> <a name="rtoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rtoInMinutes"></a>

```java
public java.lang.Number getRtoInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2PolicyAvailabilitySloList <a name="Resiliencehubv2PolicyAvailabilitySloList" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyAvailabilitySloList;

new Resiliencehubv2PolicyAvailabilitySloList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.get"></a>

```java
public Resiliencehubv2PolicyAvailabilitySloOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyAvailabilitySlo> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>>

---


### Resiliencehubv2PolicyAvailabilitySloOutputReference <a name="Resiliencehubv2PolicyAvailabilitySloOutputReference" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyAvailabilitySloOutputReference;

new Resiliencehubv2PolicyAvailabilitySloOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2PolicyAvailabilitySlo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

---


### Resiliencehubv2PolicyDataRecoveryList <a name="Resiliencehubv2PolicyDataRecoveryList" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyDataRecoveryList;

new Resiliencehubv2PolicyDataRecoveryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.get"></a>

```java
public Resiliencehubv2PolicyDataRecoveryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyDataRecovery> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>>

---


### Resiliencehubv2PolicyDataRecoveryOutputReference <a name="Resiliencehubv2PolicyDataRecoveryOutputReference" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyDataRecoveryOutputReference;

new Resiliencehubv2PolicyDataRecoveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutesInput">timeBetweenBackupsInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes">timeBetweenBackupsInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeBetweenBackupsInMinutesInput`<sup>Optional</sup> <a name="timeBetweenBackupsInMinutesInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutesInput"></a>

```java
public java.lang.Number getTimeBetweenBackupsInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `timeBetweenBackupsInMinutes`<sup>Required</sup> <a name="timeBetweenBackupsInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes"></a>

```java
public java.lang.Number getTimeBetweenBackupsInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2PolicyDataRecovery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

---


### Resiliencehubv2PolicyMultiAzList <a name="Resiliencehubv2PolicyMultiAzList" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyMultiAzList;

new Resiliencehubv2PolicyMultiAzList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.get"></a>

```java
public Resiliencehubv2PolicyMultiAzOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyMultiAz> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>>

---


### Resiliencehubv2PolicyMultiAzOutputReference <a name="Resiliencehubv2PolicyMultiAzOutputReference" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyMultiAzOutputReference;

new Resiliencehubv2PolicyMultiAzOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRpoInMinutes">resetRpoInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRtoInMinutes">resetRtoInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRpoInMinutes` <a name="resetRpoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRpoInMinutes"></a>

```java
public void resetRpoInMinutes()
```

##### `resetRtoInMinutes` <a name="resetRtoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRtoInMinutes"></a>

```java
public void resetRtoInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproachInput">disasterRecoveryApproachInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutesInput">rpoInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutesInput">rtoInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes">rpoInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes">rtoInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disasterRecoveryApproachInput`<sup>Optional</sup> <a name="disasterRecoveryApproachInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproachInput"></a>

```java
public java.lang.String getDisasterRecoveryApproachInput();
```

- *Type:* java.lang.String

---

##### `rpoInMinutesInput`<sup>Optional</sup> <a name="rpoInMinutesInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutesInput"></a>

```java
public java.lang.Number getRpoInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `rtoInMinutesInput`<sup>Optional</sup> <a name="rtoInMinutesInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutesInput"></a>

```java
public java.lang.Number getRtoInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `disasterRecoveryApproach`<sup>Required</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach"></a>

```java
public java.lang.String getDisasterRecoveryApproach();
```

- *Type:* java.lang.String

---

##### `rpoInMinutes`<sup>Required</sup> <a name="rpoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes"></a>

```java
public java.lang.Number getRpoInMinutes();
```

- *Type:* java.lang.Number

---

##### `rtoInMinutes`<sup>Required</sup> <a name="rtoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes"></a>

```java
public java.lang.Number getRtoInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2PolicyMultiAz getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

---


### Resiliencehubv2PolicyMultiRegionList <a name="Resiliencehubv2PolicyMultiRegionList" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyMultiRegionList;

new Resiliencehubv2PolicyMultiRegionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.get"></a>

```java
public Resiliencehubv2PolicyMultiRegionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2PolicyMultiRegion> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>>

---


### Resiliencehubv2PolicyMultiRegionOutputReference <a name="Resiliencehubv2PolicyMultiRegionOutputReference" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.resiliencehubv2_policy.Resiliencehubv2PolicyMultiRegionOutputReference;

new Resiliencehubv2PolicyMultiRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRpoInMinutes">resetRpoInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRtoInMinutes">resetRtoInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRpoInMinutes` <a name="resetRpoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRpoInMinutes"></a>

```java
public void resetRpoInMinutes()
```

##### `resetRtoInMinutes` <a name="resetRtoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRtoInMinutes"></a>

```java
public void resetRtoInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproachInput">disasterRecoveryApproachInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutesInput">rpoInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutesInput">rtoInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes">rpoInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes">rtoInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disasterRecoveryApproachInput`<sup>Optional</sup> <a name="disasterRecoveryApproachInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproachInput"></a>

```java
public java.lang.String getDisasterRecoveryApproachInput();
```

- *Type:* java.lang.String

---

##### `rpoInMinutesInput`<sup>Optional</sup> <a name="rpoInMinutesInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutesInput"></a>

```java
public java.lang.Number getRpoInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `rtoInMinutesInput`<sup>Optional</sup> <a name="rtoInMinutesInput" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutesInput"></a>

```java
public java.lang.Number getRtoInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `disasterRecoveryApproach`<sup>Required</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach"></a>

```java
public java.lang.String getDisasterRecoveryApproach();
```

- *Type:* java.lang.String

---

##### `rpoInMinutes`<sup>Required</sup> <a name="rpoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes"></a>

```java
public java.lang.Number getRpoInMinutes();
```

- *Type:* java.lang.Number

---

##### `rtoInMinutes`<sup>Required</sup> <a name="rtoInMinutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes"></a>

```java
public java.lang.Number getRtoInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2PolicyMultiRegion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

---



