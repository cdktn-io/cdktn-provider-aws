# `transcribeMedicalVocabulary` Submodule <a name="`transcribeMedicalVocabulary` Submodule" id="@cdktn/provider-aws.transcribeMedicalVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeMedicalVocabulary <a name="TranscribeMedicalVocabulary" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary aws_transcribe_medical_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer"></a>

```java
import io.cdktn.providers.aws.transcribe_medical_vocabulary.TranscribeMedicalVocabulary;

TranscribeMedicalVocabulary.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .languageCode(java.lang.String)
    .vocabularyFileUri(java.lang.String)
    .vocabularyName(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TranscribeMedicalVocabularyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#language_code TranscribeMedicalVocabulary#language_code}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.vocabularyFileUri">vocabularyFileUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#vocabulary_file_uri TranscribeMedicalVocabulary#vocabulary_file_uri}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#vocabulary_name TranscribeMedicalVocabulary#vocabulary_name}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#id TranscribeMedicalVocabulary#id}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#tags TranscribeMedicalVocabulary#tags}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#tags_all TranscribeMedicalVocabulary#tags_all}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#language_code TranscribeMedicalVocabulary#language_code}.

---

##### `vocabularyFileUri`<sup>Required</sup> <a name="vocabularyFileUri" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.vocabularyFileUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#vocabulary_file_uri TranscribeMedicalVocabulary#vocabulary_file_uri}.

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.vocabularyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#vocabulary_name TranscribeMedicalVocabulary#vocabulary_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#id TranscribeMedicalVocabulary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#region TranscribeMedicalVocabulary#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#tags TranscribeMedicalVocabulary#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#tags_all TranscribeMedicalVocabulary#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#timeouts TranscribeMedicalVocabulary#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTimeouts"></a>

```java
public void putTimeouts(TranscribeMedicalVocabularyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeMedicalVocabulary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct"></a>

```java
import io.cdktn.providers.aws.transcribe_medical_vocabulary.TranscribeMedicalVocabulary;

TranscribeMedicalVocabulary.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.transcribe_medical_vocabulary.TranscribeMedicalVocabulary;

TranscribeMedicalVocabulary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.transcribe_medical_vocabulary.TranscribeMedicalVocabulary;

TranscribeMedicalVocabulary.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.transcribe_medical_vocabulary.TranscribeMedicalVocabulary;

TranscribeMedicalVocabulary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TranscribeMedicalVocabulary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TranscribeMedicalVocabulary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TranscribeMedicalVocabulary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TranscribeMedicalVocabulary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeMedicalVocabulary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.downloadUri">downloadUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference">TranscribeMedicalVocabularyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUriInput">vocabularyFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyNameInput">vocabularyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `downloadUri`<sup>Required</sup> <a name="downloadUri" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.downloadUri"></a>

```java
public java.lang.String getDownloadUri();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.timeouts"></a>

```java
public TranscribeMedicalVocabularyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference">TranscribeMedicalVocabularyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.timeoutsInput"></a>

```java
public IResolvable|TranscribeMedicalVocabularyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a>

---

##### `vocabularyFileUriInput`<sup>Optional</sup> <a name="vocabularyFileUriInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUriInput"></a>

```java
public java.lang.String getVocabularyFileUriInput();
```

- *Type:* java.lang.String

---

##### `vocabularyNameInput`<sup>Optional</sup> <a name="vocabularyNameInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyNameInput"></a>

```java
public java.lang.String getVocabularyNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vocabularyFileUri`<sup>Required</sup> <a name="vocabularyFileUri" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyFileUri"></a>

```java
public java.lang.String getVocabularyFileUri();
```

- *Type:* java.lang.String

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.vocabularyName"></a>

```java
public java.lang.String getVocabularyName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabulary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeMedicalVocabularyConfig <a name="TranscribeMedicalVocabularyConfig" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.transcribe_medical_vocabulary.TranscribeMedicalVocabularyConfig;

TranscribeMedicalVocabularyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .languageCode(java.lang.String)
    .vocabularyFileUri(java.lang.String)
    .vocabularyName(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TranscribeMedicalVocabularyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#language_code TranscribeMedicalVocabulary#language_code}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#vocabulary_file_uri TranscribeMedicalVocabulary#vocabulary_file_uri}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#vocabulary_name TranscribeMedicalVocabulary#vocabulary_name}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#id TranscribeMedicalVocabulary#id}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#tags TranscribeMedicalVocabulary#tags}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#tags_all TranscribeMedicalVocabulary#tags_all}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#language_code TranscribeMedicalVocabulary#language_code}.

---

##### `vocabularyFileUri`<sup>Required</sup> <a name="vocabularyFileUri" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyFileUri"></a>

```java
public java.lang.String getVocabularyFileUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#vocabulary_file_uri TranscribeMedicalVocabulary#vocabulary_file_uri}.

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.vocabularyName"></a>

```java
public java.lang.String getVocabularyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#vocabulary_name TranscribeMedicalVocabulary#vocabulary_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#id TranscribeMedicalVocabulary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#region TranscribeMedicalVocabulary#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#tags TranscribeMedicalVocabulary#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#tags_all TranscribeMedicalVocabulary#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyConfig.property.timeouts"></a>

```java
public TranscribeMedicalVocabularyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#timeouts TranscribeMedicalVocabulary#timeouts}

---

### TranscribeMedicalVocabularyTimeouts <a name="TranscribeMedicalVocabularyTimeouts" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.transcribe_medical_vocabulary.TranscribeMedicalVocabularyTimeouts;

TranscribeMedicalVocabularyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#create TranscribeMedicalVocabulary#create}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#delete TranscribeMedicalVocabulary#delete}. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#update TranscribeMedicalVocabulary#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#create TranscribeMedicalVocabulary#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#delete TranscribeMedicalVocabulary#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/transcribe_medical_vocabulary#update TranscribeMedicalVocabulary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeMedicalVocabularyTimeoutsOutputReference <a name="TranscribeMedicalVocabularyTimeoutsOutputReference" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.transcribe_medical_vocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference;

new TranscribeMedicalVocabularyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeMedicalVocabularyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.transcribeMedicalVocabulary.TranscribeMedicalVocabularyTimeouts">TranscribeMedicalVocabularyTimeouts</a>

---



