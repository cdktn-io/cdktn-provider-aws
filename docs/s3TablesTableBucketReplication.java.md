# `s3TablesTableBucketReplication` Submodule <a name="`s3TablesTableBucketReplication` Submodule" id="@cdktf/provider-aws.s3TablesTableBucketReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTableBucketReplication <a name="S3TablesTableBucketReplication" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication aws_s3tables_table_bucket_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplication;

S3TablesTableBucketReplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .role(java.lang.String)
    .tableBucketArn(java.lang.String)
//  .region(java.lang.String)
//  .rule(IResolvable|java.util.List<S3TablesTableBucketReplicationRule>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#role S3TablesTableBucketReplication#role}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.tableBucketArn">tableBucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#table_bucket_arn S3TablesTableBucketReplication#table_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>></code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#role S3TablesTableBucketReplication#role}.

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.tableBucketArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#table_bucket_arn S3TablesTableBucketReplication#table_bucket_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#region S3TablesTableBucketReplication#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#rule S3TablesTableBucketReplication#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<S3TablesTableBucketReplicationRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>>

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRule"></a>

```java
public void resetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3TablesTableBucketReplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplication;

S3TablesTableBucketReplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplication;

S3TablesTableBucketReplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplication;

S3TablesTableBucketReplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplication;

S3TablesTableBucketReplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3TablesTableBucketReplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a S3TablesTableBucketReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3TablesTableBucketReplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3TablesTableBucketReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the S3TablesTableBucketReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList">S3TablesTableBucketReplicationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.versionToken">versionToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArnInput">tableBucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArn">tableBucketArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.rule"></a>

```java
public S3TablesTableBucketReplicationRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList">S3TablesTableBucketReplicationRuleList</a>

---

##### `versionToken`<sup>Required</sup> <a name="versionToken" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.versionToken"></a>

```java
public java.lang.String getVersionToken();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.ruleInput"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationRule> getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>>

---

##### `tableBucketArnInput`<sup>Optional</sup> <a name="tableBucketArnInput" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArnInput"></a>

```java
public java.lang.String getTableBucketArnInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArn"></a>

```java
public java.lang.String getTableBucketArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableBucketReplicationConfig <a name="S3TablesTableBucketReplicationConfig" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplicationConfig;

S3TablesTableBucketReplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .role(java.lang.String)
    .tableBucketArn(java.lang.String)
//  .region(java.lang.String)
//  .rule(IResolvable|java.util.List<S3TablesTableBucketReplicationRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#role S3TablesTableBucketReplication#role}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.tableBucketArn">tableBucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#table_bucket_arn S3TablesTableBucketReplication#table_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>></code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#role S3TablesTableBucketReplication#role}.

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.tableBucketArn"></a>

```java
public java.lang.String getTableBucketArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#table_bucket_arn S3TablesTableBucketReplication#table_bucket_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#region S3TablesTableBucketReplication#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.rule"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationRule> getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#rule S3TablesTableBucketReplication#rule}

---

### S3TablesTableBucketReplicationRule <a name="S3TablesTableBucketReplicationRule" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplicationRule;

S3TablesTableBucketReplicationRule.builder()
//  .destination(IResolvable|java.util.List<S3TablesTableBucketReplicationRuleDestination>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule.property.destination">destination</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>></code> | destination block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule.property.destination"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationRuleDestination> getDestination();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#destination S3TablesTableBucketReplication#destination}

---

### S3TablesTableBucketReplicationRuleDestination <a name="S3TablesTableBucketReplicationRuleDestination" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplicationRuleDestination;

S3TablesTableBucketReplicationRuleDestination.builder()
    .destinationTableBucketArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination.property.destinationTableBucketArn">destinationTableBucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#destination_table_bucket_arn S3TablesTableBucketReplication#destination_table_bucket_arn}. |

---

##### `destinationTableBucketArn`<sup>Required</sup> <a name="destinationTableBucketArn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination.property.destinationTableBucketArn"></a>

```java
public java.lang.String getDestinationTableBucketArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_bucket_replication#destination_table_bucket_arn S3TablesTableBucketReplication#destination_table_bucket_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableBucketReplicationRuleDestinationList <a name="S3TablesTableBucketReplicationRuleDestinationList" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplicationRuleDestinationList;

new S3TablesTableBucketReplicationRuleDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.get"></a>

```java
public S3TablesTableBucketReplicationRuleDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationRuleDestination> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>>

---


### S3TablesTableBucketReplicationRuleDestinationOutputReference <a name="S3TablesTableBucketReplicationRuleDestinationOutputReference" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplicationRuleDestinationOutputReference;

new S3TablesTableBucketReplicationRuleDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArnInput">destinationTableBucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArn">destinationTableBucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationTableBucketArnInput`<sup>Optional</sup> <a name="destinationTableBucketArnInput" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArnInput"></a>

```java
public java.lang.String getDestinationTableBucketArnInput();
```

- *Type:* java.lang.String

---

##### `destinationTableBucketArn`<sup>Required</sup> <a name="destinationTableBucketArn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArn"></a>

```java
public java.lang.String getDestinationTableBucketArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|S3TablesTableBucketReplicationRuleDestination getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>

---


### S3TablesTableBucketReplicationRuleList <a name="S3TablesTableBucketReplicationRuleList" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplicationRuleList;

new S3TablesTableBucketReplicationRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.get"></a>

```java
public S3TablesTableBucketReplicationRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationRule> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>>

---


### S3TablesTableBucketReplicationRuleOutputReference <a name="S3TablesTableBucketReplicationRuleOutputReference" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_tables_table_bucket_replication.S3TablesTableBucketReplicationRuleOutputReference;

new S3TablesTableBucketReplicationRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resetDestination">resetDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.putDestination"></a>

```java
public void putDestination(IResolvable|java.util.List<S3TablesTableBucketReplicationRuleDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>>

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resetDestination"></a>

```java
public void resetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList">S3TablesTableBucketReplicationRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destinationInput">destinationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destination"></a>

```java
public S3TablesTableBucketReplicationRuleDestinationList getDestination();
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList">S3TablesTableBucketReplicationRuleDestinationList</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destinationInput"></a>

```java
public IResolvable|java.util.List<S3TablesTableBucketReplicationRuleDestination> getDestinationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|S3TablesTableBucketReplicationRule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>

---



