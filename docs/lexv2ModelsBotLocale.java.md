# `lexv2ModelsBotLocale` Submodule <a name="`lexv2ModelsBotLocale` Submodule" id="@cdktn/provider-aws.lexv2ModelsBotLocale"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsBotLocale <a name="Lexv2ModelsBotLocale" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale aws_lexv2models_bot_locale}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer"></a>

```java
import io.cdktn.providers.aws.lexv2_models_bot_locale.Lexv2ModelsBotLocale;

Lexv2ModelsBotLocale.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .botId(java.lang.String)
    .botVersion(java.lang.String)
    .localeId(java.lang.String)
    .nLuIntentConfidenceThreshold(java.lang.Number)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(Lexv2ModelsBotLocaleTimeouts)
//  .voiceSettings(IResolvable|java.util.List<Lexv2ModelsBotLocaleVoiceSettings>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.botId">botId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.botVersion">botVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.localeId">localeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.nLuIntentConfidenceThreshold">nLuIntentConfidenceThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.voiceSettings">voiceSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>></code> | voice_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.botId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}.

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.botVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}.

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.localeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}.

---

##### `nLuIntentConfidenceThreshold`<sup>Required</sup> <a name="nLuIntentConfidenceThreshold" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.nLuIntentConfidenceThreshold"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#region Lexv2ModelsBotLocale#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#timeouts Lexv2ModelsBotLocale#timeouts}

---

##### `voiceSettings`<sup>Optional</sup> <a name="voiceSettings" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.voiceSettings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>>

voice_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#voice_settings Lexv2ModelsBotLocale#voice_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings">putVoiceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetVoiceSettings">resetVoiceSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts"></a>

```java
public void putTimeouts(Lexv2ModelsBotLocaleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

---

##### `putVoiceSettings` <a name="putVoiceSettings" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings"></a>

```java
public void putVoiceSettings(IResolvable|java.util.List<Lexv2ModelsBotLocaleVoiceSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVoiceSettings` <a name="resetVoiceSettings" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetVoiceSettings"></a>

```java
public void resetVoiceSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Lexv2ModelsBotLocale resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct"></a>

```java
import io.cdktn.providers.aws.lexv2_models_bot_locale.Lexv2ModelsBotLocale;

Lexv2ModelsBotLocale.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.lexv2_models_bot_locale.Lexv2ModelsBotLocale;

Lexv2ModelsBotLocale.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.lexv2_models_bot_locale.Lexv2ModelsBotLocale;

Lexv2ModelsBotLocale.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.lexv2_models_bot_locale.Lexv2ModelsBotLocale;

Lexv2ModelsBotLocale.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Lexv2ModelsBotLocale.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Lexv2ModelsBotLocale resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Lexv2ModelsBotLocale to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Lexv2ModelsBotLocale that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsBotLocale to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference">Lexv2ModelsBotLocaleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettings">voiceSettings</a></code> | <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList">Lexv2ModelsBotLocaleVoiceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botIdInput">botIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersionInput">botVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeIdInput">localeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThresholdInput">nLuIntentConfidenceThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettingsInput">voiceSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botId">botId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersion">botVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeId">localeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThreshold">nLuIntentConfidenceThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeouts"></a>

```java
public Lexv2ModelsBotLocaleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference">Lexv2ModelsBotLocaleTimeoutsOutputReference</a>

---

##### `voiceSettings`<sup>Required</sup> <a name="voiceSettings" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettings"></a>

```java
public Lexv2ModelsBotLocaleVoiceSettingsList getVoiceSettings();
```

- *Type:* <a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList">Lexv2ModelsBotLocaleVoiceSettingsList</a>

---

##### `botIdInput`<sup>Optional</sup> <a name="botIdInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botIdInput"></a>

```java
public java.lang.String getBotIdInput();
```

- *Type:* java.lang.String

---

##### `botVersionInput`<sup>Optional</sup> <a name="botVersionInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersionInput"></a>

```java
public java.lang.String getBotVersionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `localeIdInput`<sup>Optional</sup> <a name="localeIdInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeIdInput"></a>

```java
public java.lang.String getLocaleIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nLuIntentConfidenceThresholdInput`<sup>Optional</sup> <a name="nLuIntentConfidenceThresholdInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThresholdInput"></a>

```java
public java.lang.Number getNLuIntentConfidenceThresholdInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeoutsInput"></a>

```java
public IResolvable|Lexv2ModelsBotLocaleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

---

##### `voiceSettingsInput`<sup>Optional</sup> <a name="voiceSettingsInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettingsInput"></a>

```java
public IResolvable|java.util.List<Lexv2ModelsBotLocaleVoiceSettings> getVoiceSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>>

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botId"></a>

```java
public java.lang.String getBotId();
```

- *Type:* java.lang.String

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersion"></a>

```java
public java.lang.String getBotVersion();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeId"></a>

```java
public java.lang.String getLocaleId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nLuIntentConfidenceThreshold`<sup>Required</sup> <a name="nLuIntentConfidenceThreshold" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThreshold"></a>

```java
public java.lang.Number getNLuIntentConfidenceThreshold();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsBotLocaleConfig <a name="Lexv2ModelsBotLocaleConfig" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lexv2_models_bot_locale.Lexv2ModelsBotLocaleConfig;

Lexv2ModelsBotLocaleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .botId(java.lang.String)
    .botVersion(java.lang.String)
    .localeId(java.lang.String)
    .nLuIntentConfidenceThreshold(java.lang.Number)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(Lexv2ModelsBotLocaleTimeouts)
//  .voiceSettings(IResolvable|java.util.List<Lexv2ModelsBotLocaleVoiceSettings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botId">botId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botVersion">botVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.localeId">localeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.nLuIntentConfidenceThreshold">nLuIntentConfidenceThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.voiceSettings">voiceSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>></code> | voice_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botId"></a>

```java
public java.lang.String getBotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}.

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botVersion"></a>

