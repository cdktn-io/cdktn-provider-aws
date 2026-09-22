# `dmsMigrationProject` Submodule <a name="`dmsMigrationProject` Submodule" id="@cdktn/provider-aws.dmsMigrationProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsMigrationProject <a name="DmsMigrationProject" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project aws_dms_migration_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProject;

DmsMigrationProject.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceProfileArn(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .schemaConversionApplicationAttributes(IResolvable|java.util.List<DmsMigrationProjectSchemaConversionApplicationAttributes>)
//  .sourceDataProviderDescriptor(IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptor>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .targetDataProviderDescriptor(IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptor>)
//  .timeouts(DmsMigrationProjectTimeouts)
//  .transformationRules(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.schemaConversionApplicationAttributes">schemaConversionApplicationAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>></code> | schema_conversion_application_attributes block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.sourceDataProviderDescriptor">sourceDataProviderDescriptor</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>></code> | source_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.targetDataProviderDescriptor">targetDataProviderDescriptor</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>></code> | target_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.transformationRules">transformationRules</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#region DmsMigrationProject#region}

---

##### `schemaConversionApplicationAttributes`<sup>Optional</sup> <a name="schemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.schemaConversionApplicationAttributes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>>

schema_conversion_application_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}

---

##### `sourceDataProviderDescriptor`<sup>Optional</sup> <a name="sourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.sourceDataProviderDescriptor"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>>

source_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#source_data_provider_descriptor DmsMigrationProject#source_data_provider_descriptor}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}.

---

##### `targetDataProviderDescriptor`<sup>Optional</sup> <a name="targetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.targetDataProviderDescriptor"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>>

target_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#target_data_provider_descriptor DmsMigrationProject#target_data_provider_descriptor}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#timeouts DmsMigrationProject#timeouts}

---

##### `transformationRules`<sup>Optional</sup> <a name="transformationRules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.transformationRules"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes">putSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor">putSourceDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor">putTargetDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes">resetSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptor">resetSourceDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptor">resetTargetDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTransformationRules">resetTransformationRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchemaConversionApplicationAttributes` <a name="putSchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes"></a>

