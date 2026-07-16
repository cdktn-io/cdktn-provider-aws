# `s3FilesSynchronizationConfiguration` Submodule <a name="`s3FilesSynchronizationConfiguration` Submodule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesSynchronizationConfiguration <a name="S3FilesSynchronizationConfiguration" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration aws_s3files_synchronization_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfiguration;

S3FilesSynchronizationConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fileSystemId(java.lang.String)
//  .expirationDataRule(IResolvable|java.util.List<S3FilesSynchronizationConfigurationExpirationDataRule>)
//  .importDataRule(IResolvable|java.util.List<S3FilesSynchronizationConfigurationImportDataRule>)
//  .latestVersionNumber(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.expirationDataRule">expirationDataRule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>></code> | expiration_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.importDataRule">importDataRule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>></code> | import_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.latestVersionNumber">latestVersionNumber</a></code> | <code>java.lang.Number</code> | Latest version number for optimistic locking. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.fileSystemId"></a>

- *Type:* java.lang.String

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#file_system_id S3FilesSynchronizationConfiguration#file_system_id}

---

##### `expirationDataRule`<sup>Optional</sup> <a name="expirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.expirationDataRule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>>

expiration_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#expiration_data_rule S3FilesSynchronizationConfiguration#expiration_data_rule}

---

##### `importDataRule`<sup>Optional</sup> <a name="importDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.importDataRule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>>

import_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#import_data_rule S3FilesSynchronizationConfiguration#import_data_rule}

---

##### `latestVersionNumber`<sup>Optional</sup> <a name="latestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.latestVersionNumber"></a>

- *Type:* java.lang.Number

Latest version number for optimistic locking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#latest_version_number S3FilesSynchronizationConfiguration#latest_version_number}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#region S3FilesSynchronizationConfiguration#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule">putExpirationDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule">putImportDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetExpirationDataRule">resetExpirationDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetImportDataRule">resetImportDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetLatestVersionNumber">resetLatestVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExpirationDataRule` <a name="putExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule"></a>

