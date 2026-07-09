# `m2Environment` Submodule <a name="`m2Environment` Submodule" id="@cdktn/provider-aws.m2Environment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### M2Environment <a name="M2Environment" id="@cdktn/provider-aws.m2Environment.M2Environment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment aws_m2_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2Environment;

M2Environment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engineType(java.lang.String)
    .instanceType(java.lang.String)
    .name(java.lang.String)
//  .applyChangesDuringMaintenanceWindow(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .engineVersion(java.lang.String)
//  .forceUpdate(java.lang.Boolean|IResolvable)
//  .highAvailabilityConfig(IResolvable|java.util.List<M2EnvironmentHighAvailabilityConfig>)
//  .kmsKeyId(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .storageConfiguration(IResolvable|java.util.List<M2EnvironmentStorageConfiguration>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(M2EnvironmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#engine_type M2Environment#engine_type}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#instance_type M2Environment#instance_type}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#name M2Environment#name}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.applyChangesDuringMaintenanceWindow">applyChangesDuringMaintenanceWindow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#apply_changes_during_maintenance_window M2Environment#apply_changes_during_maintenance_window}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#description M2Environment#description}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#engine_version M2Environment#engine_version}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#force_update M2Environment#force_update}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.highAvailabilityConfig">highAvailabilityConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>></code> | high_availability_config block. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#kms_key_id M2Environment#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#preferred_maintenance_window M2Environment#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#publicly_accessible M2Environment#publicly_accessible}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#security_group_ids M2Environment#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.storageConfiguration">storageConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration">M2EnvironmentStorageConfiguration</a>></code> | storage_configuration block. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#subnet_ids M2Environment#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#tags M2Environment#tags}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts">M2EnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.engineType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#engine_type M2Environment#engine_type}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#instance_type M2Environment#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#name M2Environment#name}.

---

##### `applyChangesDuringMaintenanceWindow`<sup>Optional</sup> <a name="applyChangesDuringMaintenanceWindow" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.applyChangesDuringMaintenanceWindow"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#apply_changes_during_maintenance_window M2Environment#apply_changes_during_maintenance_window}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#description M2Environment#description}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#engine_version M2Environment#engine_version}.

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.forceUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#force_update M2Environment#force_update}.

---

##### `highAvailabilityConfig`<sup>Optional</sup> <a name="highAvailabilityConfig" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.highAvailabilityConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>>

high_availability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#high_availability_config M2Environment#high_availability_config}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#kms_key_id M2Environment#kms_key_id}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#preferred_maintenance_window M2Environment#preferred_maintenance_window}.

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#publicly_accessible M2Environment#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#region M2Environment#region}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#security_group_ids M2Environment#security_group_ids}.

---

##### `storageConfiguration`<sup>Optional</sup> <a name="storageConfiguration" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.storageConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration">M2EnvironmentStorageConfiguration</a>>

storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#storage_configuration M2Environment#storage_configuration}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#subnet_ids M2Environment#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#tags M2Environment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.m2Environment.M2Environment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts">M2EnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#timeouts M2Environment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.putHighAvailabilityConfig">putHighAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.putStorageConfiguration">putStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetApplyChangesDuringMaintenanceWindow">resetApplyChangesDuringMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetHighAvailabilityConfig">resetHighAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetStorageConfiguration">resetStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Environment.M2Environment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.m2Environment.M2Environment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.m2Environment.M2Environment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.m2Environment.M2Environment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.m2Environment.M2Environment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.m2Environment.M2Environment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.m2Environment.M2Environment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.m2Environment.M2Environment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.m2Environment.M2Environment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.m2Environment.M2Environment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.m2Environment.M2Environment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.m2Environment.M2Environment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.m2Environment.M2Environment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.m2Environment.M2Environment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.m2Environment.M2Environment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.m2Environment.M2Environment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.m2Environment.M2Environment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.m2Environment.M2Environment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2Environment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.m2Environment.M2Environment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.m2Environment.M2Environment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.m2Environment.M2Environment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.m2Environment.M2Environment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.m2Environment.M2Environment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.m2Environment.M2Environment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.m2Environment.M2Environment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHighAvailabilityConfig` <a name="putHighAvailabilityConfig" id="@cdktn/provider-aws.m2Environment.M2Environment.putHighAvailabilityConfig"></a>