```java
public java.lang.String getBotVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}.

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.localeId"></a>

```java
public java.lang.String getLocaleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}.

---

##### `nLuIntentConfidenceThreshold`<sup>Required</sup> <a name="nLuIntentConfidenceThreshold" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.nLuIntentConfidenceThreshold"></a>

```java
public java.lang.Number getNLuIntentConfidenceThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#region Lexv2ModelsBotLocale#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.timeouts"></a>

```java
public Lexv2ModelsBotLocaleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#timeouts Lexv2ModelsBotLocale#timeouts}

---

##### `voiceSettings`<sup>Optional</sup> <a name="voiceSettings" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.voiceSettings"></a>

```java
public IResolvable|java.util.List<Lexv2ModelsBotLocaleVoiceSettings> getVoiceSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>>

voice_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#voice_settings Lexv2ModelsBotLocale#voice_settings}

---

### Lexv2ModelsBotLocaleTimeouts <a name="Lexv2ModelsBotLocaleTimeouts" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.lexv2_models_bot_locale.Lexv2ModelsBotLocaleTimeouts;

Lexv2ModelsBotLocaleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#create Lexv2ModelsBotLocale#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#delete Lexv2ModelsBotLocale#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#update Lexv2ModelsBotLocale#update}

---

### Lexv2ModelsBotLocaleVoiceSettings <a name="Lexv2ModelsBotLocaleVoiceSettings" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.Initializer"></a>

```java
import io.cdktn.providers.aws.lexv2_models_bot_locale.Lexv2ModelsBotLocaleVoiceSettings;

Lexv2ModelsBotLocaleVoiceSettings.builder()
    .voiceId(java.lang.String)
//  .engine(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.voiceId">voiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#voice_id Lexv2ModelsBotLocale#voice_id}. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#engine Lexv2ModelsBotLocale#engine}. |

---

##### `voiceId`<sup>Required</sup> <a name="voiceId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.voiceId"></a>

```java
public java.lang.String getVoiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#voice_id Lexv2ModelsBotLocale#voice_id}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/lexv2models_bot_locale#engine Lexv2ModelsBotLocale#engine}.

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsBotLocaleTimeoutsOutputReference <a name="Lexv2ModelsBotLocaleTimeoutsOutputReference" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lexv2_models_bot_locale.Lexv2ModelsBotLocaleTimeoutsOutputReference;

new Lexv2ModelsBotLocaleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|Lexv2ModelsBotLocaleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

---


### Lexv2ModelsBotLocaleVoiceSettingsList <a name="Lexv2ModelsBotLocaleVoiceSettingsList" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.lexv2_models_bot_locale.Lexv2ModelsBotLocaleVoiceSettingsList;

new Lexv2ModelsBotLocaleVoiceSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get"></a>

```java
public Lexv2ModelsBotLocaleVoiceSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Lexv2ModelsBotLocaleVoiceSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>>

---


### Lexv2ModelsBotLocaleVoiceSettingsOutputReference <a name="Lexv2ModelsBotLocaleVoiceSettingsOutputReference" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lexv2_models_bot_locale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference;

new Lexv2ModelsBotLocaleVoiceSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resetEngine">resetEngine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resetEngine"></a>

```java
public void resetEngine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceIdInput">voiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceId">voiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `voiceIdInput`<sup>Optional</sup> <a name="voiceIdInput" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceIdInput"></a>

```java
public java.lang.String getVoiceIdInput();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `voiceId`<sup>Required</sup> <a name="voiceId" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceId"></a>

```java
public java.lang.String getVoiceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|Lexv2ModelsBotLocaleVoiceSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings">Lexv2ModelsBotLocaleVoiceSettings</a>

---



