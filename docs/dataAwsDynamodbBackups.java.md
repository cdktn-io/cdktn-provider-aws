# `dataAwsDynamodbBackups` Submodule <a name="`dataAwsDynamodbBackups` Submodule" id="@cdktn/provider-aws.dataAwsDynamodbBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDynamodbBackups <a name="DataAwsDynamodbBackups" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups aws_dynamodb_backups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_dynamodb_backups.DataAwsDynamodbBackups;

DataAwsDynamodbBackups.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .backupType(java.lang.String)
//  .region(java.lang.String)
//  .tableName(java.lang.String)
//  .timeRangeLowerBound(java.lang.String)
//  .timeRangeUpperBound(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.backupType">backupType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#backup_type DataAwsDynamodbBackups#backup_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#table_name DataAwsDynamodbBackups#table_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.timeRangeLowerBound">timeRangeLowerBound</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#time_range_lower_bound DataAwsDynamodbBackups#time_range_lower_bound}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.timeRangeUpperBound">timeRangeUpperBound</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#time_range_upper_bound DataAwsDynamodbBackups#time_range_upper_bound}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupType`<sup>Optional</sup> <a name="backupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.backupType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#backup_type DataAwsDynamodbBackups#backup_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#region DataAwsDynamodbBackups#region}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#table_name DataAwsDynamodbBackups#table_name}.

---

##### `timeRangeLowerBound`<sup>Optional</sup> <a name="timeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.timeRangeLowerBound"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#time_range_lower_bound DataAwsDynamodbBackups#time_range_lower_bound}.

---

##### `timeRangeUpperBound`<sup>Optional</sup> <a name="timeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.timeRangeUpperBound"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#time_range_upper_bound DataAwsDynamodbBackups#time_range_upper_bound}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetBackupType">resetBackupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeLowerBound">resetTimeRangeLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeUpperBound">resetTimeRangeUpperBound</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBackupType` <a name="resetBackupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetBackupType"></a>

```java
public void resetBackupType()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTimeRangeLowerBound` <a name="resetTimeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeLowerBound"></a>

```java
public void resetTimeRangeLowerBound()
```

##### `resetTimeRangeUpperBound` <a name="resetTimeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeUpperBound"></a>

```java
public void resetTimeRangeUpperBound()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsDynamodbBackups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_dynamodb_backups.DataAwsDynamodbBackups;

DataAwsDynamodbBackups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_dynamodb_backups.DataAwsDynamodbBackups;

DataAwsDynamodbBackups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_dynamodb_backups.DataAwsDynamodbBackups;

DataAwsDynamodbBackups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_dynamodb_backups.DataAwsDynamodbBackups;

DataAwsDynamodbBackups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsDynamodbBackups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsDynamodbBackups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsDynamodbBackups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsDynamodbBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsDynamodbBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupSummaries">backupSummaries</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList">DataAwsDynamodbBackupsBackupSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupTypeInput">backupTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBoundInput">timeRangeLowerBoundInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBoundInput">timeRangeUpperBoundInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupType">backupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBound">timeRangeLowerBound</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBound">timeRangeUpperBound</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `backupSummaries`<sup>Required</sup> <a name="backupSummaries" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupSummaries"></a>

```java
public DataAwsDynamodbBackupsBackupSummariesList getBackupSummaries();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList">DataAwsDynamodbBackupsBackupSummariesList</a>

---

##### `backupTypeInput`<sup>Optional</sup> <a name="backupTypeInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupTypeInput"></a>

```java
public java.lang.String getBackupTypeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `timeRangeLowerBoundInput`<sup>Optional</sup> <a name="timeRangeLowerBoundInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBoundInput"></a>

```java
public java.lang.String getTimeRangeLowerBoundInput();
```

- *Type:* java.lang.String

---

##### `timeRangeUpperBoundInput`<sup>Optional</sup> <a name="timeRangeUpperBoundInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBoundInput"></a>

```java
public java.lang.String getTimeRangeUpperBoundInput();
```

- *Type:* java.lang.String

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupType"></a>

```java
public java.lang.String getBackupType();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `timeRangeLowerBound`<sup>Required</sup> <a name="timeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBound"></a>

```java
public java.lang.String getTimeRangeLowerBound();
```

- *Type:* java.lang.String

---

##### `timeRangeUpperBound`<sup>Required</sup> <a name="timeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBound"></a>