```java
public void putHighAvailabilityConfig(IResolvable|java.util.List<M2EnvironmentHighAvailabilityConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.m2Environment.M2Environment.putHighAvailabilityConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>>

---

##### `putStorageConfiguration` <a name="putStorageConfiguration" id="@cdktn/provider-aws.m2Environment.M2Environment.putStorageConfiguration"></a>

```java
public void putStorageConfiguration(IResolvable|java.util.List<M2EnvironmentStorageConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.m2Environment.M2Environment.putStorageConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration">M2EnvironmentStorageConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.m2Environment.M2Environment.putTimeouts"></a>

```java
public void putTimeouts(M2EnvironmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.m2Environment.M2Environment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts">M2EnvironmentTimeouts</a>

---

##### `resetApplyChangesDuringMaintenanceWindow` <a name="resetApplyChangesDuringMaintenanceWindow" id="@cdktn/provider-aws.m2Environment.M2Environment.resetApplyChangesDuringMaintenanceWindow"></a>

```java
public void resetApplyChangesDuringMaintenanceWindow()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.m2Environment.M2Environment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-aws.m2Environment.M2Environment.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktn/provider-aws.m2Environment.M2Environment.resetForceUpdate"></a>

```java
public void resetForceUpdate()
```

##### `resetHighAvailabilityConfig` <a name="resetHighAvailabilityConfig" id="@cdktn/provider-aws.m2Environment.M2Environment.resetHighAvailabilityConfig"></a>

```java
public void resetHighAvailabilityConfig()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.m2Environment.M2Environment.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-aws.m2Environment.M2Environment.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-aws.m2Environment.M2Environment.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.m2Environment.M2Environment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-aws.m2Environment.M2Environment.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetStorageConfiguration` <a name="resetStorageConfiguration" id="@cdktn/provider-aws.m2Environment.M2Environment.resetStorageConfiguration"></a>

```java
public void resetStorageConfiguration()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-aws.m2Environment.M2Environment.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.m2Environment.M2Environment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.m2Environment.M2Environment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a M2Environment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.m2Environment.M2Environment.isConstruct"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2Environment;

M2Environment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.m2Environment.M2Environment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.m2Environment.M2Environment.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2Environment;

M2Environment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.m2Environment.M2Environment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.m2Environment.M2Environment.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2Environment;

M2Environment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.m2Environment.M2Environment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.m2Environment.M2Environment.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2Environment;

M2Environment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),M2Environment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a M2Environment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.m2Environment.M2Environment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.m2Environment.M2Environment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the M2Environment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.m2Environment.M2Environment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing M2Environment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.m2Environment.M2Environment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the M2Environment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.highAvailabilityConfig">highAvailabilityConfig</a></code> | <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList">M2EnvironmentHighAvailabilityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.storageConfiguration">storageConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList">M2EnvironmentStorageConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference">M2EnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.applyChangesDuringMaintenanceWindowInput">applyChangesDuringMaintenanceWindowInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.engineTypeInput">engineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.forceUpdateInput">forceUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.highAvailabilityConfigInput">highAvailabilityConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.storageConfigurationInput">storageConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration">M2EnvironmentStorageConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts">M2EnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.applyChangesDuringMaintenanceWindow">applyChangesDuringMaintenanceWindow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.engineType">engineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.m2Environment.M2Environment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.m2Environment.M2Environment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Environment.M2Environment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.m2Environment.M2Environment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.m2Environment.M2Environment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.m2Environment.M2Environment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.m2Environment.M2Environment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.m2Environment.M2Environment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.m2Environment.M2Environment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.m2Environment.M2Environment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.m2Environment.M2Environment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.m2Environment.M2Environment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.m2Environment.M2Environment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.m2Environment.M2Environment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.m2Environment.M2Environment.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-aws.m2Environment.M2Environment.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `highAvailabilityConfig`<sup>Required</sup> <a name="highAvailabilityConfig" id="@cdktn/provider-aws.m2Environment.M2Environment.property.highAvailabilityConfig"></a>

```java
public M2EnvironmentHighAvailabilityConfigList getHighAvailabilityConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList">M2EnvironmentHighAvailabilityConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.m2Environment.M2Environment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-aws.m2Environment.M2Environment.property.loadBalancerArn"></a>

```java
public java.lang.String getLoadBalancerArn();
```

- *Type:* java.lang.String

---

##### `storageConfiguration`<sup>Required</sup> <a name="storageConfiguration" id="@cdktn/provider-aws.m2Environment.M2Environment.property.storageConfiguration"></a>

```java
public M2EnvironmentStorageConfigurationList getStorageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList">M2EnvironmentStorageConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.m2Environment.M2Environment.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.m2Environment.M2Environment.property.timeouts"></a>

```java
public M2EnvironmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference">M2EnvironmentTimeoutsOutputReference</a>

---

##### `applyChangesDuringMaintenanceWindowInput`<sup>Optional</sup> <a name="applyChangesDuringMaintenanceWindowInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.applyChangesDuringMaintenanceWindowInput"></a>

```java
public java.lang.Boolean|IResolvable getApplyChangesDuringMaintenanceWindowInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `engineTypeInput`<sup>Optional</sup> <a name="engineTypeInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.engineTypeInput"></a>

```java
public java.lang.String getEngineTypeInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.forceUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `highAvailabilityConfigInput`<sup>Optional</sup> <a name="highAvailabilityConfigInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.highAvailabilityConfigInput"></a>

```java
public IResolvable|java.util.List<M2EnvironmentHighAvailabilityConfig> getHighAvailabilityConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.publiclyAccessibleInput"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageConfigurationInput`<sup>Optional</sup> <a name="storageConfigurationInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.storageConfigurationInput"></a>

```java
public IResolvable|java.util.List<M2EnvironmentStorageConfiguration> getStorageConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration">M2EnvironmentStorageConfiguration</a>>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.m2Environment.M2Environment.property.timeoutsInput"></a>

```java
public IResolvable|M2EnvironmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts">M2EnvironmentTimeouts</a>

---

##### `applyChangesDuringMaintenanceWindow`<sup>Required</sup> <a name="applyChangesDuringMaintenanceWindow" id="@cdktn/provider-aws.m2Environment.M2Environment.property.applyChangesDuringMaintenanceWindow"></a>

```java
public java.lang.Boolean|IResolvable getApplyChangesDuringMaintenanceWindow();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.m2Environment.M2Environment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-aws.m2Environment.M2Environment.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-aws.m2Environment.M2Environment.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktn/provider-aws.m2Environment.M2Environment.property.forceUpdate"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.m2Environment.M2Environment.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.m2Environment.M2Environment.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.m2Environment.M2Environment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-aws.m2Environment.M2Environment.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-aws.m2Environment.M2Environment.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.m2Environment.M2Environment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.m2Environment.M2Environment.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.m2Environment.M2Environment.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.m2Environment.M2Environment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2Environment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.m2Environment.M2Environment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### M2EnvironmentConfig <a name="M2EnvironmentConfig" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentConfig;

M2EnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engineType(java.lang.String)
    .instanceType(java.lang.String)
    .name(java.lang.String)
//  .applyChangesDuringMaintenanceWindow(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .engineVersion(java.lang.String)
//  .forceUpdate(java.lang.Boolean|IResolvable)
//  .highAvailabilityConfig(IResolvable|java.util.List<M2EnvironmentHighAvailabilityConfig>)
//  .kmsKeyId(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .storageConfiguration(IResolvable|java.util.List<M2EnvironmentStorageConfiguration>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(M2EnvironmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#engine_type M2Environment#engine_type}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#instance_type M2Environment#instance_type}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#name M2Environment#name}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.applyChangesDuringMaintenanceWindow">applyChangesDuringMaintenanceWindow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#apply_changes_during_maintenance_window M2Environment#apply_changes_during_maintenance_window}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#description M2Environment#description}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#engine_version M2Environment#engine_version}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#force_update M2Environment#force_update}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.highAvailabilityConfig">highAvailabilityConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>></code> | high_availability_config block. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#kms_key_id M2Environment#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#preferred_maintenance_window M2Environment#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#publicly_accessible M2Environment#publicly_accessible}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#security_group_ids M2Environment#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.storageConfiguration">storageConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration">M2EnvironmentStorageConfiguration</a>></code> | storage_configuration block. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#subnet_ids M2Environment#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#tags M2Environment#tags}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts">M2EnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#engine_type M2Environment#engine_type}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#instance_type M2Environment#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#name M2Environment#name}.

---

##### `applyChangesDuringMaintenanceWindow`<sup>Optional</sup> <a name="applyChangesDuringMaintenanceWindow" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.applyChangesDuringMaintenanceWindow"></a>

```java
public java.lang.Boolean|IResolvable getApplyChangesDuringMaintenanceWindow();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#apply_changes_during_maintenance_window M2Environment#apply_changes_during_maintenance_window}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#description M2Environment#description}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#engine_version M2Environment#engine_version}.

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.forceUpdate"></a>

```java
public java.lang.Boolean|IResolvable getForceUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#force_update M2Environment#force_update}.

---

##### `highAvailabilityConfig`<sup>Optional</sup> <a name="highAvailabilityConfig" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.highAvailabilityConfig"></a>

```java
public IResolvable|java.util.List<M2EnvironmentHighAvailabilityConfig> getHighAvailabilityConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>>

high_availability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#high_availability_config M2Environment#high_availability_config}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#kms_key_id M2Environment#kms_key_id}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#preferred_maintenance_window M2Environment#preferred_maintenance_window}.

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#publicly_accessible M2Environment#publicly_accessible}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#region M2Environment#region}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#security_group_ids M2Environment#security_group_ids}.

---

##### `storageConfiguration`<sup>Optional</sup> <a name="storageConfiguration" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.storageConfiguration"></a>

```java
public IResolvable|java.util.List<M2EnvironmentStorageConfiguration> getStorageConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration">M2EnvironmentStorageConfiguration</a>>

storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#storage_configuration M2Environment#storage_configuration}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#subnet_ids M2Environment#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#tags M2Environment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.m2Environment.M2EnvironmentConfig.property.timeouts"></a>

```java
public M2EnvironmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts">M2EnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#timeouts M2Environment#timeouts}

---

### M2EnvironmentHighAvailabilityConfig <a name="M2EnvironmentHighAvailabilityConfig" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentHighAvailabilityConfig;

M2EnvironmentHighAvailabilityConfig.builder()
    .desiredCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#desired_capacity M2Environment#desired_capacity}. |

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#desired_capacity M2Environment#desired_capacity}.

---

### M2EnvironmentStorageConfiguration <a name="M2EnvironmentStorageConfiguration" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentStorageConfiguration;

M2EnvironmentStorageConfiguration.builder()
//  .efs(IResolvable|java.util.List<M2EnvironmentStorageConfigurationEfs>)
//  .fsx(IResolvable|java.util.List<M2EnvironmentStorageConfigurationFsx>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration.property.efs">efs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs">M2EnvironmentStorageConfigurationEfs</a>></code> | efs block. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration.property.fsx">fsx</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx">M2EnvironmentStorageConfigurationFsx</a>></code> | fsx block. |

---

##### `efs`<sup>Optional</sup> <a name="efs" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration.property.efs"></a>

```java
public IResolvable|java.util.List<M2EnvironmentStorageConfigurationEfs> getEfs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs">M2EnvironmentStorageConfigurationEfs</a>>

efs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#efs M2Environment#efs}

---

##### `fsx`<sup>Optional</sup> <a name="fsx" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration.property.fsx"></a>

```java
public IResolvable|java.util.List<M2EnvironmentStorageConfigurationFsx> getFsx();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx">M2EnvironmentStorageConfigurationFsx</a>>

fsx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#fsx M2Environment#fsx}

---

### M2EnvironmentStorageConfigurationEfs <a name="M2EnvironmentStorageConfigurationEfs" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentStorageConfigurationEfs;

M2EnvironmentStorageConfigurationEfs.builder()
    .fileSystemId(java.lang.String)
    .mountPoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}. |

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}.

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}.

