# `chimesdkvoiceVoiceProfileDomain` Submodule <a name="`chimesdkvoiceVoiceProfileDomain` Submodule" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceVoiceProfileDomain <a name="ChimesdkvoiceVoiceProfileDomain" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain aws_chimesdkvoice_voice_profile_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer"></a>

```java
import io.cdktn.providers.aws.chimesdkvoice_voice_profile_domain.ChimesdkvoiceVoiceProfileDomain;

ChimesdkvoiceVoiceProfileDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .serverSideEncryptionConfiguration(ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ChimesdkvoiceVoiceProfileDomainTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}.

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.serverSideEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#server_side_encryption_configuration ChimesdkvoiceVoiceProfileDomain#server_side_encryption_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#region ChimesdkvoiceVoiceProfileDomain#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#timeouts ChimesdkvoiceVoiceProfileDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration">putServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServerSideEncryptionConfiguration` <a name="putServerSideEncryptionConfiguration" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration"></a>

```java
public void putServerSideEncryptionConfiguration(ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts"></a>

```java
public void putTimeouts(ChimesdkvoiceVoiceProfileDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimesdkvoiceVoiceProfileDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct"></a>

```java
import io.cdktn.providers.aws.chimesdkvoice_voice_profile_domain.ChimesdkvoiceVoiceProfileDomain;

ChimesdkvoiceVoiceProfileDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.chimesdkvoice_voice_profile_domain.ChimesdkvoiceVoiceProfileDomain;

ChimesdkvoiceVoiceProfileDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.chimesdkvoice_voice_profile_domain.ChimesdkvoiceVoiceProfileDomain;

ChimesdkvoiceVoiceProfileDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.chimesdkvoice_voice_profile_domain.ChimesdkvoiceVoiceProfileDomain;

ChimesdkvoiceVoiceProfileDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChimesdkvoiceVoiceProfileDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChimesdkvoiceVoiceProfileDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChimesdkvoiceVoiceProfileDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChimesdkvoiceVoiceProfileDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChimesdkvoiceVoiceProfileDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference">ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfigurationInput">serverSideEncryptionConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfiguration"></a>

```java
public ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference getServerSideEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeouts"></a>

```java
public ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference">ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="serverSideEncryptionConfigurationInput" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfigurationInput"></a>

```java
public ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration getServerSideEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeoutsInput"></a>

```java
public IResolvable|ChimesdkvoiceVoiceProfileDomainTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceVoiceProfileDomainConfig <a name="ChimesdkvoiceVoiceProfileDomainConfig" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.chimesdkvoice_voice_profile_domain.ChimesdkvoiceVoiceProfileDomainConfig;

ChimesdkvoiceVoiceProfileDomainConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .serverSideEncryptionConfiguration(ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ChimesdkvoiceVoiceProfileDomainTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}.

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.serverSideEncryptionConfiguration"></a>

```java
public ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration getServerSideEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#server_side_encryption_configuration ChimesdkvoiceVoiceProfileDomain#server_side_encryption_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#region ChimesdkvoiceVoiceProfileDomain#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.timeouts"></a>

```java
public ChimesdkvoiceVoiceProfileDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#timeouts ChimesdkvoiceVoiceProfileDomain#timeouts}

---

### ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration <a name="ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.chimesdkvoice_voice_profile_domain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration;

ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.builder()
    .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#kms_key_arn ChimesdkvoiceVoiceProfileDomain#kms_key_arn}. |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#kms_key_arn ChimesdkvoiceVoiceProfileDomain#kms_key_arn}.

---

### ChimesdkvoiceVoiceProfileDomainTimeouts <a name="ChimesdkvoiceVoiceProfileDomainTimeouts" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.chimesdkvoice_voice_profile_domain.ChimesdkvoiceVoiceProfileDomainTimeouts;

ChimesdkvoiceVoiceProfileDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#create ChimesdkvoiceVoiceProfileDomain#create}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#delete ChimesdkvoiceVoiceProfileDomain#delete}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#update ChimesdkvoiceVoiceProfileDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#create ChimesdkvoiceVoiceProfileDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#delete ChimesdkvoiceVoiceProfileDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/chimesdkvoice_voice_profile_domain#update ChimesdkvoiceVoiceProfileDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference <a name="ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.chimesdkvoice_voice_profile_domain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference;

new ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

---


### ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference <a name="ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.chimesdkvoice_voice_profile_domain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference;

new ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimesdkvoiceVoiceProfileDomainTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

---