```java
public java.lang.String getTimeRangeUpperBound();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDynamodbBackupsBackupSummaries <a name="DataAwsDynamodbBackupsBackupSummaries" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_dynamodb_backups.DataAwsDynamodbBackupsBackupSummaries;

DataAwsDynamodbBackupsBackupSummaries.builder()
    .build();
```


### DataAwsDynamodbBackupsConfig <a name="DataAwsDynamodbBackupsConfig" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_dynamodb_backups.DataAwsDynamodbBackupsConfig;

DataAwsDynamodbBackupsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .backupType(java.lang.String)
//  .region(java.lang.String)
//  .tableName(java.lang.String)
//  .timeRangeLowerBound(java.lang.String)
//  .timeRangeUpperBound(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.backupType">backupType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#backup_type DataAwsDynamodbBackups#backup_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#table_name DataAwsDynamodbBackups#table_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeLowerBound">timeRangeLowerBound</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#time_range_lower_bound DataAwsDynamodbBackups#time_range_lower_bound}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeUpperBound">timeRangeUpperBound</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#time_range_upper_bound DataAwsDynamodbBackups#time_range_upper_bound}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupType`<sup>Optional</sup> <a name="backupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.backupType"></a>

```java
public java.lang.String getBackupType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#backup_type DataAwsDynamodbBackups#backup_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#region DataAwsDynamodbBackups#region}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#table_name DataAwsDynamodbBackups#table_name}.

---

##### `timeRangeLowerBound`<sup>Optional</sup> <a name="timeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeLowerBound"></a>

```java
public java.lang.String getTimeRangeLowerBound();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#time_range_lower_bound DataAwsDynamodbBackups#time_range_lower_bound}.

---

##### `timeRangeUpperBound`<sup>Optional</sup> <a name="timeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeUpperBound"></a>

```java
public java.lang.String getTimeRangeUpperBound();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups#time_range_upper_bound DataAwsDynamodbBackups#time_range_upper_bound}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsDynamodbBackupsBackupSummariesList <a name="DataAwsDynamodbBackupsBackupSummariesList" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_dynamodb_backups.DataAwsDynamodbBackupsBackupSummariesList;

new DataAwsDynamodbBackupsBackupSummariesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get"></a>

```java
public DataAwsDynamodbBackupsBackupSummariesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDynamodbBackupsBackupSummariesOutputReference <a name="DataAwsDynamodbBackupsBackupSummariesOutputReference" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_dynamodb_backups.DataAwsDynamodbBackupsBackupSummariesOutputReference;

new DataAwsDynamodbBackupsBackupSummariesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupArn">backupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupCreationDateTime">backupCreationDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupExpiryDateTime">backupExpiryDateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupName">backupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupSizeBytes">backupSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupStatus">backupStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupType">backupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableArn">tableArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries">DataAwsDynamodbBackupsBackupSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupArn`<sup>Required</sup> <a name="backupArn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupArn"></a>

```java
public java.lang.String getBackupArn();
```

- *Type:* java.lang.String

---

##### `backupCreationDateTime`<sup>Required</sup> <a name="backupCreationDateTime" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupCreationDateTime"></a>

```java
public java.lang.String getBackupCreationDateTime();
```

- *Type:* java.lang.String

---

##### `backupExpiryDateTime`<sup>Required</sup> <a name="backupExpiryDateTime" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupExpiryDateTime"></a>

```java
public java.lang.String getBackupExpiryDateTime();
```

- *Type:* java.lang.String

---

##### `backupName`<sup>Required</sup> <a name="backupName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupName"></a>

```java
public java.lang.String getBackupName();
```

- *Type:* java.lang.String

---

##### `backupSizeBytes`<sup>Required</sup> <a name="backupSizeBytes" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupSizeBytes"></a>

```java
public java.lang.Number getBackupSizeBytes();
```

- *Type:* java.lang.Number

---

##### `backupStatus`<sup>Required</sup> <a name="backupStatus" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupStatus"></a>

```java
public java.lang.String getBackupStatus();
```

- *Type:* java.lang.String

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupType"></a>

```java
public java.lang.String getBackupType();
```

- *Type:* java.lang.String

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableArn"></a>

```java
public java.lang.String getTableArn();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.internalValue"></a>

```java
public DataAwsDynamodbBackupsBackupSummaries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries">DataAwsDynamodbBackupsBackupSummaries</a>

---