---

### M2EnvironmentStorageConfigurationFsx <a name="M2EnvironmentStorageConfigurationFsx" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentStorageConfigurationFsx;

M2EnvironmentStorageConfigurationFsx.builder()
    .fileSystemId(java.lang.String)
    .mountPoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}. |

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}.

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}.

---

### M2EnvironmentTimeouts <a name="M2EnvironmentTimeouts" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentTimeouts;

M2EnvironmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#create M2Environment#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#delete M2Environment#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/m2_environment#update M2Environment#update}

---

## Classes <a name="Classes" id="Classes"></a>

### M2EnvironmentHighAvailabilityConfigList <a name="M2EnvironmentHighAvailabilityConfigList" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentHighAvailabilityConfigList;

new M2EnvironmentHighAvailabilityConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.get"></a>

```java
public M2EnvironmentHighAvailabilityConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<M2EnvironmentHighAvailabilityConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>>

---


### M2EnvironmentHighAvailabilityConfigOutputReference <a name="M2EnvironmentHighAvailabilityConfigOutputReference" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentHighAvailabilityConfigOutputReference;

new M2EnvironmentHighAvailabilityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacityInput"></a>

```java
public java.lang.Number getDesiredCapacityInput();
```

- *Type:* java.lang.Number

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|M2EnvironmentHighAvailabilityConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>

---


### M2EnvironmentStorageConfigurationEfsList <a name="M2EnvironmentStorageConfigurationEfsList" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentStorageConfigurationEfsList;

new M2EnvironmentStorageConfigurationEfsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.get"></a>

```java
public M2EnvironmentStorageConfigurationEfsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs">M2EnvironmentStorageConfigurationEfs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<M2EnvironmentStorageConfigurationEfs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs">M2EnvironmentStorageConfigurationEfs</a>>