```java
public void putSchemaConversionApplicationAttributes(IResolvable|java.util.List<DmsMigrationProjectSchemaConversionApplicationAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>>

---

##### `putSourceDataProviderDescriptor` <a name="putSourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor"></a>

```java
public void putSourceDataProviderDescriptor(IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptor> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>>

---

##### `putTargetDataProviderDescriptor` <a name="putTargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor"></a>

```java
public void putTargetDataProviderDescriptor(IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptor> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts"></a>

```java
public void putTimeouts(DmsMigrationProjectTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSchemaConversionApplicationAttributes` <a name="resetSchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes"></a>

```java
public void resetSchemaConversionApplicationAttributes()
```

##### `resetSourceDataProviderDescriptor` <a name="resetSourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptor"></a>

```java
public void resetSourceDataProviderDescriptor()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetDataProviderDescriptor` <a name="resetTargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptor"></a>

```java
public void resetTargetDataProviderDescriptor()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransformationRules` <a name="resetTransformationRules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTransformationRules"></a>

```java
public void resetTransformationRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProject;

DmsMigrationProject.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProject;

DmsMigrationProject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProject;

DmsMigrationProject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProject;

DmsMigrationProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsMigrationProject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsMigrationProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsMigrationProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DmsMigrationProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName">instanceProfileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes">schemaConversionApplicationAttributes</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList">DmsMigrationProjectSchemaConversionApplicationAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptor">sourceDataProviderDescriptor</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList">DmsMigrationProjectSourceDataProviderDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptor">targetDataProviderDescriptor</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList">DmsMigrationProjectTargetDataProviderDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference">DmsMigrationProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput">schemaConversionApplicationAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorInput">sourceDataProviderDescriptorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorInput">targetDataProviderDescriptorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput">transformationRulesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRules">transformationRules</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `instanceProfileName`<sup>Required</sup> <a name="instanceProfileName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName"></a>

```java
public java.lang.String getInstanceProfileName();
```

- *Type:* java.lang.String

---

##### `schemaConversionApplicationAttributes`<sup>Required</sup> <a name="schemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes"></a>

```java
public DmsMigrationProjectSchemaConversionApplicationAttributesList getSchemaConversionApplicationAttributes();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList">DmsMigrationProjectSchemaConversionApplicationAttributesList</a>

---

##### `sourceDataProviderDescriptor`<sup>Required</sup> <a name="sourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptor"></a>

```java
public DmsMigrationProjectSourceDataProviderDescriptorList getSourceDataProviderDescriptor();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList">DmsMigrationProjectSourceDataProviderDescriptorList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `targetDataProviderDescriptor`<sup>Required</sup> <a name="targetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptor"></a>

```java
public DmsMigrationProjectTargetDataProviderDescriptorList getTargetDataProviderDescriptor();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList">DmsMigrationProjectTargetDataProviderDescriptorList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeouts"></a>

```java
public DmsMigrationProjectTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference">DmsMigrationProjectTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `schemaConversionApplicationAttributesInput`<sup>Optional</sup> <a name="schemaConversionApplicationAttributesInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectSchemaConversionApplicationAttributes> getSchemaConversionApplicationAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>>

---

##### `sourceDataProviderDescriptorInput`<sup>Optional</sup> <a name="sourceDataProviderDescriptorInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorInput"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptor> getSourceDataProviderDescriptorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetDataProviderDescriptorInput`<sup>Optional</sup> <a name="targetDataProviderDescriptorInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorInput"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptor> getTargetDataProviderDescriptorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeoutsInput"></a>

```java
public IResolvable|DmsMigrationProjectTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

---

##### `transformationRulesInput`<sup>Optional</sup> <a name="transformationRulesInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput"></a>

```java
public java.lang.String getTransformationRulesInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transformationRules`<sup>Required</sup> <a name="transformationRules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRules"></a>

```java
public java.lang.String getTransformationRules();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsMigrationProjectConfig <a name="DmsMigrationProjectConfig" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectConfig;

DmsMigrationProjectConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceProfileArn(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .schemaConversionApplicationAttributes(IResolvable|java.util.List<DmsMigrationProjectSchemaConversionApplicationAttributes>)
//  .sourceDataProviderDescriptor(IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptor>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .targetDataProviderDescriptor(IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptor>)
//  .timeouts(DmsMigrationProjectTimeouts)
//  .transformationRules(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes">schemaConversionApplicationAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>></code> | schema_conversion_application_attributes block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptor">sourceDataProviderDescriptor</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>></code> | source_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptor">targetDataProviderDescriptor</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>></code> | target_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules">transformationRules</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#region DmsMigrationProject#region}

---

##### `schemaConversionApplicationAttributes`<sup>Optional</sup> <a name="schemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectSchemaConversionApplicationAttributes> getSchemaConversionApplicationAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>>

schema_conversion_application_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}

---

##### `sourceDataProviderDescriptor`<sup>Optional</sup> <a name="sourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptor"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptor> getSourceDataProviderDescriptor();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>>

source_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#source_data_provider_descriptor DmsMigrationProject#source_data_provider_descriptor}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}.

---

##### `targetDataProviderDescriptor`<sup>Optional</sup> <a name="targetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptor"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptor> getTargetDataProviderDescriptor();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>>

target_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#target_data_provider_descriptor DmsMigrationProject#target_data_provider_descriptor}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.timeouts"></a>

```java
public DmsMigrationProjectTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#timeouts DmsMigrationProject#timeouts}

---

##### `transformationRules`<sup>Optional</sup> <a name="transformationRules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules"></a>

```java
public java.lang.String getTransformationRules();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}.

---

### DmsMigrationProjectSchemaConversionApplicationAttributes <a name="DmsMigrationProjectSchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectSchemaConversionApplicationAttributes;

DmsMigrationProjectSchemaConversionApplicationAttributes.builder()
//  .s3BucketPath(java.lang.String)
//  .s3BucketRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath">s3BucketPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn">s3BucketRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}. |

---

##### `s3BucketPath`<sup>Optional</sup> <a name="s3BucketPath" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath"></a>

```java
public java.lang.String getS3BucketPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}.

---

##### `s3BucketRoleArn`<sup>Optional</sup> <a name="s3BucketRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn"></a>

```java
public java.lang.String getS3BucketRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}.

---

### DmsMigrationProjectSourceDataProviderDescriptor <a name="DmsMigrationProjectSourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectSourceDataProviderDescriptor;

