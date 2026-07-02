# `workmailOrganization` Submodule <a name="`workmailOrganization` Submodule" id="@cdktn/provider-aws.workmailOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkmailOrganization <a name="WorkmailOrganization" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization aws_workmail_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer"></a>

```java
import io.cdktn.providers.aws.workmail_organization.WorkmailOrganization;

WorkmailOrganization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organizationAlias(java.lang.String)
//  .deleteDirectory(java.lang.Boolean|IResolvable)
//  .deleteIdentityCenterApplication(java.lang.Boolean|IResolvable)
//  .directoryId(java.lang.String)
//  .interoperabilityEnabled(java.lang.Boolean|IResolvable)
//  .kmsKeyArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WorkmailOrganizationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.organizationAlias">organizationAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#organization_alias WorkmailOrganization#organization_alias}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.deleteDirectory">deleteDirectory</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#delete_directory WorkmailOrganization#delete_directory}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.deleteIdentityCenterApplication">deleteIdentityCenterApplication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#delete_identity_center_application WorkmailOrganization#delete_identity_center_application}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#directory_id WorkmailOrganization#directory_id}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.interoperabilityEnabled">interoperabilityEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#interoperability_enabled WorkmailOrganization#interoperability_enabled}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#kms_key_arn WorkmailOrganization#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#tags WorkmailOrganization#tags}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organizationAlias`<sup>Required</sup> <a name="organizationAlias" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.organizationAlias"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#organization_alias WorkmailOrganization#organization_alias}.

---

##### `deleteDirectory`<sup>Optional</sup> <a name="deleteDirectory" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.deleteDirectory"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#delete_directory WorkmailOrganization#delete_directory}.

---

##### `deleteIdentityCenterApplication`<sup>Optional</sup> <a name="deleteIdentityCenterApplication" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.deleteIdentityCenterApplication"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#delete_identity_center_application WorkmailOrganization#delete_identity_center_application}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#directory_id WorkmailOrganization#directory_id}.

---

##### `interoperabilityEnabled`<sup>Optional</sup> <a name="interoperabilityEnabled" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.interoperabilityEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#interoperability_enabled WorkmailOrganization#interoperability_enabled}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#kms_key_arn WorkmailOrganization#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#region WorkmailOrganization#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#tags WorkmailOrganization#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#timeouts WorkmailOrganization#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteDirectory">resetDeleteDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteIdentityCenterApplication">resetDeleteIdentityCenterApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetInteroperabilityEnabled">resetInteroperabilityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.putTimeouts"></a>

```java
public void putTimeouts(WorkmailOrganizationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

---

##### `resetDeleteDirectory` <a name="resetDeleteDirectory" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteDirectory"></a>

```java
public void resetDeleteDirectory()
```

##### `resetDeleteIdentityCenterApplication` <a name="resetDeleteIdentityCenterApplication" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDeleteIdentityCenterApplication"></a>

```java
public void resetDeleteIdentityCenterApplication()
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetDirectoryId"></a>

```java
public void resetDirectoryId()
```

##### `resetInteroperabilityEnabled` <a name="resetInteroperabilityEnabled" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetInteroperabilityEnabled"></a>

```java
public void resetInteroperabilityEnabled()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkmailOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isConstruct"></a>

```java
import io.cdktn.providers.aws.workmail_organization.WorkmailOrganization;

WorkmailOrganization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.workmail_organization.WorkmailOrganization;

WorkmailOrganization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.workmail_organization.WorkmailOrganization;

WorkmailOrganization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.workmail_organization.WorkmailOrganization;

WorkmailOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkmailOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkmailOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkmailOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkmailOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkmailOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.completedDate">completedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.defaultMailDomain">defaultMailDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryType">directoryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.migrationAdmin">migrationAdmin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference">WorkmailOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectoryInput">deleteDirectoryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplicationInput">deleteIdentityCenterApplicationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabledInput">interoperabilityEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAliasInput">organizationAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectory">deleteDirectory</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplication">deleteIdentityCenterApplication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabled">interoperabilityEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAlias">organizationAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `completedDate`<sup>Required</sup> <a name="completedDate" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.completedDate"></a>

```java
public java.lang.String getCompletedDate();
```

- *Type:* java.lang.String

---

##### `defaultMailDomain`<sup>Required</sup> <a name="defaultMailDomain" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.defaultMailDomain"></a>

```java
public java.lang.String getDefaultMailDomain();
```

- *Type:* java.lang.String

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryType"></a>

```java
public java.lang.String getDirectoryType();
```

- *Type:* java.lang.String

---

##### `migrationAdmin`<sup>Required</sup> <a name="migrationAdmin" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.migrationAdmin"></a>

