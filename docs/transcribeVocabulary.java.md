# `transcribeVocabulary` Submodule <a name="`transcribeVocabulary` Submodule" id="@cdktn/provider-aws.transcribeVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeVocabulary <a name="TranscribeVocabulary" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary aws_transcribe_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer"></a>

```java
import io.cdktn.providers.aws.transcribe_vocabulary.TranscribeVocabulary;

TranscribeVocabulary.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .languageCode(java.lang.String)
    .vocabularyName(java.lang.String)
//  .id(java.lang.String)
//  .phrases(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TranscribeVocabularyTimeouts)
//  .vocabularyFileUri(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#id TranscribeVocabulary#id}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.phrases">phrases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#tags TranscribeVocabulary#tags}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#tags_all TranscribeVocabulary#tags_all}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyFileUri">vocabularyFileUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}.

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#id TranscribeVocabulary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `phrases`<sup>Optional</sup> <a name="phrases" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.phrases"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#region TranscribeVocabulary#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#tags TranscribeVocabulary#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#tags_all TranscribeVocabulary#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#timeouts TranscribeVocabulary#timeouts}

---

##### `vocabularyFileUri`<sup>Optional</sup> <a name="vocabularyFileUri" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.vocabularyFileUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetPhrases">resetPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri">resetVocabularyFileUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.putTimeouts"></a>

```java
public void putTimeouts(TranscribeVocabularyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetId"></a>

```java
public void resetId()
```

##### `resetPhrases` <a name="resetPhrases" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetPhrases"></a>

```java
public void resetPhrases()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVocabularyFileUri` <a name="resetVocabularyFileUri" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri"></a>

```java
public void resetVocabularyFileUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeVocabulary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.isConstruct"></a>

```java
import io.cdktn.providers.aws.transcribe_vocabulary.TranscribeVocabulary;

TranscribeVocabulary.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.transcribe_vocabulary.TranscribeVocabulary;

TranscribeVocabulary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.transcribe_vocabulary.TranscribeVocabulary;

TranscribeVocabulary.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.transcribe_vocabulary.TranscribeVocabulary;

TranscribeVocabulary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TranscribeVocabulary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TranscribeVocabulary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TranscribeVocabulary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TranscribeVocabulary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeVocabulary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.downloadUri">downloadUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference">TranscribeVocabularyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput">phrasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput">vocabularyFileUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput">vocabularyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrases">phrases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `downloadUri`<sup>Required</sup> <a name="downloadUri" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.downloadUri"></a>

```java
public java.lang.String getDownloadUri();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeouts"></a>

```java
public TranscribeVocabularyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference">TranscribeVocabularyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `phrasesInput`<sup>Optional</sup> <a name="phrasesInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput"></a>

```java
public java.util.List<java.lang.String> getPhrasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.timeoutsInput"></a>

```java
public IResolvable|TranscribeVocabularyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a>

---

##### `vocabularyFileUriInput`<sup>Optional</sup> <a name="vocabularyFileUriInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput"></a>

```java
public java.lang.String getVocabularyFileUriInput();
```

- *Type:* java.lang.String

---

##### `vocabularyNameInput`<sup>Optional</sup> <a name="vocabularyNameInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput"></a>

```java
public java.lang.String getVocabularyNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `phrases`<sup>Required</sup> <a name="phrases" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.phrases"></a>

```java
public java.util.List<java.lang.String> getPhrases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vocabularyFileUri`<sup>Required</sup> <a name="vocabularyFileUri" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri"></a>

```java
public java.lang.String getVocabularyFileUri();
```

- *Type:* java.lang.String

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName"></a>

```java
public java.lang.String getVocabularyName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeVocabularyConfig <a name="TranscribeVocabularyConfig" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.transcribe_vocabulary.TranscribeVocabularyConfig;

TranscribeVocabularyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .languageCode(java.lang.String)
    .vocabularyName(java.lang.String)
//  .id(java.lang.String)
//  .phrases(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TranscribeVocabularyTimeouts)
//  .vocabularyFileUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#id TranscribeVocabulary#id}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases">phrases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#tags TranscribeVocabulary#tags}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#tags_all TranscribeVocabulary#tags_all}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}.

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName"></a>

```java
public java.lang.String getVocabularyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#id TranscribeVocabulary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `phrases`<sup>Optional</sup> <a name="phrases" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases"></a>

```java
public java.util.List<java.lang.String> getPhrases();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#region TranscribeVocabulary#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#tags TranscribeVocabulary#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#tags_all TranscribeVocabulary#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.timeouts"></a>

```java
public TranscribeVocabularyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#timeouts TranscribeVocabulary#timeouts}

---

##### `vocabularyFileUri`<sup>Optional</sup> <a name="vocabularyFileUri" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri"></a>

```java
public java.lang.String getVocabularyFileUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}.

---

### TranscribeVocabularyTimeouts <a name="TranscribeVocabularyTimeouts" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.transcribe_vocabulary.TranscribeVocabularyTimeouts;

TranscribeVocabularyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#create TranscribeVocabulary#create}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#delete TranscribeVocabulary#delete}. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#update TranscribeVocabulary#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#create TranscribeVocabulary#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#delete TranscribeVocabulary#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/transcribe_vocabulary#update TranscribeVocabulary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeVocabularyTimeoutsOutputReference <a name="TranscribeVocabularyTimeoutsOutputReference" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.transcribe_vocabulary.TranscribeVocabularyTimeoutsOutputReference;

new TranscribeVocabularyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|TranscribeVocabularyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.transcribeVocabulary.TranscribeVocabularyTimeouts">TranscribeVocabularyTimeouts</a>

---