DmsMigrationProjectSourceDataProviderDescriptor.builder()
    .dataProviderArn(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.dataProviderArn">dataProviderArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.dataProviderArn"></a>

```java
public java.lang.String getDataProviderArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

### DmsMigrationProjectTargetDataProviderDescriptor <a name="DmsMigrationProjectTargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectTargetDataProviderDescriptor;

DmsMigrationProjectTargetDataProviderDescriptor.builder()
    .dataProviderArn(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.dataProviderArn">dataProviderArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.dataProviderArn"></a>

```java
public java.lang.String getDataProviderArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

### DmsMigrationProjectTimeouts <a name="DmsMigrationProjectTimeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectTimeouts;

DmsMigrationProjectTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#create DmsMigrationProject#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsMigrationProjectSchemaConversionApplicationAttributesList <a name="DmsMigrationProjectSchemaConversionApplicationAttributesList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectSchemaConversionApplicationAttributesList;

new DmsMigrationProjectSchemaConversionApplicationAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get"></a>

```java
public DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectSchemaConversionApplicationAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>>

---


### DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference <a name="DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference;

new DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath">resetS3BucketPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn">resetS3BucketRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3BucketPath` <a name="resetS3BucketPath" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath"></a>

```java
public void resetS3BucketPath()
```

##### `resetS3BucketRoleArn` <a name="resetS3BucketRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn"></a>

```java
public void resetS3BucketRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput">s3BucketPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput">s3BucketRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath">s3BucketPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn">s3BucketRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketPathInput`<sup>Optional</sup> <a name="s3BucketPathInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput"></a>

```java
public java.lang.String getS3BucketPathInput();
```

- *Type:* java.lang.String

---

##### `s3BucketRoleArnInput`<sup>Optional</sup> <a name="s3BucketRoleArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput"></a>

```java
public java.lang.String getS3BucketRoleArnInput();
```

- *Type:* java.lang.String

---

##### `s3BucketPath`<sup>Required</sup> <a name="s3BucketPath" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath"></a>

```java
public java.lang.String getS3BucketPath();
```

- *Type:* java.lang.String

---

##### `s3BucketRoleArn`<sup>Required</sup> <a name="s3BucketRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn"></a>

```java
public java.lang.String getS3BucketRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsMigrationProjectSchemaConversionApplicationAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---


### DmsMigrationProjectSourceDataProviderDescriptorList <a name="DmsMigrationProjectSourceDataProviderDescriptorList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectSourceDataProviderDescriptorList;

new DmsMigrationProjectSourceDataProviderDescriptorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get"></a>

```java
public DmsMigrationProjectSourceDataProviderDescriptorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectSourceDataProviderDescriptor> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>>

---


### DmsMigrationProjectSourceDataProviderDescriptorOutputReference <a name="DmsMigrationProjectSourceDataProviderDescriptorOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectSourceDataProviderDescriptorOutputReference;

new DmsMigrationProjectSourceDataProviderDescriptorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderName">dataProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArnInput">dataProviderArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArn">dataProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataProviderName`<sup>Required</sup> <a name="dataProviderName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderName"></a>

```java
public java.lang.String getDataProviderName();
```

- *Type:* java.lang.String

---

##### `dataProviderArnInput`<sup>Optional</sup> <a name="dataProviderArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArnInput"></a>

```java
public java.lang.String getDataProviderArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArn"></a>

```java
public java.lang.String getDataProviderArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsMigrationProjectSourceDataProviderDescriptor getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>

---


### DmsMigrationProjectTargetDataProviderDescriptorList <a name="DmsMigrationProjectTargetDataProviderDescriptorList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectTargetDataProviderDescriptorList;

new DmsMigrationProjectTargetDataProviderDescriptorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get"></a>

```java
public DmsMigrationProjectTargetDataProviderDescriptorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DmsMigrationProjectTargetDataProviderDescriptor> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>>

---


### DmsMigrationProjectTargetDataProviderDescriptorOutputReference <a name="DmsMigrationProjectTargetDataProviderDescriptorOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectTargetDataProviderDescriptorOutputReference;

new DmsMigrationProjectTargetDataProviderDescriptorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerSecretId"></a>

```java
public void resetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderName">dataProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArnInput">dataProviderArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArn">dataProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataProviderName`<sup>Required</sup> <a name="dataProviderName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderName"></a>

```java
public java.lang.String getDataProviderName();
```

- *Type:* java.lang.String

---

##### `dataProviderArnInput`<sup>Optional</sup> <a name="dataProviderArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArnInput"></a>

```java
public java.lang.String getDataProviderArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput"></a>

```java
public java.lang.String getSecretsManagerSecretIdInput();
```

- *Type:* java.lang.String

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArn"></a>

```java
public java.lang.String getDataProviderArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretId"></a>

```java
public java.lang.String getSecretsManagerSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsMigrationProjectTargetDataProviderDescriptor getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>

---


### DmsMigrationProjectTimeoutsOutputReference <a name="DmsMigrationProjectTimeoutsOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dms_migration_project.DmsMigrationProjectTimeoutsOutputReference;

new DmsMigrationProjectTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DmsMigrationProjectTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

---



