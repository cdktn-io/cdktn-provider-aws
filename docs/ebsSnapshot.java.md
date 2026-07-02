# `ebsSnapshot` Submodule <a name="`ebsSnapshot` Submodule" id="@cdktn/provider-aws.ebsSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsSnapshot <a name="EbsSnapshot" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot aws_ebs_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer"></a>

```java
import io.cdktn.providers.aws.ebs_snapshot.EbsSnapshot;

EbsSnapshot.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .volumeId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .outpostArn(java.lang.String)
//  .permanentRestore(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .storageTier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .temporaryRestoreDays(java.lang.Number)
//  .timeouts(EbsSnapshotTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#volume_id EbsSnapshot#volume_id}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#description EbsSnapshot#description}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#id EbsSnapshot#id}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#outpost_arn EbsSnapshot#outpost_arn}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.permanentRestore">permanentRestore</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#permanent_restore EbsSnapshot#permanent_restore}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.storageTier">storageTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#storage_tier EbsSnapshot#storage_tier}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#tags EbsSnapshot#tags}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#tags_all EbsSnapshot#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#temporary_restore_days EbsSnapshot#temporary_restore_days}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts">EbsSnapshotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.volumeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#volume_id EbsSnapshot#volume_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#description EbsSnapshot#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#id EbsSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outpostArn`<sup>Optional</sup> <a name="outpostArn" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.outpostArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#outpost_arn EbsSnapshot#outpost_arn}.

---

##### `permanentRestore`<sup>Optional</sup> <a name="permanentRestore" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.permanentRestore"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#permanent_restore EbsSnapshot#permanent_restore}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#region EbsSnapshot#region}

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.storageTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#storage_tier EbsSnapshot#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#tags EbsSnapshot#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#tags_all EbsSnapshot#tags_all}.

---

##### `temporaryRestoreDays`<sup>Optional</sup> <a name="temporaryRestoreDays" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.temporaryRestoreDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#temporary_restore_days EbsSnapshot#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts">EbsSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#timeouts EbsSnapshot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetOutpostArn">resetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetPermanentRestore">resetPermanentRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetStorageTier">resetStorageTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetTemporaryRestoreDays">resetTemporaryRestoreDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.putTimeouts"></a>

```java
public void putTimeouts(EbsSnapshotTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts">EbsSnapshotTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetId"></a>

```java
public void resetId()
```

##### `resetOutpostArn` <a name="resetOutpostArn" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetOutpostArn"></a>

```java
public void resetOutpostArn()
```

##### `resetPermanentRestore` <a name="resetPermanentRestore" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetPermanentRestore"></a>

```java
public void resetPermanentRestore()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStorageTier` <a name="resetStorageTier" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetStorageTier"></a>

```java
public void resetStorageTier()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTemporaryRestoreDays` <a name="resetTemporaryRestoreDays" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetTemporaryRestoreDays"></a>

```java
public void resetTemporaryRestoreDays()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EbsSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.isConstruct"></a>

```java
import io.cdktn.providers.aws.ebs_snapshot.EbsSnapshot;

EbsSnapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ebs_snapshot.EbsSnapshot;

EbsSnapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ebs_snapshot.EbsSnapshot;

EbsSnapshot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ebs_snapshot.EbsSnapshot;

EbsSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EbsSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EbsSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EbsSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EbsSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EbsSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.dataEncryptionKeyId">dataEncryptionKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.encrypted">encrypted</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.ownerAlias">ownerAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference">EbsSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.outpostArnInput">outpostArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.permanentRestoreInput">permanentRestoreInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.storageTierInput">storageTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.temporaryRestoreDaysInput">temporaryRestoreDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts">EbsSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.permanentRestore">permanentRestore</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dataEncryptionKeyId`<sup>Required</sup> <a name="dataEncryptionKeyId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.dataEncryptionKeyId"></a>

```java
public java.lang.String getDataEncryptionKeyId();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.encrypted"></a>

```java
public IResolvable getEncrypted();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `ownerAlias`<sup>Required</sup> <a name="ownerAlias" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.ownerAlias"></a>