---


### M2EnvironmentStorageConfigurationEfsOutputReference <a name="M2EnvironmentStorageConfigurationEfsOutputReference" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentStorageConfigurationEfsOutputReference;

new M2EnvironmentStorageConfigurationEfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs">M2EnvironmentStorageConfigurationEfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.mountPointInput"></a>

```java
public java.lang.String getMountPointInput();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsOutputReference.property.internalValue"></a>

```java
public IResolvable|M2EnvironmentStorageConfigurationEfs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs">M2EnvironmentStorageConfigurationEfs</a>

---


### M2EnvironmentStorageConfigurationFsxList <a name="M2EnvironmentStorageConfigurationFsxList" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentStorageConfigurationFsxList;

new M2EnvironmentStorageConfigurationFsxList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.get"></a>

```java
public M2EnvironmentStorageConfigurationFsxOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx">M2EnvironmentStorageConfigurationFsx</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList.property.internalValue"></a>

```java
public IResolvable|java.util.List<M2EnvironmentStorageConfigurationFsx> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx">M2EnvironmentStorageConfigurationFsx</a>>

---


### M2EnvironmentStorageConfigurationFsxOutputReference <a name="M2EnvironmentStorageConfigurationFsxOutputReference" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentStorageConfigurationFsxOutputReference;

new M2EnvironmentStorageConfigurationFsxOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx">M2EnvironmentStorageConfigurationFsx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.mountPointInput"></a>

```java
public java.lang.String getMountPointInput();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxOutputReference.property.internalValue"></a>

```java
public IResolvable|M2EnvironmentStorageConfigurationFsx getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx">M2EnvironmentStorageConfigurationFsx</a>

---


### M2EnvironmentStorageConfigurationList <a name="M2EnvironmentStorageConfigurationList" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentStorageConfigurationList;

new M2EnvironmentStorageConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.get"></a>

```java
public M2EnvironmentStorageConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration">M2EnvironmentStorageConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<M2EnvironmentStorageConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration">M2EnvironmentStorageConfiguration</a>>

---


### M2EnvironmentStorageConfigurationOutputReference <a name="M2EnvironmentStorageConfigurationOutputReference" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentStorageConfigurationOutputReference;

new M2EnvironmentStorageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.putEfs">putEfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.putFsx">putFsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.resetEfs">resetEfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.resetFsx">resetFsx</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfs` <a name="putEfs" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.putEfs"></a>

```java
public void putEfs(IResolvable|java.util.List<M2EnvironmentStorageConfigurationEfs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.putEfs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs">M2EnvironmentStorageConfigurationEfs</a>>

---

##### `putFsx` <a name="putFsx" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.putFsx"></a>

```java
public void putFsx(IResolvable|java.util.List<M2EnvironmentStorageConfigurationFsx> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.putFsx.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx">M2EnvironmentStorageConfigurationFsx</a>>

---

##### `resetEfs` <a name="resetEfs" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.resetEfs"></a>

```java
public void resetEfs()
```

##### `resetFsx` <a name="resetFsx" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.resetFsx"></a>

```java
public void resetFsx()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.efs">efs</a></code> | <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList">M2EnvironmentStorageConfigurationEfsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.fsx">fsx</a></code> | <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList">M2EnvironmentStorageConfigurationFsxList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.efsInput">efsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs">M2EnvironmentStorageConfigurationEfs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.fsxInput">fsxInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx">M2EnvironmentStorageConfigurationFsx</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration">M2EnvironmentStorageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `efs`<sup>Required</sup> <a name="efs" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.efs"></a>

```java
public M2EnvironmentStorageConfigurationEfsList getEfs();
```

- *Type:* <a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfsList">M2EnvironmentStorageConfigurationEfsList</a>

---

##### `fsx`<sup>Required</sup> <a name="fsx" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.fsx"></a>

```java
public M2EnvironmentStorageConfigurationFsxList getFsx();
```

- *Type:* <a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsxList">M2EnvironmentStorageConfigurationFsxList</a>

---

##### `efsInput`<sup>Optional</sup> <a name="efsInput" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.efsInput"></a>

```java
public IResolvable|java.util.List<M2EnvironmentStorageConfigurationEfs> getEfsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationEfs">M2EnvironmentStorageConfigurationEfs</a>>

---

##### `fsxInput`<sup>Optional</sup> <a name="fsxInput" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.fsxInput"></a>

```java
public IResolvable|java.util.List<M2EnvironmentStorageConfigurationFsx> getFsxInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationFsx">M2EnvironmentStorageConfigurationFsx</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|M2EnvironmentStorageConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentStorageConfiguration">M2EnvironmentStorageConfiguration</a>

---


### M2EnvironmentTimeoutsOutputReference <a name="M2EnvironmentTimeoutsOutputReference" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.m2_environment.M2EnvironmentTimeoutsOutputReference;

new M2EnvironmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts">M2EnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.m2Environment.M2EnvironmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|M2EnvironmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.m2Environment.M2EnvironmentTimeouts">M2EnvironmentTimeouts</a>

---



