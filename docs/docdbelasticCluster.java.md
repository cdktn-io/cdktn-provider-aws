# `docdbelasticCluster` Submodule <a name="`docdbelasticCluster` Submodule" id="@cdktn/provider-aws.docdbelasticCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbelasticCluster <a name="DocdbelasticCluster" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster aws_docdbelastic_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer"></a>

```java
import io.cdktn.providers.aws.docdbelastic_cluster.DocdbelasticCluster;

DocdbelasticCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .adminUserName(java.lang.String)
    .adminUserPassword(java.lang.String)
    .authType(java.lang.String)
    .name(java.lang.String)
    .shardCapacity(java.lang.Number)
    .shardCount(java.lang.Number)
//  .backupRetentionPeriod(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .region(java.lang.String)
//  .shardInstanceCount(java.lang.Number)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DocdbelasticClusterTimeouts)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.adminUserName">adminUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#admin_user_name DocdbelasticCluster#admin_user_name}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.adminUserPassword">adminUserPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#admin_user_password DocdbelasticCluster#admin_user_password}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#auth_type DocdbelasticCluster#auth_type}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#name DocdbelasticCluster#name}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.shardCapacity">shardCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_capacity DocdbelasticCluster#shard_capacity}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_count DocdbelasticCluster#shard_count}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#backup_retention_period DocdbelasticCluster#backup_retention_period}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#kms_key_id DocdbelasticCluster#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#preferred_backup_window DocdbelasticCluster#preferred_backup_window}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#preferred_maintenance_window DocdbelasticCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.shardInstanceCount">shardInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_instance_count DocdbelasticCluster#shard_instance_count}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#subnet_ids DocdbelasticCluster#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#tags DocdbelasticCluster#tags}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#vpc_security_group_ids DocdbelasticCluster#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `adminUserName`<sup>Required</sup> <a name="adminUserName" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.adminUserName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#admin_user_name DocdbelasticCluster#admin_user_name}.

---

##### `adminUserPassword`<sup>Required</sup> <a name="adminUserPassword" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.adminUserPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#admin_user_password DocdbelasticCluster#admin_user_password}.

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#auth_type DocdbelasticCluster#auth_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#name DocdbelasticCluster#name}.

---

##### `shardCapacity`<sup>Required</sup> <a name="shardCapacity" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.shardCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_capacity DocdbelasticCluster#shard_capacity}.

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.shardCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_count DocdbelasticCluster#shard_count}.

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.backupRetentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#backup_retention_period DocdbelasticCluster#backup_retention_period}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#kms_key_id DocdbelasticCluster#kms_key_id}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#preferred_backup_window DocdbelasticCluster#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#preferred_maintenance_window DocdbelasticCluster#preferred_maintenance_window}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#region DocdbelasticCluster#region}

---

##### `shardInstanceCount`<sup>Optional</sup> <a name="shardInstanceCount" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.shardInstanceCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_instance_count DocdbelasticCluster#shard_instance_count}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#subnet_ids DocdbelasticCluster#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#tags DocdbelasticCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#timeouts DocdbelasticCluster#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#vpc_security_group_ids DocdbelasticCluster#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetBackupRetentionPeriod">resetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetShardInstanceCount">resetShardInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.putTimeouts"></a>

```java
public void putTimeouts(DocdbelasticClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a>

---

##### `resetBackupRetentionPeriod` <a name="resetBackupRetentionPeriod" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetBackupRetentionPeriod"></a>

```java
public void resetBackupRetentionPeriod()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetPreferredBackupWindow"></a>

```java
public void resetPreferredBackupWindow()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetShardInstanceCount` <a name="resetShardInstanceCount" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetShardInstanceCount"></a>

```java
public void resetShardInstanceCount()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DocdbelasticCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.isConstruct"></a>

```java
import io.cdktn.providers.aws.docdbelastic_cluster.DocdbelasticCluster;

DocdbelasticCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.docdbelastic_cluster.DocdbelasticCluster;

DocdbelasticCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.docdbelastic_cluster.DocdbelasticCluster;

DocdbelasticCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.docdbelastic_cluster.DocdbelasticCluster;

DocdbelasticCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DocdbelasticCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DocdbelasticCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DocdbelasticCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DocdbelasticCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DocdbelasticCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference">DocdbelasticClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserNameInput">adminUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserPasswordInput">adminUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.backupRetentionPeriodInput">backupRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCapacityInput">shardCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCountInput">shardCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardInstanceCountInput">shardInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserName">adminUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserPassword">adminUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCapacity">shardCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardInstanceCount">shardInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.timeouts"></a>

```java
public DocdbelasticClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference">DocdbelasticClusterTimeoutsOutputReference</a>

---

##### `adminUserNameInput`<sup>Optional</sup> <a name="adminUserNameInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserNameInput"></a>

```java
public java.lang.String getAdminUserNameInput();
```

- *Type:* java.lang.String

---

##### `adminUserPasswordInput`<sup>Optional</sup> <a name="adminUserPasswordInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserPasswordInput"></a>

```java
public java.lang.String getAdminUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `backupRetentionPeriodInput`<sup>Optional</sup> <a name="backupRetentionPeriodInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.backupRetentionPeriodInput"></a>

```java
public java.lang.Number getBackupRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredBackupWindowInput"></a>

```java
public java.lang.String getPreferredBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `shardCapacityInput`<sup>Optional</sup> <a name="shardCapacityInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCapacityInput"></a>

```java
public java.lang.Number getShardCapacityInput();
```

- *Type:* java.lang.Number

---

##### `shardCountInput`<sup>Optional</sup> <a name="shardCountInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCountInput"></a>

```java
public java.lang.Number getShardCountInput();
```

- *Type:* java.lang.Number

---

##### `shardInstanceCountInput`<sup>Optional</sup> <a name="shardInstanceCountInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardInstanceCountInput"></a>

```java
public java.lang.Number getShardInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.timeoutsInput"></a>

```java
public IResolvable|DocdbelasticClusterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a>

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminUserName`<sup>Required</sup> <a name="adminUserName" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserName"></a>

```java
public java.lang.String getAdminUserName();
```

- *Type:* java.lang.String

---

##### `adminUserPassword`<sup>Required</sup> <a name="adminUserPassword" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserPassword"></a>

```java
public java.lang.String getAdminUserPassword();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `shardCapacity`<sup>Required</sup> <a name="shardCapacity" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCapacity"></a>

```java
public java.lang.Number getShardCapacity();
```

- *Type:* java.lang.Number

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

---

##### `shardInstanceCount`<sup>Required</sup> <a name="shardInstanceCount" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardInstanceCount"></a>

```java
public java.lang.Number getShardInstanceCount();
```

- *Type:* java.lang.Number

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbelasticClusterConfig <a name="DocdbelasticClusterConfig" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.docdbelastic_cluster.DocdbelasticClusterConfig;

DocdbelasticClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .adminUserName(java.lang.String)
    .adminUserPassword(java.lang.String)
    .authType(java.lang.String)
    .name(java.lang.String)
    .shardCapacity(java.lang.Number)
    .shardCount(java.lang.Number)
//  .backupRetentionPeriod(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .region(java.lang.String)
//  .shardInstanceCount(java.lang.Number)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DocdbelasticClusterTimeouts)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.adminUserName">adminUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#admin_user_name DocdbelasticCluster#admin_user_name}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.adminUserPassword">adminUserPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#admin_user_password DocdbelasticCluster#admin_user_password}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#auth_type DocdbelasticCluster#auth_type}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#name DocdbelasticCluster#name}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.shardCapacity">shardCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_capacity DocdbelasticCluster#shard_capacity}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_count DocdbelasticCluster#shard_count}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#backup_retention_period DocdbelasticCluster#backup_retention_period}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#kms_key_id DocdbelasticCluster#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#preferred_backup_window DocdbelasticCluster#preferred_backup_window}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#preferred_maintenance_window DocdbelasticCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.shardInstanceCount">shardInstanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_instance_count DocdbelasticCluster#shard_instance_count}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#subnet_ids DocdbelasticCluster#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#tags DocdbelasticCluster#tags}. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#vpc_security_group_ids DocdbelasticCluster#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `adminUserName`<sup>Required</sup> <a name="adminUserName" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.adminUserName"></a>

```java
public java.lang.String getAdminUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#admin_user_name DocdbelasticCluster#admin_user_name}.

---

##### `adminUserPassword`<sup>Required</sup> <a name="adminUserPassword" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.adminUserPassword"></a>

```java
public java.lang.String getAdminUserPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#admin_user_password DocdbelasticCluster#admin_user_password}.

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#auth_type DocdbelasticCluster#auth_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#name DocdbelasticCluster#name}.

---

##### `shardCapacity`<sup>Required</sup> <a name="shardCapacity" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.shardCapacity"></a>

```java
public java.lang.Number getShardCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_capacity DocdbelasticCluster#shard_capacity}.

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_count DocdbelasticCluster#shard_count}.

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#backup_retention_period DocdbelasticCluster#backup_retention_period}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#kms_key_id DocdbelasticCluster#kms_key_id}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#preferred_backup_window DocdbelasticCluster#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#preferred_maintenance_window DocdbelasticCluster#preferred_maintenance_window}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#region DocdbelasticCluster#region}

---

##### `shardInstanceCount`<sup>Optional</sup> <a name="shardInstanceCount" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.shardInstanceCount"></a>

```java
public java.lang.Number getShardInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#shard_instance_count DocdbelasticCluster#shard_instance_count}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#subnet_ids DocdbelasticCluster#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#tags DocdbelasticCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.timeouts"></a>

```java
public DocdbelasticClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#timeouts DocdbelasticCluster#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#vpc_security_group_ids DocdbelasticCluster#vpc_security_group_ids}.

---

### DocdbelasticClusterTimeouts <a name="DocdbelasticClusterTimeouts" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.docdbelastic_cluster.DocdbelasticClusterTimeouts;

DocdbelasticClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#create DocdbelasticCluster#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#delete DocdbelasticCluster#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/docdbelastic_cluster#update DocdbelasticCluster#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbelasticClusterTimeoutsOutputReference <a name="DocdbelasticClusterTimeoutsOutputReference" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.docdbelastic_cluster.DocdbelasticClusterTimeoutsOutputReference;

new DocdbelasticClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DocdbelasticClusterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a>

---