```java
public java.lang.String getOwnerAlias();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.timeouts"></a>

```java
public EbsSnapshotTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference">EbsSnapshotTimeoutsOutputReference</a>

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `outpostArnInput`<sup>Optional</sup> <a name="outpostArnInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.outpostArnInput"></a>

```java
public java.lang.String getOutpostArnInput();
```

- *Type:* java.lang.String

---

##### `permanentRestoreInput`<sup>Optional</sup> <a name="permanentRestoreInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.permanentRestoreInput"></a>

```java
public java.lang.Boolean|IResolvable getPermanentRestoreInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.storageTierInput"></a>

```java
public java.lang.String getStorageTierInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `temporaryRestoreDaysInput`<sup>Optional</sup> <a name="temporaryRestoreDaysInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.temporaryRestoreDaysInput"></a>

```java
public java.lang.Number getTemporaryRestoreDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.timeoutsInput"></a>

```java
public IResolvable|EbsSnapshotTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts">EbsSnapshotTimeouts</a>

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `permanentRestore`<sup>Required</sup> <a name="permanentRestore" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.permanentRestore"></a>

```java
public java.lang.Boolean|IResolvable getPermanentRestore();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `temporaryRestoreDays`<sup>Required</sup> <a name="temporaryRestoreDays" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.temporaryRestoreDays"></a>

```java
public java.lang.Number getTemporaryRestoreDays();
```

- *Type:* java.lang.Number

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EbsSnapshotConfig <a name="EbsSnapshotConfig" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ebs_snapshot.EbsSnapshotConfig;

EbsSnapshotConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .volumeId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .outpostArn(java.lang.String)
//  .permanentRestore(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .storageTier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .temporaryRestoreDays(java.lang.Number)
//  .timeouts(EbsSnapshotTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#volume_id EbsSnapshot#volume_id}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#description EbsSnapshot#description}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#id EbsSnapshot#id}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#outpost_arn EbsSnapshot#outpost_arn}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.permanentRestore">permanentRestore</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#permanent_restore EbsSnapshot#permanent_restore}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#storage_tier EbsSnapshot#storage_tier}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#tags EbsSnapshot#tags}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#tags_all EbsSnapshot#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#temporary_restore_days EbsSnapshot#temporary_restore_days}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts">EbsSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#volume_id EbsSnapshot#volume_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#description EbsSnapshot#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#id EbsSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outpostArn`<sup>Optional</sup> <a name="outpostArn" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#outpost_arn EbsSnapshot#outpost_arn}.

---

##### `permanentRestore`<sup>Optional</sup> <a name="permanentRestore" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.permanentRestore"></a>

```java
public java.lang.Boolean|IResolvable getPermanentRestore();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#permanent_restore EbsSnapshot#permanent_restore}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#region EbsSnapshot#region}

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#storage_tier EbsSnapshot#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#tags EbsSnapshot#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#tags_all EbsSnapshot#tags_all}.

---

##### `temporaryRestoreDays`<sup>Optional</sup> <a name="temporaryRestoreDays" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.temporaryRestoreDays"></a>

```java
public java.lang.Number getTemporaryRestoreDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#temporary_restore_days EbsSnapshot#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotConfig.property.timeouts"></a>

```java
public EbsSnapshotTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts">EbsSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#timeouts EbsSnapshot#timeouts}

---

### EbsSnapshotTimeouts <a name="EbsSnapshotTimeouts" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.ebs_snapshot.EbsSnapshotTimeouts;

EbsSnapshotTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#create EbsSnapshot#create}. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#delete EbsSnapshot#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#create EbsSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/ebs_snapshot#delete EbsSnapshot#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EbsSnapshotTimeoutsOutputReference <a name="EbsSnapshotTimeoutsOutputReference" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ebs_snapshot.EbsSnapshotTimeoutsOutputReference;

new EbsSnapshotTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts">EbsSnapshotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|EbsSnapshotTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ebsSnapshot.EbsSnapshotTimeouts">EbsSnapshotTimeouts</a>

---



