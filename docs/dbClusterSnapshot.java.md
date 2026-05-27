# `dbClusterSnapshot` Submodule <a name="`dbClusterSnapshot` Submodule" id="@cdktn/provider-aws.dbClusterSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbClusterSnapshot <a name="DbClusterSnapshot" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot aws_db_cluster_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer"></a>

```java
import io.cdktn.providers.aws.db_cluster_snapshot.DbClusterSnapshot;

DbClusterSnapshot.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbClusterIdentifier(java.lang.String)
    .dbClusterSnapshotIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .sharedAccounts(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DbClusterSnapshotTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#db_cluster_identifier DbClusterSnapshot#db_cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#db_cluster_snapshot_identifier DbClusterSnapshot#db_cluster_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#id DbClusterSnapshot#id}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.sharedAccounts">sharedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#shared_accounts DbClusterSnapshot#shared_accounts}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#tags DbClusterSnapshot#tags}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#tags_all DbClusterSnapshot#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts">DbClusterSnapshotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#db_cluster_identifier DbClusterSnapshot#db_cluster_identifier}.

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.dbClusterSnapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#db_cluster_snapshot_identifier DbClusterSnapshot#db_cluster_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#id DbClusterSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#region DbClusterSnapshot#region}

---

##### `sharedAccounts`<sup>Optional</sup> <a name="sharedAccounts" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.sharedAccounts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#shared_accounts DbClusterSnapshot#shared_accounts}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#tags DbClusterSnapshot#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#tags_all DbClusterSnapshot#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts">DbClusterSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#timeouts DbClusterSnapshot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetSharedAccounts">resetSharedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.putTimeouts"></a>

```java
public void putTimeouts(DbClusterSnapshotTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts">DbClusterSnapshotTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSharedAccounts` <a name="resetSharedAccounts" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetSharedAccounts"></a>

```java
public void resetSharedAccounts()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DbClusterSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.isConstruct"></a>

```java
import io.cdktn.providers.aws.db_cluster_snapshot.DbClusterSnapshot;

DbClusterSnapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.db_cluster_snapshot.DbClusterSnapshot;

DbClusterSnapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.db_cluster_snapshot.DbClusterSnapshot;

DbClusterSnapshot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.db_cluster_snapshot.DbClusterSnapshot;

DbClusterSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DbClusterSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DbClusterSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DbClusterSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DbClusterSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DbClusterSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dbClusterSnapshotArn">dbClusterSnapshotArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.snapshotType">snapshotType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.sourceDbClusterSnapshotArn">sourceDbClusterSnapshotArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.storageEncrypted">storageEncrypted</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference">DbClusterSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dbClusterSnapshotIdentifierInput">dbClusterSnapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.sharedAccountsInput">sharedAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts">DbClusterSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.sharedAccounts">sharedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbClusterSnapshotArn`<sup>Required</sup> <a name="dbClusterSnapshotArn" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dbClusterSnapshotArn"></a>

```java
public java.lang.String getDbClusterSnapshotArn();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.snapshotType"></a>

```java
public java.lang.String getSnapshotType();
```

- *Type:* java.lang.String

---

##### `sourceDbClusterSnapshotArn`<sup>Required</sup> <a name="sourceDbClusterSnapshotArn" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

```java
public java.lang.String getSourceDbClusterSnapshotArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.storageEncrypted"></a>

```java
public IResolvable getStorageEncrypted();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.timeouts"></a>

```java
public DbClusterSnapshotTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference">DbClusterSnapshotTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dbClusterIdentifierInput"></a>

```java
public java.lang.String getDbClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbClusterSnapshotIdentifierInput`<sup>Optional</sup> <a name="dbClusterSnapshotIdentifierInput" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dbClusterSnapshotIdentifierInput"></a>

```java
public java.lang.String getDbClusterSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sharedAccountsInput`<sup>Optional</sup> <a name="sharedAccountsInput" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.sharedAccountsInput"></a>

```java
public java.util.List<java.lang.String> getSharedAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.timeoutsInput"></a>

```java
public IResolvable|DbClusterSnapshotTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts">DbClusterSnapshotTimeouts</a>

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

```java
public java.lang.String getDbClusterSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sharedAccounts`<sup>Required</sup> <a name="sharedAccounts" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.sharedAccounts"></a>

```java
public java.util.List<java.lang.String> getSharedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DbClusterSnapshotConfig <a name="DbClusterSnapshotConfig" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.db_cluster_snapshot.DbClusterSnapshotConfig;

DbClusterSnapshotConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbClusterIdentifier(java.lang.String)
    .dbClusterSnapshotIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .sharedAccounts(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DbClusterSnapshotTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#db_cluster_identifier DbClusterSnapshot#db_cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#db_cluster_snapshot_identifier DbClusterSnapshot#db_cluster_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#id DbClusterSnapshot#id}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.sharedAccounts">sharedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#shared_accounts DbClusterSnapshot#shared_accounts}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#tags DbClusterSnapshot#tags}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#tags_all DbClusterSnapshot#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts">DbClusterSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#db_cluster_identifier DbClusterSnapshot#db_cluster_identifier}.

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.dbClusterSnapshotIdentifier"></a>

```java
public java.lang.String getDbClusterSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#db_cluster_snapshot_identifier DbClusterSnapshot#db_cluster_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#id DbClusterSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#region DbClusterSnapshot#region}

---

##### `sharedAccounts`<sup>Optional</sup> <a name="sharedAccounts" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.sharedAccounts"></a>

```java
public java.util.List<java.lang.String> getSharedAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#shared_accounts DbClusterSnapshot#shared_accounts}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#tags DbClusterSnapshot#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#tags_all DbClusterSnapshot#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotConfig.property.timeouts"></a>

```java
public DbClusterSnapshotTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts">DbClusterSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#timeouts DbClusterSnapshot#timeouts}

---

### DbClusterSnapshotTimeouts <a name="DbClusterSnapshotTimeouts" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.db_cluster_snapshot.DbClusterSnapshotTimeouts;

DbClusterSnapshotTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#create DbClusterSnapshot#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_cluster_snapshot#create DbClusterSnapshot#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbClusterSnapshotTimeoutsOutputReference <a name="DbClusterSnapshotTimeoutsOutputReference" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.db_cluster_snapshot.DbClusterSnapshotTimeoutsOutputReference;

new DbClusterSnapshotTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts">DbClusterSnapshotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DbClusterSnapshotTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dbClusterSnapshot.DbClusterSnapshotTimeouts">DbClusterSnapshotTimeouts</a>

---