```java
public java.lang.String getMigrationAdmin();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeouts"></a>

```java
public WorkmailOrganizationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference">WorkmailOrganizationTimeoutsOutputReference</a>

---

##### `deleteDirectoryInput`<sup>Optional</sup> <a name="deleteDirectoryInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectoryInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteDirectoryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deleteIdentityCenterApplicationInput`<sup>Optional</sup> <a name="deleteIdentityCenterApplicationInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplicationInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteIdentityCenterApplicationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `interoperabilityEnabledInput`<sup>Optional</sup> <a name="interoperabilityEnabledInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getInteroperabilityEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `organizationAliasInput`<sup>Optional</sup> <a name="organizationAliasInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAliasInput"></a>

```java
public java.lang.String getOrganizationAliasInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.timeoutsInput"></a>

```java
public IResolvable|WorkmailOrganizationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

---

##### `deleteDirectory`<sup>Required</sup> <a name="deleteDirectory" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteDirectory"></a>

```java
public java.lang.Boolean|IResolvable getDeleteDirectory();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deleteIdentityCenterApplication`<sup>Required</sup> <a name="deleteIdentityCenterApplication" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.deleteIdentityCenterApplication"></a>

```java
public java.lang.Boolean|IResolvable getDeleteIdentityCenterApplication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `interoperabilityEnabled`<sup>Required</sup> <a name="interoperabilityEnabled" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.interoperabilityEnabled"></a>

```java
public java.lang.Boolean|IResolvable getInteroperabilityEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `organizationAlias`<sup>Required</sup> <a name="organizationAlias" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.organizationAlias"></a>

```java
public java.lang.String getOrganizationAlias();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkmailOrganizationConfig <a name="WorkmailOrganizationConfig" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.workmail_organization.WorkmailOrganizationConfig;

WorkmailOrganizationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organizationAlias(java.lang.String)
//  .deleteDirectory(java.lang.Boolean|IResolvable)
//  .deleteIdentityCenterApplication(java.lang.Boolean|IResolvable)
//  .directoryId(java.lang.String)
//  .interoperabilityEnabled(java.lang.Boolean|IResolvable)
//  .kmsKeyArn(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WorkmailOrganizationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.organizationAlias">organizationAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#organization_alias WorkmailOrganization#organization_alias}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteDirectory">deleteDirectory</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#delete_directory WorkmailOrganization#delete_directory}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteIdentityCenterApplication">deleteIdentityCenterApplication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#delete_identity_center_application WorkmailOrganization#delete_identity_center_application}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#directory_id WorkmailOrganization#directory_id}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.interoperabilityEnabled">interoperabilityEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#interoperability_enabled WorkmailOrganization#interoperability_enabled}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#kms_key_arn WorkmailOrganization#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#tags WorkmailOrganization#tags}. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organizationAlias`<sup>Required</sup> <a name="organizationAlias" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.organizationAlias"></a>

```java
public java.lang.String getOrganizationAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#organization_alias WorkmailOrganization#organization_alias}.

---

##### `deleteDirectory`<sup>Optional</sup> <a name="deleteDirectory" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteDirectory"></a>

```java
public java.lang.Boolean|IResolvable getDeleteDirectory();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#delete_directory WorkmailOrganization#delete_directory}.

---

##### `deleteIdentityCenterApplication`<sup>Optional</sup> <a name="deleteIdentityCenterApplication" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.deleteIdentityCenterApplication"></a>

```java
public java.lang.Boolean|IResolvable getDeleteIdentityCenterApplication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#delete_identity_center_application WorkmailOrganization#delete_identity_center_application}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#directory_id WorkmailOrganization#directory_id}.

---

##### `interoperabilityEnabled`<sup>Optional</sup> <a name="interoperabilityEnabled" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.interoperabilityEnabled"></a>

```java
public java.lang.Boolean|IResolvable getInteroperabilityEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#interoperability_enabled WorkmailOrganization#interoperability_enabled}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#kms_key_arn WorkmailOrganization#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#region WorkmailOrganization#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#tags WorkmailOrganization#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationConfig.property.timeouts"></a>

```java
public WorkmailOrganizationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#timeouts WorkmailOrganization#timeouts}

---

### WorkmailOrganizationTimeouts <a name="WorkmailOrganizationTimeouts" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.workmail_organization.WorkmailOrganizationTimeouts;

WorkmailOrganizationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#create WorkmailOrganization#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/workmail_organization#delete WorkmailOrganization#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkmailOrganizationTimeoutsOutputReference <a name="WorkmailOrganizationTimeoutsOutputReference" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.workmail_organization.WorkmailOrganizationTimeoutsOutputReference;

new WorkmailOrganizationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkmailOrganizationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.workmailOrganization.WorkmailOrganizationTimeouts">WorkmailOrganizationTimeouts</a>

---