```java
public void putExpirationDataRule(IResolvable|java.util.List<S3FilesSynchronizationConfigurationExpirationDataRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>>

---

##### `putImportDataRule` <a name="putImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule"></a>

```java
public void putImportDataRule(IResolvable|java.util.List<S3FilesSynchronizationConfigurationImportDataRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>>

---

##### `resetExpirationDataRule` <a name="resetExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetExpirationDataRule"></a>

```java
public void resetExpirationDataRule()
```

##### `resetImportDataRule` <a name="resetImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetImportDataRule"></a>

```java
public void resetImportDataRule()
```

##### `resetLatestVersionNumber` <a name="resetLatestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetLatestVersionNumber"></a>

```java
public void resetLatestVersionNumber()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3FilesSynchronizationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfiguration;

S3FilesSynchronizationConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfiguration;

S3FilesSynchronizationConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfiguration;

S3FilesSynchronizationConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfiguration;

S3FilesSynchronizationConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3FilesSynchronizationConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a S3FilesSynchronizationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3FilesSynchronizationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3FilesSynchronizationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesSynchronizationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRule">expirationDataRule</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList">S3FilesSynchronizationConfigurationExpirationDataRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRule">importDataRule</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList">S3FilesSynchronizationConfigurationImportDataRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRuleInput">expirationDataRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRuleInput">importDataRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumberInput">latestVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumber">latestVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `expirationDataRule`<sup>Required</sup> <a name="expirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRule"></a>

```java
public S3FilesSynchronizationConfigurationExpirationDataRuleList getExpirationDataRule();
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList">S3FilesSynchronizationConfigurationExpirationDataRuleList</a>

---

##### `importDataRule`<sup>Required</sup> <a name="importDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRule"></a>

```java
public S3FilesSynchronizationConfigurationImportDataRuleList getImportDataRule();
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList">S3FilesSynchronizationConfigurationImportDataRuleList</a>

---

##### `expirationDataRuleInput`<sup>Optional</sup> <a name="expirationDataRuleInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRuleInput"></a>

```java
public IResolvable|java.util.List<S3FilesSynchronizationConfigurationExpirationDataRule> getExpirationDataRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>>

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `importDataRuleInput`<sup>Optional</sup> <a name="importDataRuleInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRuleInput"></a>

```java
public IResolvable|java.util.List<S3FilesSynchronizationConfigurationImportDataRule> getImportDataRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>>

---

##### `latestVersionNumberInput`<sup>Optional</sup> <a name="latestVersionNumberInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumberInput"></a>

```java
public java.lang.Number getLatestVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `latestVersionNumber`<sup>Required</sup> <a name="latestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumber"></a>

```java
public java.lang.Number getLatestVersionNumber();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesSynchronizationConfigurationConfig <a name="S3FilesSynchronizationConfigurationConfig" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfigurationConfig;

S3FilesSynchronizationConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fileSystemId(java.lang.String)
//  .expirationDataRule(IResolvable|java.util.List<S3FilesSynchronizationConfigurationExpirationDataRule>)
//  .importDataRule(IResolvable|java.util.List<S3FilesSynchronizationConfigurationImportDataRule>)
//  .latestVersionNumber(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.expirationDataRule">expirationDataRule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>></code> | expiration_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.importDataRule">importDataRule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>></code> | import_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.latestVersionNumber">latestVersionNumber</a></code> | <code>java.lang.Number</code> | Latest version number for optimistic locking. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#file_system_id S3FilesSynchronizationConfiguration#file_system_id}

---

##### `expirationDataRule`<sup>Optional</sup> <a name="expirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.expirationDataRule"></a>

```java
public IResolvable|java.util.List<S3FilesSynchronizationConfigurationExpirationDataRule> getExpirationDataRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>>

expiration_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#expiration_data_rule S3FilesSynchronizationConfiguration#expiration_data_rule}

---

##### `importDataRule`<sup>Optional</sup> <a name="importDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.importDataRule"></a>

```java
public IResolvable|java.util.List<S3FilesSynchronizationConfigurationImportDataRule> getImportDataRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>>

import_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#import_data_rule S3FilesSynchronizationConfiguration#import_data_rule}

---

##### `latestVersionNumber`<sup>Optional</sup> <a name="latestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.latestVersionNumber"></a>

```java
public java.lang.Number getLatestVersionNumber();
```

- *Type:* java.lang.Number

Latest version number for optimistic locking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#latest_version_number S3FilesSynchronizationConfiguration#latest_version_number}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#region S3FilesSynchronizationConfiguration#region}

---

### S3FilesSynchronizationConfigurationExpirationDataRule <a name="S3FilesSynchronizationConfigurationExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfigurationExpirationDataRule;

S3FilesSynchronizationConfigurationExpirationDataRule.builder()
    .daysAfterLastAccess(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.property.daysAfterLastAccess">daysAfterLastAccess</a></code> | <code>java.lang.Number</code> | Days after last access before data expires. |

---

##### `daysAfterLastAccess`<sup>Required</sup> <a name="daysAfterLastAccess" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.property.daysAfterLastAccess"></a>

```java
public java.lang.Number getDaysAfterLastAccess();
```

- *Type:* java.lang.Number

Days after last access before data expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#days_after_last_access S3FilesSynchronizationConfiguration#days_after_last_access}

---

### S3FilesSynchronizationConfigurationImportDataRule <a name="S3FilesSynchronizationConfigurationImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfigurationImportDataRule;

S3FilesSynchronizationConfigurationImportDataRule.builder()
    .prefix(java.lang.String)
    .sizeLessThan(java.lang.Number)
    .trigger(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.prefix">prefix</a></code> | <code>java.lang.String</code> | S3 prefix for import. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.sizeLessThan">sizeLessThan</a></code> | <code>java.lang.Number</code> | Maximum file size to import. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.trigger">trigger</a></code> | <code>java.lang.String</code> | Import trigger type. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

S3 prefix for import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#prefix S3FilesSynchronizationConfiguration#prefix}

---

##### `sizeLessThan`<sup>Required</sup> <a name="sizeLessThan" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.sizeLessThan"></a>

```java
public java.lang.Number getSizeLessThan();
```

- *Type:* java.lang.Number

Maximum file size to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#size_less_than S3FilesSynchronizationConfiguration#size_less_than}

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.trigger"></a>

```java
public java.lang.String getTrigger();
```

- *Type:* java.lang.String

Import trigger type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/s3files_synchronization_configuration#trigger S3FilesSynchronizationConfiguration#trigger}

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesSynchronizationConfigurationExpirationDataRuleList <a name="S3FilesSynchronizationConfigurationExpirationDataRuleList" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfigurationExpirationDataRuleList;

new S3FilesSynchronizationConfigurationExpirationDataRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get"></a>

```java
public S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3FilesSynchronizationConfigurationExpirationDataRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>>

---


### S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference <a name="S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference;

new S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccessInput">daysAfterLastAccessInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccess">daysAfterLastAccess</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysAfterLastAccessInput`<sup>Optional</sup> <a name="daysAfterLastAccessInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccessInput"></a>

```java
public java.lang.Number getDaysAfterLastAccessInput();
```

- *Type:* java.lang.Number

---

##### `daysAfterLastAccess`<sup>Required</sup> <a name="daysAfterLastAccess" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccess"></a>

```java
public java.lang.Number getDaysAfterLastAccess();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|S3FilesSynchronizationConfigurationExpirationDataRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>

---


### S3FilesSynchronizationConfigurationImportDataRuleList <a name="S3FilesSynchronizationConfigurationImportDataRuleList" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfigurationImportDataRuleList;

new S3FilesSynchronizationConfigurationImportDataRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get"></a>

```java
public S3FilesSynchronizationConfigurationImportDataRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<S3FilesSynchronizationConfigurationImportDataRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>>

---


### S3FilesSynchronizationConfigurationImportDataRuleOutputReference <a name="S3FilesSynchronizationConfigurationImportDataRuleOutputReference" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.s3_files_synchronization_configuration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference;

new S3FilesSynchronizationConfigurationImportDataRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThanInput">sizeLessThanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.triggerInput">triggerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThan">sizeLessThan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.trigger">trigger</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `sizeLessThanInput`<sup>Optional</sup> <a name="sizeLessThanInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThanInput"></a>

```java
public java.lang.Number getSizeLessThanInput();
```

- *Type:* java.lang.Number

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.triggerInput"></a>

```java
public java.lang.String getTriggerInput();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `sizeLessThan`<sup>Required</sup> <a name="sizeLessThan" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThan"></a>

```java
public java.lang.Number getSizeLessThan();
```

- *Type:* java.lang.Number

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.trigger"></a>

```java
public java.lang.String getTrigger();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|S3FilesSynchronizationConfigurationImportDataRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>

---



